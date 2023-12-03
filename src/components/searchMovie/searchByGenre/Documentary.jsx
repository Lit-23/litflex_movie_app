import { useState, useEffect } from 'react';
import Pagination from '../../pagination/Pagination';
import Dropdown from '../../dropdown/Dropdown';
import MovieGrid from '../../movieGrid/MovieGrid';

const Documentary = () => {
  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('Documentary');
  const genreId = 99;

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;
  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setData(data);
    setMovies(data.results);
  }

  useEffect(() => {
    searchMovies();
  }, [page]);

  return (
    <section className='px-5 mt-20'>
     <Dropdown currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />

      <div className='flex justify-center flex-wrap gap-10 pb-4 pt-4'>
        {movies.map((movie) => (
          <MovieGrid key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} setPage={setPage} totalPage={data.total_pages} />
    </section>
  )
}

export default Documentary