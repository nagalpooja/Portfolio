import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 -z-20"></div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Hi, I'm <span className="text-primary">Pooja Nagal</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-black-700 dark:text-black-300 font-light mb-6">
            A passionate{' '}
            <span className="font-medium text-secondary inline-block">
              <Typewriter
                options={{
                  strings: ['full-stack web developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: '|'
                }}
              />
            </span>
            {' '}who loves building full-stack projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            I'm a Computer Science student at Lovely Professional University, specializing in creating
            beautiful, functional websites and applications. Let's build something amazing together!
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a
              href="https://github.com/nagalpooja"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/poojanagal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B5] text-white p-3 rounded-full hover:opacity-90 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/its_pooja0911/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#db1ac5] text-white p-3 rounded-full hover:opacity-90 transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-dark gray-50 transition-all"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-dark gray-50 transition-all"

            >
              View My Work
            </button>
          </div>
        </div>
       
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 absolute -top-4 -left-4 animate-pulse"></div>
            <img
              src="/resume.jpg"
              alt="Profile"
             
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
            />
            <h2 className="text-xxl md:text-2xl lg:text-3xl text-black-700 dark:text-black-300 font-light mb-8">
              <span className="font-medium inline-block text-center text-gray-400" style={{ display: 'block', textAlign: 'center' }}>
                <Typewriter
                  options={{
                    strings: ['Open to work..'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 50,
                    cursor: '|',
                  }}
                />
              </span>
            </h2>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
