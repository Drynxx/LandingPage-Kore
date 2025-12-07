import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center bg-black/50 border border-white/10 rounded-lg p-1">
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'en'
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('ro')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'ro'
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
            >
                RO
            </button>
        </div>
    );
};
