import { memo, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  metric: string;
  imageUrl: string;
  imageAlt: string;
  liveUrl: string;
  tags: string[];
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  viewSiteText: string;
}

// Memoized ProjectCard to prevent re-renders when language or theme toggles
const ProjectCard = memo(function ProjectCard({ project, index, viewSiteText }: ProjectCardProps) {
  return (
    <motion.article
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="max-w-5xl mx-auto w-full group rounded-2xl relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)] transition-all duration-300 border border-black/[0.04] dark:border-white/[0.08] aspect-[16/11] md:aspect-[16/9]"
    >
      {/* Image Background */}
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 pointer-events-none" />

      {/* Top Meta Badges (hidden on mobile) */}
      <div className="hidden md:flex absolute top-4 left-4 right-4 z-20 items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#18181b]/80 backdrop-blur-xl border border-white/60 dark:border-white/15 shadow-sm pointer-events-auto">
          <span className="text-xs font-semibold text-neutral-900 dark:text-white">
            {project.category}
          </span>
          <span className="text-xs text-neutral-500 dark:text-[#a1a1aa]">
            • {project.year}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 dark:bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium pointer-events-auto">
          <span className="text-[#0071e3] dark:text-[#2997ff] font-bold">
            {project.metric.split(' ')[0]}
          </span>
          <span>{project.metric.split(' ').slice(1).join(' ')}</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
        <div className="max-w-2xl text-white space-y-1">
          {/* Tech Tags (hidden on mobile) */}
          <div className="hidden md:flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl lg:text-[28px] text-white font-bold tracking-tight mb-1 group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
            {project.title}
          </h3>
          {/* Description (hidden on mobile) */}
          <p className="hidden md:block text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>

        {/* Action Link Button */}
        <div className="flex-shrink-0 pt-2 md:pt-0">
          <motion.a
            id={`btn-view-project-${project.id}`}
            href={project.liveUrl || ''}
            target={project.liveUrl ? '_blank' : undefined}
            rel={project.liveUrl ? 'noopener noreferrer' : undefined}
            onClick={(e) => {
              if (!project.liveUrl) {
                e.preventDefault();
              }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-900 hover:bg-[#e5e5e7] active:scale-95 text-xs sm:text-sm font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-200 cursor-pointer"
          >
            <span>{viewSiteText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
});

function Projects() {
  const { language } = useLanguage();
  const t = useMemo(() => TRANSLATIONS[language]?.projects || TRANSLATIONS.pt.projects, [language]);

  // useMemo for project card elements to prevent unnecessary re-renders
  const renderedProjectCards = useMemo(() => {
    return t.projectsList.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        index={index}
        viewSiteText={t.viewSite}
      />
    ));
  }, [t.projectsList, t.viewSite]);

  return (
    <section
      id="projetos"
      className="w-full py-20 md:py-28 bg-[#f9f9fb] dark:bg-[#0e0f13] text-left transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
        >
          <div className="max-w-2xl">
            <span
              id="projects-eyebrow"
              className="text-xs font-semibold tracking-wider uppercase text-[#0059b5] dark:text-[#2997ff] mb-1.5 block"
            >
              {t.eyebrow}
            </span>
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight"
            >
              {t.heading}
            </h2>
          </div>
          <p
            id="projects-subtitle"
            className="text-sm md:text-[15px] text-neutral-600 dark:text-[#a1a1aa] max-w-xs leading-relaxed"
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Stack / Curated Cards */}
        <div className="flex flex-col gap-8 md:gap-12">
          {renderedProjectCards}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
