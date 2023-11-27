const MovieCard = ({ movie }) => {
  return (
    <div className='max-w-[10rem] bg-black rounded-md'>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className='rounded-t-md'
      />
      <div className='px-1 text-white py-1'>
        <h2 className='font-bold text-ellipsis overflow-hidden whitespace-nowrap'>{movie.title}</h2>
        <div className='flex justify-between text-sm text-gray-400'>
          <p>⭐({(movie.vote_average).toFixed(1)})</p>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard