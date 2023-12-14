import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [isSearching, setIsSearching] = useState(false);

  // props for Account componet
  const [openAccount, setOpenAccount] = useState(false);

  const handleClick = () => {
    if(openAccount) {
      setOpenAccount(false);
    };
  }

  return (
    <main onClick={handleClick}>
      {/* header */}
      <Header 
        isSearching={isSearching} setIsSearching={setIsSearching} 
        openAccount={openAccount} setOpenAccount={setOpenAccount}
      />

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
