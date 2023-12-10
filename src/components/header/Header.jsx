import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import SearchMovie from '../searchMovie/SearchMovie'
import authStateObserver from "../authentication/authStateObserver"
import Account from "../authentication/Account";
import { searchIcon } from "../../assets/icons";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');
  const [searchMovies, setSearchMovies] = useState('one piece');

  useEffect(() => {
    authStateObserver(setAuthenticated, setUserDisplayName);
  }, [])
  return (
    <>
      <header className="flex fixed top-0 right-0 left-0 bg-white justify-between items-center px-5 py-3 shadow-md z-10">
        <Link to='/'>
          <h1 className="font-bold text-xl">LitFlix</h1>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-200 rounded-full active:outline shadow-md">
            <input 
              type="text" 
              placeholder="Search movies" 
              className="text-[13px] px-4 py-2 rounded-full bg-gray-200 focus:border-none focus:outline-none" 
            />
            <button className="w-[35px] pr-4">
              <img src={searchIcon} alt="search-icon" className="w-full" />
            </button>
          </div>

          {
            authenticated
              ? <Account userDisplayName={userDisplayName} />
              : <Link to='/sign-in'>
                  <button className="text-blue-900 font-[500] hover:underline">Sign In</button>
                </Link>
          }

        </div>
      </header>
      {/* {
        <SearchMovie />
      } */}
    </>
  )
}

export default Header;