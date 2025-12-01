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
}