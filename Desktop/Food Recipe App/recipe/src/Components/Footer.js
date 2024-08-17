import React from 'react';
import './Footer.css'; // We'll create this file for styling
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>We share delicious recipes from around the world to help you bring exciting flavors into your kitchen. Join us in exploring new cuisines and culinary techniques!</p>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                    <nav>
                      <Link to="/"><li>Home</li></Link>
                      <Link to="/About"><li>About</li></Link>
                      <Link to="/Contact"><li>Contact</li></Link>
                    </nav>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: vanshikasri.2003@gmail.com</p>
                    <p>Phone: +123-456-7890</p>
                    <p>Address: 123 Food Street, Lucknow</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 FoodRecipe | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
