import { useState, MouseEvent, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterNavItemProps {
  href: string;
  label: string;
  onClick: (href: string) => void;
}

// Memoized navigation item to prevent unnecessary re-renders
const FooterNavItem = memo(function FooterNavItem({
  href,
  label,
  onClick,
}: FooterNavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick(href);
        }}
        className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] focus-visible:text-white rounded-xs"
      >
        {label}
      </a>
    </li>
  );
});

function Footer() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.footer || TRANSLATIONS.pt.footer;
  const [copied, setCopied] = useState(false);
  const emailAddress = 'contato@devportfolio.com';

  const handleCopyEmail = (e: MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = useCallback((href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoize navigation items list
  const navItems = useMemo(() => t.navItems, [t.navItems]);

  return (
    <footer
      id="footer-section"
      className="w-full px-6 pt-20 pb-20 text-left text-white bg-[#121317] border-t border-white/10 transition-colors duration-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          {/* Left Column: Author Bio & Availability status */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Manoel Coutinho
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white select-none">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
                  <span className="text-[#D1D1D6] font-medium">{t.availability}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1A6] max-w-md">
                {t.bio}
              </p>
            </div>
          </div>

          {/* Middle Column: Navegação */}
          <nav aria-label={t.navTitle} className="md:col-span-3 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-white" id="footer-nav-label">
              {t.navTitle}
            </span>
            <ul aria-labelledby="footer-nav-label" className="space-y-2.5 text-xs text-[#A1A1A6]">
              {navItems.map((item) => (
                <FooterNavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={handleLinkClick}
                />
              ))}
            </ul>
          </nav>

          {/* Right Column: Conexões & Contato */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-white">
              {t.contactTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-[#A1A1A6]">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] rounded-xs"
                  aria-label={`LinkedIn (${language === 'pt' ? 'abre em nova aba' : language === 'es' ? 'se abre en nueva pestaña' : 'opens in new tab'})`}
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px]" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] rounded-xs"
                  aria-label={`X Twitter (${language === 'pt' ? 'abre em nova aba' : language === 'es' ? 'se abre en nueva pestaña' : 'opens in new tab'})`}
                >
                  <span>X (Twitter)</span>
                  <span className="text-[10px]" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] rounded-xs"
                  aria-label={`Instagram (${language === 'pt' ? 'abre em nova aba' : language === 'es' ? 'se abre en nueva pestaña' : 'opens in new tab'})`}
                >
                  <span>Instagram</span>
                  <span className="text-[10px]" aria-hidden="true">↗</span>
                </a>
              </li>
              <li className="pt-1 border-t border-white/10 relative">
                <div className="relative inline-flex items-center">
                  <button
                    id="footer-copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors text-[#2997ff] cursor-pointer text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] rounded-xs"
                    title={t.copyEmailTooltip}
                    aria-label={`${t.copyEmailTooltip}: ${emailAddress}`}
                  >
                    <span>{emailAddress}</span>
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3 h-3 text-[#A1A1A6] group-hover:text-white transition-colors" aria-hidden="true" />
                    )}
                  </button>

                  <span className="sr-only" aria-live="polite">
                    {copied ? t.copiedTooltip : ''}
                  </span>

                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: -26, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-0 -top-1 px-2.5 py-1 rounded-md bg-white text-neutral-900 text-[11px] font-semibold shadow-lg pointer-events-none flex items-center gap-1 z-30 whitespace-nowrap"
                        aria-hidden="true"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{t.copiedTooltip}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff] rounded-xs"
                  aria-label={`${t.whatsappCta} (${language === 'pt' ? 'abre em nova aba' : language === 'es' ? 'se abre en nueva pestaña' : 'opens in new tab'})`}
                >
                  <span>{t.whatsappCta}</span>
                  <span className="text-[10px]" aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p>{t.copyright}</p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer select-none border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={t.backToTop}
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}

export default memo(Footer);
