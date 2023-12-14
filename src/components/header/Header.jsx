import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import SearchMovie from '../searchMovie/SearchMovie'
import authStateObserver from "../authentication/authStateObserver"
import Account from "../authentication/Account";
import { searchIcon } from "../../assets/icons";
import Dropdown from "../dropdown/Dropdown";
import Pagination from "../pagination/Pagination";

const Header = ({ isSearching, setIsSearching, openAccount, setOpenAccount }) => {
  // states for authentication
  const [authenticated, setAuthenticated] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');

  // states for searching functionality
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('Categories');

  // states for movie data from API request
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  // API fetching functionality
  const API_URL = `https://api.themoviedb.org/3/search/movie?page=${page}&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();
    setData(data);
    setMovies(data.results);
  };

  const [showInput, setShowInput] = useState(false);

  // functionality for searching specific movie
  const handleSearch = () => {
    if(showInput === false) {
      setShowInput(true);
    }
    if(!authenticated) {
      openModal();
      setQuery('');
    }
    if(query !== '' && authenticated && showInput) {
      searchMovies(query);
      setPage(1);
      setIsSearching(true);
    }
  };
  
  useEffect(() => {
    searchMovies(query);
  }, [page])

  useEffect(() => {
    authStateObserver(setAuthenticated, setUserDisplayName);
  }, []);

  // modal functionality
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true)
  };
  function closeModal() {
    setIsOpen(false)
  };

  return (
    <>
      <header className="bg-[#EEFDFD] flex fixed top-0 right-0 left-0 justify-between items-center px-5 py-3 max-[641px]:py-2 shadow-md z-10">
        <Link to='/' onClick={() => {setIsSearching(false); setQuery('');}}>
          <h1 className={`font-bold text-xl max-[640px]:text-base ${showInput && 'max-[320px]:hidden'}`}>LitFlix</h1>
        </Link>
        <div className="flex items-center gap-2">

          <div className="flex bg-gray-200 rounded-full active:outline shadow-md">
            <input 
              id="query-input"
              type="text" 
              placeholder="Search movies" 
              className={`text-[13px] pl-4 py-2 max-[768px]:p-0 max-[768px]:w-0 rounded-full bg-gray-200 focus:border-none focus:outline-none ${showInput ? 'max-[768px]:w-full max-[768px]:pl-4 max-[768px]:py-2 duration-500' : ''}`}  
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
            <button 
              className={`w-[35px] pr-4 max-[768px]:p-2`} 
              onClick={handleSearch}
            >
              <img src={searchIcon} alt="search-icon" className="w-full" />
            </button>
          </div>

          {
            authenticated
              ? <Account openAccount={openAccount} setOpenAccount={setOpenAccount} userDisplayName={userDisplayName} setIsSearching={setIsSearching} setQuery={setQuery} />
              : <Link to='/sign-in'>
                  <button className="text-blue-900 font-[500] hover:underline">Sign In</button>
                </Link>
          }

        </div>
      </header>
      {
        isSearching 
        && 
        <div className='px-5 mt-20 min-h-[85vh]'>
          <Dropdown currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} setIsSearching={setIsSearching} setQuery={setQuery}/>

          {
            `${movies}` 
              ? <>
                  <SearchMovie query={query} data={data} movies={movies} />
                  <Pagination currentPage={page} setPage={setPage} totalPage={data.total_pages} />
                </>
              : <p className="text-lg font-bold text-center p-5">
                  No movies found for your search. <br />
                  Try a different keyword.
                </p>
          }
        </div>
      }
      
      {/* headless UI MODAL */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Oops. Something went wrong!
                  </Dialog.Title>
                  <div className="mt-2">
                    Please register and sign in first, to explore and enjoy watching!
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      OKAY
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Header;