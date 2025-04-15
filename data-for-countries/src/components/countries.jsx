import {Country, CountryWithDetails} from "./country.jsx";

export const Countries = ({ countries }) => {
    if (countries.length === 0) {
        return (
            <div>
                Search for a country.
            </div>
        )
    }

    if (countries.length > 10) {
        return <div>
            Too many matches, specify another filter
        </div>
    }

    if (countries.length > 1) {
        return (
            <div>
                {countries.map((country) =>
                    <Country key={country.name.common} country={country} />
                )}
            </div>
        )
    }
    return (
        <div>
            <CountryWithDetails country={countries[0]} />
        </div>
    )
}