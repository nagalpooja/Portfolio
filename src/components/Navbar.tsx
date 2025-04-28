import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const ThemeToggle = () => (
    <div className="flex items-center space-x-2 ml-4">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme('moderate')}
        className={`p-2 rounded-full ${theme === 'moderate' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <Palette size={16} />
      </button>
    </div>
  );

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a className="text-2xl font-bold text-primary" href="#home">
         Techfolio<span className="text-accent"></span>
        </a>

        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-1">
            {navItems.map(item => (
              <span
                key={item.id}
                className="cursor-pointer px-4 py-2 rounded transition-all duration-300 hover:text-primary"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="pooja job.pdf"
            className="ml-4 bg-primary text-white px-4 py-2 rounded-md flex items-center hover:bg-primary/90 transition-all"
            download
          >
            <Download size={16} className="mr-2" /> Resume
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col py-2">
            {navItems.map(item => (
              <span
                key={item.id}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </span>
            ))}
            <a
              href="pooja job.pdf"
              className="mx-4 my-2 bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center"
              download
            >
              <Download size={16} className="mr-2" /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;