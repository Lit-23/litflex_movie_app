import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caretRight } from '../../../assets/icons';

import MovieList from '../../movieList/MovieList';

const API_URL = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <section className='px-5 mt-5'>
      <Link to='/upcoming'>
          <h1 className='font-[500] text-[1.3rem] max-[769px]:text-[17.4px] max-[640px]:text-sm'>Upcoming</h1>
      </Link>

      <div className='flex gap-3 min-[641px]:pb-4 pb-2 min-[641px]:pt-2 pt-1 overflow-auto'>
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
        <Link to='/upcoming'>
            <button className='font-[500] w-36 max-[768px]:w-[109.5px] max-[640px]:w-[75px] hover:opacity-75 flex justify-center items-center mt-[110px] max-[768px]:mt-[82px] max-[640px]:mt-[55px] max-[769px]:text-[14px] max-[640px]:text-[10px]'>
              View more
              <img src={caretRight} alt="right-arrow" />
            </button>
        </Link>
      </div>
    </section>
  )
}

export default Upcoming

