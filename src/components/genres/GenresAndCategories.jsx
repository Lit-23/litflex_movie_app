import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { caretUp, caretDown } from '../../assets/icons';

const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a20b0851681cb1cbe3ad6e2eafb80bc8';

const GenresAndCategories = () => {
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchGenre = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setGenres(data.genres);
  }

  useEffect(() => {
    searchGenre();
  }, [])

  function handleclick() {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center px-5 relative">
      <button className="flex justify-between items-center w-48 font-bold bg-gray-200 px-4 py-2 rounded-lg tracking-wider border-4 border-transparent active:border-black duration-300" onClick={handleclick}>
        <h1>Genres</h1>
        {isOpen
          ? <img src={caretUp} alt="caret" />
          : <img src={caretDown} alt="caret" />
        }
      </button>

      {isOpen && 
        <div className="absolute flex flex-col overflow-auto h-56 bg-gray-200 w-[12rem] mt-14 rounded-lg shadow-lg">
          <Link to='/popular'>
            <h2 className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white">Popular</h2>
          </Link>
          <Link to='/top-rated'>
            <h2 className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white">Top Rated</h2>
          </Link>
          <Link to='/upcoming'>
            <h2 className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white">Upcoming</h2>
          </Link>
          {genres.map((genre, i) => (
            <Link>
              <h2 className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white" key={genre.id}>{genre.name}</h2>
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default GenresAndCategories