import React from 'react';
import '../../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/path-to-your-logo.png" alt="Company Logo" />
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: contact@company.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Business St, Business City, Country</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Business Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
