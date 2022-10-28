import { useState } from 'react';
import './App.css';
import TopPage from './pages/TopPage';
import countriesJson from "./countries.json"

function App() {
  const [country, setCountry] = useState("");
  const getCountryData = () => {
    if (country === "") return;

    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
    </div>
  );
}

export default App;
