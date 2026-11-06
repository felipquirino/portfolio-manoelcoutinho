import { useState, useMemo, memo, useRef, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { TestimonialItem } from '../types';

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard = memo(function TestimonialCard({ item }: TestimonialCardProps) {
  const isBlueVariant = item.avatarVariant === 'blue';

  return (
    <motion.article
      id={`testimonial-card-${item.id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-between h-full bg-[#fbfbfd] dark:bg-[#131417] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 border border-black/[0.04] dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-black/[0.08] dark:hover:border-white/[0.14]"
    >
      {/* 5-Star Rating Header */}
      <div>
        <div
          className="flex items-center gap-1 text-amber-400 mb-5 sm:mb-6"
          aria-label={`${item.rating || 5} de 5 estrelas`}
        >
          {Array.from({ length: item.rating || 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-amber-400 fill-amber-400"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Feedback Quote */}
        <p className="text-[13.5px] sm:text-[14px] text-neutral-800 dark:text-[#e4e4e7] leading-relaxed font-normal flex-1 mb-8 tracking-normal">
          {item.quote}
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-3 pt-2">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none ${
            isBlueVariant
              ? 'bg-[#e8f2fe] dark:bg-[#142336] text-[#0071e3] dark:text-[#2997ff]'
              : 'bg-[#ececef] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
          }`}
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight truncate">
            {item.name}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-[#a1a1aa] mt-0.5 leading-snug truncate">
            {item.role} • {item.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
});

function Testimonials() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.testimonials || TRANSLATIONS.pt.testimonials;
  const items = useMemo(() => t?.items || [], [t]);

  // Page index for desktop 3-card sets (0 = first 3, 1 = next 3)
  const [activePageIndex, setActivePageIndex] = useState(0);
  const totalPages = Math.ceil(items.length / 3);

  // Mobile active index
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Touch handlers for mobile swipe
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX > 40) {
      // Swiped right -> prev
      setActiveMobileIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    } else if (deltaX < -40) {
      // Swiped left -> next
      setActiveMobileIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }
    touchStartXRef.current = null;
  };

  const handlePrevPage = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setActivePageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  // 3 items for current desktop page
  const currentDesktopItems = useMemo(() => {
    const start = activePageIndex * 3;
    return items.slice(start, start + 3);
  }, [items, activePageIndex]);

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="w-full py-20 md:py-28 bg-white dark:bg-[#000000] text-left transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <span
              id="testimonials-eyebrow"
              className="text-xs font-semibold tracking-wider uppercase text-[#0059b5] dark:text-[#2997ff] mb-2 block"
            >
              {t.eyebrow}
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight md:leading-snug"
            >
              {t.heading}
            </h2>
          </div>
          <p
            id="testimonials-subtitle"
            className="text-sm md:text-[15px] text-neutral-600 dark:text-[#a1a1aa] max-w-sm md:max-w-xs leading-relaxed"
          >
            {t.subtitle}
          </p>
        </div>

        {/* Desktop View (Grid of 3 with Pagination Controls) */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-page-${activePageIndex}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-6"
            >
              {currentDesktopItems.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls for Desktop (Arrows & Dots) */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePageIndex(idx)}
                    aria-label={`Ver conjunto de depoimentos ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activePageIndex === idx
                        ? 'w-7 bg-[#0071e3] dark:bg-[#2997ff]'
                        : 'w-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  aria-label="Depoimentos anteriores"
                  className="p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPage}
                  aria-label="Próximos depoimentos"
                  className="p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile & Tablet View (Swipeable Carousel Card with Indicators) */}
        <div
          className="lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-testimonial-${activeMobileIndex}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              {items[activeMobileIndex] && (
                <TestimonialCard item={items[activeMobileIndex]} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls */}
          <div className="mt-6 flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveMobileIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileIndex === idx
                      ? 'w-6 bg-[#0071e3] dark:bg-[#2997ff]'
                      : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveMobileIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
                }
                aria-label="Depoimento anterior"
                className="p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveMobileIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
                }
                aria-label="Próximo depoimento"
                className="p-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
