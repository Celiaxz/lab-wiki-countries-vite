import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = useState();
  const { countryId } = useParams();
  const fetchOneCountry = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      setCountry(response.data);
    } catch (error) {
      console.log("An error has ocurred", error);
    }
  };

  useEffect(() => {
    fetchOneCountry();
  }, [countryId]);

  return (
    <div className="country-details-container">
      {country ? (
        <>
          <div className="country-details-flag-container"></div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          ></img>
          <h1>{country.name.common}</h1>
          <div className="country-details-capital-container">
            <p>Capital: </p>
            <p>{country.capital}</p>
          </div>
          <div className="country-details-area-container">
            <p>Area:</p>
            <p>{country.area} km2</p>
          </div>
          <div className="country-details-borders-container">
            <p>Borders:</p>
            {country.borders.map((border) => (
              <Link key={border} to={`/${border}`}>
                <p>{border}</p>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default CountryDetails;
