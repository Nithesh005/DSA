import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
// import dotenv from 'dotenv';
import notesData from 'file:///C:/Nithi-Profile/java_dsa/Notes.json';
// import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';
// const apiUrl = process.env.REACT_APP_API_URL;
function Java_DSA() {
    // dotenv.config();
    // alert(apiUrl);
    return (
        <>
            <div className="allData">
                {notesData.map((item, key) => (
                    <div key={key} className={`shadow-md cardData d-flex m-4 card ${key % 2 === 0 ? 'evenCard' : 'oodCard'}`} data-aos="zoom-in-left">
                        <div className='p-4'>
                            <h1 className="sortName">{item.name}</h1>
                            <NavLink to={`JavaDsaSolution/${key}`}>JavaDsaSolution {key}</NavLink>
                            <p>Question: {item.Question}</p>
                            <p>Answer: {item.Ans}</p>
                            {/* <div dangerouslySetInnerHTML={{ __html: item.desc }}/> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Java_DSA;