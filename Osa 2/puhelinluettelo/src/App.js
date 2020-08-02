import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import service from "./services/puhelinluettelo"
import Notification from "./components/Notification"
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [notification, setNotifcation] = useState()

  useEffect(() => {service.getAll().then(people => {setPersons(people)})},[])


  const notify = (notifObj) => {
    setNotifcation(notifObj)
    setTimeout(() => {
      setNotifcation(null)
    }, 2000)
  }

  const handleClick = (event) => {
    event.preventDefault()

    const person = persons.find((dude) => dude.name === newName)
    
    if (!person) {
      const personObject = {number: newNumber, name: newName}
      const msg = "Added " + personObject.name
      const notifObj = {msg: msg, type: "success"}

      service.create(personObject).then(response => {
        setPersons(persons.concat(response))
        notify(notifObj)
      })
      
    } else {

      const personObject = {...person, number: newNumber}
      const msg = `${newName} is already added to phonebook, replace the old number with a new one?`

      if(window.confirm(msg)) {
        service.update(person.id, personObject)
        .then(() => {
          setPersons(persons.map(dude => dude.name === personObject.name ? personObject : dude))
          const msg = "Succesfully changed " + person.name + " phone number"

          const notifObj = {
            msg: msg,
            type: "success"
          }
          notify(notifObj)
          }).catch((error) => {
            const msg = "Information of " + personObject.name + " has already been deleted from the server"
            const notifObj = {msg: msg, type: "error"}
            notify(notifObj)
          })
      }
    }
  }


  const handleDelete = (event, person) => {
    event.preventDefault()
 
    const confm = window.confirm("delete " + person.name + " ?")

    if(confm) service.remove(person.id).then(() => {
      const msg = "Succesfully deleted " + person.name
      const notifObj = {msg: msg, type: "success"}

      setPersons(persons.filter(n => n.id !== person.id))
      notify(notifObj)
    })
  }

  const handleFilter = (event) => {
    const val = event.target.value
    console.log(newFilter)
    setNewFilter(val)
  }

  const handleName = (event) => {
    const value = event.target.value
    setNewName(value)
  }

  const handlePhone = (event) => {
    const value = event.target.value
    setNewNumber(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification notif={notification}/>
        <Filter handleFilter={handleFilter}></Filter>
      <h2>add a new</h2>
        <PersonForm handleName = {handleName} handleClick= {handleClick} handlePhone={handlePhone}></PersonForm>
      <h2>Numbers</h2>
        <Persons people={persons} filter={newFilter} handleDelete={handleDelete}></Persons>
    </div>
  )

}

export default App