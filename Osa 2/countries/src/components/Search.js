import React from "react"


const Search = ({setTerm}) => {
    return ( 
        <div>
            Find countries <input onChange={setTerm}/>
        </div>
    )
} 

export default Search