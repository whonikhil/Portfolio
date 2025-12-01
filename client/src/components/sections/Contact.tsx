import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Loader2 } from 'lucide-react';
import { fadeInUp } from '../../lib/animations';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // 1. Send the data to your Backend Server
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // 2. Check if the server accepted it
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h2 className="text-4xl font-heading font-bold dark:text-white mb-4">Let's Create Together</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Available for freelance shoots, brand campaigns, web development projects, and collaborations.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 dark:text-slate-200">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Phone className="text-primary" /></div>
                                {/* YOUR UPDATED NUMBER */}
                                <span>+91 6394901383</span>
                            </div>
                            <div className="flex items-center gap-4 dark:text-slate-200">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Mail className="text-primary" /></div>
                                <span>visualsbynikhil19@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 dark:text-slate-200">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><MapPin className="text-primary" /></div>
                                <span>Lucknow / Mumbai, India</span>
                            </div>
                            <div className="flex items-center gap-4 dark:text-slate-200">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Instagram className="text-primary" /></div>
                                <a href="https://www.instagram.com/visualsby_nikhil" target="_blank" className="hover:text-primary transition">@visualsby_nikhil</a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg space-y-6 border border-slate-100 dark:border-slate-800"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-primary hover:bg-teal-600 text-white font-bold rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? <Loader2 className="animate-spin" /> : status === 'success' ? "Sent!" : "Send Message"}
                        </button>

                        {status === 'success' && <p className="text-green-600 text-center text-sm">Message received!</p>}
                        {status === 'error' && <p className="text-red-500 text-center text-sm">Something went wrong. Is the server running?</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}