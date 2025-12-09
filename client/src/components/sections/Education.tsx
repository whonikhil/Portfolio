import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

// 👇 EDIT YOUR DETAILS HERE 👇
const educationData = [
    {
        id: 1,
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Dr A.P.J abdul kalam Technical University", // Replace with your college
        location: "Lucknow, India",
        year: "2021 - 2025",
        description: "Specialized in Computer Science and Engineering{AI&ML}"
    },
    {
        id: 2,
        degree: "Higher Secondary (12th Grade)",
        institution: "ST MARYS SCHOOL", // Replace with your school
        location: "Lucknow, India",
        year: "2020 - 2021",
        description: "Major in Science (PCM). Secured 80%."
    },
    {
        id: 3,
        degree: "Matriculation (10th Grade)",
        institution: "ST MARYS SCHOOL", // Replace with your school
        location: "Lucknow, India",
        year: "2018 - 2019",
        description: "Major in Science (PCM). Secured 90.4%."
    }
    // Add more if needed
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                        Education
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
                </motion.div>

                <div className="space-y-8">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            {/* Decorative Icon Background */}
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <GraduationCap size={100} className="text-primary" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-primary/10 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary">
                                        <GraduationCap size={28} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h3>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                                            <Calendar size={14} /> {item.year}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                                        <span className="font-medium">{item.institution}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}