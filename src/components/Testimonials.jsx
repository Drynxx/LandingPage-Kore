import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';

const testimonials = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Freelance Designer",
        content: "Kore completely changed how I view my finances. The AI categorization is scarily accurate, and the design is just beautiful.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Product Manager",
        content: "I've tried every budget app out there. Nothing comes close to the speed and fluidity of Kore. It actually makes me want to track my spending.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
        id: 3,
        name: "James Wilson",
        role: "Software Engineer",
        content: "The voice input is a game changer. I just mumble what I spent while walking out of the store, and it's done. Magic.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">thousands</span>.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what the community has to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="p-8 h-full flex flex-col hover:border-white/20 transition-colors">
                                <Quote className="w-8 h-8 text-indigo-400 mb-6 opacity-50" />
                                <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-white/10"
                                    />
                                    <div>
                                        <div className="text-white font-semibold">{testimonial.name}</div>
                                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
