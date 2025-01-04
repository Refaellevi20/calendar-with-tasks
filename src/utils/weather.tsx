import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather: React.FC = () => {
    const [weather, setWeather] = useState<any>(null)
    const API_KEY = "dfac2e69dcd691a8f87a7b3fc8ae5f10"
    const CITY = 'Israel'
    

    useEffect(() => {
        let isMounted = true
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
                )

                if (isMounted) setWeather(response.data)
            } catch (error) {
                console.error('Error fetching weather data', error)
            }
        }
        fetchWeather()

        return () => {
            isMounted = false
        }
        }, [])

    return (
        <div className="weather">
      {weather ? (
        <div>
          <h3 style={{margin:'0',paddingTop:'5px'}}>{weather.name}</h3>
          {/* <p>{weather.weather[0].description}</p> */}
          <p style={{margin:'0'}}>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
    )
  }

export default Weather
