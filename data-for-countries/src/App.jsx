import {useEffect, useState} from "react";
import { getCountries } from "./service/country.js";
import {Countries} from "./components/countries.jsx";

export const App = () => {

    const [countries, setCountries] = useState([])
    const [showedCountries, setShowedCountries] = useState('')

    useEffect(() => {
        getCountries()
            .then(initialCountries => {
                setCountries(initialCountries)
            })
    }, [])

    const handleShowedCountries = (event) => {
        const searchedCountry = event.target.value
        setShowedCountries(searchedCountry)
    }

    const countriesToShow = showedCountries.length === 0
        ? []
        : countries.filter(c => c.name.common.toLowerCase().includes(showedCountries.toLowerCase()))

    return (
        <div>
            <div>
                find countries <input value={showedCountries} onChange={handleShowedCountries}/>
            </div>
            <div>
                <Countries countries={countriesToShow} />
            </div>
        </div>
    )
}