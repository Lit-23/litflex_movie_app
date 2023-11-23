import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
