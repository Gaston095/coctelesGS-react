import { useState } from "react";
import useFetch from "../useFetch";
import Card from "./Card";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

export default function CardContainer() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const [letter, setLetter] = useState("a");
  const { data, loading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );

  return (
    <>
      <section className="bg-black py-2">
        <div className="h-[150px]  flex justify-center items-end max-sm:items-center">
          <h1 className="text-white text-2xl font-bold p-4">
            Listado de cocteles
          </h1>
        </div>
        <div className="max-w-[80%] max-sm:max-w-[90%] max-sm:flex-wrap mx-auto mb-2 bg-slate-800 text-amber-100 p-2 rounded-3xl flex justify-around">
          {alphabet.map((char) => (
            <button
              key={char}
              className="cursor-pointer font-bold hover:bg-slate-700 w-full max-sm:w-16 h-full"
              onClick={() => setLetter(char)}
            >
              {char}
            </button>
          ))}
        </div>

        <section className="flex flex-col justify-center">
          <div className="h-10 my-0 mx-auto">
            {error && <li>Error: {error}</li>}
            {loading && <Spinner />}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {data === null ? (
              <h1>Vacio</h1>
            ) : (
              data?.map((drink) => (
                <Link key={drink.idDrink} to={`/detail/${drink.idDrink}`}>
                  <Card img={drink.strDrinkThumb} name={drink.strDrink} />
                </Link>
              ))
            )}
          </div>
        </section>
      </section>
    </>
  );
}
