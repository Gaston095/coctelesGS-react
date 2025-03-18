import CoctailIcon from "../icons/CoctailIcon";
import SearchBar from "./SearchBar";


export default function Header() {
  return (
    <>
      <div className="h-16 w-full bg-black absolute z-10 flex justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold font-montserrat flex items-center">
          <CoctailIcon/>
          Cocteles GS
        </h1>
        <SearchBar />
      </div>
    </>
  );
}
