import React, { useState } from 'react'
import Country from "./Country"


const Listed = ({country}) => {

    // tämän osan voisi siirtää app.js ja siirtää staten muutaman komponentin läpi.
    // Nykyinen ratkaisu vaikutti kätevämmältä, vaikka varmasti onkin järkevämpiä tapoja tehdä.

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    let btn = show
    if(show) {btn = "hide"} else btn = "show"
    

    return (
        <div>
            {show ? <Country country={country}></Country> : country.name}
            <button onClick={handleClick}>{btn}</button> 
        </div>

    )
} 

export default Listed