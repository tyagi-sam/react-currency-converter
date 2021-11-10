import './App.css';
//import currencyRow from './currencyRow';
BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=3e05f43999456abd3bda4853e64125a0&format=1";
  
function App() {
  return (
    <>
      <h1>CONVERT</h1>
      <currencyRow />
      <div>=</div>
      <currencyRow />
    </>
  );
}

export default App;
