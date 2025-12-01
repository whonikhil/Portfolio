import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { Code, Camera, Video } from 'lucide-react';

// --- 1. IMPORT YOUR IMAGE HERE ---
import profileImage from '../../assets/me.jpg';
// (Make sure the filename matches exactly: profile.jpg or profile.png)

const skills = [
    { icon: <Code />, title: "Development", desc: "React, Node.js, Python, Web Apps" },
    { icon: <Camera />, title: "Photography", desc: "Street, Portraits, Product, Events" },
    { icon: <Video />, title: "Videography", desc: "Cinematic Edits, Music Videos, Color Grading" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Side */}
                    <motion.div variants={fadeInUp} className="relative group">
                        <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>

                        {/* --- 2. USE THE VARIABLE HERE --- */}
                        <img
                            src={profileImage}
                            alt="Nikhil Kanojia"
                            className="relative rounded-2xl shadow-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>

                    {/* Bio Side */}
                    <div>
                        <motion.h2 variants={fadeInUp} className="text-4xl font-heading font-bold mb-6 dark:text-white">
                            Storytelling through <span className="text-primary">Code</span> & <span className="text-accent">Lens</span>.
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-4 text-slate-600 dark:text-slate-300 text-lg">
                            <p>
                                My name is <strong>Nikhil Kanojia</strong>. I am a developer, photographer, and videographer based in <strong>Lucknow and Mumbai</strong>.
                            </p>
                            <p>
                                I started my creative journey in 2018 and have been constantly improving through real projects, collaborations, and self-learning.
                                My style is minimal, emotional, and storytelling-driven.
                            </p>
                            <p>
                                I believe every moment has a story, and my goal is to capture it beautifully.
                            </p>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {skills.map((s, i) => (
                                <motion.div key={i} variants={fadeInUp} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border dark:border-slate-700">
                                    <div className="text-primary mb-2">{s.icon}</div>
                                    <h3 className="font-bold dark:text-white">{s.title}</h3>
                                    <p className="text-sm text-slate-500">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}