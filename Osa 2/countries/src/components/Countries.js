import React from 'react'
import Country from "./Country"
import Listed from "./Listed"


const Countries = ({Countries, filter, handleClick, show}) => {

    const filtered = Countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))
    const size = filtered.length

    
    if(size === 1) {
        return (
            <Country country={filtered[0]}/>
        )
    } else if(size < 11){
        return (
            filtered.map((country,i)=> 
                <Listed
                    country={country} 
                    handleClick={handleClick}
                    show={show}
                    key={i}
                />
            )
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }


}

export default Countries