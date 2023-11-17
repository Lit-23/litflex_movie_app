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
      // console.log(movie.title);
      console.log(movie.backdrop_path);
    })
  };
  // thumbnail={movie.backdrop_path} 
  return (
    <section>
      <h1 className='font-semibold text-[1.2rem]'>Popular Today</h1>
      <div className='border-2'> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} thumbnail={movie.backdrop_path} rating={movie.vote_average} release_date={movie.release_date} />
        ))}
      </div>
{/* 
      <button onClick={handleclick}>click me</button> */}
      <br />
      <button onClick={handleclick}>IMG</button>
    </section>
  )
}

export default Popular

