import { useEffect, useState } from "react";

const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a20b0851681cb1cbe3ad6e2eafb80bc8';

const Genres = () => {
  const [genre, setGenre] = useState([]);

  const searchGenre = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    setGenre(data.genres);
  }

  useEffect(() => {
    searchGenre();
  }, [])

  function handleclick() {
    console.log(genre)
  };

  return (
    <div className="flex px-5">
      <button className="font-semibold bg-gray-400 px-4 py-2 rounded-lg" onClick={handleclick}>Genres</button>
    </div>
  )
}

export default Genres