import React, { useState, useEffect } from 'react'
import axios from "axios"




const Weather = ({location}) => {
    const [weather, setWeather] = useState([])

    const api_key = process.env.REACT_APP_API_KEY
    const params = {
        "access_key":api_key,
        "query":location
    }

    
    console.log(location)
    console.log(params)

    const hook = () => {
        axios.get("http://api.weatherstack.com/current", {params}).then((response)=> {
            setWeather(response.data.current)
        })  
    }

    useEffect(hook,[])

    return (
    <div>
        <h4>Weather in {location}</h4>
            <p>temperature: {weather.temperature} Celsius</p> 
            <img src={weather.weather_icons} alt={weather.weather_descriptions}></img>
        <h4>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</h4>

    </div>       
    )
}

export default Weather