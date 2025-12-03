import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const InteractiveDemo = () => {
    const [text, setText] = useState('');
    const fullText = "Lunch with friends $40";
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                setShowResult(true);
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 md:py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white mb-4">
                    Just say it. Kore handles the rest.
                </h2>
            </div>

            <div className="max-w-2xl mx-auto">
                <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {/* Input Simulation */}
                        <div className="w-full relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                            </div>
                            <input
                                type="text"
                                value={text}
                                readOnly
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                        </div>

                        {/* Result Card */}
                        <AnimatePresence>
                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    className="w-full md:w-auto min-w-[200px]"
                                >
                                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                        <div className="font-mono text-sm text-emerald-400">
                                            <span className="text-emerald-200">{"{"}</span><br />
                                            &nbsp;&nbsp;category: <span className="text-emerald-300">'Food'</span>,<br />
                                            &nbsp;&nbsp;amount: <span className="text-emerald-300">40</span><br />
                                            <span className="text-emerald-200">{"}"}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};
