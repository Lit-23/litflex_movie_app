import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

// Search Specific Movies
import SearchMovies from "./components/searchMovie/SearchMovie";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  // useEffect(()=>{setIsSearching(false)}, [])

  return (
    <main>
      {/* header */}
      <Header isSearching={isSearching} setIsSearching={setIsSearching}/>

      {/* outlet to render routes */}
      {
        !isSearching && <Outlet />
      }

      {/* footer */}
      <Footer />
    </main>
  )
}

export default App
