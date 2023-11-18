import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='min-w-[10rem] rounded-b-md bg-movie_card'>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className='rounded-t-lg'
      />
      <div className='px-1'>
        <h2 className='font-bold max-w-36 text-ellipsis overflow-hidden whitespace-nowrap'>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard;