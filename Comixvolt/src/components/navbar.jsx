import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Comixvolt</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/comics" className="nav-link"> Add Comics</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;