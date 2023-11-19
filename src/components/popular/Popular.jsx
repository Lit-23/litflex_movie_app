import { useState, useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import Banner from '../banner/Banner';

const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const randomIndex = Math.floor(Math.random() * movies.length);
  console.log(randomIndex)

  // const random = async Math.floor(Math.random() * movies.length);
  // const randomIndex = await random;

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <Banner movie={movies[randomIndex]} />
      <section className='px-5 mt-2'>
        <h1 className='font-bold text-[1.3rem]'>Popular Today</h1>

        <div className='flex gap-3 pb-4 pt-2 overflow-auto'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Popular

