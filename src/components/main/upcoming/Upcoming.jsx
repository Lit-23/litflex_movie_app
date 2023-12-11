import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caretRight } from '../../../assets/icons';

import MovieList from '../../movieList/MovieList';

const API_URL = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`;

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
      <Link to='/upcoming' className='font-bold text-[1.3rem]'>Upcoming</Link>

      <div className='flex gap-3 pb-4 pt-2 overflow-auto'>
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
        <Link to='/upcoming'>
          <button className='font-bold w-36 hover:opacity-75 flex justify-center items-center mt-[140px]'>
            View more
            <img src={caretRight} alt="right-arrow" />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Upcoming

