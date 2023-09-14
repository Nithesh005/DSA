import React from "react";
import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_leetcode/Notes.json';

function Leetcode() {

    return (
        <>
            {notesData.map((item, key) => (
                <div key={key} className='d-flex m-4 card'>
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