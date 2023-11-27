import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SearchPopular from "./components/main/popular/SearchPopular"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/popular' element={<SearchPopular />} />
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
