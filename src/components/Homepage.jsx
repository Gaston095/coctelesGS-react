import imgHomepage from "../assets/imgHomepage1.jpg";

export default function Homepage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen text-white flex flex-col items-center pt-10"
        style={{ backgroundImage: `url(${imgHomepage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-white font-bold">
          <h1 className="text-3xl p-4">Bienvenido a Cocteles GS</h1>
          <p className="text-center p-4">
            A continuación encontraras simples y refrescantes tragos para
            compartir con amigos y/o familia.
          </p>
        </div>
      </div>
    </>
  );
}
