import React from 'react';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

const skills: Skill[] = [
  { name: 'HTML5', level: 100, category: 'frontend' },
  { name: 'CSS3', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Bootstrap', level: 90, category: 'frontend' },
  
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'SQL', level: 65, category: 'backend' },
  { name: 'Firebase', level: 60, category: 'backend' },
  
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'Github', level: 85, category: 'tools' },
  { name: 'VS Code', level: 85, category: 'tools' },
  { name: 'Figma', level: 60, category: 'tools' },
  { name: 'MySQL', level: 95, category: 'tools' },
];

const SkillProgress: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${level}%`, transform: 'translateX(-100%)', animation: 'slideIn 1.5s forwards' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I have experience with a variety of technologies in web development. Here's an overview of my technical skills:
          </p>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-center text-primary">Frontend Development</h3>
              {frontendSkills.map((skill, index) => (
                <SkillProgress key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-center text-primary">Backend Development</h3>
              {backendSkills.map((skill, index) => (
                <SkillProgress key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-center text-primary">Tools & Others</h3>
              {toolsSkills.map((skill, index) => (
                <SkillProgress key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;