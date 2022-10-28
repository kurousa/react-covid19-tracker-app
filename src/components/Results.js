export default function Results(props) {
  console.log(props)
  return (
    <div className="results-container">
      <div>
        <p>Date:<span>{props.countryDate.date.slice(0,10)}</span></p>
        <p>NewConfirmed:<span>{props.countryDate.newConfirmed.toLocaleString()}</span></p>
        <p>TotalConfirmed:<span>{props.countryDate.totalConfirmed.toLocaleString()}</span></p>
        <p>NewRecovered:<span>{props.countryDate.newRecovered.toLocaleString()}</span></p>
        <p>ToalRecoverd:<span>{props.countryDate.totalRecovered.toLocaleString()}</span></p>
      </div>
    </div>
  )
}
