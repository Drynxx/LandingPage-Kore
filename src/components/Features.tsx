import { motion } from 'framer-motion';
import { Mic, PieChart, Smartphone, Shield, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Mic className="text-2xl" />,
            title: t('features.items.agent.title'),
            description: t('features.items.agent.desc'),
            gradient: "from-blue-500/10 via-white/5 to-transparent",
            iconBg: "bg-white/10",
            shadow: "shadow-white/5",
            textAccent: "group-hover:text-blue-200"
        },
        {
            icon: <PieChart className="text-2xl" />,
            title: t('features.items.analytics.title'),
            description: t('features.items.analytics.desc'),
            gradient: "from-blue-500/10 via-white/5 to-transparent",
            iconBg: "bg-white/10",
            shadow: "shadow-white/5",
            textAccent: "group-hover:text-blue-200"
        },
        {
            icon: <Smartphone className="text-2xl" />,
            title: t('features.items.universal.title'),
            description: t('features.items.universal.desc'),
            gradient: "from-blue-500/10 via-white/5 to-transparent",
            iconBg: "bg-white/10",
            shadow: "shadow-white/5",
            textAccent: "group-hover:text-blue-200"
        },
        {
            icon: <Shield className="text-2xl" />,
            title: t('features.items.privacy.title'),
            description: t('features.items.privacy.desc'),
            gradient: "from-blue-500/10 via-white/5 to-transparent",
            iconBg: "bg-white/10",
            shadow: "shadow-white/5",
            textAccent: "group-hover:text-blue-200"
        }
    ];

    return (
        <section id="features" className="py-32 section-gradient relative z-10">
            <div className="container">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-bold mb-6 text-white tracking-tight">
                        {t('features.title')}
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="relative group h-full"
                        >
                            <div className="glass-panel-elevated p-8 h-full rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] border border-white/5 hover:border-white/20 bg-[#16161d]">
                                {/* Advanced Gradient Overlay - Subtle Monochromatic */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-white/90 shadow-lg ${feature.shadow} group-hover:bg-white/20 transition-all duration-500 border border-white/5`}>
                                            {feature.icon}
                                        </div>
                                        <ArrowUpRight className="text-white/10 group-hover:text-white/60 transition-colors duration-300" />
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className={`text-xl font-bold mb-3 text-white transition-colors duration-300 ${feature.textAccent}`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-base text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
