import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const GlassCard = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge(
                clsx(
                    'bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl bg-gradient-to-b from-white/5 to-transparent hover:border-white/20 transition-colors duration-300',
                    className
                )
            )}
            {...props}
        >
            {children}
        </div>
    );
};
