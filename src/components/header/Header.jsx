import { Link } from "react-router-dom";
import SearchMovie from '../searchMovie/SearchMovie'

const Header = () => {
  return (
    <>
      <header className="flex fixed top-0 right-0 left-0 h-auto bg-white justify-between items-center px-5 py-3 shadow-md z-10">
        <Link to='/'>
          <h1 className="font-bold">LitFlix</h1>
        </Link>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search movies" 
            className="px-4 py-2 text-[12px] rounded-full bg-gray-200" 
          />
          <Link to='/'>
            <button>Acount</button>
          </Link>
        </div>
      </header>
      {/* {
        <SearchMovie />
      } */}
    </>
  )
}

export default Header