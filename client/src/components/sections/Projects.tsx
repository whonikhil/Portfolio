import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../globalTypes';
import { Loader2 } from 'lucide-react';

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

// Fallback data
const fallbackProjects: Project[] = [
    {
        id: "castella",
        title: "Castella — Streaming Podcast",
        category: "Development",
        shortDescription: "A modern web app for streaming podcasts.",
        fullDescription: "Built with React and Node.",
        stack: ["React", "Node", "Socket.IO"],
        coverImage: "https://placehold.co/600x400/0EA5A3/FFF?text=Castella",
        featured: true
    },
    {
        id: "mumbai",
        title: "Soul of Mumbai",
        category: "Photography",
        shortDescription: "Street photography in Mumbai.",
        fullDescription: "Shot on Sony Alpha.",
        stack: ["Sony Alpha", "Lightroom"],
        coverImage: "https://placehold.co/600x400/1e1e1e/FFF?text=Mumbai",
        featured: true
    }
];

export default function Projects({ onProjectClick }: ProjectsProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Try to get data from server, use fallback if it fails
        fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`)

            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => {
                setProjects(fallbackProjects);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold dark:text-white mb-8">Selected Work</h2>

                {loading ? (
                    <div className="flex justify-center"><Loader2 className="animate-spin" /></div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -10 }}
                                onClick={() => onProjectClick(project)}
                                className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                            >
                                <img src={project.coverImage} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{project.shortDescription}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}