import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileBox from "./components/beranda-box";
import TentangBox from "./components/tentang-box";
import KontakBox from "./components/kontak-box";

function App() {
  return (
    <div className="App max-h-full">
      <Router>
        <Routes>
          <Route path="/" element={<ProfileBox />} />
          <Route path="Tentang" element={<TentangBox />} />
          <Route path="Kontak" element={<KontakBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
