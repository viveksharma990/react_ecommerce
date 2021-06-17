import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav className="header">
            <div className="logo">Jeans Store</div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}

export default Header;