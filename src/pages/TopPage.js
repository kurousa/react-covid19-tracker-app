import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";

export default function TopPage(props) {

  return (
    <div>
      <Title />
      <Selector
        countriesJson={props.countriesJson}
        setCountry={props.setCountry}
        getCountry={props.getCountry} />
      <Results />
    </div>
  )
}
