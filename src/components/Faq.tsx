import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.faq || TRANSLATIONS.pt.faq;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-neutral-50 dark:bg-[#0a0a0c] px-6 py-14 md:py-24 text-left border-y border-neutral-200/50 dark:border-white/[0.06] transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            id="faq-eyebrow"
            className="block text-[11px] font-semibold tracking-wider text-[#0071e3] dark:text-[#2997ff] uppercase mb-2"
          >
            {t.eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug"
          >
            {t.heading}
          </h2>
          <p
            id="faq-subtitle"
            className="mt-2 text-xs md:text-sm text-neutral-500 dark:text-[#a1a1aa] leading-relaxed"
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 space-y-3"
        >
          {t.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.06] rounded-2xl p-5 md:p-6 shadow-2xs dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-neutral-100/90 dark:border-white/[0.08] transition-colors"
              >
                <button
                  id={`faq-btn-${item.id}`}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] rounded-lg p-1 -m-1"
                >
                  <span className="pr-4 group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="text-neutral-400 dark:text-[#a1a1aa] group-hover:text-neutral-700 dark:group-hover:text-white text-lg font-light leading-none flex-shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3.5 text-xs sm:text-[13px] text-neutral-600 dark:text-[#a1a1aa] leading-relaxed pt-3 border-t border-neutral-100 dark:border-white/[0.08]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
