<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../lib/animations'; // <--- ADD THIS LINE

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-300">

            {/* Abstract Animated Blob Background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 z-10 text-center md:text-left">
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}>
                    <motion.h2 variants={fadeInUp} className="text-primary font-bold tracking-wide uppercase mb-4">
                        Developer & Photographer
                    </motion.h2>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight"
                        >
                            Building thoughtful <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                experiences that feel alive.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                        Hi — I’m <strong>Nikhil Kanojia</strong>. I combine code and cinema to tell stories.
                        Currently building <em>Castella</em> and capturing life in Mumbai & Lucknow.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            Let's Talk
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
=======
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../lib/animations'; // <--- ADD THIS LINE

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-300">

            {/* Abstract Animated Blob Background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 z-10 text-center md:text-left">
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}>
                    <motion.h2 variants={fadeInUp} className="text-primary font-bold tracking-wide uppercase mb-4">
                        Developer & Photographer
                    </motion.h2>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight"
                        >
                            Building thoughtful <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                experiences that feel alive.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                        Hi — I’m <strong>Nikhil Kanojia</strong>. I combine code and cinema to tell stories.
                        Currently building <em>Castella</em> and capturing life in Mumbai & Lucknow.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            Let's Talk
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
>>>>>>> 43f06c49a4eaa6df75cec31c851edc837136c9dc
}