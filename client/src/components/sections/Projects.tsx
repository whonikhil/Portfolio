import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../globalTypes';
import { Loader2 } from 'lucide-react';

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

const fallbackProjects: Project[] = [];

// --- THIS LINE IS THE FIX (export default function) ---
export default function Projects({ onProjectClick }: ProjectsProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Selected Work</h2>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary" size={40} /></div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                onClick={() => onProjectClick(project)}
                                className="group cursor-pointer bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}