import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';

const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`

const Popular = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  const handleclick = () => {
    movies.map((movie) => {
      console.log(movie.poster_path);
    })
  };
  
  return (
    <section>
      <h1 className='font-semibold text-[1.2rem]'>Popular Today</h1>
      <div className='flex gap-3 overflow-auto py-2'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
 
      <button className='bg-blue-500 rounded-md p-2 font-bold mt-2 ml-2' onClick={handleclick}>click me</button>
    </section>
  )
}

export default Popular

