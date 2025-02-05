export default function Card({ img }) {
  return (
    <>
      <article className="w-[200px] h-[200px] contain-content">
        <img src={img} className="w-full" />
        <div className="w-full relative top-0 bottom-0 right-0 left-0 h-full bg-amber-700 z-0 skew-y-6 origin-top-right ">
          <h1>Title Cards</h1>
        </div>
      </article>
    </>
  );
}
