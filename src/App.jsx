import { useState } from "react";
import useFetch from "./useFetch";

function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const [letter, setLetter] = useState("a")
  const { data, loading, error } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
  
  return (
    <>
      <h1>Hola Mundo!</h1>
      
      <div>
        {alphabet.map((char) => (
          <button key={char} onClick={() => setLetter(char)}>
            {char}
          </button>
        ))}
      </div>

      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {(data === null)? <h1>Vacio</h1> 
        :
        data?.map((drink)=>(<li key={drink.idDrink}>{drink.strDrink}</li>))
}
      </ul>
    </>
  );
}

export default App;
