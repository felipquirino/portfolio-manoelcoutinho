import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { detectUserLanguage, LANGUAGE_STORAGE_KEY } from '../utils/detectLanguage';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = LANGUAGE_STORAGE_KEY;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'pt-BR') {
        return 'pt';
      }
      if (saved === 'en' || saved === 'es') {
        return saved;
      }
      // Check browser language as fast initial heuristic while API resolves
      const browserLang = navigator.language?.toLowerCase() || '';
      if (browserLang.startsWith('es')) return 'es';
      if (browserLang.startsWith('en')) return 'en';
    }
    return 'pt';
  });

  // Automatic language detection via ipapi.co on first visit if no preference was stored yet
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        detectUserLanguage().then((detected) => {
          if (detected === 'pt-BR' || detected === 'pt') {
            setLanguageState('pt');
          } else if (detected === 'es') {
            setLanguageState('es');
          } else if (detected === 'en') {
            setLanguageState('en');
          }
        });
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_KEY, lang === 'pt' ? 'pt-BR' : lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
