import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure global styles are imported
import Certifications from './components/Certifications';
const App = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <About />
            <Contact />
            <Footer /> 
        </div>
    );
};

export default App;
