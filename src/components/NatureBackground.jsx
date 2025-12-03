import React from 'react';
import { motion } from 'framer-motion';

export const NatureBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[100dvh] -z-50 overflow-hidden bg-slate-950">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 will-change-transform"
            >
                {/* Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#2c3e50] opacity-50" />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-sm" />

                {/* Darkening Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80" />
            </motion.div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
