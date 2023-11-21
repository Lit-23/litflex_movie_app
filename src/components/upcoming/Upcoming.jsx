import { useState, useEffect } from 'react';
import MovieList from '../movieList/MovieList';

const API_URL = `
https://api.themoviedb.org/3/movie/latest?&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
  }

  console.log(movies)

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <section className='px-5 mt-5'>
      <h1 className='font-bold text-[1.3rem]'>Upcoming</h1>

      <div className='flex gap-3 pb-4 pt-2 overflow-auto'>
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Upcoming

