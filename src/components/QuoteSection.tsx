import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const QuoteSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden">


            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="mb-8">
                        <span className="inline-block w-12 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full mb-8"></span>
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-serif text-white/90 leading-relaxed tracking-wide italic mb-8 drop-shadow-lg">
                        {t('quote.text')}
                    </blockquote>

                    <cite className="not-italic text-sm md:text-base font-semibold text-blue-400 tracking-widest uppercase">
                        — {t('quote.reference')}
                    </cite>

                    <div className="mt-8">
                        <span className="inline-block w-12 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
