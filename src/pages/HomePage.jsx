import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );

        setCountries(response.data);
        //console.log("response==>", countries[0].name.common)
      } catch (error) {
        console.log("An error has ocurred", error);
      }
    };
    fetchCountries();
  }, []);

  // let random = Math.random()
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map((oneCountry) => (
        <Link
          key={oneCountry.alpha3Code}
          className="list-item"
          to={`/${oneCountry.alpha3Code}`}
        >
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
            />
          </div>
          <div>{oneCountry.name.common}</div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
