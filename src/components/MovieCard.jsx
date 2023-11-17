import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='min-w-[10rem] rounded-b-md bg-movie_card'>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='rounded-t-lg'
      />
      <h2 className='font-bold text-ellipsis max-w-36'>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <p>{movie.release_date}</p>
    </div>
  )
}

export default MovieCard;