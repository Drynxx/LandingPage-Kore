import { Github, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo1.png';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-white/10 mt-32">
            <div className="container py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 text-2xl font-bold mb-4">
                            <img src={logo} alt="Kore Logo" className="h-8 w-auto object-contain" />
                            <span>{t('nav.brand')}</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            {t('footer.brand_desc')}
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t('footer.col_1')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#features" className="hover:text-white transition-colors">{t('footer.links.features')}</a></li>
                            <li><a href="#ai" className="hover:text-white transition-colors">{t('footer.links.agent')}</a></li>
                            <li><a href="https://www.korefinance.app/" className="hover:text-white transition-colors">{t('footer.links.download')}</a></li>
                            <li><a href="https://github.com/drynxx/kore-finance-tracker" className="hover:text-white transition-colors">{t('footer.links.docs')}</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">{t('footer.col_2')}</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="https://github.com/drynxx/kore-finance-tracker" className="hover:text-white transition-colors">{t('footer.links.github')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.discord')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.twitter')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.support')}</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        {t('footer.copyright')}
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/drynxx/kore-finance-tracker" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
