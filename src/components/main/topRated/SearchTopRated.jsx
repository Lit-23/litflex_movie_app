import { useState, useEffect } from 'react';
import MovieGrid from '../../movieGrid/MovieGrid';
import Pagination from '../../pagination/Pagination';
import Dropdown from '../../dropdown/Dropdown';

const SearchTopRated = () => {
  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('Top Rated');

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=a20b0851681cb1cbe3ad6e2eafb80bc8`;
  const searchMovies = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setData(data);
    setMovies(data.results)
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

export default SearchTopRated

