import {Languages} from "./languages.jsx";
import {Weather} from "./weather.jsx";

export const Country = ({ country, setShowCountryButton }) => {
    return (
        <div>
            {country.name.common}
            <button onClick={() => setShowCountryButton(country.name.common)}>Show</button>
        </div>
    )
}

export const CountryWithDetails = ({ country }) => {

    const [lat, long] = country.capitalInfo.latlng

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
            <h2>Weather in {country.name.common}</h2>
            <Weather
                countryName={country.name.common}
                lat={lat}
                long={long}
            />
        </div>
    )
}