import React from 'react';
import { Github, Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative z-10 py-8 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500" />
                    <span className="text-white font-serif font-bold text-lg">Kore</span>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="https://github.com/Drynxx/kore-finance-tracker" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex items-center gap-1 text-sm text-slate-500">
                    <span>Crafted with</span>
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span>by the Kore Team</span>
                </div>
            </div>
        </footer>
    );
};
