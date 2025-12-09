import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Loader2, Send } from 'lucide-react';
import { fadeInUp } from '../../lib/animations';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else setStatus('error');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                        Let’s Build Something <span className="text-primary">Meaningful</span> Together 🤝
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Available for freelance projects, brand campaigns, web development work, and full-time roles.
                        <br /><span className="text-sm opacity-80">(I usually reply within 1–6 hours)</span>
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Contact Details Column */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-6">
                            <h3 className="text-xl font-bold dark:text-white mb-4">Contact Details</h3>

                            <div className="flex items-center gap-4 dark:text-slate-200 group">
                                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-full text-primary group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                                <span className="font-medium">+91 6394901383</span>
                            </div>

                            <div className="flex items-center gap-4 dark:text-slate-200 group">
                                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-full text-primary group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                                <span className="font-medium">visualsbynikhil19@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4 dark:text-slate-200 group">
                                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-full text-primary group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
                                <span className="font-medium">Lucknow / Mumbai, India</span>
                            </div>

                            <div className="flex items-center gap-4 dark:text-slate-200 group">
                                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-full text-primary group-hover:scale-110 transition-transform"><Instagram size={20} /></div>
                                <a href="https://instagram.com/visualsby_nikhil" target="_blank" className="font-medium hover:text-primary transition">@visualsby_nikhil</a>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/916394901383"
                            target="_blank"
                            className="flex items-center justify-center gap-3 w-full p-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
                        >
                            <MessageCircle size={24} />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>

                    {/* Form Column */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
                    >
                        <h3 className="text-2xl font-bold dark:text-white mb-6">Send Me a Message</h3>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Message</label>
                                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 transition-all flex justify-center items-center gap-2">
                                {status === 'loading' ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Message</>}
                            </button>

                            {status === 'success' && <p className="text-green-600 text-center text-sm font-medium">Message received! I'll be in touch.</p>}
                            {status === 'error' && <p className="text-red-500 text-center text-sm">Something went wrong. Please try WhatsApp.</p>}
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}