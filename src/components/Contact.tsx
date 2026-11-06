import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  message: boolean;
}

export default function Contact() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language]?.contact || TRANSLATIONS.pt.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'mvp',
    message: '',
  });

  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  // Field validation rules using current language strings
  const validateField = (field: 'name' | 'email' | 'message', value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === 'name') {
      if (!trimmed) return t.errors.nameRequired;
      if (trimmed.length < 2) return t.errors.nameMin;
    }
    if (field === 'email') {
      if (!trimmed) return t.errors.emailRequired;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return t.errors.emailInvalid;
      }
    }
    if (field === 'message') {
      if (!trimmed) return t.errors.messageRequired;
      if (trimmed.length < 10) return t.errors.messageMin;
    }
    return undefined;
  };

  // Run full validation across all fields
  const validateAll = (data = formData): FormErrors => {
    const newErrors: FormErrors = {};
    const nameErr = validateField('name', data.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField('email', data.email);
    if (emailErr) newErrors.email = emailErr;

    const msgErr = validateField('message', data.message);
    if (msgErr) newErrors.message = msgErr;

    return newErrors;
  };

  const handleInputChange = (
    field: 'name' | 'email' | 'message',
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const currentErrors = validateAll();
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      if (currentErrors.name) {
        document.getElementById('name')?.focus();
      } else if (currentErrors.email) {
        document.getElementById('email')?.focus();
      } else if (currentErrors.message) {
        document.getElementById('message')?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'mvp',
      message: '',
    });
    setTouched({
      name: false,
      email: false,
      message: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  const requiredNotice =
    language === 'pt'
      ? 'campo obrigatório'
      : language === 'es'
      ? 'campo obligatorio'
      : 'required field';

  const newTabNotice =
    language === 'pt'
      ? 'abre em nova aba'
      : language === 'es'
      ? 'se abre en nueva pestaña'
      : 'opens in new tab';

  return (
    <section
      id="contato"
      className="w-full py-24 md:py-32 bg-white dark:bg-[#0e0f13] text-left transition-colors duration-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Editorial Context */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span
                id="contact-eyebrow"
                className="text-xs font-semibold tracking-wider uppercase text-[#0059b5] dark:text-[#2997ff] mb-2 block"
              >
                {t.eyebrow}
              </span>
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 leading-snug"
              >
                {t.heading}
              </h2>
              <p
                id="contact-lead-text"
                className="text-neutral-600 dark:text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-6"
              >
                {t.leadText}
              </p>

              {/* Direct Contact Link */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-neutral-400 dark:text-[#a1a1aa]/80 font-semibold block mb-1">
                  {t.directEmailLabel}
                </span>
                <a
                  href="mailto:contato@devportfolio.com"
                  className="text-base sm:text-lg text-[#0059b5] dark:text-[#2997ff] hover:text-[#0071e3] dark:hover:text-[#2997ff]/80 font-medium inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] rounded-xs"
                >
                  <span>contato@devportfolio.com</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Social Links Pill Cluster */}
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-white dark:bg-white/[0.06] text-xs sm:text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.12] transition-colors shadow-xs border border-neutral-200/60 dark:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]"
                  aria-label={`LinkedIn (${newTabNotice})`}
                >
                  <span>LinkedIn</span>
                  <span className="ml-1 text-[11px]" aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-white dark:bg-white/[0.06] text-xs sm:text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.12] transition-colors shadow-xs border border-neutral-200/60 dark:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]"
                  aria-label={`GitHub (${newTabNotice})`}
                >
                  <span>GitHub</span>
                  <span className="ml-1 text-[11px]" aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-white dark:bg-white/[0.06] text-xs sm:text-sm font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.12] transition-colors shadow-xs border border-neutral-200/60 dark:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]"
                  aria-label={`Twitter (${newTabNotice})`}
                >
                  <span>Twitter</span>
                  <span className="ml-1 text-[11px]" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Refined Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white dark:bg-white/[0.04] dark:backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-black/[0.04] dark:border-white/[0.08]"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-state"
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-4 focus:outline-none"
                >
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-2xs border border-emerald-500/20" aria-hidden="true">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {t.successTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    {t.successDesc(formData.name)}
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-white text-xs font-medium hover:bg-neutral-200 dark:hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors cursor-pointer"
                    >
                      {t.sendAnotherBtn}
                    </button>
                    <a
                      href="https://wa.me/5511999999999?text=Ol%C3%A1%20Manoel,%20acabei%20de%20enviar%20uma%20mensagem%20no%20formul%C3%A1rio%20sobre%20o%20projeto."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-black dark:hover:bg-[#e5e5e7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-colors cursor-pointer"
                      aria-label={`${t.whatsappFastBtn} (${newTabNotice})`}
                    >
                      <span>{t.whatsappFastBtn}</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form
                  id="portfolio-contact-form"
                  noValidate
                  onSubmit={handleSubmit}
                  aria-label={t.heading}
                  className="flex flex-col gap-4 text-left"
                >
                  {/* Nome completo */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium flex items-center gap-1"
                    >
                      <span>{t.nameLabel}</span>
                      <span className="text-red-500 font-bold" aria-hidden="true">*</span>
                      <span className="sr-only">({requiredNotice})</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('name', e.target.value)
                      }
                      onBlur={() => handleBlur('name')}
                      placeholder={t.namePlaceholder}
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                      className={`w-full h-12 px-4 rounded-full bg-neutral-100 dark:bg-white/[0.05] dark:backdrop-blur-xl text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#71717a] text-xs sm:text-sm border shadow-[0_2px_12px_rgba(0,0,0,0.04)] focus:outline-none focus-visible:outline-none transition-all duration-200 ${
                        touched.name && errors.name
                          ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus-visible:ring-2 focus-visible:ring-red-400'
                          : 'border-neutral-200 dark:border-white/[0.1] focus:bg-white dark:focus:bg-white/[0.08] focus:border-[#0071e3]/40 dark:focus:border-white/[0.2] focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.p
                          id="name-error"
                          role="alert"
                          aria-live="assertive"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-1 text-[11px] text-red-500 font-medium ml-3 mt-0.5"
                        >
                          <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* E-mail corporativo */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium flex items-center gap-1"
                    >
                      <span>{t.emailLabel}</span>
                      <span className="text-red-500 font-bold" aria-hidden="true">*</span>
                      <span className="sr-only">({requiredNotice})</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('email', e.target.value)
                      }
                      onBlur={() => handleBlur('email')}
                      placeholder={t.emailPlaceholder}
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                      className={`w-full h-12 px-4 rounded-full bg-neutral-100 dark:bg-white/[0.05] dark:backdrop-blur-xl text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#71717a] text-xs sm:text-sm border shadow-[0_2px_12px_rgba(0,0,0,0.04)] focus:outline-none focus-visible:outline-none transition-all duration-200 ${
                        touched.email && errors.email
                          ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus-visible:ring-2 focus-visible:ring-red-400'
                          : 'border-neutral-200 dark:border-white/[0.1] focus:bg-white dark:focus:bg-white/[0.08] focus:border-[#0071e3]/40 dark:focus:border-white/[0.2] focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.p
                          id="email-error"
                          role="alert"
                          aria-live="assertive"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-1 text-[11px] text-red-500 font-medium ml-3 mt-0.5"
                        >
                          <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tipo de projeto */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="project-type"
                      className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium"
                    >
                      {t.projectTypeLabel}
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-full bg-neutral-100 dark:bg-[#18181c] text-neutral-900 dark:text-white text-xs sm:text-sm border border-neutral-200 dark:border-white/[0.1] shadow-inner focus:outline-none focus-visible:outline-none focus:bg-white dark:focus:bg-[#1f2026] focus:border-[#0071e3]/40 dark:focus:border-white/[0.2] focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff] transition-all duration-200 cursor-pointer"
                    >
                      {t.projectTypeOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-white dark:bg-[#18181c] text-neutral-900 dark:text-white"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sobre o projeto */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium flex items-center gap-1"
                    >
                      <span>{t.messageLabel}</span>
                      <span className="text-red-500 font-bold" aria-hidden="true">*</span>
                      <span className="sr-only">({requiredNotice})</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      value={formData.message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleInputChange('message', e.target.value)
                      }
                      onBlur={() => handleBlur('message')}
                      placeholder={t.messagePlaceholder}
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                      className={`w-full p-4 rounded-2xl bg-neutral-100 dark:bg-white/[0.05] dark:backdrop-blur-xl text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-[#71717a] text-xs sm:text-sm border shadow-inner focus:outline-none focus-visible:outline-none transition-all duration-200 resize-none ${
                        touched.message && errors.message
                          ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus-visible:ring-2 focus-visible:ring-red-400'
                          : 'border-neutral-200 dark:border-white/[0.1] focus:bg-white dark:focus:bg-white/[0.08] focus:border-[#0071e3]/40 dark:focus:border-white/[0.2] focus:ring-2 focus:ring-[#0071e3] dark:focus:ring-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-[#2997ff]'
                      }`}
                    />
                    <AnimatePresence>
                      {touched.message && errors.message && (
                        <motion.p
                          id="message-error"
                          role="alert"
                          aria-live="assertive"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-1 text-[11px] text-red-500 font-medium ml-3 mt-0.5"
                        >
                          <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit Area */}
                  <div className="pt-2 flex flex-col items-center">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm shadow-[0_8px_20px_rgba(26,27,31,0.1)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:bg-black dark:hover:bg-[#e5e5e7] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0071e3] dark:focus-visible:ring-white transition-all duration-200 cursor-pointer disabled:opacity-70"
                    >
                      <span>{isSubmitting ? t.submittingBtn : t.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <p className="text-xs text-neutral-500 dark:text-[#a1a1aa]/80 text-center mt-2.5">
                      {t.slaNote}
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
