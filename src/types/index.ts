// Define any common types here that might be used across components

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}