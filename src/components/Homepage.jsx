import imgHomepage from "../assets/imgHomepage19.jpg";

export default function Homepage() {
  return (
    <>
      <div
        className="bg-black bg-contain bg-no-repeat h-screen text-white flex flex-col items-center pt-10"
        style={{ backgroundImage: `url(${imgHomepage})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="relative mt-30 flex flex-col items-center h-full text-white font-bold ">
          <h1 className="text-5xl p-4 font-montserrat">Bienvenido a Cocteles GS</h1>
          <p className="text-center text-[17px] text-[#666] p-4 font-poppins max-w-md">
            A continuación encontraras simples y refrescantes tragos para
            compartir con amigos y/o familia.
          </p>
        </div>
      </div>
    </>
  );
}
