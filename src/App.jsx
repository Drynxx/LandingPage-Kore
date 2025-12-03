import React from 'react';
import { Navbar } from './components/Navbar';
import { AuroraBackground } from './components/AuroraBackground';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveDemo } from './components/InteractiveDemo';
import { PrivacySection } from './components/PrivacySection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <AuroraBackground />

      <Navbar />

      <div className="relative z-10 flex flex-col gap-12 md:gap-24">
        <HeroSection />

        <div id="features">
          <FeaturesSection />
        </div>

        <div id="how-it-works">
          <HowItWorks />
        </div>

        <InteractiveDemo />

        <div id="privacy">
          <PrivacySection />
        </div>

        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}

export default App;
