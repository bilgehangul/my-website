import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Bilgehan Gul. All rights reserved.</p>
        </footer>
    );
};

export default Footer;