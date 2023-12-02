import Banner from '../banner/Banner'

const MovieCard = ({ movie, index }) => {
  console.log(movie);
  console.log(index);
  return (
    <>
      <Banner movie={movie} />
    </>
  )
}

export default MovieCard