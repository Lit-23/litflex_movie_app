import React from 'react'

const MovieCard = ({ title, thumbnail, rating, release_date }) => {
  return (
    <div>
      <img src={thumbnail} alt="movie thumbnail" />
      <h2>{title}</h2>
      <p>{rating}</p>
      <p>{release_date}</p>
    </div>
  )
}

export default MovieCard