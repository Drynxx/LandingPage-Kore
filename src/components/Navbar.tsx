import { Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';
import logo from '../assets/logo1.png';

export const Navbar = () => {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-4 flex justify-center">
            <div className="glass-panel px-6 py-3 flex items-center gap-8 rounded-2xl bg-black/40 border-white/10">
                <div className="flex items-center gap-3 font-semibold tracking-tight">
                    <img src={logo} alt="Kore Logo" className="h-8 w-auto object-contain" />
                    <span>{t('nav.brand')}</span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a>
                    <a href="#ai" className="hover:text-white transition-colors">{t('nav.intelligence')}</a>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitch />
                </div>
            </div>
        </nav>
    );
};
