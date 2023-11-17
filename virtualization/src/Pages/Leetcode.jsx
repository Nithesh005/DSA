import React, { useEffect , useState} from "react";
import axios from 'axios';
// import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_leetcode/Notes.json';
// import notesData from 'file:///C:/Nithi-Profile/java_leetcode/Notes.json';

function Leetcode() {
    const [notes, setNotes] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/path").then(res=>{console.log(res);})
    },[])

    return (
        <>
            {notes.map((item, key) => (
                <div key={key} className='d-flex m-4 card' data-aos="zoom-in-left">
                    <div className='p-4'>
                        <h1 className="sortName">{item.problem_name}</h1>
                        <p>Answer: {item.Ans}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Leetcode;