import React from 'react'

const Banner = ({ movie }) => {

  return (
    <section className='p-6 mt-20 mb-5 mx-5 flex flex-1 gap-10 bg-black rounded-lg'>
      <div>
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          className='rounded-2xl min-w-[300px]'
        />
      </div>
      <div className='my-auto text-white'>
        <div className='mb-4'>
          <h1 className='font-bold text-4xl'>
            {movie.title}
            <span className='text-gray-500 font-semibold'>({movie.release_date.split('-')[0]})</span>
          </h1>
          <div className='font-bold text-gray-500'>
            <span>{movie.release_date}({movie.original_language}) • </span>
            <span>⭐({movie.vote_average})</span>
          </div>
        </div>
        <h2 className='font-bold text-2xl mb-1'>Overview</h2>
        <p className='text-lg'>{movie.overview}</p>
      </div>
    </section>
  )
}

export default Banner