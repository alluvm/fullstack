import React from 'react'

const Person = ({object, handleDelete}) => {
    return (
        <>
         <ul>
             {object.name} {object.number} <button onClick={(event)=> {
                console.log(event)
                handleDelete(event,object)}}>
                    
                delete</button>
         </ul>
        </>
    )
} 

export default Person