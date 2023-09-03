import './App.css';
// import { useEffect } from "react";
import notesData from './Notes.json';

function App() {
  return (
    <div className="App">
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
