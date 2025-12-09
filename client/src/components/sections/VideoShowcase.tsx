import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    {
        title: "Cinematic Color Grade",
        desc: "Music video direction + post-production.",
        // Replace with your real video thumbnail if you have one
        thumb: "/work/video-thumb.jpg",
        link: "https://www.youtube.com" // Replace with real video link
    },
    {
        title: "Event Recap 2024",
        desc: "Event recap with storytelling cuts.",
        thumb: "/work/mumbai1.jpg",
        link: "https://www.youtube.com"
    },
    {
        title: "Brand Storytelling",
        desc: "Commercial shoot for local fashion brand.",
        thumb: "/work/mumbai2.jpg",
        link: "https://www.youtube.com"
    }
];

export default function VideoShowcase() {
    return (
        <section id="videos" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Cinematic Visuals</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        A selection of my video work—color grading, editing, direction, and storytelling.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <motion.a
                            href={video.link}
                            target="_blank"
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white group-hover:scale-110 transition-transform">
                                        <Play fill="currentColor" size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold dark:text-white mb-2">{video.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{video.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                        Watch More Videos →
                    </a>
                </div>
            </div>
        </section>
    );
}