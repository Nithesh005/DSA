import './App.css';
// import { useEffect } from "react";
import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';
// import notesData from 'file:///home/nithi/DSA/java_dsa/Notes.json';
// /home/nithi/DSA/java_dsa/Notes.json

import Menu from "./Componentes/Menu";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import JavaDSA from "./Pages/Java_DSA";
import Tempcards from './Pages/Temp_cards';
import Leetcode from "./Pages/Leetcode";
import HomePage from './Pages/HomePage';
import 'aos/dist/aos.css';
import PushNotification from './Services/PushNotification';
import JavaDsaSolution from './Pages/JavaDsaSolution'
function App() {
  AOS.init();
  return (
    <div className="App">
      {/* hai */}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Java_DSA/JavaDsaSolution/:key" element={<JavaDsaSolution/>} />
          <Route path="/java_dsa" element={<JavaDSA />} data-aos="fade-left" />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/notes" element={<Tempcards />} />
        </Routes>
      </BrowserRouter>
      <PushNotification />
    </div>
  );
}

export default App;
