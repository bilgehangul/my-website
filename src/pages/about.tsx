import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './page.css';
import './about.css';

const About: React.FC = () => {
    return (
        <div className="page">
            <Navbar />
            <main className="main-content">
                <header className="hero">
                    <h1>About Me</h1>
                    <p>Learn about my background and skills</p>
                </header>

                <section className="section about-content">
                    <p>
                       I am Bilgehan Gul, a tech entrepreneur with a deep passion for building meaningful companies, fostering human-centered innovation, and driving social change. With a background spanning technology, leadership, I work at the intersection of business, society, and emerging technologies—seeking not just to create companies, but to shape futures.

My journey is rooted in a mission: to create organizations that are economically sustainable, ethically grounded, and socially impactful. Drawing from both my academic foundation in Computer Engineering and my real-world experience in data science and non-profit leadership, I bring a strategic mindset combined with an action-driven approach to every project I lead.

I believe that true leadership goes beyond profit; it demands responsibility towards people, society, and the environment. As a practicing Muslim, my professional path is guided by principles of integrity, compassion, and lifelong learning. These values inspire me to continuously pursue excellence, serve the community, and seek innovative solutions to real-world challenges.

Focus Areas
Entrepreneurship: Building and scaling startups that solve real problems.

Technology & Innovation: Leveraging AI, agents, quantum computing and emerging tech to create new opportunities.

Business Strategy: Driving growth with sustainable, ethical, and globally minded strategies.

Social Impact: Leading initiatives that empower communities and promote equitable growth.

Leadership Development: Fostering teams built on trust, empowerment, and purpose-driven culture.

Vision
To lead companies that not only thrive in the marketplace but also leave a lasting positive impact on society—companies that are remembered not just for what they built, but for how they made the world better.

Personal Principles
Integrity Over Shortcuts: Building success the right way.

Continuous Growth: Mastering new skills, technologies, and perspectives every day.

Service to Society: Using business as a force for good, inspired by Islamic values of justice and compassion.
                    </p>
                    <div className="skills-list">
                       <div className="skill-item">Python</div>
                        <div className="skill-item">C / C++</div>
                        <div className="skill-item">TypeScript & JavaScript</div>
                        <div className="skill-item">Web Development (React / Next.js)</div>
                        <div className="skill-item">FPGA Design (Vivado & Vitis)</div>
                        <div className="skill-item">Signal Processing</div>
                        <div className="skill-item">RISC-V & Embedded Systems</div>
                        <div className="skill-item">AI / ML (Pytorch, TensorFlow)</div>
                        <div className="skill-item">Retrieval-Augmented Generation (LangChain, OpenAI)</div>
                        <div className="skill-item">Data Science & Analytics</div>
                        <div className="skill-item">Cloud Infrastructure (AWS & GCP)</div>
                        <div className="skill-item">Docker & Containerization</div>
                        <div className="skill-item">Git & Version Control</div>
                        <div className="skill-item">Problem Solving</div>
                        <div className="skill-item">Team Leadership & Mentoring</div>
                        <div className="skill-item">Technical Writing & Documentation</div>
                        <div className="skill-item">Community Building</div>
                        <div className="skill-item">Interfaith Dialogue Facilitation</div>
                        <div className="skill-item">Innovation & Rapid Prototyping</div>
                        <div className="skill-item">Agile Methodologies</div>
                        <div className="skill-item">Project Management</div>                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;