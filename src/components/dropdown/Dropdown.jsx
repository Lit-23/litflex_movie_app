import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { caretUp, caretDown } from '../../assets/icons';

const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;

const Dropdown = ({ currentCategory, setCurrentCategory, setIsSearching, setQuery }) => {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchGenre = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setGenres(data.genres);
  };

  useEffect(() => {
    searchGenre();
  }, []);

  function handleIsOpen() {
    setIsOpen((prevState) => !prevState);
  };

  function handleCategory() {
    setCurrentCategory(currentCategory);
  };

  return (
    <div className="flex justify-center px-5 relative">
      <button className="flex justify-between items-center w-48 max-[768px]:w-36 max-[640px]:w-[120px] font-bold bg-gray-200 p-2 max-[640px]:py-1 rounded-lg tracking-wider border-4 border-transparent active:border-black duration-300" onClick={handleIsOpen}>
        <h1 className="text-base max-[768px]:text-xs max-[640px]:text-[10px]">{currentCategory}</h1>
        {isOpen
          ? <img src={caretUp} alt="caret" className="max-[640px]:w-[10px] max-[768px]:w-[12px]"/>
          : <img src={caretDown} alt="caret" className="max-[640px]:w-[10px] max-[768px]:w-[12px]"/>
        }
      </button>

      {isOpen && 
        <div className="absolute flex flex-col md:py-2 py-3 overflow-auto min-[769px]:h-56 h-44 bg-gray-200 w-48 max-[768px]:w-36 max-[640px]:w-[120px] min-[769px]:mt-14 mt-11 rounded-lg shadow-lg z-10">
          {
            currentCategory !== 'Popular' &&
            <Link to='/popular'>
              <h2 
                className="min-[769px]:text-base text-xs py-2 min-[769px]:py-3 min-[769px]:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white"
                onClick={() => {
                  handleCategory(); 
                  setIsSearching(false); 
                  setQuery('');
                }}
                key='popular'
              >
                Popular
              </h2>
            </Link>
          }
          {
            currentCategory !== 'Top Rated' &&
            <Link to='/top-rated'>
              <h2 
                className="min-[769px]:text-base text-xs py-2 min-[769px]:py-3 min-[769px]:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white"
                onClick={() => {
                  handleCategory(); 
                  setIsSearching(false); 
                  setQuery('');
                }}
                key='top-rated'
              >
                Top Rated
              </h2>
            </Link>
          }
          {
            currentCategory !== 'Upcoming' &&
            <Link to='/upcoming'>
              <h2 
                className="min-[769px]:text-base text-xs py-2 min-[769px]:py-3 min-[769px]:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white"
                onClick={() => {
                  handleCategory(); 
                  setIsSearching(false); 
                  setQuery('');
                }}
                key='upcoming'
              >
                Upcoming
              </h2>
            </Link>
          }

          {genres.map((genre, i) => (
            <Link to={`/${genre.name}`}>
            {
              currentCategory !== genre.name &&
                <h2 
                  className="min-[769px]:text-base text-xs py-2 min-[769px]:py-3 min-[769px]:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white" 
                  onClick={() => {
                    handleCategory(); 
                    setIsSearching(false); 
                    setQuery('');
                  }}
                  key={genre.id}
                >
                  {genre.name}
                </h2>
            }
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default Dropdown