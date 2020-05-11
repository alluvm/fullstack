import React from 'react'
import Weather from "./Weather"

const Country = ({country}) => {
    
    return (
        <div>
            <h1>{country.name}</h1>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
            <h2>Spoken languages</h2>
                <ul>
                   {country.languages.map((language, i) => 
                   <li key={i}>
                       {language.name}
                   </li>)}
                </ul>

            <img src={country.flag} alt="flag" width="30%"></img>
            <Weather location={country.capital}/>
        </div>
    )
}

export default Country