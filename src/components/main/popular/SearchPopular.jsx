import { useState, useEffect } from 'react';
import MovieCard from '../../movieCard/MovieCard';
import Pagination from '../../pagination/Pagination';

const Popular = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;
  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setData(data);
    setMovies(data.results)
    console.log(data)
  }

  useEffect(() => {
    searchMovies();
  }, [page]);

  return (
    <section className='px-5 mt-16'>
      <h1 className='font-bold text-4xl text-center p-4'>Popular</h1>

      <div className='flex justify-center flex-wrap gap-10 pb-4 pt-2'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} setPage={setPage} totalPage={data.total_pages} />
    </section>
  )
}

export default Popular

