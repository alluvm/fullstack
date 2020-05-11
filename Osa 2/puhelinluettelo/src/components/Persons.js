import React from 'react'
import Person from "./Person"


const Persons = ({people, filter, handleDelete}) => {
    return (
    <>
      {people.map((dude,i) =>  
      dude.name.toLowerCase().includes(filter.toLowerCase()) 
      ? <Person object={dude} handleDelete={handleDelete} key={i}/> 
      : null )}
    </>
    )
}

export default Persons