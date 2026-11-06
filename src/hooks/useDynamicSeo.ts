import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function useDynamicSeo() {
  const { language } = useLanguage();
  const currentSectionRef = useRef<string>('inicio');
  const langRef = useRef<string>(language);

  useEffect(() => {
    langRef.current = language;
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;

    // Helper to get or create a meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to update canonical tag
    const setCanonicalTag = (hash: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      const baseUrl = window.location.origin + window.location.pathname;
      link.setAttribute('href', hash ? `${baseUrl}#${hash}` : baseUrl);
    };

    const updateSeo = (sectionId: string, force = false) => {
      const sectionMap = TRANSLATIONS[language]?.seo || TRANSLATIONS.pt.seo;
      const seo = sectionMap[sectionId] || sectionMap.inicio;
      if (!seo) return;

      if (!force && currentSectionRef.current === sectionId && document.title === seo.title) {
        return;
      }
      currentSectionRef.current = sectionId;

      // 1. Dynamic Title
      document.title = seo.title;

      // 2. Standard Meta Description & Keywords
      setMetaTag('name', 'description', seo.description);
      setMetaTag('name', 'keywords', seo.keywords);

      // 3. Open Graph Tags
      setMetaTag('property', 'og:title', seo.title);
      setMetaTag('property', 'og:description', seo.description);

      // 4. Twitter Card Tags
      setMetaTag('name', 'twitter:title', seo.title);
      setMetaTag('name', 'twitter:description', seo.description);

      // 5. Canonical Link
      setCanonicalTag(sectionId === 'inicio' ? '' : sectionId);
    };

    // Update immediately on mount or when language changes
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && ['inicio', 'sobre', 'processo', 'projetos', 'faq', 'contato'].includes(initialHash)) {
      updateSeo(initialHash, true);
    } else {
      updateSeo(currentSectionRef.current || 'inicio', true);
    }

    const sectionIds = ['inicio', 'sobre', 'processo', 'projetos', 'faq', 'contato'];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight * 0.35;

          let activeSection = 'inicio';

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                activeSection = id;
              }
            }
          }

          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
            activeSection = 'contato';
          }

          updateSeo(activeSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['inicio', 'sobre', 'processo', 'projetos', 'faq', 'contato'].includes(hash)) {
        updateSeo(hash);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [language]);
}
