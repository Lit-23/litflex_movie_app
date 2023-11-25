import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";


export default function Main() {

  return (
    <main>
      <Popular />
      <TopRated />
      <Upcoming />
    </main>
  )
} 

// get movies by SEARCH
// `/search/movie?query=${searchQuery}&page=${page}&api_key=${apiKey}`;

// get movies by Catergory
// `movie/${genreOrCategoryName}?page=&${page}&api_key=${apiKey}`;

// get movies by Genre
// `discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${apiKey}`;

// get movies by Popular
// `movie/popular?&page=${page}&api_key=${apiKey}`;

// upcoming
// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1