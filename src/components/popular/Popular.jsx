import { useState, useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import Banner from '../banner/Banner';

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

  // const bannerMovie = async useEffect(() => {
  //   const randomIndex = await Math.floor(Math.random() * movies.length);

  //   console.log(movies[randomIndex]);
  // }, [])

  // console.log(movies[randomIndex].release_date.split('-').[0])
  
  return (
    <>
      {/* <Banner movie={bannerMovie} /> */}
      <section className='px-4 mt-2'>
        <h1 className='font-bold text-[1.3rem]'>Popular Today</h1>

        <div className='flex gap-3 py-4 overflow-auto'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Popular

