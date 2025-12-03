import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const GlassCard = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge(
                clsx(
                    'bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl hover:border-slate-600/50 transition-colors duration-300',
                    className
                )
            )}
            {...props}
        >
            {children}
        </div>
    );
};
