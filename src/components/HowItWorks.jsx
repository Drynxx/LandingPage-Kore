import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, Zap, PieChart, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Natural Input",
        description: "Just speak or type naturally. \"Spent $15 on coffee with friends.\"",
        icon: Mic,
        color: "from-blue-500 to-cyan-500",
        delay: 0.2
    },
    {
        id: 2,
        title: "AI Processing",
        description: "Kore's Gemini-powered brain instantly understands context, extracting amount, category, and date.",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        delay: 0.4
    },
    {
        id: 3,
        title: "Instant Sync",
        description: "Optimistic UI updates your feed immediately while safely syncing to the secure cloud.",
        icon: Zap,
        color: "from-amber-400 to-orange-500",
        delay: 0.6
    },
    {
        id: 4,
        title: "Live Insights",
        description: "Your budget graphs and spending breakdown update in real-time to reflect the new data.",
        icon: PieChart,
        color: "from-emerald-500 to-green-500",
        delay: 0.8
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        From voice to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">insight</span>.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how Kore transforms a simple sentence into powerful financial intelligence in milliseconds.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 md:-translate-x-1/2" />

                    {/* Animated Line (Gradient) */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[28px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500 md:-translate-x-1/2 origin-top"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: step.delay, duration: 0.5 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center z-10 md:-translate-x-1/2">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-${step.color.split(' ')[1]}/20`}>
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all group ${index % 2 === 0 ? 'text-left' : 'md:text-right'
                                    }`}>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-[calc(50%-3rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
