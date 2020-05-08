import React from 'react'


const PersonForm =({handleName, handleClick, handlePhone}) => {
    return (
        <form>
            <div>name: <input onChange={handleName} /></div>
            <div>number: <input onChange={handlePhone}/></div>
            <div><button onClick={handleClick} >add</button></div>
        </form>
    )
}

export default PersonForm