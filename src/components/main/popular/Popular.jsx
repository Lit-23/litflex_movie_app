import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../../movieList/MovieList';
import Banner from '../../banner/Banner';
import Genres from '../../genres/Genres';

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const randomIndex = Math.floor(Math.random() * movies.length);
  // console.log(randomIndex)

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setMovies(data.results);
    // console.log(data)
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      {/* <Banner movie={movies[randomIndex]} /> */}
      <Genres />
      {/* <MovieCard movie={movies[randomIndex]} /> */}

      <section className='px-5 mt-5'>
        <Link to='/popular'>
          <h1 className='font-bold text-[1.3rem]'>What's Popular</h1>
        </Link>

        <div className='flex items-center gap-3 pb-4 pt-2 overflow-auto'>
          {movies.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
          <Link to='/popular'>
            <button className='text-white bg-black rounded-md p-2 w-[10rem] h-full'>View more...</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Popular

