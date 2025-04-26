import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './page.css';
import './contact.css';

const Contact: React.FC = () => {
    return (
        <div className="page">
            <Navbar />
            <main className="main-content">
                <header className="hero">
                    <h1>Get in Touch</h1>
                    <p>Let's connect and discuss opportunities</p>
                </header>

                <section className="section">
                    <div className="contact-content">
                        <div className="contact-info">
                            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                            <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                            <div className="contact-links">
                                <a href="https://github.com">GitHub</a>
                                <a href="https://linkedin.com">LinkedIn</a>
                                <a href="https://twitter.com">Twitter</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;