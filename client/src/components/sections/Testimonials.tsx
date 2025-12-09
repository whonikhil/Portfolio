import { Quote } from 'lucide-react';

const reviews = [
    {
        text: "Nikhil has an incredible eye for detail. His photography brought our brand story to life.",
        author: "Faishon model, Influencer"
    },
    {
        text: "Amazing work ethic and creativity. The music video exceeded all our expectations.",
        author: "ROCKY , Rapper"
    },
    {
        text: "Professional, quick, and very talented. Highly recommended for any event shoots!",
        author: "ABCD ,College Event Organizer"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl font-bold text-center dark:text-white mb-16">What People Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl relative">
                            <Quote className="text-primary/20 absolute top-6 left-6" size={40} />
                            <p className="text-slate-700 dark:text-slate-300 italic mb-6 relative z-10 pt-4">"{review.text}"</p>
                            <p className="font-bold text-slate-900 dark:text-white">— {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}