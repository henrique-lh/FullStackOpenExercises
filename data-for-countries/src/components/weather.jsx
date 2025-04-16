import {useEffect, useState} from "react";
import {getWeather} from "../service/weather.js";

export const Weather = ({ lat, long, countryName }) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const result = await getWeather(lat, long)
            setWeather(result)
        }
        fetchWeather().then(r => r)
    }, [lat, long])

    if (!weather) {
        return (
            <p>Loading weather...</p>
        )
    }

    const iconCode = weather.weather[0].icon

    const imageUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    return (
        <div>
            <h2>{countryName}</h2>
            <p>Temperature {weather.main.temp}</p>
            <img src={imageUrl} alt='Image weather' />
            <p>Wind {weather.wind.speed}</p>
        </div>
    )
}