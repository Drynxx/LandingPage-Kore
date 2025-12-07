import { motion } from 'framer-motion';
import { Search, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const AIShowcase = () => {
    const { t, language } = useLanguage();

    return (
        <section id="ai" className="py-20 md:py-32 relative overflow-hidden">
            {/* Enhanced Background - Subtle Blue Tints */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A84FF]/5 to-transparent pointer-events-none"></div>

            <div className="container relative z-10 px-4">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block px-4 py-2 rounded-full glass-panel bg-white/5 text-gray-300 text-xs md:text-sm font-semibold mb-6 backdrop-blur-md border border-white/10 shadow-lg">
                        {t('ai.powered_by')}
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                        {t('ai.title_prefix')} <span className="text-gray-400">{t('ai.title_kore')}</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        {t('ai.subtitle')}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Spotlight Search Bar */}
                    <div className="glass-panel-elevated h-16 md:h-20 px-5 md:px-8 flex items-center gap-4 md:gap-6 mb-6 md:mb-10 shadow-2xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 bg-[#16161d]">
                        <Search className="text-gray-500 text-xl md:text-2xl" />
                        <div className="flex-1 overflow-hidden">
                            <div className="text-lg md:text-3xl font-light text-white/80 tracking-wide truncate">
                                {t('ai.search_placeholder')}
                                <span className="animate-pulse ml-1 text-blue-500/50">|</span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Results Card */}
                    <div className="glass-panel-elevated p-6 md:p-10 shadow-2xl rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#16161d] backdrop-blur-3xl">
                        {/* Header */}
                        <div className="flex items-start gap-4 md:gap-5 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-white/5">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-[18px] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg shrink-0 border border-white/5">
                                K
                            </div>
                            <div className="flex-1 pt-0.5 md:pt-1">
                                <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                                    <span className="font-semibold text-white text-base md:text-xl tracking-tight">{t('ai.result_title')}</span>
                                    <CheckCircle className="text-blue-400 text-xs md:text-base shrink-0" />
                                </div>
                                <div className="text-xs md:text-base text-gray-500 font-medium">{t('ai.result_status')}</div>
                            </div>
                            <div className="text-[10px] md:text-xs font-semibold text-gray-500 bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/5 whitespace-nowrap">
                                {t('ai.time_status')}
                            </div>
                        </div>

                        {/* Answer */}
                        <div className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10 font-light">
                            {t('ai.answer_text_1')} <span className="font-bold text-white">{t('ai.answer_text_2')}</span> {t('ai.answer_text_3')} <span className="text-blue-400 font-semibold">{t('ai.answer_text_4')}</span> {t('ai.answer_text_5')}
                        </div>

                        {/* Premium Breakdown Cards - Monochromatic */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                            {translations[language].ai.breakdown_items.map((item: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className={`relative overflow-hidden p-4 md:p-5 rounded-2xl md:rounded-[24px] border border-white/5 bg-white/[0.02] group cursor-default h-24 md:h-32 flex flex-col justify-between hover:bg-white/[0.05] transition-colors duration-300`}
                                >
                                    {/* Content */}
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="font-medium text-gray-500 text-xs md:text-sm tracking-wide group-hover:text-gray-400 transition-colors">{item.name}</div>
                                        <ArrowUpRight className="text-gray-600 w-3 h-3 md:w-4 md:h-4 group-hover:text-white transition-colors" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-xl md:text-2xl font-bold text-gray-200 tracking-tight group-hover:text-white transition-colors">{item.amount}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
