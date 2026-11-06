import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useDynamicSeo } from './hooks/useDynamicSeo';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

function PortfolioApp() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const { language } = useLanguage();

  // Dynamically update SEO meta tags & document title according to current scroll position & active language
  useDynamicSeo();

  const skipLabel =
    language === 'pt'
      ? 'Pular para o conteúdo principal'
      : language === 'es'
      ? 'Saltar al contenido principal'
      : 'Skip to main content';

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-neutral-900 dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-[#2997ff]/30 selection:text-blue-900 dark:selection:text-white transition-colors duration-200">
      {/* Accessible Skip Link for Keyboard Navigation (WCAG 2.4.1 Bypass Blocks) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#0071e3] dark:focus:bg-[#2997ff] focus:text-white focus:text-xs sm:focus:text-sm focus:font-semibold focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0071e3]"
      >
        {skipLabel}
      </a>

      {/* Sticky frosted glass header and navigation menu with Language & Theme toggles */}
      <Header />

      {/* Main content sections faithfully matching the design */}
      <main id="main-content" tabIndex={-1} className="w-full bg-white dark:bg-[#000000] transition-colors duration-200 focus:outline-none">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <AboutServices onOpenCvModal={() => setIsCvModalOpen(true)} />
        <Workflow />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      {/* Footer with animations and availability indicator */}
      <Footer />

      {/* CV Download / Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
