import React, { useState } from 'react';
import './Navbar.css'; // We'll create this file for styling
import {Link} from 'react-router-dom'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>GourmetGuide</h2>
            </div>
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <nav>
                 <Link to="/"><li>Home</li></Link>
                 <Link to="/About"><li>About</li></Link>
                 <Link to="/Contact"><li>Contact</li></Link>
                </nav>
                
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
