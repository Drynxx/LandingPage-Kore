import { motion } from 'framer-motion';
import { ArrowRight, Wallet, LayoutGrid, List, Bot, Settings, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2 leading-tight">
                    {t('hero.title_1')}
                </h1>

                <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line px-2">
                    {t('hero.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 w-full sm:w-auto px-4">
                    <a href="https://www.korefinance.app/" className="btn btn-primary group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full w-auto min-w-[160px] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                        {t('hero.cta_download')}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </a>
                </div>
            </motion.div>

            {/* Modern Dashboard Mockup - Matching Reference Image */}
            <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
                className="w-full max-w-6xl mx-auto perspective-1000 px-2 md:px-0"
            >
                <div className="relative rounded-[32px] overflow-hidden bg-[#242436] p-4 md:p-6 shadow-2xl border border-white/5">
                    {/* Background Blur Effect */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

                    <div className="grid md:grid-cols-[80px_1fr] gap-6">
                        {/* Sidebar / Dock */}
                        <div className="hidden md:flex flex-col items-center gap-6 py-4">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors shadow-lg">
                                <Wallet className="text-white/80" size={24} />
                            </div>
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors shadow-lg">
                                <LayoutGrid className="text-white/80" size={24} />
                            </div>
                            <div className="p-3 transparent cursor-pointer hover:text-white text-gray-500 transition-colors">
                                <List size={24} />
                            </div>
                            <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 cursor-pointer text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                <Bot size={24} />
                            </div>
                            <div className="p-3 transparent cursor-pointer hover:text-white text-gray-500 transition-colors">
                                <Settings size={24} />
                            </div>

                            <div className="mt-auto p-3 bg-blue-600 rounded-2xl cursor-pointer hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                <Plus className="text-white" size={24} />
                            </div>
                            <div className="p-3 bg-purple-600 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors text-sm font-bold mt-4">
                                T
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex flex-col gap-6">

                            {/* Top Row Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Card 1: Net Balance */}
                                <div className="bg-[#2C2C40] rounded-[24px] p-6 border border-white/5 shadow-lg relative overflow-hidden group hover:border-white/10 transition-all">
                                    <div className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">{t('hero.dashboard.net_balance.label')}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-8 group-hover:scale-105 transition-transform origin-left">{t('hero.dashboard.net_balance.value')}</div>

                                    <div className="flex items-center gap-8">
                                        <div>
                                            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('hero.dashboard.income.label')}</div>
                                            <div className="text-green-400 font-medium text-sm">{t('hero.dashboard.income.value')}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('hero.dashboard.expense.label')}</div>
                                            <div className="text-red-400 font-medium text-sm">{t('hero.dashboard.expense.value')}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Spending Art (Donut Chart) */}
                                <div className="bg-[#2C2C40] rounded-[24px] p-6 border border-white/5 shadow-lg flex flex-col items-center justify-center relative group hover:border-white/10 transition-all">
                                    <div className="absolute top-6 left-6 text-xs font-semibold text-gray-400 tracking-wider">{t('hero.dashboard.spending_art.label')}</div>

                                    <div className="relative w-32 h-32 mt-4 mb-4">
                                        {/* CSS Conic Gradient for Donut Chart */}
                                        <div className="w-full h-full rounded-full" style={{ background: 'conic-gradient(#FF375F 0% 29%, #FF9F0A 29% 72%, #BF5AF2 72% 100%)' }}></div>
                                        <div className="absolute inset-2 bg-[#2C2C40] rounded-full flex flex-col items-center justify-center">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold">{t('hero.dashboard.spending_art.top')}</div>
                                            <div className="text-xs text-white font-medium">{t('hero.dashboard.spending_art.category')}</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 text-[10px]">
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-[#FF9F0A]"></div>
                                            <span className="text-gray-400">Shopping <span className="text-white font-bold">43%</span></span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-[#FF9F0A]"></div>
                                            <span className="text-gray-400">Food <span className="text-white font-bold">29%</span></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Daily Average */}
                                <div className="bg-[#2C2C40] rounded-[24px] p-6 border border-white/5 shadow-lg flex flex-col justify-center group hover:border-white/10 transition-all">
                                    <div className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">{t('hero.dashboard.daily_avg.label')}</div>
                                    <div className="text-3xl font-bold text-white mb-1">{t('hero.dashboard.daily_avg.value')}</div>
                                    <div className="text-sm text-gray-500">{t('hero.dashboard.daily_avg.sub')}</div>

                                    {/* Mini Wave Graph */}
                                    <div className="h-12 mt-6 w-full opacity-50">
                                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                            <path d="M0 30 Q 10 35 20 25 T 40 20 T 60 30 T 80 15 T 100 25" fill="none" stroke="#BF5AF2" strokeWidth="2" />
                                            <path d="M0 30 Q 10 35 20 25 T 40 20 T 60 30 T 80 15 T 100 25 V 40 H 0 Z" fill="url(#miniGradient)" opacity="0.2" />
                                            <defs>
                                                <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#BF5AF2" stopOpacity="0.5" />
                                                    <stop offset="100%" stopColor="#BF5AF2" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom Row: Cash Flow Oracle */}
                            <div className="bg-[#2C2C40] rounded-[24px] p-6 border border-white/5 shadow-lg relative h-64 overflow-hidden group hover:border-white/10 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="text-lg font-bold text-white">{t('hero.dashboard.cash_flow.label')}</div>
                                        <div className="text-xs text-gray-500">{t('hero.dashboard.cash_flow.sub')}</div>
                                    </div>
                                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium flex items-center gap-2 border border-blue-500/20 animate-pulse">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        {t('hero.dashboard.cash_flow.status')}
                                    </div>
                                </div>

                                {/* Big Chart Area */}
                                <div className="absolute inset-x-0 bottom-0 top-20">
                                    <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                                        {/* Grid Lines */}
                                        <line x1="0" y1="50" x2="800" y2="50" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="5,5" />
                                        <line x1="0" y1="100" x2="800" y2="100" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="5,5" />
                                        <line x1="0" y1="150" x2="800" y2="150" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="5,5" />

                                        {/* Line Chart */}
                                        {/* Stable line then Drop */}
                                        <path d="M0 100 L 580 100 Q 600 100 610 150 T 640 160 T 680 140 L 800 140" fill="none" stroke="#5E5CE6" strokeWidth="3" />

                                        {/* Fill Area */}
                                        <path d="M0 100 L 580 100 Q 600 100 610 150 T 640 160 T 680 140 L 800 140 V 200 H 0 Z" fill="url(#mainGradient)" opacity="0.2" />

                                        <defs>
                                            <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5E5CE6" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#5E5CE6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* X Axis Labels */}
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 text-[10px] text-gray-600 font-medium">
                                        <span>8</span>
                                        <span>15</span>
                                        <span>22</span>
                                        <span>29</span>
                                        <span>6</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
