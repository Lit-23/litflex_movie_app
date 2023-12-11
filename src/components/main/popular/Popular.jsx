import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../../movieList/MovieList';
import Banner from '../../banner/Banner';
import Dropdown from '../../dropdown/Dropdown';
import { caretRight } from '../../../assets/icons';

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`;

const Popular = () => {
  const [currentCategory, setCurrentCategory] = useState('Categories');

  const [movies, setMovies] = useState([]);
  const randomIndex = Math.floor(Math.random() * movies.length);

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <section className='mt-2'>
      {randomIndex !== 0 && <Banner movie={movies[randomIndex]} />}
      <div className='flex justify-start'>
        <Dropdown currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      </div>

      <div className='px-5 mt-5'>
        <Link to='/popular'>
          <h1 className='font-bold text-[1.3rem]'>What's Popular</h1>
        </Link>

        <div className='flex gap-3 pb-4 pt-2 overflow-auto'>
          {movies.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
          <Link to='/popular'>
            <button className='font-bold w-36 hover:opacity-75 flex justify-center items-center mt-[140px]'>
              View more
              <img src={caretRight} alt="right-arrow" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Popular

