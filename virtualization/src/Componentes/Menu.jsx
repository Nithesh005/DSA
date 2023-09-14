import React from "react";
import { useState } from "react";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import profile from '../Assets/nithi.png';
import { Link } from "react-router-dom";

function Menu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }
    const navStyle = {
        width: isNavOpen ? "260px" : "0",
        transition: isNavOpen ? "0.2s" : "0.1s",

    };
    const menuIcon = {
        fontSize: "2rem",
        display: isNavOpen ? "none" : "block",

    }
    const menuItems = [
        { text: "Java DSA", href: "Java_DSA" },
        { text: "Leetcode Problems", href: "leetcode" },
        { text: "Notes", href: "notes" },
        { text: "About Me", href: "aboutme" }
    ]
    return (
        <div className="parrent_menu d-flex justify-between items-center shadow-sm">
            <div id="mySidebar" class="sidebar" style={navStyle}>
                <a href="#" className="closebtn d-flex" onClick={toggleNav}><ImCancelCircle /></a>


                <div className="menuItems p-3 flex flex-col">
                    <div className="p-1 d-flex justify-around items-center searchInput">
                        <BsSearch className="SearchIcon" />
                        <input type="search" name="Search.." id="" placeholder="Search" className="bg-transparent searchBox" />
                    </div>
                    {menuItems.map((item, index) => {
                        return (
                            <a key={index} href={item.href}>{item.text}</a>
                        );
                    })}
                </div>
            </div>
            <div id="main">
                <button class="openbtn" onClick={toggleNav}><AiOutlineMenuUnfold style={menuIcon} /></button>
            </div>
            <div className="profile_image">
                <img src={profile} alt="Profile pic" className="Profile_img" />
            </div>
        </div>
    );
}

export default Menu;
