import react, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
 const [joke, setJoke] = useState("");

  const getJoke =() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(
    (response) => {
      console.log( joke.data.bitcoin.usd);
     setJoke(response);
    }
    );
  };
  return (
    <div>
    helloo<button onClick={getJoke}>get joke now</button>
     { joke.map(data) { <div> {data.data.bitcoin.usd} </div> } }
    </div>cd..
    
  );
}

export default App;
