import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SearchPopular from "./components/main/popular/SearchPopular";
import SearchTopRated from "./components/main/topRated/SearchTopRated";
import SearchUpcoming from "./components/main/upcoming/SearchUpcoming";


function App() {

  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/popular' element={<SearchPopular />} />
        <Route path='/top-rated' element={<SearchTopRated />} />
        <Route path='/upcoming' element={<SearchUpcoming />} />
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
