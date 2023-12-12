import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [isSearching, setIsSearching] = useState(false);

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
