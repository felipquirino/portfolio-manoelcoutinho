import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.cvModal || TRANSLATIONS.pt.cvModal;
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Focus trap and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button or modal container
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const firstFocusable = modalRef.current.querySelector<HTMLElement>(
          'button:not([disabled])'
        );
        firstFocusable?.focus();
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="presentation"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          aria-describedby="cv-modal-subtitle"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white dark:bg-[#18181b] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left border border-neutral-100 dark:border-white/10 transition-colors focus:outline-none"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-[#2997ff]/20 text-[#0071e3] dark:text-[#2997ff] flex items-center justify-center" aria-hidden="true">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="cv-modal-title" className="text-base font-bold text-neutral-900 dark:text-white">
                  {t.title}
                </h3>
                <p id="cv-modal-subtitle" className="text-xs text-neutral-500 dark:text-[#a1a1aa]">
                  {t.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.closeBtn}
              className="p-1.5 rounded-full text-neutral-400 dark:text-[#a1a1aa] hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5 text-xs sm:text-[13px] text-neutral-600 dark:text-[#a1a1aa] max-h-[60vh] overflow-y-auto">
            <div>
              <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                {t.professionalSummaryTitle || (t as any).summaryTitle}
              </h4>
              <p className="leading-relaxed">
                {t.professionalSummary || (t as any).summaryText}
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-white/10">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-2">
                {t.coreSkillsTitle || (t as any).skillsTitle}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {(t.coreSkills || (t as any).skillsList || []).map((skill: string, index: number) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-white/10">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                {t.educationTitle}
              </h4>
              <p className="leading-relaxed">
                {t.education || (t as any).educationText}
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-neutral-100 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] flex flex-col sm:flex-row justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-700 dark:text-[#a1a1aa] hover:bg-white dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
            <button
              type="button"
              onClick={handlePrintDownload}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white hover:bg-black dark:hover:bg-[#e5e5e7] text-white dark:text-black text-xs font-semibold shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.downloadBtn}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
