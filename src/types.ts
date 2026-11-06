export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
  caseStudyDetails?: {
    client: string;
    role: string;
    duration: string;
    impact: string;
    highlights: string[];
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: 'rocket' | 'layout' | 'image';
}

export interface WorkflowStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  deliverableTag: string;
  iconType: 'briefing' | 'prototype' | 'launch';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  avatarVariant?: 'blue' | 'neutral';
  rating?: number;
}

export interface FloatingBadge {
  id: string;
  name: string;
  position: {
    mobile: string;
    desktop: string;
  };
  animationOffset: number;
}
