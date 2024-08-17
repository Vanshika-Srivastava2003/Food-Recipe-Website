import React from 'react';
import './AboutUs.css'; // We'll create this file for styling

function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-header">
                <h1>About Us</h1>
            </div>
            <div className="about-us-content">
                <div className="about-us-section">
                    <h2>Our Story</h2>
                    <p>
                        Welcome to FoodRecipe, your number one source for all things delicious. We're dedicated to providing you the very best recipes, with an emphasis on simplicity, taste, and variety.
                    </p>
                    <p>
                        Founded in 2024 by a team of passionate food enthusiasts, FoodRecipe has come a long way from its beginnings. When we first started out, our passion for cooking drove us to start sharing our favorite recipes with the world.
                    </p>
                    <p>
                        We hope you enjoy our recipes as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                </div>

                <div className="about-us-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make cooking an enjoyable and rewarding experience. We believe that everyone should have access to easy, delicious, and nutritious meals. That's why we focus on creating recipes that anyone can make at home, regardless of their cooking skills.
                    </p>
                    <p>
                        Whether you're a beginner or a seasoned chef, our recipes are designed to inspire and empower you to create amazing dishes in your own kitchen.
                    </p>
                </div>

                <div className="about-us-section">
                    <h2>Meet the Team</h2>
                    <p>
                        Our team is made up of experienced cooks, food writers, and photography enthusiasts. We come from diverse culinary backgrounds, but we all share a love for great food and a commitment to making cooking accessible to everyone.
                    </p>
                    <p>
                        We work together to test recipes, write informative content, and capture beautiful food photography to bring you the best experience possible.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
