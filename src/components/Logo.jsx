import React from 'react';

export const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-lg rotate-3 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-emerald-600 rounded-lg -rotate-3" />
                <span className="relative text-white font-bold text-lg font-sans">K</span>
            </div>
            <span className="text-white font-serif font-bold text-xl tracking-tight">Kore</span>
        </div>
    );
};
