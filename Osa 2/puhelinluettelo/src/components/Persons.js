import React from 'react'
import Person from "./Person"


const Persons = ({people, filter}) => {
    return (
    <>
      {people.map((dude,i) => dude.name.toLowerCase().includes(filter.toLowerCase()) ? <Person name={dude.name} phone={dude.number}/> : null )}
    </>
    )
}

export default Persons