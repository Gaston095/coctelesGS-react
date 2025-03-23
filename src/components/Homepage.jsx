import imgHomepage from "../assets/imgHomepage.jpg";

export default function Homepage() {
  return (
    <>
      <section className="bg-black h-screen text-white flex justify-around items-center max-sm:flex-col max-sm:justify-center max-sm:gap-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl p-4 font-montserrat text-center">
            Bienvenido a Cocteles GS
          </h1>
          <p className="text-center text-[17px] text-[#666] p-4 font-poppins max-w-md">
            A continuación encontraras simples y refrescantes tragos para
            compartir con amigos y/o familia.
          </p>
        </div>
        <div className="">
          <img className="w-90 max-sm:w-50" src={imgHomepage} />
        </div>
      </section>
    </>
  );
}
