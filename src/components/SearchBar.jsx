import SearchIcon from '../icons/SearchIcon'

export default function SearchBar() {
    return (
        <form className='w-[250px] relative max-sm:w-[200px]'>
            <div className="relative">
                <input type='search' placeholder='Buscar..' className='focus:border-1 focus:border-slate-400 text-white w-full p-2 px-3 rounded-full text-[14px] bg-slate-800 placeholder:text-amber-100 outline-none'/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full cursor-pointer'>
                    <SearchIcon />
                </button>
            </div>

        </form>
    )
}