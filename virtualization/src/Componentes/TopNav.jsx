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

    const handleHireClick = () => {
        const emailAddress = 'nitheshwaran003@gmail.com';
        const subject = 'Job Opportunity';
        const body = 'Hello,\n\nI am interested in discussing a job opportunity with you.\n\n\nSincerely, [Your Name]';
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl);
    };



    return (
        <>
            <div className="bg-gray-800 p-4 sm:flex md:mt-2 sm:justify-between sm:items-center md:items-center md:mx-8 md:rounded-xl absolute nav_parrent" style={{ zIndex: 1 }}>
                {isSmallScreen && (
                        <IconButton className="text-white" color="inherit" onClick={handleSidebarToggle}>
                            <MenuIcon />
                        </IconButton>
                )}
                {/* Logo */}
                <div className="text-white"><Link to="/">NITHESHWARAN</Link></div>

                {/* Menu for medium and larger screens */}
                <div className="hidden md:flex">
                    <ul className="flex">
                        <Button className="mx-2 text-white"><Link to="/Events">EVENTS</Link></Button>
                        <Button className="mx-2 text-white"><Link to="/Projects">PROJECTS</Link></Button>
                        <Button className="mx-2 text-white"><Link to="/Honurs">HONURS</Link></Button>
                        {/* <li className="mx-2 text-white"><Link to="/contact">Contact Us</Link></li> */}
                    </ul>
                </div>

                {/* Hire Me and Theme buttons */}
                <div className="md:mt-0">
                    {/* sm:bg-red-500 md:bg-orange-500 lg:bg-green-500 */}
                    <ul className="flex">
                        {/* Conditionally render menu icon for small screens */}
                        <li className="">
                            <Button variant="outlined" className="text-white" onClick={handleHireClick}>
                                Hire Me
                            </Button>
                        </li>
                        {/* <li className="">
                            <Button variant="outlined" className="text-white">
                                Theme
                            </Button>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <Drawer anchor="left" open={isSidebarOpen} onClose={handleSidebarToggle}>
                <div
                    className="p-4 bg-gray-200 h-full w-64"
                >
                    <p className="text-lg font-bold mb-4">Sidebar Content</p>
                    <ul className="space-y-2">
                        <li className="text-black" onClick={handleSidebarToggle}><Link to="/" className="block py-1 px-2 rounded hover:bg-gray-300">HOME</Link></li>
                        <li className="text-black" onClick={handleSidebarToggle}><Link to="/Events" className="block py-1 px-2 rounded hover:bg-gray-300">EVENTS</Link></li>
                        <li className="text-black" onClick={handleSidebarToggle}><Link to="/Projects" className="block py-1 px-2 rounded hover:bg-gray-300">PROJECTS</Link></li>
                        <li className="text-black" onClick={handleSidebarToggle}><Link to="/Honurs" className="block py-1 px-2 rounded hover:bg-gray-300">HONURS</Link></li>
                    </ul>
                </div>
            </Drawer>

        </>
    );
}

export default TopNav;