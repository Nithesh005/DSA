import React, { useState } from "react";
import { useParams } from "react-router-dom";
import notesData from 'file:///C:/Nithi-Profile/java_dsa/Notes.json';
// import notesData from 'file:///C:/Users/nithe/OneDrive/Pictures/Documents/Documents/java/DSA/java_dsa/Notes.json';
import { RxEnterFullScreen } from 'react-icons/rx';
function JavaDsaSolution() {
    const { key } = useParams();
    const toggleFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        // if (document.documentElement.mozRequestFullScreen) {
        //     document.documentElement.mozRequestFullScreen();
        // } 
        // else if (document.documentElement.webkitRequestFullscreen) {
        //     document.documentElement.webkitRequestFullscreen();
        // } else if (document.documentElement.msRequestFullscreen) {
        //     document.documentElement.msRequestFullscreen();
        // }
    };
    const keyValue = notesData[key];
    console.log(keyValue);
    const [isOutputCardVisible, setIsOutputCardVisible] = useState(true);

    const toggleOutput = () => {
        setIsOutputCardVisible(!isOutputCardVisible);
    };
    return (
        <>
            {/* <div className={`shadow-md cardData d-flex m-4 card`} data-aos="zoom-in-left">
                <div className='p-4'>
                    <h1 className="sortName flex justify-between">
                        {keyValue.name}
                        <RxEnterFullScreen onClick={toggleFullScreen} />
                    </h1>
                    <p>Question: {keyValue.Question}</p>
                    <p>Answer: {keyValue.Ans}</p>
                </div>
            </div> */}
            <div className="fullCard flex">
                <div className="descCard ac">
                    <div className="contentHead">{key}: {keyValue.name}</div>
                    <div className="contentHead">{keyValue.Question}</div>
                    <div className="contentHead">{keyValue.Ans}</div>
                </div>
                <div className="fullSolutionCard">

                    <div className={`programCard flex justify-between`}>1
                        <RxEnterFullScreen onClick={toggleFullScreen} />
                    </div>
                    <div
                        className={`outputCard`}
                        style={{
                            maxHeight: isOutputCardVisible ? '100%' : '0',
                            // display: isOutputCardVisible ? 'block' : 'none',
                            transition: 'max-height 0.5s ease',
                        }}
                    >
                        {keyValue.Ans}
                    </div>
                    <div onClick={toggleOutput} className="ToggleBtn ac">toggle</div>
                </div>
            </div>
        </>
    )
}
export default JavaDsaSolution;