import './App.css';
// import { useEffect } from "react";
// import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';
import notesData from 'file:///home/nithi/DSA/java_dsa/Notes.json';
// /home/nithi/DSA/java_dsa/Notes.json

import Menu from "./Componentes/Menu";
function App() {
  return (
    <div className="App">
      <Menu/>
      {notesData.map((item, key) => (
        <div key={key} className='d-flex m-4'>
          <div className='card p-4'>
            <h1>{item.name}</h1>
            <p>Question: {item.Question}</p>
            <p>Answer: {item.Ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
