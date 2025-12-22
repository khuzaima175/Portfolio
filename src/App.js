import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';
import './styles.css';

function App() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <CursorGlow />
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <BackToTop />
        </div>
    );
}

export default App;
