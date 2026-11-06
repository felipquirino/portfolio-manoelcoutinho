import { motion } from 'motion/react';
import { Rocket, Layout, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface AboutServicesProps {
  onOpenCvModal?: () => void;
}

export default function AboutServices({ onOpenCvModal }: AboutServicesProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.about || TRANSLATIONS.pt.about;

  const handleScrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projetos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getServiceIcon = (iconType: string) => {
    switch (iconType) {
      case 'rocket':
        return <Rocket className="w-5 h-5 text-[#0071e3] dark:text-[#2997ff]" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-[#0071e3] dark:text-[#2997ff]" />;
      case 'image':
      default:
        return <ImageIcon className="w-5 h-5 text-[#0071e3] dark:text-[#2997ff]" />;
    }
  };

  return (
    <section
      id="sobre"
      className="bg-neutral-50 dark:bg-[#0e0f13] px-6 py-14 md:py-24 text-left border-y border-neutral-200/50 dark:border-white/[0.06] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Top Header: Responsive 2-column on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span
              id="about-eyebrow"
              className="block text-[11px] font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase mb-2"
            >
              {t.eyebrow}
            </span>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug"
            >
              {t.heading}
            </h2>
          </div>

          {/* Right Column: High level narrative and primary CTA */}
          <div className="lg:col-span-6 space-y-3.5 text-neutral-600 dark:text-[#a1a1aa] text-[13.5px] md:text-[14.5px] leading-relaxed">
            <p className="dark:text-[#c0c7d5]">
              {t.paragraph1}
            </p>
            <p>
              {t.paragraph2}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="about-cta-start"
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-black dark:hover:bg-[#e5e5e7] active:scale-[0.98] transition-all shadow-2xs dark:shadow-[0_4px_16px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>{t.ctaStart}</span>
              </button>
              <button
                id="about-cta-projects"
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-start gap-1 text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] hover:text-[#0077ed] dark:hover:text-[#2997ff]/80 transition-colors py-1 cursor-pointer"
              >
                <span>{t.ctaProjects}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Services Cards Grid (Stacked on mobile & tablet, 3 columns on desktop) */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {t.services.map((service, index) => (
            <motion.article
              key={service.id}
              id={`service-card-${index + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-white/[0.04] dark:backdrop-blur-xl rounded-2xl p-6 md:p-7 shadow-xs dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-left border border-neutral-100/90 dark:border-white/[0.08] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-[#2997ff]/15 dark:border dark:border-[#2997ff]/30 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center mb-4 shadow-2xs">
                  {getServiceIcon(service.iconType)}
                </div>
                <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-700 dark:text-[#2997ff] mt-1">
                  {service.subtitle}
                </p>
                <p className="text-xs text-neutral-500 dark:text-[#a1a1aa] mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
