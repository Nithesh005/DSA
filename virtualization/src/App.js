import './App.css';
// import notesData from 'file:///C:/Nithi-Profile/java_dsa/Notes.json';

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
import { useState } from 'react';
import IndexPage from './Pages/IndexPage';
import ProjectsPage from './Pages/ProjectsPage';
import TopNav from './Componentes/TopNav';
import AboutMePage from './Pages/AboutMePage';
function App() {
  AOS.init();
  const [theme, setTheme] = useState('dark1');
  return (
    <div className="App" style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>


      {/* <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Java_DSA/JavaDsaSolution/:key" element={<JavaDsaSolution/>} />
          <Route path="/java_dsa" element={<JavaDSA />} data-aos="fade-left" />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/notes" element={<Tempcards />} />
        </Routes>
      </BrowserRouter>
      <PushNotification /> */}

    </div>
  );
}

export default App;
