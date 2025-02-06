import { useState } from "react";
import useFetch from "../useFetch";
import Card from "./Card";

export default function CardContainer() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const [letter, setLetter] = useState("a");
  const { data, loading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );

  return (
    <>
      <div>
        {alphabet.map((char) => (
          <button key={char} onClick={() => setLetter(char)}>
            {char}
          </button>
        ))}
      </div>

      <ul className="flex justify-center gap-2 flex-wrap">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data === null ? (
          <h1>Vacio</h1>
        ) : (
          data?.map((drink) => <li key={drink.idDrink}><Card img={drink.strDrinkThumb} name={drink.strDrink}/></li>)
        )}
      </ul>
    </>
  );
}
