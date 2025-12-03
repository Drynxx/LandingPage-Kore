import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Server } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const PrivacySection = () => {
    return (
        <section className="py-24 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Animated Shield Container */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse" />

                        {/* Shield Icon */}
                        <GlassCard className="absolute inset-0 flex items-center justify-center rounded-full border-emerald-500/30 bg-slate-900/50">
                            <Shield className="w-32 h-32 md:w-48 md:h-48 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                        </GlassCard>

                        {/* Orbiting Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 border border-emerald-500/20 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 10 + i * 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 2
                                }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Your data stays <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            yours.
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed">
                        We believe financial privacy is a fundamental right. That's why Kore is built with a "Local-First" philosophy.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Lock, title: "End-to-End Encryption", desc: "Your financial data is encrypted before it ever leaves your device." },
                            { icon: EyeOff, title: "No Ad Tracking", desc: "We don't sell your data to advertisers. Ever." },
                            { icon: Server, title: "Self-Hostable", desc: "Don't trust us? Host your own Appwrite backend and own your infrastructure." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
