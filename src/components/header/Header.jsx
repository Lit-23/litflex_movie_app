import { Link } from "react-router-dom";
import SearchMovie from '../searchMovie/SearchMovie'

const Header = () => {
  return (
    <>
      <header className="flex fixed top-0 right-0 left-0 h-auto bg-white justify-between items-center px-5 py-4 shadow-md z-10">
        <Link to='/'>
          <h1 className="font-bold text-xl">LitFlix</h1>
        </Link>
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search movies" 
            className="px-4 py-2 rounded-full bg-gray-200" 
          />
          <Link to='/sign-up'>
            <button className="text-blue-900 font-[500] hover:underline">Sign Up</button>
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