import React from 'react'

const Banner = ({ movie }) => {

  return (
    <section className='p-4 flex flex-1 gap-6'>
      <div className='min-w-'>
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          className='rounded-lg min-w-[300px]'
        />
      </div>
      <div className='my-auto'>
        <h1 className='font-bold text-2xl mb-2'>
          {movie.title}
          {/* <span>({movie.release_date.split('-').[0]})</span> */}
        </h1>
        <h2 className='font-semibold text-xl mb-1'>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </section>
  )
}

export default Banner