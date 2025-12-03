import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className={`mx-auto rounded-full transition-all duration-300 backdrop-blur-xl border ${scrolled
                    ? 'bg-slate-900/80 border-white/10 shadow-lg py-2 md:py-3 px-4 md:px-6 max-w-4xl'
                    : 'bg-slate-900/30 border-white/5 py-2 md:py-3 px-4 md:px-6 max-w-7xl'
                    }`}>
                    <div className="flex items-center justify-between">
                        <Logo />

                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                            <a href="#features" className="hover:text-white transition-colors">Features</a>
                            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
                            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                        </div>

                        <a
                            href="https://kore-finance.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-sm font-semibold transition-all"
                        >
                            Get App
                        </a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
