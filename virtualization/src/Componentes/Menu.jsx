import React from "react";
import { useState } from "react";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
function Menu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }
    const navStyle = {
        width: isNavOpen ? "250px" : "0",
        transition: isNavOpen?"0.2s":"0.1s",

    };
    const menuIcon = {
        fontSize: "2rem",
        display: isNavOpen ? "none" : "block",
    }
    return (
        <div className="parrent_menu">
            <div id="mySidebar" class="sidebar" style={navStyle}>
                <a class="closebtn d-flex" onClick={toggleNav}><ImCancelCircle /></a>
                <a href="#">Java DSA</a>
                <a href="#">Leetcode Problems</a>
                <a href="#">Notes</a>
            </div>
            <div id="main">
                <button class="openbtn" onClick={toggleNav}><AiOutlineMenuUnfold style={menuIcon} /></button>
            </div>
        </div>
    );
}

export default Menu;
