import {Languages} from "./languages.jsx";

export const Country = ({ country }) => {
    return (
        <div>
            {country.name.common}
        </div>
    )
}

export const CountryWithDetails = ({ country }) => {
    return (
        <div>
            <h1>
                {country.name.common}
            </h1>
            <div>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
            </div>
            <h1>
                Languages
            </h1>
            <Languages langs={country.languages} />
            <img src={country.flags.png} alt="Flag" />
        </div>
    )
}