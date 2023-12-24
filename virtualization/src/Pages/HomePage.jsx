import React, { useState } from "react";
import axios from "axios";
import '../Assets/css/HomePage.css'

function HomePage() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        console.log("get fetch");
        // Make a GET request using Axios with the inputValue in the URL
        axios.get(`http://localhost:8080/path`)
            .then(response => {
                // Handle the response data here
                console.log(response.data);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            Home page
            {/* <input
                type="text" // Use type="text" for text input
                value={inputValue}
                style={{ backgroundColor: "grey" }}
                onChange={handleInputChange}
            />
            <br />
            <button
                type="button" // Use type="button" for non-submit buttons
                className="submit"
                onClick={handleSubmit}
            >
                Submit
            </button> */}
            <div className="homeParrent">
                <div className="homeLeft">1</div>
                <div className="homeRight">2</div>
            </div>
        </>
    );
}

export default HomePage;
