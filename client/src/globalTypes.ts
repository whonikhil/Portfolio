<<<<<<< HEAD
export interface Project {
  id: string;
  title: string;
  category: 'Development' | 'Photography' | 'Videography';
  shortDescription: string;
  fullDescription?: string;
  stack: string[];
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
=======
export interface Project {
  id: string;
  title: string;
  category: 'Development' | 'Photography' | 'Videography';
  shortDescription: string;
  fullDescription?: string;
  stack: string[];
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
>>>>>>> 43f06c49a4eaa6df75cec31c851edc837136c9dc
}