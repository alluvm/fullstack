import React, { useState } from 'react'
import Country from "./Country"


const Listed = ({country}) => {
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)
    

    return (
        <div>
            {country.name}
            <button onClick={handleClick}>Show</button> 
            {show ? <Country country={country}></Country> : null}
        </div>

    )
} 

export default Listed