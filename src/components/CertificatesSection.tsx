import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  description: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'HTML, CSS, and JavaScript for Web Developers',
    issuer: 'Coursera',
    date: 'July 2024',
    credentialLink: 'https://media-hosting.imagekit.io/904f4f5b894e4983/Screenshot%202025-04-23%20at%2012.18.12%E2%80%AFAM.png?Expires=1839955698&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dBeUMg0Myl~cZQ7uwgnWzmY~bJEvpjyGh2nMYE92jw2RPmNB355yjeSw-QNV5HtObPGG9oTrT0cQ4JOuOA2RMquRi~OX6bPFdhoImMSKHzJ~m0FDHuRNuEeq0Z7oS~Q01dctYlQpMO0sCNFmKvsv9PkLKOruQ5VhZ0dOP8nf13Nff49OkBDpJdVryaZtkxtR85rHENcJRILzy7QspVB9PKH3cNeXNT9zMp~dKgHreMqGPWNMA-9~keiA8gcxw6JDshVXHszTBALkzKLZQq-D-9dabofat~FNG~nEBHkEQCeSlrD28kQWgFpgNdbhXNfy2K91HWZ0cLioRmyD8~KLVQ__',
    description: 'Comprehensive course covering modern web development technologies including HTML, CSS, and JavaScript.',
  },
  {
    id: 2,
    title: 'The Complete MySQL Developer Course',
    issuer: 'E-BOX',
    date: 'July 2024',
    credentialLink: 'https://media-hosting.imagekit.io/a8c16e7a7fed4af3/Screenshot%202025-04-23%20at%2012.28.29%E2%80%AFAM.png?Expires=1839956318&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TnhQMla9nd0OrlkOzt2XdU5L0Owe-4N7P1AgMUG6TtgWMbG3QqrQhMFOGHtfY0wrw8JznNahz-R2hVut~sPpTbM4ENS3nyhjXtQbCAA~TDx-LmZ56seeGMzlopsFz2YMXFjBx0nC~A1Std84tDc7PSs4lq9EI1ZflkjA3I8CYpCL8L-Jqx3AeKyDMcxa-BU8AxqT2dXJdcVCy~7cbHCBcNWtUvWnlPTYaQlp4jhkl5eIPSFeQj7FPxaeetGRDSiKgFYVb~9IiUbb7Jm9CdtXApiRCfQMzujPLv9XFlXCQtrJVZDBOE2VOtvf4C~Y-LZYJdf4jkZy1uAZ7geVX67iyw__',
    description: 'Gaining expertise in relational databases and database optimization techniques. Acquired skills in SQL query writing etc.',
  },
  {
    id: 3,
    title: 'Server-side JavaScript with Node.js',
    issuer: 'Coursera',
    date: 'July 2024',
    credentialLink: 'https://media-hosting.imagekit.io/d4a8405bbd734c2d/Screenshot%202025-04-23%20at%2012.30.09%E2%80%AFAM.png?Expires=1839956424&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tTutuzjlhJem2na-6r7z3Xqo5WpSck~rn~jwSyKcQ3HPhxV13osxpVNi9tFy2JCTYVOQY~fysCEi9~qsIB0muGdV1GooptKd-UMGXFzUByVNOAyj7MCGD-~uswmVOY9N~UuMWJcskj3y3qgXKfcBUucKnSQOxi88njs3qgS45pcO6D4ZZyzkZFXVGvIgCc05ZL1y137a6ioLx0IqwmuSqVRuKxJaqZhJ206eHiqhg9TLtNFijkJiKBZd8hwJL7wmagA17uRVUMTVSqG-rKxDgW~hkSfYSZopGesSD6BuzcWCNfp7vKJsybIi726Z4GD1hwxeJhqyDvp9m88JDCr~Aw__',
    description: 'Mastering backend development with Node.js, Express.js, & database integration. Gained experience in building applications.',
  },
];

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-dark gray-800 dark:text-white mb-2">{certificate.title}</h3>
          <p className="text-primary font-medium mb-1">{certificate.issuer}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{certificate.date}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{certificate.description}</p>
        </div>
        <div className="ml-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Award className="text-primary" size={24} />
          </div>
        </div>
      </div>
      
      <a 
        href={certificate.credentialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        View Certificate
        <ExternalLink size={16} className="ml-1" />
      </a>
    </div>
  );
};

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Certificates</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 "></div>
          <p className="text-dark gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills and stay updated with the latest technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(certificate => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
