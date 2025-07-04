import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  grade?: string;
};

const educations: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: '2022 - 2026',
    description: 'Specializing in full-stack web development with a focus on modern JavaScript frameworks and cloud technologies. Actively participated in various hackathons and technical events.',
    grade: 'CGPA: 7.70'
  },
  {
    id: 2,
    degree: 'Higher Secondary Education',
    institution: 'Modern Vidya Niketan Sr. Sec. School',
    location: 'Hodal, Haryana',
    period: '2021 - 2022',
    description: 'Built a solid foundation in Science and Math with dedicated focus and perseverance.',
    grade: 'Percentage: 77%'
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Modern Vidya Niketan Sr. Sec. School',
    location: 'Hodal, Haryana',
    period: '2019 - 2020',
    description: 'Demonstrated strong academic performance with consistent excellence in core subjects.',
    grade: 'Percentage: 82.4%'
  }
];

const TimelineItem: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary/30 dark:border-primary/20 last:pb-0">
      <div className="absolute -left-3 mt-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
        <span className="text-white text-sm font-bold">{education.id}</span>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{education.degree}</h3>
            <h4 className="text-primary font-medium mb-3">{education.institution}</h4>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Calendar size={14} className="mr-1.5 text-primary" />
                <span>{education.period}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={14} className="mr-1.5 text-primary" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>
          
          {education.grade && (
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg text-sm font-medium">
              {education.grade}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
          {education.description}
        </p>
      </div>
    </div>
  );
};

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational Journey
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My academic path in computer science and technology, where each step has contributed to my growth as a developer.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educations.map(education => (
            <TimelineItem key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
