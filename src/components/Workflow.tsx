import { motion } from 'motion/react';
import { FileText, PenTool, Rocket, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function Workflow() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.workflow || TRANSLATIONS.pt.workflow;

  const getStepIcon = (type: string) => {
    switch (type) {
      case 'briefing':
        return <FileText className="w-5 h-5" />;
      case 'prototype':
        return <PenTool className="w-5 h-5" />;
      case 'launch':
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="processo"
      className="bg-white dark:bg-[#0a0a0c] px-6 py-14 md:py-24 text-left transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4"
        >
          <div className="max-w-2xl">
            <span
              id="workflow-eyebrow"
              className="block text-[11px] font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase mb-2"
            >
              {t.eyebrow}
            </span>
            <h2
              id="workflow-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug"
            >
              {t.heading}
            </h2>
          </div>
          <p
            id="workflow-subtitle"
            className="text-xs md:text-sm text-neutral-500 dark:text-[#a1a1aa] leading-relaxed max-w-sm"
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3 Step Cards (Stacked on mobile & tablet, 3 columns on desktop) */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {t.steps.map((step, index) => (
            <motion.article
              key={step.stepNumber}
              id={`workflow-step-${step.stepNumber}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="group bg-neutral-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] rounded-2xl p-6 md:p-8 text-left border border-neutral-200/60 dark:border-white/[0.08] shadow-2xs dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Top header inside card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-[#2997ff]/20 dark:border dark:border-[#2997ff]/30 flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] font-bold text-base shadow-2xs">
                    {step.stepNumber}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/[0.08] dark:border dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-white group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors shadow-2xs">
                    {getStepIcon(step.iconType)}
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-[#a1a1aa] mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Deliverable Badge */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-white/[0.08] flex items-center gap-1.5 text-xs font-medium text-[#0071e3] dark:text-[#2997ff]">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{step.deliverableTag}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
