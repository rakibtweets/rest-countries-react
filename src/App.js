import './App.css';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}
/* 
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Let's travel around the world</h1>
      <h2>Available Countries: {countries.length}</h2>
      {countries.map((country) => (
        <Country name={country.name} capital={country.capital}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Country Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
    </div>
  );
} */

export default App;
