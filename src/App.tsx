import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { QuoteSection } from './components/QuoteSection';
import { AIShowcase } from './components/AIShowcase';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <div className="relative min-h-screen">
                <Navbar />

                <main>
                    <Hero />
                    <Features />
                    <QuoteSection />
                    <AIShowcase />
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
