import React from 'react';
import { Trophy, Star, Target, Award } from 'lucide-react';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'target' | 'award';
  date: string;
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Content Creation Excellence',
    description: 'Created and delivered impactful content while managing full-time studies, showcasing strong time management and multitasking skills.',
    icon: 'certificate',
    date: 'Ongoing',
  },
  {
    id: 2,
    title: 'Hackathon Winner',
    description: 'First place in the University Tech Hackathon 2023 for developing an innovative website for spam emails detection.',
    icon: 'trophy',
    date: 'August 2023',
  },
  {
    id: 3,
    title: 'HackerRank 5-Star in Problem Solving',
    description: 'Achieved a 5-star rating, showcasing advanced problem-solving skills in coding challenges.',
    icon: 'star',
    date: 'June 2024',
  },
  {
    id: 4,
    title: 'Academic Excellence and Leadership',
    description: 'Awarded for outstanding acadmeic performance,consistent discipline, and leadership in extracurricular activities.',
    icon: 'award',
    date: 'Feb 2022',
  },
];

const IconComponent: React.FC<{ icon: Achievement['icon'] }> = ({ icon }) => {
  switch (icon) {
    case 'trophy':
      return <Trophy size={24} />;
    case 'star':
      return <Star size={24} />;
    case 'target':
      return <Target size={24} />;
    case 'award':
      return <Award size={24} />;
    default:
      return <Award size={24} />;
  }
};



const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm dark:bg-dark gray-800/50 rounded-lg shadow-md hover:shadow-lg transition-all p-6">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-primary">
            <IconComponent icon={achievement.icon} />
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white-800 dark:text-white mb-1">{achievement.title}</h3>
            <span className="text-sm text-primary">{achievement.date}</span>
          </div>
          <p className="text-gray-600 dark:text-white-400">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
{/* <section id="achievements" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">  */}
    
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-dark gray">Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-dark gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key milestones and recognition received throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
