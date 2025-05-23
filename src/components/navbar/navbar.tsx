import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="Bilgehan Gul" className="navbar-logo" />
                    <h1>Bilgehan Gul</h1>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;