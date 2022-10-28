export default function Selector(props) {
  return (
    <div>
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>Select a Country.</option>
        {props.countriesJson.map((Country, index) =>
          <option key={index} value={Country.Slug}>
            {Country.Country}
          </option>
        )}
      </select>
      <button onClick={props.getCountryData}>Get Data</button>
    </div>
  )
}
