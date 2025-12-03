import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PieChart, Activity } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-12 md:pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-7xl font-sans font-bold tracking-tight text-white leading-tight"
                    >
                        The future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            personal finance
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed"
                    >
                        Experience a stunning, AI-powered financial companion that blends premium aesthetics with cutting-edge web technology.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://kore-finance.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-indigo-600 rounded-full text-white font-semibold text-lg transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center gap-2 inline-flex"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 10, rotateY: -10 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 perspective-1000 scale-75 sm:scale-90 md:scale-100"
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative transform-style-3d rotate-y-12 rotate-x-6"
                    >
                        <GlassCard className="p-6 w-full max-w-md aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700/50">
                            <div className="relative z-10">
                                {/* Mockup Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                                        <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                                        <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">Kore AI</div>
                                </div>

                                {/* Mockup Content */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-slate-400">Total Balance</div>
                                            <div className="text-3xl font-bold text-white">$12,450.00</div>
                                        </div>
                                        <div className="p-3 bg-indigo-500/10 rounded-xl">
                                            <Activity className="w-6 h-6 text-indigo-400" />
                                        </div>
                                    </div>

                                    {/* Spending Donut (Simplified CSS representation) */}
                                    <div className="flex gap-4 items-center">
                                        <div className="relative w-24 h-24 rounded-full border-8 border-indigo-500/30 flex items-center justify-center">
                                            <div className="absolute inset-0 border-8 border-indigo-500 rounded-full border-t-transparent border-l-transparent rotate-45" />
                                            <PieChart className="w-8 h-8 text-indigo-400" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                                Food & Dining (45%)
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className="w-2 h-2 rounded-full bg-slate-600" />
                                                Others (55%)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Voice Wave Visualizer Mockup */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-900/50 to-transparent flex items-end justify-center pb-6 gap-1 z-0">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [10, 40, 10] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                        className="w-1 bg-indigo-400/80 rounded-full"
                                    />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
