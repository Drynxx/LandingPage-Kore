import React from 'react';

export const FintechBackground = () => {
    return (
        <div className="fixed inset-0 z-0 bg-slate-950">
            {/* Base Gradient - Deep and Professional */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/20" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow - Monochromatic Blue */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};
