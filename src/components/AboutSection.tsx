import React from 'react';
import { Code, Clock, Briefcase, Book } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-dark gray">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-8 md:mb-0 px-4">
            <div className="relative">
              <img 
                src="/resumepic4.jpg" 
                alt="Pooja Nagal" 
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-primary">CSE Student</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 px-4">
            <h3 className="text-2xl font-bold mb-4 dark:text-dark gray">
              Myself Pooja Nagal, a Full-Stack Web Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am from Haryana. I am a passionate Computer Science student at Lovely Professional University, 
              specializing in full-stack web development. With a keen eye for design and a 
              strong foundation in programming, I strive to create web applications that are not 
              only functional but also provide an exceptional user experience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in web development began with a curiosity about how websites work, 
              which quickly evolved into a passion for creating them. I enjoy the process of 
              bringing ideas to life through code and constantly challenge myself to learn new 
              technologies and improve my skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Code size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Web Development</h4>
                  <p className="text-gray-600 text-sm">Full-stack expertise</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Quick Learner</h4>
                  <p className="text-gray-600 text-sm">Adapts to new tech</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Project Focus</h4>
                  <p className="text-gray-600 text-sm">Results-oriented</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Book size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">CSE Student</h4>
                  <p className="text-gray-600 text-sm">Strong fundamentals</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
