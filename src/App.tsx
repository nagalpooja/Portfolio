import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import AchievementsSection from './components/AchievementsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

function App() {
  useEffect(() => {
    document.title = "Pooja Nagal | Full-Stack Web Developer";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;