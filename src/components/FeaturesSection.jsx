import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, Activity, Shield } from 'lucide-react';
import { GlassCard } from './GlassCard';

const features = [
    {
        icon: Mic,
        title: "Kore Agent",
        description: "Natural Voice Control. Just say 'Spent $15 on coffee' and watch it happen.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: Brain,
        title: "Smart Parsing",
        description: "Powered by Google Gemini. Understands context, dates, and categories instantly.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        colSpan: "col-span-1",
    },
    {
        icon: Activity,
        title: "Dynamic Visualizer",
        description: "Mesmerizing, real-time cloud visualizer that reacts to your voice.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        colSpan: "col-span-1",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Offline capable PWA. Your data stays yours.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        colSpan: "col-span-1 md:col-span-2",
    },
];

export const FeaturesSection = () => {
    return (
        <section className="py-12 md:py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-4">
                        Intelligent by design.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Powerful features wrapped in a beautiful, intuitive interface.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={feature.colSpan}
                        >
                            <GlassCard className="h-full p-6 md:p-8 hover:bg-white/10 transition-colors group">
                                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
