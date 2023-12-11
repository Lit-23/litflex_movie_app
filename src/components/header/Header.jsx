import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchMovie from '../searchMovie/SearchMovie'
import authStateObserver from "../authentication/authStateObserver"
import Account from "../authentication/Account";
import { searchIcon } from "../../assets/icons";
import Dropdown from "../dropdown/Dropdown";
import Pagination from "../pagination/Pagination";

const Header = ({ isSearching, setIsSearching }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('Categories');

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/search/movie?page=${page}&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();
    setData(data);
    setMovies(data.results);
  };

  const handleSearch = (event) => {
    if(authenticated) {
      searchMovies(query);
      setPage(1);
      setIsSearching(true);
    } 
    // else if (authenticated && event.key === 'Enter') {
    //   searchMovies(query);
    //   setPage(1);
    //   setIsSearching(true);
    // } 
    else {
      alert('Please Register or Sign In first!');
      setQuery('');
    }
  };
  
  useEffect(() => {
    searchMovies(query);
  }, [page])

  useEffect(() => {
    authStateObserver(setAuthenticated, setUserDisplayName);
  }, []);

  return (
    <>
      <header className="flex fixed top-0 right-0 left-0 bg-white justify-between items-center px-5 py-3 shadow-md z-10">
        <Link to='/'>
          <h1 className="font-bold text-xl">LitFlix</h1>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-200 rounded-full active:outline shadow-md">
            <input 
              id="query-input"
              type="text" 
              placeholder="Search movies" 
              className="text-[13px] px-4 py-2 rounded-full bg-gray-200 focus:border-none focus:outline-none" 
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
            <button className="w-[35px] pr-4" onClick={handleSearch}>
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
      {
        isSearching 
        && 
        <div className='px-5 mt-20'>
          <Dropdown currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />

          <SearchMovie query={query} data={data} movies={movies} />

          <Pagination currentPage={page} setPage={setPage} totalPage={data.total_pages} />
        </div>
      }
    </>
  )
}

export default Header;