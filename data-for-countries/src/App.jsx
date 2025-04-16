import {useEffect, useState} from "react";
import { getCountries } from "./service/country.js";
import {Countries} from "./components/countries.jsx";

export const App = () => {

    const [countries, setCountries] = useState([])
    const [showedCountries, setShowedCountries] = useState('')
    const [showCountryButton, setShowCountryButton] = useState('')

    useEffect(() => {
        getCountries()
            .then(initialCountries => {
                setCountries(initialCountries)
                console.log('rendered')
            })
    }, [])

    const handleShowedCountries = (event) => {
        const searchedCountry = event.target.value
        setShowedCountries(searchedCountry)
        setShowCountryButton('')
    }

    const countriesToShow = () => {
        if (showedCountries.length === 0) return []
        if (showCountryButton) {
            const countryName = showCountryButton
            return countries.filter(c => c.name.common === countryName)
        }
        return countries.filter(c => c.name.common.toLowerCase().includes(showedCountries.toLowerCase()))
    }

    return (
        <div>
            <div>
                find countries <input value={showedCountries} onChange={handleShowedCountries}/>
            </div>
            <Countries countries={countriesToShow()} setShowCountryButton={setShowCountryButton} />
        </div>
    )
}