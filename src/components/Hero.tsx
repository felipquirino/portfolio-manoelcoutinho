import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { HERO_AVATAR_URL } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenCvModal?: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.hero || TRANSLATIONS.pt.hero;

  const handleScrollToPortfolio = (e: MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projetos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const encodedWhatsappMsg = encodeURIComponent(t.whatsappMsg);

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-white dark:bg-[#000000] px-6 pt-24 md:pt-32 pb-0 text-left flex flex-col items-center text-center transition-colors duration-200"
    >
      {/* Subtle ambient optical depth for Dark Mode */}
      <div className="hidden dark:block absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2997ff]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="hidden dark:block absolute top-44 right-10 w-72 h-72 bg-[#4d93ff]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Display Headline */}
        <motion.h1
          id="hero-headline"
          key={`hero-title-${language}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.18] md:leading-[1.14] max-w-4xl mx-auto pt-4"
        >
          {t.headline}
          <span className="text-[#0071e3] dark:text-[#2997ff]">.</span>
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          id="hero-subtitle"
          key={`hero-sub-${language}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 md:mt-5 text-[14.5px] md:text-base lg:text-lg leading-relaxed text-neutral-600 dark:text-[#a1a1aa] font-normal max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3 sm:gap-3.5"
        >
          <a
            id="hero-cta-whatsapp"
            href={`https://wa.me/5511999999999?text=${encodedWhatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-black dark:hover:bg-[#e5e5e7] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <span>{t.ctaWhatsapp}</span>
          </a>
          <a
            id="hero-cta-portfolio"
            href="#projetos"
            onClick={handleScrollToPortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-white/[0.08] hover:bg-neutral-200 dark:hover:bg-white/[0.12] text-neutral-700 dark:text-white border border-neutral-200/80 dark:border-white/[0.15] text-sm font-medium active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{t.ctaCv}</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Avatar & Dynamic Animated Badges with Orbit Rings */}
      <div className="relative w-full max-w-4xl mx-auto mt-10 md:mt-12 flex justify-center items-end">
        {/* Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[520px] md:w-[680px] h-[320px] md:h-[420px] rounded-full border border-neutral-200/50 dark:border-[#2997ff]/20 orbit-ring" />
          <div className="absolute w-[360px] md:w-[480px] h-[220px] md:h-[300px] rounded-full border border-neutral-200/40 dark:border-white/[0.06] orbit-ring" />
        </div>

        {/* Floating Badge 1: Figma */}
        <div className="absolute -left-2 sm:left-4 md:left-12 top-10 sm:top-12 animate-orbit-1 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/figma.svg" alt="Figma" className="w-4 h-4 object-contain select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">Figma</span>
          </div>
        </div>

        {/* Floating Badge 2: React */}
        <div className="absolute -right-2 sm:right-6 md:right-16 top-6 sm:top-10 animate-orbit-2 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/react.svg" alt="React" className="w-4 h-4 object-contain select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">React</span>
          </div>
        </div>

        {/* Floating Badge 3: TypeScript */}
        <div className="absolute -left-4 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 animate-orbit-3 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/typescript.svg" alt="TypeScript" className="w-4 h-4 object-contain rounded-xs select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">TypeScript</span>
          </div>
        </div>

        {/* Floating Badge 4: Framer */}
        <div className="absolute -right-4 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 animate-orbit-4 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/framer.svg" alt="Framer" className="w-4 h-4 object-contain select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">Framer</span>
          </div>
        </div>

        {/* Floating Badge 5: Photoshop */}
        <div className="absolute left-6 sm:left-16 md:left-24 bottom-14 sm:bottom-16 animate-orbit-5 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/photoshop.svg" alt="Photoshop" className="w-4 h-4 object-contain select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">Photoshop</span>
          </div>
        </div>

        {/* Floating Badge 6: Tailwind */}
        <div className="absolute right-8 sm:right-16 md:right-24 bottom-14 sm:bottom-16 animate-orbit-6 z-20 pointer-events-auto select-none">
          <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-2xl bg-white/90 dark:bg-[#18181b]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-200">
            <img src="/icons/tools/tailwind.svg" alt="Tailwind" className="w-4 h-4 object-contain select-none pointer-events-none" aria-hidden="true" />
            <span className="text-xs font-semibold text-neutral-800 dark:text-white tracking-tight hidden sm:inline">Tailwind</span>
          </div>
        </div>

        {/* Hero Character Picture */}
        <motion.div
          id="hero-avatar-container"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 block mx-auto -mb-1 select-none"
        >
          <img
            id="hero-avatar-img"
            src={HERO_AVATAR_URL}
            alt="Manoel Coutinho"
            className="w-auto h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] max-h-[500px] object-contain object-bottom border-0 bg-transparent block mx-auto pointer-events-none drop-shadow-xl dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
