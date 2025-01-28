import imgHomepage from "../assets/imgHomepage.jpg";

export default function Homepage() {
  return (
    <>
      <div className="bg-black h-[100vh] text-white flex flex-col items-center pt-10">
        <h1 className="text-center text-2xl font-bold p-2">
          Bienvenido a Cocteles GS
        </h1>

        <img src={imgHomepage} className="w-[40%]" />
        <p className="p-2 text-center mt-6">
          A continuación encontraras simples y refrescantes tragos para
          compartir con amigos y/o familia.
        </p>
      </div>
    </>
  );
}
