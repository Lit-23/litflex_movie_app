const Banner = ({ movie }) => {

  return (
    <section className='p-6 max-[640px]:p-3 mb-5 mx-5 flex flex-1 gap-10 bg-[#020F10] rounded-lg'>
      <div className="max-[768px]:hidden">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          className='rounded-2xl min-w-[300px]'
        />
      </div>
      <div className='my-auto text-white'>
        <div className='mb-4 max-[640px]:mb-2'>
          <h1 className='font-bold text-4xl max-[768px]:text-2xl max-[640px]:text-lg'>
            {movie.title}
            <span className='text-gray-500 font-semibold'>({movie.release_date.split('-')[0]})</span>
          </h1>
          <div className='min-[769px]:text-lg max-[640px]:text-xs font-bold text-gray-500'>
            <span>{movie.release_date}({(movie.original_language).toUpperCase()}) • </span>
            <span>⭐({movie.vote_average})</span>
          </div>

          <div className="min-[769px]:hidden pt-4 max-[640px]:pt-2">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              className='rounded-2xl w-full'
            />
          </div> 

        </div>
        <h2 className='font-bold text-2xl max-[768px]:text-2xl mb-1 max-[640px]:text-base'>Overview</h2>
        <p className='min-[769px]:text-lg max-[640px]:text-[10px]'>{movie.overview}</p>
      </div>
    </section>
  )
}

export default Banner