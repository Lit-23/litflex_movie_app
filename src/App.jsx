import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      {/* header */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
