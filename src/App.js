import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/globals.css';
import './styles/spaceAnimation.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navigation />
        <main>
          <Hero />
          <AboutStory />
          <WorkExperience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
