import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  
  return (
    <>
      <h1>Hola Mundo!</h1>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((drink)=>(<li key={drink.idDrink}>{drink.strDrink}</li>))}
      </ul>
    </>
  );
}

export default App;
