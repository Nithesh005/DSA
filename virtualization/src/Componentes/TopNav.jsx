import React, { useState } from 'react';
import { Button, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:767px)');    

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    

    return (
        <>
            <div className="bg-gray-800 p-4 sm:flex md:mt-2 sm:justify-between sm:items-center md:items-center md:mx-8 md:rounded-xl absolute nav_parrent">
                {/* Logo */}
                <div className="text-white"><Link to="/">Logo</Link></div>

                {/* Menu for medium and larger screens */}
                <div className="hidden md:flex">
                    <ul className="flex">
                        <li className="mx-2 text-white"><Link to="/Events">EVENTS</Link></li>
                        <li className="mx-2 text-white"><Link to="/Projects">PROJECTS</Link></li>
                        <li className="mx-2 text-white"><Link to="/Honurs">HONURS</Link></li>
                        {/* <li className="mx-2 text-white"><Link to="/contact">Contact Us</Link></li> */}
                    </ul>
                </div>

                {/* Hire Me and Theme buttons */}
                <div className="md:mt-0 sm:bg-red-500 md:bg-orange-500 lg:bg-green-500">
                    <ul className="flex">
                        {/* Conditionally render menu icon for small screens */}
                        <li className="">
                            <Button variant="outlined" className="text-white">
                                Hire Me
                            </Button>
                        </li>
                        <li className="">
                            <Button variant="outlined" className="text-white">
                                Theme
                            </Button>
                        </li>
                        {isSmallScreen && (
                            <li className="">
                                <IconButton color="inherit" onClick={handleSidebarToggle}>
                                    <MenuIcon />
                                </IconButton>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <Drawer anchor="left" open={isSidebarOpen} onClose={handleSidebarToggle}>
                <div className="p-4">
                    {/* Sidebar content goes here */}
                    <p>Sidebar Content</p>
                </div>
            </Drawer>
        </>
    );
}

export default TopNav;
