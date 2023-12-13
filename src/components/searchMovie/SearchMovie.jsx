import MovieGrid from '../movieGrid/MovieGrid';

const SearchMovie = ({ movies }) => {
  return (
    <div className='flex justify-center flex-wrap gap-6 max-[768px]:gap-4 max-[640px]:gap-2 pb-4 pt-4'>
      {movies.map((movie) => (
        <MovieGrid key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default SearchMovie