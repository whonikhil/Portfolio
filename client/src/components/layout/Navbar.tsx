import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Camera, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    // Updated Links Array with Resume
    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '/resume.pdf', isExternal: true }, // New Link
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <a href="#" className="flex items-center gap-2 text-2xl font-heading font-bold text-slate-800 dark:text-white">
                    <Camera className="text-primary" />
                    <span>NIKHIL<span className="text-primary">.</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.isExternal ? "_blank" : "_self"} // Open resume in new tab
                            rel={link.isExternal ? "noopener noreferrer" : ""}
                            className={`text-sm font-medium transition-colors ${link.isExternal
                                ? "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-teal-600"
                                : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            {link.name}
                            {link.isExternal && <FileText size={16} />}
                        </a>
                    ))}

                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-yellow-400">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.isExternal ? "_blank" : "_self"}
                                rel={link.isExternal ? "noopener noreferrer" : ""}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium ${link.isExternal
                                    ? "text-primary font-bold flex items-center gap-2"
                                    : "text-slate-600 dark:text-slate-300 hover:text-primary"
                                    }`}
                            >
                                {link.name}
                                {link.isExternal && <FileText size={18} />}
                            </a>
                        ))}
                        <button onClick={toggleTheme} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mt-4">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            <span>Switch Theme</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}