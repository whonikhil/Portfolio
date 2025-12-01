import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../globalTypes';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } }
};

const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, delay: 0.1 }
    },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } }
};

const carouselVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) { setCurrentImageIndex(0); setDirection(0); }
    }, [isOpen, project]);

    if (!project) return null;

    const images = project.images || [project.coverImage];
    const hasMultipleImages = images.length > 1;

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentImageIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    initial="hidden" animate="visible" exit="exit" variants={overlayVariants}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full hover:scale-110 transition-transform">
                            <X size={20} className="text-slate-800 dark:text-white" />
                        </button>

                        <div className="flex-1 overflow-y-auto">
                            <div className="relative h-[45vh] md:h-[55vh] bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
                                {project.videoUrl ? (
                                    <video src={project.videoUrl} controls autoPlay loop muted className="w-full h-full object-cover" />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <AnimatePresence initial={false} custom={direction}>
                                            <motion.img
                                                key={currentImageIndex}
                                                src={images[currentImageIndex]}
                                                alt={project.title}
                                                custom={direction}
                                                variants={carouselVariants}
                                                initial="enter" animate="center" exit="exit"
                                                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                                className="absolute inset-0 w-full h-full object-contain bg-black/5"
                                            />
                                        </AnimatePresence>
                                        {hasMultipleImages && (
                                            <>
                                                <button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-white dark:hover:bg-slate-700 transition-colors z-10" onClick={() => paginate(-1)}>
                                                    <ChevronLeft size={24} className="text-slate-800 dark:text-white" />
                                                </button>
                                                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-white dark:hover:bg-slate-700 transition-colors z-10" onClick={() => paginate(1)}>
                                                    <ChevronRight size={24} className="text-slate-800 dark:text-white" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <div>
                                        <p className="text-primary font-medium mb-1 uppercase tracking-wider text-sm">{project.category}</p>
                                        <h2 className="text-3xl font-heading font-bold dark:text-white">{project.title}</h2>
                                    </div>
                                    <div className="flex gap-3">
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                                <Github size={20} className="text-slate-700 dark:text-white" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-teal-600 text-white rounded-full font-medium transition-colors">
                                                <span>Visit Site</span> <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="prose dark:prose-invert max-w-none mb-8">
                                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                        {project.fullDescription || project.shortDescription}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies & Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}