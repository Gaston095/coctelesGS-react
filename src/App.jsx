import { useState } from "react";
import useFetch from "./useFetch";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Card from "./components/Card";

function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const [letter, setLetter] = useState("a");
  const { data, loading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );

  return (
    <>
      <Header />
      <Homepage />
      <h1>Hola Mundo!</h1>
      <Card img={"https://www.gastroactitud.com/wp-content/uploads/2022/08/manhattan-apertura.jpg"}/>

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
        {data === null ? (
          <h1>Vacio</h1>
        ) : (
          data?.map((drink) => <li key={drink.idDrink}>{drink.strDrink}</li>)
        )}
      </ul>
    </>
  );
}

export default App;
