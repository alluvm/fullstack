import React, { useState } from 'react'
import Country from "./Country"


const Listed = ({country}) => {

    const [show, setShow] = useState(false)
    const handleClick = (event) => {
        setShow(!show)
    }

    let btn = show ? "hide" : "show"    

    return (
        <div>
            {show ?
            <>
                <button onClick={handleClick}>{btn}</button>  
                <Country country={country}></Country> 
            </>
            : 
            <>
                {country.name} <button onClick={handleClick}>{btn}</button>
            </>

            }
        </div>

    )
} 

export default Listed