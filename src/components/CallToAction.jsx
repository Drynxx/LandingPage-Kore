import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const CallToAction = () => {
    return (
        <section className="py-12 md:py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <GlassCard className="p-12 md:p-20 text-center relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white leading-tight">
                            Ready to take control?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            Join thousands of users who are already experiencing the future of financial tracking.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a
                                href="https://kore-finance.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-xl hover:scale-105 transform duration-200"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="https://kore-finance.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                            >
                                View Demo
                            </a>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};
