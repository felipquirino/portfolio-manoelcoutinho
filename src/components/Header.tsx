import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, TrendingUp, Briefcase, Mail, ArrowUpRight, Sun, Moon, Globe, LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, Language } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const LANGUAGE_OPTIONS: { id: Language; label: string; fullLabel: string }[] = [
  { id: 'pt', label: 'PT-BR', fullLabel: 'Português (Brasil)' },
  { id: 'en', label: 'EN', fullLabel: 'English' },
  { id: 'es', label: 'ES', fullLabel: 'Español' },
];

interface NavigationItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  onClick: (href: string) => void;
}

// Memoized NavigationItem to prevent re-renders when theme or unrelated state toggles
const NavigationItem = memo(function NavigationItem({
  href,
  label,
  icon: Icon,
  onClick,
}: NavigationItemProps) {
  return (
    <a
      href={href}
      role="menuitem"
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-900 dark:text-[#f5f5f7] hover:bg-[#f4f3f8] dark:hover:bg-white/5 focus-visible:bg-[#f4f3f8] dark:focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors duration-150 cursor-pointer"
    >
      <span>{label}</span>
      <Icon className="w-4 h-4 text-neutral-400 dark:text-[#a1a1aa]" aria-hidden="true" />
    </a>
  );
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuNavRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = TRANSLATIONS[language]?.nav || TRANSLATIONS.pt.nav;

  // Memoized navigation items list to prevent re-instantiation across re-renders
  const navItems = useMemo(
    () => [
      { href: '#sobre', label: t.about, icon: ArrowDown },
      { href: '#processo', label: t.workflow, icon: TrendingUp },
      { href: '#projetos', label: t.projects, icon: Briefcase },
      { href: '#contato', label: t.contact, icon: Mail },
    ],
    [t.about, t.workflow, t.projects, t.contact]
  );

  // Focus management & keyboard navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Handle Tab key focus trap inside menu
      if (event.key === 'Tab' && menuNavRef.current) {
        const focusableElements = menuNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === menuButtonRef.current) {
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

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);

      // Auto focus the first element in dropdown when opened with keyboard
      const timer = setTimeout(() => {
        if (menuNavRef.current) {
          const firstFocusable = menuNavRef.current.querySelector<HTMLElement>(
            'a[href], button:not([disabled])'
          );
          firstFocusable?.focus();
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMenuOpen]);

  const handleLinkClick = useCallback((href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const menuToggleLabel = useMemo(() => {
    if (isMenuOpen) {
      return language === 'pt'
        ? 'Fechar menu de navegação'
        : language === 'es'
        ? 'Cerrar menú de navegación'
        : 'Close navigation menu';
    }
    return language === 'pt'
      ? 'Abrir menu de navegação'
      : language === 'es'
      ? 'Abrir menú de navegación'
      : 'Open navigation menu';
  }, [isMenuOpen, language]);

  const brandLabel = useMemo(() => {
    return language === 'pt'
      ? 'Manoel Coutinho - Ir para o início da página'
      : language === 'es'
      ? 'Manoel Coutinho - Ir al inicio de la página'
      : 'Manoel Coutinho - Go to top of page';
  }, [language]);

  const langGroupLabel = useMemo(() => {
    return language === 'pt'
      ? 'Selecionar idioma'
      : language === 'es'
      ? 'Seleccionar idioma'
      : 'Select language';
  }, [language]);

  const themeSwitchLabel = useMemo(() => {
    if (theme === 'dark') {
      return language === 'pt'
        ? `${t.darkMode} ativado. Pressione para alternar para ${t.lightMode}`
        : language === 'es'
        ? `${t.darkMode} activado. Presione para cambiar a ${t.lightMode}`
        : `${t.darkMode} active. Press to switch to ${t.lightMode}`;
    }
    return language === 'pt'
      ? `${t.lightMode} ativado. Pressione para alternar para ${t.darkMode}`
      : language === 'es'
      ? `${t.lightMode} activado. Presione para cambiar a ${t.darkMode}`
      : `${t.lightMode} active. Press to switch to ${t.darkMode}`;
  }, [theme, language, t.darkMode, t.lightMode]);

  return (
    <>
      {/* FLOATING BRAND MARK (Left Pill Button) */}
      <div className="fixed top-6 left-6 md:left-10 z-50 pointer-events-auto">
        <a
          id="brand-logo"
          href="#inicio"
          aria-label={brandLabel}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#inicio');
          }}
          className="text-sm font-semibold tracking-tight flex items-center gap-0.5 px-3.5 py-1.5 rounded-full bg-white/75 dark:bg-[#18181b]/80 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 hover:bg-white dark:hover:bg-[#202024] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-all duration-300 select-none cursor-pointer text-neutral-900 dark:text-white"
        >
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            Manoel Coutinho
          </span>
          <span className="text-[#0071e3] dark:text-[#2997ff] font-bold" aria-hidden="true">.</span>
        </a>
      </div>

      {/* MINIMALIST FLOATING DROPDOWN MENU (Right Pill Button & Dropdown) */}
      <div
        ref={menuRef}
        className="fixed top-6 right-6 md:right-10 z-50 pointer-events-auto flex flex-col items-end"
      >
        <button
          ref={menuButtonRef}
          id="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="dropdown-menu"
          aria-haspopup="menu"
          aria-label={menuToggleLabel}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 hover:bg-white dark:hover:bg-[#202024] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] active:scale-95 transition-all duration-200 cursor-pointer text-neutral-900 dark:text-white select-none"
        >
          <span className="text-xs sm:text-sm font-medium tracking-tight text-neutral-900 dark:text-white">
            {t.menu}
          </span>
          <div className="w-4 h-3 flex flex-col justify-between items-center relative" aria-hidden="true">
            <span
              className={`w-4 h-[1.5px] bg-neutral-900 dark:bg-white rounded-full transition-transform duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[5.25px]' : ''
              }`}
            />
            <span
              className={`w-3 h-[1.5px] bg-neutral-900/70 dark:bg-white/70 rounded-full transition-opacity duration-200 group-hover:w-4 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-neutral-900 dark:bg-white rounded-full transition-transform duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[5.25px]' : ''
              }`}
            />
          </div>
        </button>

        {/* Dropdown Card */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              ref={menuNavRef}
              id="dropdown-menu"
              role="menu"
              aria-label={t.menu}
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 w-64 rounded-2xl bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.7)] p-2 flex flex-col gap-1 origin-top-right border border-black/[0.03] dark:border-white/10 text-left z-50"
            >
              {/* Navigation Items (Memoized) */}
              <div role="none" className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavigationItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    onClick={handleLinkClick}
                  />
                ))}
              </div>

              <div className="h-px bg-black/[0.04] dark:bg-white/10 my-1" role="separator" aria-hidden="true" />

              {/* Language Selector in Menu */}
              <div className="px-3 py-2 flex flex-col gap-1.5" role="none">
                <div className="flex items-center justify-between text-[11px] font-medium text-neutral-500 dark:text-[#a1a1aa] px-1">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-neutral-400 dark:text-[#a1a1aa]" aria-hidden="true" />
                    <span>{t.language}</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#0071e3] dark:text-[#2997ff]" aria-hidden="true">
                    {language === 'pt' ? 'PT-BR' : language === 'en' ? 'EN' : 'ES'}
                  </span>
                </div>

                {/* 3-Way Segmented Language Radio Group */}
                <div
                  id="language-toggle-group"
                  role="radiogroup"
                  aria-label={langGroupLabel}
                  className="grid grid-cols-3 p-1 rounded-xl bg-neutral-100 dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.08] relative"
                >
                  {LANGUAGE_OPTIONS.map((opt) => {
                    const isSelected = language === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role="radio"
                        id={`lang-btn-${opt.id}`}
                        onClick={() => setLanguage(opt.id)}
                        aria-checked={isSelected}
                        aria-label={`${opt.fullLabel} (${opt.label})`}
                        title={opt.fullLabel}
                        className={`relative z-10 py-1.5 text-center text-xs font-semibold rounded-lg transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] ${
                          isSelected
                            ? 'text-neutral-900 dark:text-white'
                            : 'text-neutral-500 dark:text-[#a1a1aa] hover:text-neutral-900 dark:hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="active-lang-pill"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            className="absolute inset-0 bg-white dark:bg-[#2997ff]/25 dark:border dark:border-[#2997ff]/50 rounded-lg shadow-2xs"
                            aria-hidden="true"
                          />
                        )}
                        <span className="relative z-10">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-black/[0.04] dark:bg-white/10 my-0.5" role="separator" aria-hidden="true" />

              {/* Theme Toggle Switch Button in Menu */}
              <div role="none" className="p-0.5">
                <button
                  id="theme-toggle-btn"
                  type="button"
                  role="switch"
                  aria-checked={theme === 'dark'}
                  aria-label={themeSwitchLabel}
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-800 dark:text-[#f5f5f7] hover:bg-[#f4f3f8] dark:hover:bg-white/5 focus-visible:bg-[#f4f3f8] dark:focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors duration-150 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2.5">
                    {theme === 'dark' ? (
                      <Moon className="w-4 h-4 text-[#2997ff]" aria-hidden="true" />
                    ) : (
                      <Sun className="w-4 h-4 text-amber-500" aria-hidden="true" />
                    )}
                    <span>{theme === 'dark' ? t.darkMode : t.lightMode}</span>
                  </div>

                  {/* Animated toggle pill switch */}
                  <div
                    aria-hidden="true"
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                      theme === 'dark' ? 'bg-[#2997ff]' : 'bg-neutral-300'
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={`w-4 h-4 rounded-full bg-white shadow-xs ${
                        theme === 'dark' ? 'ml-auto' : 'mr-auto'
                      }`}
                    />
                  </div>
                </button>
              </div>

              <div className="h-px bg-black/[0.04] dark:bg-white/10 my-1" role="separator" aria-hidden="true" />

              <a
                href="#contato"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contato');
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white bg-[#0071e3] dark:bg-[#2997ff] hover:opacity-95 focus-visible:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-opacity cursor-pointer shadow-2xs"
              >
                <span>{t.talkToMe}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default memo(Header);
