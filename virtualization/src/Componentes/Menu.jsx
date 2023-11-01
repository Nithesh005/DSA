import React, { useState } from "react";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs';
import profile from '../Assets/nithi.png';
import { NavLink } from "react-router-dom";
import resume from '../Resources/resume.pdf'
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
    };

    const menuItems = [
        { text: "Java DSA", href: "/Java_DSA" }, // Corrected the href values
        {
            text: "Leetcode Problems", subItems: [
                { text: "OtherPlatForm Problems", href: "/leetcode" },
                { text: "OtherPlatForm Problems2", href: "/leetcode2" }
            ]
        },
        { text: "Notes", href: "/notes" },
        { text: "About Me", href: "/aboutme" }
    ];
    const downloadResume = () => {
        const tempLink = document.createElement('a')
        tempLink.href = resume;
        tempLink.setAttribute('download', 'Nitheshwaran T Resume.pdf');
        tempLink.click();
        // document.body.removeChild(tempLink);
    }
    // States 
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="parrent_menu d-flex justify-between items-center shadow-sm">
            <div id="mySidebar" className="sidebar" style={navStyle}>
                <div className="closebtn d-flex" onClick={toggleNav}><ImCancelCircle /></div>
                <div className="menuItems p-3 flex flex-col">
                    <div className="p-1 d-flex justify-around items-center searchInput">
                        <BsSearch className="SearchIcon" />
                        <input type="search" name="Search.." id="" placeholder="Search" className="bg-transparent searchBox" />
                    </div>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.subItems ? (
                                // Render a link to the main item
                                <div className="subItems">
                                    <NavLink>{index + 1}. {item.text} ^</NavLink>
                                    {item.subItems.map((subItem, subIndex) => (
                                            <NavLink key={subIndex} to={subItem.href} onClick={toggleNav} className="subitem">
                                                {index+1}{subIndex + 1}. {subItem.text}
                                            </NavLink>
                                        ))}
                                </div>
                            ) : (
                                // Render a link to the main item and subitems
                                <div>
                                    <NavLink key={index} to={item.href} onClick={toggleNav}>{index + 1}. {item.text}</NavLink>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
            <div id="main">
                <button className="openbtn" onClick={toggleNav}><AiOutlineMenuUnfold style={menuIcon} /></button>
            </div>
            <div className="profile_image flex gap-4">
                <div className="resume_btn ac" onClick={downloadResume}>
                    Download Resume
                </div>
                <div className="home_btn" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    Home {isHovered ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
                </div>

                {isHovered && <div className="dropdownHome shadow-md" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} data-aos="fade-up" data-aos-duration="0">
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='Java_DSA/JavaDsaSolution/3'>JavaDsaSolution</NavLink>
                        </li>
                        <li>Link2</li>
                    </ul>
                </div>}

                <img src={profile} alt="Profile pic" className="Profile_img" />
            </div>
        </div>
    );
}

export default Menu;
