import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./Layout";

import Home from "./components/main/Home";

// Search Specific Movies
import SearchMovies from "./components/searchMovie/SearchMovie";

// Categories
import SearchPopular from "./components/main/popular/SearchPopular";
import SearchTopRated from "./components/main/topRated/SearchTopRated";
import SearchUpcoming from "./components/main/upcoming/SearchUpcoming";

// Genres
import Action from "./components/searchMovie/searchByGenre/Action";
import Adventure from "./components/searchMovie/searchByGenre/Adventure";
import Animation from "./components/searchMovie/searchByGenre/Animation";
import Comedy from "./components/searchMovie/searchByGenre/Comedy";
import Crime from "./components/searchMovie/searchByGenre/Crime";
import Documentary from "./components/searchMovie/searchByGenre/Documentary";
import Drama from "./components/searchMovie/searchByGenre/Drama";
import Family from "./components/searchMovie/searchByGenre/Family";
import Fantasy from "./components/searchMovie/searchByGenre/Fantasy";
import History from "./components/searchMovie/searchByGenre/History";
import Horror from "./components/searchMovie/searchByGenre/Horror";
import Music from "./components/searchMovie/searchByGenre/Music";
import Mystery from "./components/searchMovie/searchByGenre/Mystery";
import Romance from "./components/searchMovie/searchByGenre/Romance";
import ScienceFiction from "./components/searchMovie/searchByGenre/ScienceFiction";
import TvMovie from "./components/searchMovie/searchByGenre/TvMovie";
import Thriller from "./components/searchMovie/searchByGenre/Thriller";
import War from "./components/searchMovie/searchByGenre/War";
import Western from "./components/searchMovie/searchByGenre/Western";

import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path='/popular' element={<SearchPopular />} />
          <Route exact path='/top-rated' element={<SearchTopRated />} />
          <Route exact path='/upcoming' element={<SearchUpcoming />} />

          {/* Authentication */}
          <Route path='about' element={<About />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />

          {/* Search specific movies */}
          <Route path='search-movies' element={<SearchMovies />} />

          {/* Search by Genres */}
          <Route path='Action' element={<Action />} />
          <Route path='Adventure' element={<Adventure />} />
          <Route path='Animation' element={<Animation />} />
          <Route path='Comedy' element={<Comedy />} />
          <Route path='Crime' element={<Crime />} />
          <Route path='Documentary' element={<Documentary />} />
          <Route path='Drama' element={<Drama />} />
          <Route path='Family' element={<Family />} />
          <Route path='Fantasy' element={<Fantasy />} />
          <Route path='History' element={<History />} />
          <Route path='Horror' element={<Horror />} />
          <Route path='Music' element={<Music />} />
          <Route path='Mystery' element={<Mystery />} />
          <Route path='Romance' element={<Romance />} />
          <Route path='Science Fiction' element={<ScienceFiction />} />
          <Route path='TV Movie' element={<TvMovie />} />
          <Route path='Thriller' element={<Thriller />} />
          <Route path='War' element={<War />} />
          <Route path='Western' element={<Western />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
