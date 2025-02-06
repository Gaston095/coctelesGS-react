export default function Card({ img, name }) {
  return (
    <>
      <article className="w-[200px] h-[200px] contain-content cursor-pointer ">
        <img src={img} className="w-full h-[125px] object-cover object-top" />
        {/* <div className="w-full relative top-0 bottom-0 right-0 left-0 h-[10px] bg-amber-700 z-0 skew-y-6 origin-top-right "></div> */}
        <div className="w-full absolute top-15 bg-[#151515] h-full clip-polygon"></div>
        <div className="w-full bg-[#151515] h-full">
          <h1 className="p-1 text-center text-white font-bold">{name}</h1>
        </div>
      </article>
    </>
  );
}

/* #ff3d00 color naranja*/
