import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Dev Book',
    description: 'A social media platform for developers to connect, share ideas, and collaborate on projects. Features include user authentication, real-time messaging, and project showcasing.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://drive.google.com/file/d/18_zcw9hHRgoh2EYIh5kbJJlDNjLZoqVN/view?usp=sharing',
    githubLink: 'https://github.com/nagalpooja/dev-book-master',
  },
  {
    id: 2,
    title: 'FoodMania',
    description: 'An online food ordering application with features like restaurant listings, menu management, cart functionality, and order tracking. Includes payment integration.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Php', 'PhpMyAdmin', 'Bootstrap', 'JQuery'],
    liveLink: 'https://drive.google.com/file/d/1ha0t01X1q1D4sGQZXG55u6xY9QkndkQc/view?usp=sharing',
    githubLink: 'https://github.com/pooja-nagal/foodmania',
  },
  {
    id: 3,
    title: 'Blaze Treasures',
    description: 'An e-commerce platform for handcrafted items with user authentication, product listings, shopping cart, wishlist, and secure checkout. Includes admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'ecommerce-website-eta-ashen.vercel.app',
    githubLink: 'https://github.com/nagalpooja/Ecommerce-Website',
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{project.title}</h3>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-4 h-24 overflow-hidden">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-primary transition-colors"
          >
            <Github size={18} className="mr-1" />
            <span>Code</span>
          </a>
          
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-dark gray">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills and passion for creating useful and user-friendly web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/nagalpooja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;