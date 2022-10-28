import { useState } from "react"
import countriesJson from "../countries.json"

export default function Selector() {
  const [country, setCountry] = useState("");
  const getCountryData = () => {
    if (country === "") return;

    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select a Country.</option>
        {countriesJson.map((Country, index) =>
          <option key={index} value={Country.Slug}>
            {Country.Country}
          </option>
        )}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  )
}
