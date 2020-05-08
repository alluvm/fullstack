import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ newFilter, setNewFilter ] = useState("")


  const handleClick = (event) => {
    event.preventDefault()
    const chck = persons.map((dude) => dude.name).includes(newName)
    if(!chck) {
    setPersons(persons.concat({name: newName, number: newNumber}))
    } else {
      const msg = `${newName} is already added to phonebook`
      window.alert(msg)
    }
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
        <Filter handleFilter={handleFilter}></Filter>
      <h2>add a new</h2>
        <PersonForm handleName = {handleName} handleClick= {handleClick} handlePhone={handlePhone}></PersonForm>
      <h2>Numbers</h2>
        <Persons people={persons} filter={newFilter}></Persons>

    </div>
  )

}

export default App