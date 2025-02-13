import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CardDetail() {
  const { id } = useParams();

  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks) {
          setCard(data.drinks);
        } else {
          setError("No se encontraron datos para esta bebida");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="w-full h-screen bg-[#131313] text-white flex items-center flex flex-col gap-6">
        <div className="w-full bg-black h-10 flex items-center text-2xl font-normal font-poppins p-4">
          <Link to={"/"}>Volver</Link>
        </div>

        {card && card.length > 0 && (
          <div className="flex gap-6 max-w-[90%] mx-auto">
            <img className="w-[40%]" src={card[0].strDrinkThumb} />
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl font-montserrat">{card[0].strDrink}</h1>
              <div className="flex gap-6">
                <label className=" text-[#f27c2d]">
                  {card[0].strAlcoholic}
                </label>
                <label className="text-[#8ddd8d]">{card[0].strCategory}</label>
              </div>
              <h3 className="font-montserrat text-2xl">Ingredients</h3>
              <ul className="font-playfair">
                {Array.from({ length: 15 }, (_, index) => {
                  const ingredient = card[0][`strIngredient${index + 1}`];
                  const measure = card[0][`strMeasure${index + 1}`];

                  // Si existe tanto el ingrediente como la medida, los mostramos
                  if (ingredient && measure) {
                    return (
                      <li key={index}>
                        {ingredient} - {measure}
                      </li>
                    );
                  }
                  // Si solo existe el ingrediente y no la medida, lo mostramos igualmente
                  if (ingredient) {
                    return <li key={index}>{ingredient}</li>;
                  }

                  return null;
                })}
              </ul>
              <p className="">{card[0].strInstructions}</p>
            </div>
          </div>
        )}
        {card && card.length === 0 && (
          <p>No se encontraron datos para esta bebida</p>
        )}
      </section>
    </>
  );
}
