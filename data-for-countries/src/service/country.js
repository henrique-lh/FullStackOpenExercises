import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

export const getCountries = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(res => res.data)
}

export const getCountry = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`)
    return request.then(res => res.data)
}
