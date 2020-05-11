import React, { useState, useEffect } from 'react'
import axios from "axios"
import Countries from "./components/Countries"
import Search from "./components/Search"

function App() {

  const [countries, setCountries] = useState([])
  const [searchTerm, setTerm] = useState("")

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data)
    })
  }

  const handleSearch = (event) => {
    const value = event.target.value
    setTerm(value)
  }

  useEffect(hook,[])


  return (
    <div>
      <Search setTerm={handleSearch}/>
      <Countries Countries={countries} filter={searchTerm}/>
    </div>
  );
}

export default App;
