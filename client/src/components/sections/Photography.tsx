import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// You can replace these with your actual image paths later
const photos = [
    { id: 1, src: '/work/mumbai1.jpg', category: 'Street' },
    { id: 2, src: '/work/mumbai2.jpg', category: 'Portrait' },
    { id: 3, src: '/work/mumbai3.jpg', category: 'Travel' },
    { id: 4, src: '/work/mumbai4.jpg', category: 'Street' },
    { id: 5, src: '/work/mumbai5.jpg', category: 'Brand' },
    { id: 6, src: '/work/video-thumb.jpg', category: 'Event' },
];

export default function Photography() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section id="photography" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Photography Gallery</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A curated collection of moments I’ve captured—street, portraits, travel, and brand shoots.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            whileHover={{ y: -5 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-800"
                            onClick={() => setSelectedImg(photo.src)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.category}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="flex items-center gap-2 text-white font-medium px-4 py-2 bg-black/50 backdrop-blur-md rounded-full">
                                    <ZoomIn size={16} /> View
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://instagram.com/visualsby_nikhil" target="_blank" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        View Full Gallery on Instagram →
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20">
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImg}
                            alt="Gallery Preview"
                            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}