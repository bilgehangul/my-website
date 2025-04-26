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
                        Hi, I'm Bilgehan Gul, a passionate learner with experience in
                        engineering, debate, non-profit leadership. I love creating innovative solutions and
                        bringing ideas to life.
                    </p>
                    <div className="skills-list">
                        <div className="skill-item">Web Development</div>
                        <div className="skill-item">Problem Solving</div>
                        <div className="skill-item">Team Leadership</div>
                        <div className="skill-item">Innovation</div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;