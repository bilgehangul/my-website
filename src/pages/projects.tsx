import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './page.css';
import './projects.css';

const Projects: React.FC = () => {
    return (
        <div className="page">
            <Navbar />
            <main className="main-content">
                <section className="section">
                    <h2>Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project 1</h3>
                                <p>A brief description of your project.</p>
                                <div className="project-links">
                                    <a href="#demo">Live Demo</a>
                                    <a href="#code">View Code</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project 2</h3>
                                <p>A brief description of your project.</p>
                                <div className="project-links">
                                    <a href="#demo">Live Demo</a>
                                    <a href="#code">View Code</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project 3</h3>
                                <p>A brief description of your project.</p>
                                <div className="project-links">
                                    <a href="#demo">Live Demo</a>
                                    <a href="#code">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;