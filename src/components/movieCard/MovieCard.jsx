import { useEffect, useState } from 'react';
import Banner from '../banner/Banner'

const MovieCard = ({ movie, index }) => {
  // console.log(movie);
  // console.log(index);
  const [overview, setOverview] = useState();

  useEffect(() => {}, [index])
  return (
    <section className='mt-20 p-5 min-h-[50vh]'>
      <p className=''>Movie Card</p>
      {movie && <Banner movie={movie} />}
    </section>
  )
}

export default MovieCard