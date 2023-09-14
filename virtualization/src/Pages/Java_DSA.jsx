import React from "react";
import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';

function Java_DSA() {
    return (
        <>
       
            {notesData.map((item, key) => (
                <div key={key} className='d-flex m-4 card'>
                    <div className='p-4'>
                        <h1 className="sortName">{item.name}</h1>
                        <p>Question: {item.Question}</p>
                        <p>Answer: {item.Ans}</p>
                        {/* <div dangerouslySetInnerHTML={{ __html: item.desc }}/> */}
                    </div>
                </div>
            ))}
        </>
    )
}
export default Java_DSA;