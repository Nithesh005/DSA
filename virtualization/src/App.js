import './App.css';
// import { useEffect } from "react";
// import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';
import notesData from 'file:///home/nithi/DSA/java_dsa/Notes.json';
// /home/nithi/DSA/java_dsa/Notes.json

import Menu from "./Componentes/Menu";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Java_DSA from "./Pages/Java_DSA";
import Temp_cards from './Pages/Temp_cards';
import Leetcode from "./Pages/Leetcode";
function App() {
  return (
    <div className="App">
      {/* hai */}
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/java_dsa" element={<Java_DSA />} />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/notes" element={<Temp_cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
