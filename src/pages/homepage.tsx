import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './homepage.css';

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <Navbar />
            
            <main className="main-content">
                <header className="hero">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Discover my projects, skills, and contact information.</p>
                </header>

                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm Bilgehan Gul, a passionate learner with experience in
                        engineering, debate, non-profit leadership. I love creating innovative solutions and
                        bringing ideas to life.
                    </p>
                </section>

                <section id="projects" className="section">
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <strong>Project 1:</strong> A brief description of your project.
                        </li>
                        <li>
                            <strong>Project 2:</strong> A brief description of your project.
                        </li>
                        <li>
                            <strong>Project 3:</strong> A brief description of your project.
                        </li>
                    </ul>
                </section>

                <section id="contact" className="section">
                    <h2>Contact</h2>
                    <p>
                        Feel free to reach out to me at{' '}
                        <a href="mailto:your.email@example.com">your.email@example.com</a>.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;