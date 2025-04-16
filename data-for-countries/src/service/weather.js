import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const getWeather = (lat, long) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const request = axios.get(
        `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    )
    return request.then(res => {
        return res.data
    })
}

