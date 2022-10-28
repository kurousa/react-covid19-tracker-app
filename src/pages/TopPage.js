import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";

export default function TopPage(props) {
  return (
    <div className="top-page-container">
      <div>
        <Title />
        <Selector
          countriesJson={props.countriesJson}
          setCountry={props.setCountry}
          getCountryData={props.getCountryData}
        />
        <Results countryDate={props.countryDate}/>
      </div>
    </div>
  )
}
