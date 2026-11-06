import { Language } from '../context/LanguageContext';
import { Project, Service, WorkflowStep, FaqItem, TestimonialItem } from '../types';

export interface Translations {
  nav: {
    menu: string;
    about: string;
    workflow: string;
    projects: string;
    contact: string;
    talkToMe: string;
    language: string;
    darkMode: string;
    lightMode: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaCv: string;
    whatsappMsg: string;
    availableBadge: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    ctaStart: string;
    ctaProjects: string;
    services: Service[];
  };
  workflow: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: WorkflowStep[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    viewSite: string;
    projectsList: Project[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    leadText: string;
    directEmailLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    projectTypeLabel: string;
    projectTypeOptions: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    slaNote: string;
    successTitle: string;
    successDesc: (name: string) => string;
    sendAnotherBtn: string;
    whatsappFastBtn: string;
    errors: {
      nameRequired: string;
      nameMin: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageMin: string;
    };
  };
  footer: {
    authorTitle: string;
    availability: string;
    bio: string;
    navTitle: string;
    navItems: { label: string; href: string }[];
    contactTitle: string;
    copyEmailTooltip: string;
    copiedTooltip: string;
    whatsappCta: string;
    copyright: string;
    backToTop: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    professionalSummaryTitle: string;
    professionalSummary: string;
    coreSkillsTitle: string;
    coreSkills: string[];
    educationTitle: string;
    education: string;
    closeBtn: string;
    downloadBtn: string;
  };
  seo: Record<string, { title: string; description: string; keywords: string }>;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      menu: 'Menu',
      about: 'Sobre',
      workflow: 'Processo',
      projects: 'Projetos',
      contact: 'Contato',
      talkToMe: 'Falar Comigo',
      language: 'Idioma',
      darkMode: 'Modo Escuro',
      lightMode: 'Modo Claro',
    },
    hero: {
      headline: 'Criação de websites de alta performance, UX/UI design estratégico e design visual que geram resultados reais',
      subtitle:
        'Como desenvolvedor e designer freelancer, unifico código limpo, experiência de usuário intuitiva e estética refinada para entregar produtos digitais prontos para escalar e converter.',
      ctaWhatsapp: 'Solicitar Orçamento no WhatsApp',
      ctaCv: 'Visualize meu portfólio',
      whatsappMsg: 'Olá Manoel, vi seu portfólio como dev freelancer e gostaria de um orçamento para o meu projeto.',
      availableBadge: 'Disponível para novos projetos como freelancer',
    },
    about: {
      eyebrow: 'Especialidades & Atuação Freelance',
      heading: 'Engenharia front-end, usabilidade profunda e estética de alto nível em um único profissional.',
      paragraph1:
        'Sem intermediários ou ruídos de comunicação. Você lida diretamente com quem pensa a estratégia de UX, desenha cada detalhe no Figma e desenvolve o código final com máxima performance, responsividade e SEO.',
      paragraph2:
        'Atuo como parceiro técnico sob demanda para founders, marcas e agências que precisam de websites de alto padrão, interfaces complexas simplificadas e design visual que eleva o valor percebido do negócio.',
      ctaStart: 'Iniciar um projeto',
      ctaProjects: 'Ver projetos selecionados',
      services: [
        {
          id: 'websites',
          title: 'Criação de Websites & Landing Pages',
          subtitle: 'Código moderno, velocidade extrema e arquitetura pensada para converter.',
          description:
            'Desenvolvimento web sob medida (React, Next.js, Tailwind, TypeScript ou CMS moderno). Sites 100% responsivos, com excelente pontuação no Google PageSpeed, SEO técnico avançado e estruturados para transformar cliques em vendas.',
          iconType: 'rocket',
        },
        {
          id: 'ui-ux-design',
          title: 'UX/UI Design para Web & Mobile',
          subtitle: 'Interfaces intuitivas que eliminam atritos e encantam seus usuários.',
          description:
            'Pesquisa de usabilidade, mapeamento de jornadas, design systems escaláveis e protótipos navegáveis de alta fidelidade no Figma. Transformo fluxos complexos em experiências simples, naturais e altamente viciantes.',
          iconType: 'layout',
        },
        {
          id: 'design',
          title: 'Design Visual & Identidade de Marca',
          subtitle: 'Posicionamento estético refinado que eleva imediatamente o valor percebido da sua marca.',
          description:
            'Direção de arte digital, tratamento minucioso de imagens de produto, peças publicitárias e assets visuais estratégicos. Uma identidade visual coesa e impactante que gera autoridade imediata frente à concorrência.',
          iconType: 'image',
        },
      ],
    },
    workflow: {
      eyebrow: 'Metodologia Freelance',
      heading: 'Processo ágil, transparente e sem surpresas do início ao deploy.',
      subtitle:
        'Três etapas bem definidas para você acompanhar cada avanço com total clareza e previsibilidade.',
      steps: [
        {
          stepNumber: '01',
          stepLabel: 'Etapa 01',
          title: 'Diagnóstico & Estratégia',
          description: 'Imersão nos seus objetivos de negócio, análise do público e definição do escopo ideal.',
          deliverableTag: 'Escopo Fechado & Cronograma',
          iconType: 'briefing',
        },
        {
          stepNumber: '02',
          stepLabel: 'Etapa 02',
          title: 'UX/UI & Prototipagem',
          description: 'Criação no Figma com protótipos interativos para validação prévia de cada tela e detalhe.',
          deliverableTag: 'Protótipo Interativo Aprovado',
          iconType: 'prototype',
        },
        {
          stepNumber: '03',
          stepLabel: 'Etapa 03',
          title: 'Desenvolvimento & Lançamento',
          description: 'Código limpo, testes de responsividade, conexões de domínio e publicação oficial com suporte.',
          deliverableTag: 'Deploy em Produção & Suporte',
          iconType: 'launch',
        },
      ],
    },
    projects: {
      eyebrow: 'Portfólio Selecionado',
      heading: 'Websites e interfaces desenhados para gerar tração e conversão.',
      subtitle:
        'Estudos de caso reais desenvolvidos de ponta a ponta com código de alta performance e design visual refinado.',
      viewSite: 'Ver site no ar',
      projectsList: [
        {
          id: 'juris-associados',
          title: 'Juris & Associados',
          category: 'Landing Page • Advocacia',
          year: '2024',
          metric: '+42% conversão',
          description:
            'Landing page institucional de alta conversão para escritório de advocacia premium, focada em captação de clientes qualificados, autoridade jurídica e integração direta com WhatsApp.',
          tags: ['UX Research', 'Figma', 'React', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCaB0qKaunEyp-Mp985TwfeAg-B4w3oX7TOgX_R9w3-XJr42SSpk8pJkw1VjH0CyL015HP7kLy5JHtVFcVSeiPa8-ZpePkmG9W9f8L37y-wJpDh8LijiKlf0QIAQ7yG3DxG_FOwNfyNN0JU5EwMw9OcF24i8ODtv-BibhoYPi_gAsqiekLxksjIKcwQc15SVheO4BKwC1YyKT0l0u3DJB4zhkDZ0aLKykAiyVlJQNCvrN9PPUBfKIiVDA',
          imageAlt: 'Interface do dashboard Aura Banking OS em laptop moderno para Juris & Associados',
          liveUrl: '',
        },
        {
          id: 'lumina-sound',
          title: 'Lumina Sound',
          category: 'Landing Page • Produto Físico & E-Commerce',
          year: '2024',
          metric: '+58% vendas',
          description:
            'Landing page de lançamento para produto exclusivo de áudio premium, com narrativa visual imersiva, alta velocidade de carregamento e checkout simplificado.',
          tags: ['Design System', 'Mobile First', 'User Testing', 'Figma'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB6woKqBZr05H2ELipV3xe65p-leuxW9KZM7sjDDslL8yuFdOvTa0PaHDqPOcZA-FWvZLo_S_ZZjWkTRK5UbK8P92MXyTGZtFPlvsl2dfjVNsRD6M_JStMQ3te0fyMrAxZBaTmhaor1TafgKKNky0TtBRiuqOSpxxF9-ZqhFpCr6DlbcGTfwZCNdpWLTM-l3-dONhMPhgS6Q1QqeLWnZZBvduBRrJ9hqeLeHG27jjlsEG0T8YPtc5FbeQ',
          imageAlt: 'E-commerce editorial da Vespera Atelier em iPhone e MacBook para Lumina Sound',
          liveUrl: '',
        },
        {
          id: 'mandato-lideranca',
          title: 'Mandato & Liderança Política',
          category: 'Landing Page • Campanha & Política',
          year: '2024',
          metric: 'Carregamento < 0.8s • Sensorial',
          description:
            'Landing page estratégica para figura pública e campanha eleitoral, estruturada para apresentação de propostas, mobilização de voluntários e captação de apoiadores.',
          tags: ['UX Research', 'Figma', 'Mobile First', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuALES8h06HZco_OFPyTPEQMd6OPUfMsuFnH78Qc9nfvVl1QCCepOFShQs0HwQbWv6QVgSIj1jsPCaEfmNGIoh-I9URXIf0BQBpHovN0EAJhUi_TnkpsyyEL2-26C2OaNpnkI1wBdHVfJKdhMASlVxM093XlyRoRSI7ndSIIzARmo9b75mo8dmbwx75RT2eTuo1ileaxmnbgFiwMASHh88rH9NI8QmCPH0D87yTyGLzjEkf1Qevhm64plQ',
          imageAlt: 'Dashboard de inteligência preditiva Kroma em monitor moderno para Mandato & Liderança',
          liveUrl: '',
        },
      ],
    },
    testimonials: {
      eyebrow: 'DEPOIMENTOS & RESULTADOS',
      heading: 'Resultados reais entregues com agilidade e precisão técnica.',
      subtitle:
        'O que fundadores, diretores e parceiros dizem sobre trabalhar comigo como dev e designer freelancer.',
      items: [
        {
          id: 'rodrigo-albuquerque',
          name: 'Rodrigo Albuquerque',
          role: 'Sócio-Diretor',
          company: 'Juris & Associados',
          initials: 'RA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"A entrega do Manoel foi impecável. Ele cuidou do design e do código com agilidade rara para um freelancer, e o website aumentou nossa taxa de conversão em mais de 40% já no primeiro mês."',
        },
        {
          id: 'camila-silveira',
          name: 'Camila Silveira',
          role: 'Diretora de E-commerce',
          company: 'Lumina Sound',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"Precisávamos de um dev freelancer que compreendesse a estética refinada da nossa marca e entregasse um website ultraveloz. O resultado superou qualquer agência com quem já trabalhamos."',
        },
        {
          id: 'matheus-nogueira',
          name: 'Matheus Nogueira',
          role: 'Fundador & CPO',
          company: 'Startup SaaS',
          initials: 'MN',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"O Manoel unifica UX/UI de ponta com código limpo e moderno. A velocidade de entrega e o cuidado com cada fluxo de usuário economizaram meses de retrabalho do nosso time."',
        },
        {
          id: 'marcio-ramos',
          name: 'Marcio Ramos',
          role: 'CEO & Founder',
          company: 'Nexus Fin',
          initials: 'MR',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"A agilidade do Manoel em entender nossas necessidades de captação e transformar em uma landing page veloz e persuasiva foi impressionante. Nossos leads qualificados dobraram em duas semanas."',
        },
        {
          id: 'carolina-silveira',
          name: 'Carolina Silveira',
          role: 'Head of Product',
          company: 'Vespera Atelier',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"Encontrar um freelancer que una design system completo no Figma com domínio real de front-end é raríssimo. O Manoel entregou tudo pronto, validado e com acabamento de primeiro escalão."',
        },
        {
          id: 'gustavo-albuquerque',
          name: 'Gustavo Albuquerque',
          role: 'Sócio-Diretor',
          company: 'Juris & Associados',
          initials: 'GA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"A comunicação direta, transparência com prazos e o rigor nos detalhes visuais e de código trouxeram total tranquilidade para a nossa equipe. Altamente recomendado."',
        },
      ],
    },
    faq: {
      eyebrow: 'Dúvidas Frequentes',
      heading: 'Tudo o que você precisa saber antes de iniciarmos.',
      subtitle: 'Respostas diretas sobre prazos, escopo, processo de entrega e modelo de contratação freelancer.',
      items: [
        {
          id: 'faq-prazo',
          question: 'Qual é o prazo médio de entrega de um website ou projeto de UX/UI?',
          answer:
            'Landing pages e websites costumam ser entregues entre 5 e 10 dias úteis. Projetos completos de UX/UI para plataformas ou aplicações sob medida têm cronogramas detalhados alinhados no diagnóstico inicial.',
        },
        {
          id: 'faq-entrega',
          question: 'Você entrega o website pronto, publicado e funcionando no ar?',
          answer:
            'Sim! Realizo o ciclo completo: do design das telas no Figma até a codificação final, configuração de domínio próprio, SSL, formulários integrados e publicação no ar.',
        },
        {
          id: 'faq-pagamento',
          question: 'Como funciona a contratação e o pagamento dos serviços freelance?',
          answer:
            'Trabalho com contrato de prestação de serviços com escopo bem definido e emissão de nota fiscal (PJ). O modelo padrão é 50% de sinal para início e 50% na aprovação final antes da entrega.',
        },
        {
          id: 'faq-edicao',
          question: 'Você também faz a parte de design visual e identidade além do código?',
          answer:
            'Com certeza. Um dos meus maiores diferenciais como dev freelancer é unir a sensibilidade de design (UI, tipografia, cores, assets gráficos) com o domínio técnico da programação front-end.',
        },
        {
          id: 'faq-oportunidades',
          question: 'Como funciona a sua disponibilidade para novos projetos?',
          answer:
            'Atendo uma quantidade limitada de projetos simultâneos para garantir dedicação exclusiva, comunicação ágil e entregas com qualidade impecável. Entre em contato para alinharmos o início.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato Direto',
      heading: 'Pronto para acelerar o seu próximo projeto?',
      leadText:
        'Seja para criar um website do zero, desenhar a interface do seu produto (UX/UI) ou refinar a identidade visual da sua marca, vamos conversar.',
      directEmailLabel: 'E-mail Direto',
      nameLabel: 'Nome completo',
      namePlaceholder: 'Ex: Helena Ribeiro',
      emailLabel: 'Seu melhor e-mail',
      emailPlaceholder: 'helena@empresa.com',
      projectTypeLabel: 'Qual serviço você precisa?',
      projectTypeOptions: [
        { value: 'website', label: 'Criação de Website / Landing Page' },
        { value: 'ui-ux', label: 'UX/UI Design (Web & Mobile)' },
        { value: 'design', label: 'Design Visual & Identidade de Marca' },
        { value: 'full-project', label: 'Projeto Completo (Design + Desenvolvimento)' },
        { value: 'outros', label: 'Outro projeto sob demanda' },
      ],
      messageLabel: 'Fale sobre o seu projeto',
      messagePlaceholder: 'Conte um pouco sobre o que você precisa, prazo estimado e objetivos do negócio...',
      submitBtn: 'Falar com Manoel',
      submittingBtn: 'Enviando mensagem...',
      slaNote: 'Resposta em até 24h • Proposta técnica sem compromisso',
      successTitle: 'Mensagem recebida com sucesso!',
      successDesc: (name: string) =>
        `Obrigado pelo contato, ${name}. Analisarei os detalhes do seu projeto e responderei em até 24 horas no e-mail informado.`,
      sendAnotherBtn: 'Enviar outra mensagem',
      whatsappFastBtn: 'Agilizar no WhatsApp ↗',
      errors: {
        nameRequired: 'Por favor, informe seu nome completo.',
        nameMin: 'O nome deve conter pelo menos 2 caracteres.',
        emailRequired: 'Por favor, informe seu e-mail corporativo.',
        emailInvalid: 'Insira um formato de e-mail válido (ex: nome@empresa.com).',
        messageRequired: 'Por favor, compartilhe alguns detalhes sobre o projeto.',
        messageMin: 'A mensagem deve conter pelo menos 10 caracteres.',
      },
    },
    footer: {
      authorTitle: 'Manoel Coutinho',
      availability: 'Disponível para projetos freelance & contratos selecionados',
      bio: 'Desenvolvedor & Designer Freelancer especializado em criação de websites de alta performance, UX/UI intuitivo e design visual estratégico que aceleram negócios.',
      navTitle: 'Navegação',
      navItems: [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre o Autor', href: '#sobre' },
        { label: 'Processo de Trabalho', href: '#processo' },
        { label: 'Projetos Selecionados', href: '#projetos' },
        { label: 'Iniciar Contato', href: '#contato' },
      ],
      contactTitle: 'Conexões & Contato',
      copyEmailTooltip: 'Clique para copiar o e-mail',
      copiedTooltip: 'Copiado!',
      whatsappCta: 'Solicitar Orçamento no WhatsApp',
      copyright: '© 2025 Manoel Coutinho. Desenvolvido e desenhado de forma independente com precisão e simplicidade.',
      backToTop: 'Voltar ao topo',
    },
    cvModal: {
      title: 'Apresentação & Serviços • Manoel Coutinho',
      subtitle: 'Desenvolvedor Web & UI/UX Designer Freelancer',
      professionalSummaryTitle: 'Sobre Minha Atuação Freelance',
      professionalSummary:
        'Atuo de forma autônoma unindo estratégia de produto, design de interfaces e desenvolvimento front-end moderno. Meu compromisso é entregar soluções digitais completas — do conceito visual no Figma ao código final em produção — com velocidade de carregamento, responsividade e foco obsessivo em conversão para founders, marcas e empresas.',
      coreSkillsTitle: 'Principais Especialidades & Stack',
      coreSkills: [
        'Criação de Websites & Landing Pages de Alta Conversão',
        'UX/UI Design & Prototipagem Interativa no Figma',
        'Desenvolvimento Front-End (React, Next.js, TypeScript, Tailwind)',
        'Design Systems Escaláveis & Arquitetura de Informação',
        'Design Visual, Direção de Arte & Identidade de Marca',
        'Otimização de Performance Web (Core Web Vitals & SEO)',
      ],
      educationTitle: 'Diferenciais de Atuação',
      education:
        'Atendimento direto com o desenvolvedor, sem intermediários. Mais de 6 anos de experiência prática em design e tecnologia. Contrato formal de prestação de serviços com emissão de nota fiscal (PJ) e suporte pós-lançamento.',
      closeBtn: 'Fechar',
      downloadBtn: 'Baixar Apresentação (PDF)',
    },
    seo: {
      inicio: {
        title: 'Manoel Coutinho - Dev Freelancer | Criação de Websites, UX/UI & Design',
        description:
          'Desenvolvedor e designer freelancer especializado em criação de websites de alta performance, interfaces intuitivas (UX/UI) e design visual estratégico que aceleram negócios.',
        keywords:
          'Manoel Coutinho, Dev Freelancer, Desenvolvedor Freelancer, Criação de Websites, UX UI Designer, Landing Pages, Figma, React, Web Design, Design Freelancer',
      },
      sobre: {
        title: 'Serviços & Especialidades | Manoel Coutinho - Dev Freelancer',
        description:
          'Serviços de criação de websites, UX/UI design para web e mobile, e design visual estratégico para marcas que buscam alta performance e autoridade.',
        keywords:
          'Serviços Dev Freelancer, Criação de Sites, UX UI Design, Design Visual, Landing Pages alta conversão',
      },
      processo: {
        title: 'Metodologia Freelance & Processo | Manoel Coutinho',
        description:
          'Processo ágil, transparente e direto: Diagnóstico & Estratégia, UX/UI no Figma e Desenvolvimento com Deploy e Suporte.',
        keywords:
          'Metodologia freelancer, processo dev, design figma, desenvolvimento de websites',
      },
      projetos: {
        title: 'Portfólio & Casos de Sucesso | Manoel Coutinho',
        description:
          'Websites e interfaces construídos para gerar tração e conversão real: Juris & Associados, Lumina Sound e projetos sob medida.',
        keywords:
          'Portfólio Dev Freelancer, cases de sucesso, websites de alta conversão, UX UI design',
      },
      faq: {
        title: 'Dúvidas Frequentes & Contratação | Manoel Coutinho',
        description:
          'Respostas diretas sobre prazos de entrega, publicação de websites, modelo de contratação freelance e emissão de NF.',
        keywords:
          'FAQ Dev Freelancer, prazos de entrega websites, orçamento freelance, contrato prestação de serviços',
      },
      contato: {
        title: 'Solicitar Orçamento | Manoel Coutinho - Dev Freelancer',
        description:
          'Entre em contato para solicitar uma proposta sob medida para o seu website, produto digital ou design de marca.',
        keywords:
          'Contato Dev Freelancer, orçamento website, contratar desenvolvedor freelancer, UX UI',
      },
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      about: 'About',
      workflow: 'Workflow',
      projects: 'Projects',
      contact: 'Contact',
      talkToMe: 'Get in Touch',
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    hero: {
      headline: 'High-performance websites, strategic UX/UI design, and visual brand identity that drive measurable growth',
      subtitle:
        'As a freelance developer and designer, I bridge clean code, intuitive user experiences, and refined aesthetics to deliver digital products engineered to scale and convert.',
      ctaWhatsapp: 'Request Quote on WhatsApp',
      ctaCv: 'View my portfolio',
      whatsappMsg: 'Hello Manoel, I saw your portfolio as a freelance developer and would like to request a quote for my project.',
      availableBadge: 'Available for new freelance projects',
    },
    about: {
      eyebrow: 'Specialties & Freelance Services',
      heading: 'Front-end engineering, deep usability, and high-end visual design in a single partner.',
      paragraph1:
        'No middlemen or communication breakdown. You work directly with the specialist who crafts your UX strategy, designs every screen in Figma, and writes the production code with maximum performance, responsiveness, and SEO.',
      paragraph2:
        'I partner on-demand with founders, ambitious brands, and digital agencies that demand top-tier websites, simplified complex interfaces, and visual design that dramatically elevates brand authority.',
      ctaStart: 'Start a project',
      ctaProjects: 'View selected projects',
      services: [
        {
          id: 'websites',
          title: 'Website Creation & Landing Pages',
          subtitle: 'Modern code, blazing-fast speed, and architecture tailored for conversion.',
          description:
            'Bespoke web development (React, Next.js, Tailwind, TypeScript, or modern CMS). 100% responsive, top Google PageSpeed scores, technical SEO, and structured to turn visitors into paying customers.',
          iconType: 'rocket',
        },
        {
          id: 'ui-ux-design',
          title: 'UX/UI Design for Web & Mobile',
          subtitle: 'Intuitive interfaces that remove friction and delight your users.',
          description:
            'Usability research, journey mapping, scalable design systems, and high-fidelity interactive prototypes in Figma. Transforming complex business logic into seamless, natural experiences.',
          iconType: 'layout',
        },
        {
          id: 'design',
          title: 'Visual Design & Brand Identity',
          subtitle: 'Refined aesthetics that immediately elevate your brand’s perceived market value.',
          description:
            'Digital art direction, high-end e-commerce product imagery, marketing collateral, and cohesive visual assets that build instant credibility and stand out from competition.',
          iconType: 'image',
        },
      ],
    },
    workflow: {
      eyebrow: 'Freelance Methodology',
      heading: 'An agile, transparent workflow with zero surprises from kickoff to deploy.',
      subtitle:
        'Three clear, well-defined phases so you can track every step with full confidence and predictability.',
      steps: [
        {
          stepNumber: '01',
          stepLabel: 'Phase 01',
          title: 'Discovery & Strategy',
          description: 'Deep dive into your business goals, target audience, and precise scope definition.',
          deliverableTag: 'Defined Scope & Timeline',
          iconType: 'briefing',
        },
        {
          stepNumber: '02',
          stepLabel: 'Phase 02',
          title: 'UX/UI & Prototyping',
          description: 'Figma interactive prototypes for complete validation of every screen and micro-interaction.',
          deliverableTag: 'Approved Interactive Prototype',
          iconType: 'prototype',
        },
        {
          stepNumber: '03',
          stepLabel: 'Phase 03',
          title: 'Development & Launch',
          description: 'Clean production code, cross-device responsiveness, custom domain setup, and live launch support.',
          deliverableTag: 'Production Deployment & Support',
          iconType: 'launch',
        },
      ],
    },
    projects: {
      eyebrow: 'Featured Projects',
      heading: 'Websites and interfaces engineered to generate real traction and conversion.',
      subtitle:
        'Real-world case studies built end-to-end with high-performance code and meticulous visual craft.',
      viewSite: 'Visit live site',
      projectsList: [
        {
          id: 'juris-associados',
          title: 'Juris & Associates',
          category: 'Landing Page • Legal Practice',
          year: '2024',
          metric: '+42% conversion',
          description:
            'High-converting institutional landing page for a boutique corporate law firm, focused on high-net-worth lead acquisition, legal authority, and direct WhatsApp CRM routing.',
          tags: ['UX Research', 'Figma', 'React', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCaB0qKaunEyp-Mp985TwfeAg-B4w3oX7TOgX_R9w3-XJr42SSpk8pJkw1VjH0CyL015HP7kLy5JHtVFcVSeiPa8-ZpePkmG9W9f8L37y-wJpDh8LijiKlf0QIAQ7yG3DxG_FOwNfyNN0JU5EwMw9OcF24i8ODtv-BibhoYPi_gAsqiekLxksjIKcwQc15SVheO4BKwC1YyKT0l0u3DJB4zhkDZ0aLKykAiyVlJQNCvrN9PPUBfKIiVDA',
          imageAlt: 'Dashboard interface for Juris & Associates corporate law practice',
          liveUrl: '',
        },
        {
          id: 'lumina-sound',
          title: 'Lumina Sound',
          category: 'Landing Page • Hardware & E-Commerce',
          year: '2024',
          metric: '+58% sales',
          description:
            'Product launch landing page for an exclusive acoustic sound system, featuring immersive 3D visual storytelling, lightning-fast load times, and a streamlined 1-click checkout.',
          tags: ['Design System', 'Mobile First', 'User Testing', 'Figma'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB6woKqBZr05H2ELipV3xe65p-leuxW9KZM7sjDDslL8yuFdOvTa0PaHDqPOcZA-FWvZLo_S_ZZjWkTRK5UbK8P92MXyTGZtFPlvsl2dfjVNsRD6M_JStMQ3te0fyMrAxZBaTmhaor1TafgKKNky0TtBRiuqOSpxxF9-ZqhFpCr6DlbcGTfwZCNdpWLTM-l3-dONhMPhgS6Q1QqeLWnZZBvduBRrJ9hqeLeHG27jjlsEG0T8YPtc5FbeQ',
          imageAlt: 'Editorial e-commerce showcase for Lumina Sound on Apple hardware',
          liveUrl: '',
        },
        {
          id: 'mandato-lideranca',
          title: 'Civic Leadership & Campaign',
          category: 'Landing Page • Public Campaign',
          year: '2024',
          metric: 'Load time < 0.8s • Sensory',
          description:
            'Strategic landing page for a public campaign, designed for legislative proposal discovery, volunteer onboarding, and community engagement.',
          tags: ['UX Research', 'Figma', 'Mobile First', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuALES8h06HZco_OFPyTPEQMd6OPUfMsuFnH78Qc9nfvVl1QCCepOFShQs0HwQbWv6QVgSIj1jsPCaEfmNGIoh-I9URXIf0BQBpHovN0EAJhUi_TnkpsyyEL2-26C2OaNpnkI1wBdHVfJKdhMASlVxM093XlyRoRSI7ndSIIzARmo9b75mo8dmbwx75RT2eTuo1ileaxmnbgFiwMASHh88rH9NI8QmCPH0D87yTyGLzjEkf1Qevhm64plQ',
          imageAlt: 'Civic dashboard interface for political leadership and citizen engagement',
          liveUrl: '',
        },
      ],
    },
    testimonials: {
      eyebrow: 'TESTIMONIALS & RESULTS',
      heading: 'Tangible results delivered with agility and engineering precision.',
      subtitle:
        'What founders, directors, and collaborators say about working with me as a freelance developer and designer.',
      items: [
        {
          id: 'rodrigo-albuquerque',
          name: 'Rodrigo Albuquerque',
          role: 'Managing Partner',
          company: 'Juris & Associados',
          initials: 'RA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"Manoel’s delivery was remarkable. He took ownership of design and code with rare agility for a freelancer, and our website boosted consultation conversions by 40% in month one."',
        },
        {
          id: 'camila-silveira',
          name: 'Camila Silveira',
          role: 'E-commerce Director',
          company: 'Lumina Sound',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"We needed a freelance dev who truly understood luxury aesthetics while delivering a blazing-fast, responsive storefront. The outcome surpassed traditional agency work."',
        },
        {
          id: 'matheus-nogueira',
          name: 'Matheus Nogueira',
          role: 'Founder & CPO',
          company: 'Startup SaaS',
          initials: 'MN',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"Manoel unifies top-tier UX/UI with clean React and TypeScript code. His speed of execution and attention to user flows saved our engineering team months of rework."',
        },
        {
          id: 'marcio-ramos',
          name: 'Marcio Ramos',
          role: 'CEO & Founder',
          company: 'Nexus Fin',
          initials: 'MR',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"Manoel’s ability to grasp our acquisition model and turn it into a persuasive, high-converting website was astonishing. Our qualified leads doubled within two weeks."',
        },
        {
          id: 'carolina-silveira',
          name: 'Carolina Silveira',
          role: 'Head of Product',
          company: 'Vespera Atelier',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"Finding a freelancer who bridges comprehensive Figma design systems with real front-end proficiency is rare. Manoel delivered everything fully validated and polished."',
        },
        {
          id: 'gustavo-albuquerque',
          name: 'Gustavo Albuquerque',
          role: 'Partner & Director',
          company: 'Juris & Associados',
          initials: 'GA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"Direct communication, adherence to timelines, and extreme rigor in both code and aesthetics brought total peace of mind to our firm. Highly recommended."',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      heading: 'Everything you need to know before we get started.',
      subtitle: 'Clear answers on timelines, deliverables, workflow, and freelance engagement terms.',
      items: [
        {
          id: 'faq-prazo',
          question: 'What is the average turnaround time for a website or UX/UI project?',
          answer:
            'Landing pages and core business websites typically deliver within 5 to 10 business days. Comprehensive UX/UI systems or bespoke web apps have milestone schedules aligned during the initial diagnosis.',
        },
        {
          id: 'faq-entrega',
          question: 'Do you deliver the website fully built, deployed, and live on the web?',
          answer:
            'Yes! I handle the full cycle: from Figma UI design to clean code implementation, custom domain and SSL setup, integrated forms, and live launch.',
        },
        {
          id: 'faq-pagamento',
          question: 'How do freelance hiring and payments work?',
          answer:
            'We work under a formal service contract with defined scope and business invoice. Standard structure is 50% upfront deposit to initiate sprint and 50% upon final sign-off before delivery.',
        },
        {
          id: 'faq-edicao',
          question: 'Do you also handle visual design and brand identity alongside code?',
          answer:
            'Absolutely. One of my core advantages as a freelance developer is unifying design sensibility (typography, color, UI layouts, visual assets) with deep front-end code execution.',
        },
        {
          id: 'faq-oportunidades',
          question: 'How does your availability work for new projects?',
          answer:
            'I take on a limited number of concurrent projects to ensure dedicated focus, prompt communication, and flawless delivery quality. Get in touch to schedule your launch.',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Contact',
      heading: 'Ready to bring your next digital project to life?',
      leadText:
        'Whether you need a high-performance website built from scratch, intuitive UX/UI design for your digital product, or elevated brand visuals, let’s talk.',
      directEmailLabel: 'Direct Email',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Sarah Jenkins',
      emailLabel: 'Your Best Email',
      emailPlaceholder: 'sarah@company.com',
      projectTypeLabel: 'Which service do you need?',
      projectTypeOptions: [
        { value: 'website', label: 'Website / Landing Page Creation' },
        { value: 'ui-ux', label: 'UX/UI Design (Web & Mobile)' },
        { value: 'design', label: 'Visual Design & Brand Identity' },
        { value: 'full-project', label: 'Full Project (Design + Development)' },
        { value: 'outros', label: 'Other On-Demand Project' },
      ],
      messageLabel: 'Tell me about your project',
      messagePlaceholder: 'Share what you need, estimated timeline, and core business goals...',
      submitBtn: 'Talk to Manoel',
      submittingBtn: 'Sending message...',
      slaNote: 'Response within 24 hours • Free technical proposal',
      successTitle: 'Message successfully sent!',
      successDesc: (name: string) =>
        `Thank you for reaching out, ${name}. I will review your project details and get back to you within 24 hours at the email provided.`,
      sendAnotherBtn: 'Send another message',
      whatsappFastBtn: 'Chat on WhatsApp now ↗',
      errors: {
        nameRequired: 'Please enter your full name.',
        nameMin: 'Name must be at least 2 characters.',
        emailRequired: 'Please enter your work email.',
        emailInvalid: 'Please enter a valid email address (e.g. name@company.com).',
        messageRequired: 'Please share some details about your project.',
        messageMin: 'Message must be at least 10 characters.',
      },
    },
    footer: {
      authorTitle: 'Manoel Coutinho',
      availability: 'Available for freelance projects & select client contracts',
      bio: 'Freelance Developer & Designer specializing in high-performance websites, intuitive UX/UI, and strategic visual design that accelerate business growth.',
      navTitle: 'Navigation',
      navItems: [
        { label: 'Home', href: '#inicio' },
        { label: 'About', href: '#sobre' },
        { label: 'Workflow', href: '#processo' },
        { label: 'Projects', href: '#projetos' },
        { label: 'Contact', href: '#contato' },
      ],
      contactTitle: 'Connect & Contact',
      copyEmailTooltip: 'Click to copy email',
      copiedTooltip: 'Copied!',
      whatsappCta: 'Request Quote on WhatsApp',
      copyright: '© 2025 Manoel Coutinho. Independently designed and coded with precision and simplicity.',
      backToTop: 'Back to top',
    },
    cvModal: {
      title: 'Presentation & Services • Manoel Coutinho',
      subtitle: 'Freelance Web Developer & UI/UX Designer',
      professionalSummaryTitle: 'About My Freelance Practice',
      professionalSummary:
        'I work independently connecting product strategy, interface design, and modern front-end development. My commitment is delivering complete digital solutions — from initial visual concepts in Figma to live production code — with lightning-fast load times, responsive excellence, and an obsessive focus on conversion for founders, brands, and businesses.',
      coreSkillsTitle: 'Core Specialties & Stack',
      coreSkills: [
        'High-Converting Website & Landing Page Creation',
        'UX/UI Design & Interactive Prototyping in Figma',
        'Front-End Development (React, Next.js, TypeScript, Tailwind)',
        'Scalable Design Systems & Information Architecture',
        'Visual Design, Digital Art Direction & Brand Identity',
        'Web Performance Optimization (Core Web Vitals & SEO)',
      ],
      educationTitle: 'Key Differentiators',
      education:
        'Direct collaboration with the developer, no account managers or agency overhead. Over 6 years of hands-on technology and design experience. Formal service contracts with official invoicing and dedicated post-launch support.',
      closeBtn: 'Close',
      downloadBtn: 'Download Presentation (PDF)',
    },
    seo: {
      inicio: {
        title: 'Manoel Coutinho - Freelance Dev | Website Creation, UX/UI & Design',
        description:
          'Freelance web developer and designer specialized in high-performance websites, intuitive UX/UI, and strategic visual design that elevate business results.',
        keywords:
          'Manoel Coutinho, Freelance Developer, Web Developer Freelancer, Website Creation, UX UI Designer, Landing Pages, Figma, React, Web Design',
      },
      sobre: {
        title: 'Services & Specialties | Manoel Coutinho - Freelance Dev',
        description:
          'Specialized services in bespoke website creation, web & mobile UX/UI design, and strategic visual branding for ambitious companies.',
        keywords:
          'Freelance Dev Services, Website Creation, UX UI Design, Visual Design, High converting landing pages',
      },
      processo: {
        title: 'Freelance Methodology & Workflow | Manoel Coutinho',
        description:
          'Agile, transparent 3-step process: Discovery & Strategy, Figma UX/UI, and Clean Code Development with Live Deployment & Support.',
        keywords:
          'Freelance methodology, dev workflow, figma design, website development',
      },
      projetos: {
        title: 'Portfolio & Success Stories | Manoel Coutinho',
        description:
          'Websites and interfaces engineered for real traction and conversion: Juris & Associados, Lumina Sound, and bespoke client projects.',
        keywords:
          'Freelance Developer Portfolio, success stories, high-converting websites, UX UI design',
      },
      faq: {
        title: 'Frequently Asked Questions & Hiring | Manoel Coutinho',
        description:
          'Direct answers on project turnaround times, website publishing, freelance engagement models, and contracting.',
        keywords:
          'Freelance Dev FAQ, website turnaround time, freelance web quote, hire freelance developer',
      },
      contato: {
        title: 'Request a Quote | Manoel Coutinho - Freelance Dev',
        description:
          'Get in touch to request a tailored proposal for your next website, digital product, or brand design.',
        keywords:
          'Contact Freelance Developer, website quote, hire web developer freelancer, UX UI',
      },
    },
  },
  es: {
    nav: {
      menu: 'Menú',
      about: 'Sobre mí',
      workflow: 'Proceso',
      projects: 'Proyectos',
      contact: 'Contacto',
      talkToMe: 'Hablemos',
      language: 'Idioma',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
    },
    hero: {
      headline: 'Diseño estratégico de interfaces y landing pages que venden y fidelizan usuarios',
      subtitle:
        'Desarrollo Landing Pages enfocadas en conversión, prototipos de apps/sitios intuitivos y edición visual de alto impacto para destacar tu marca.',
      ctaWhatsapp: 'Pedir Presupuesto en WhatsApp',
      ctaCv: 'Ver mi portafolio',
      whatsappMsg: 'Hola Manoel, me gustaría solicitar un presupuesto para mi proyecto.',
      availableBadge: 'Disponible para nuevos proyectos & contratos',
    },
    about: {
      eyebrow: 'Especialidades & Soluciones',
      heading: 'Servicios especializados enfocados en resultados y usabilidad.',
      paragraph1:
        'Combinando rigor visual, ingeniería low-code y mejores prácticas de UX para crear productos digitales eficientes, rápidos y listos para convertir.',
      paragraph2:
        'Dedicación integral tanto para fundadores que buscan lanzar productos de alto impacto como para equipos tecnológicos que requieren un diseñador versátil y orientado a métricas.',
      ctaStart: 'Iniciar un proyecto',
      ctaProjects: 'Ver proyectos seleccionados',
      services: [
        {
          id: 'landing-pages',
          title: 'Landing Pages de Alta Conversión (Low-Code)',
          subtitle: 'Tu propuesta presentada de forma impecable y lista para generar clientes potenciales.',
          description:
            'Desarrollo de extremo a extremo: del wireframe al código final low-code. Páginas ultrarrápidas, responsivas y optimizadas para convertir visitantes en clientes.',
          iconType: 'rocket',
        },
        {
          id: 'ui-ux-design',
          title: 'Diseño UI/UX para Apps & Sitios Web',
          subtitle: 'Interfaces funcionales que ofrecen la mejor experiencia de usuario.',
          description:
            'Creación de prototipos navegables, design systems escalables y arquitectura de información clara para SaaS, software y aplicaciones móviles.',
          iconType: 'layout',
        },
        {
          id: 'image-editing',
          title: 'Edición & Tratamiento de Imágenes',
          subtitle: 'Identidad visual sólida y acabados de primer nivel para productos y campañas.',
          description:
            'Manipulación gráfica, retoque fotográfico de productos y producción de activos visuales para potenciar el valor percibido de tu marca.',
          iconType: 'image',
        },
      ],
    },
    workflow: {
      eyebrow: 'Cómo trabajamos',
      heading: 'Proceso ágil, transparente y orientado a resultados de alto impacto.',
      subtitle:
        'Tres fases claras y minimalistas para transformar tu idea en un producto impecable.',
      steps: [
        {
          stepNumber: '01',
          stepLabel: 'Etapa 01',
          title: 'Alineación & Briefing',
          description: 'Comprensión profunda de tu audiencia y objetivos de negocio.',
          deliverableTag: 'Definición de Alcance & Métricas',
          iconType: 'briefing',
        },
        {
          stepNumber: '02',
          stepLabel: 'Etapa 02',
          title: 'Prototipado & Validación',
          description: 'Aprobación interactiva de la estructura, UX y UI antes de la entrega final.',
          deliverableTag: 'Diseño Interactivo & Pruebas',
          iconType: 'prototype',
        },
        {
          stepNumber: '03',
          stepLabel: 'Etapa 03',
          title: 'Entrega & Lanzamiento',
          description: 'Archivos organizados, código en producción y soporte activo.',
          deliverableTag: 'Despliegue & Soporte Activo',
          iconType: 'launch',
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos Destacados',
      heading: 'Interfaces construidas para escala, retención y absoluta claridad.',
      subtitle:
        'Estudios de caso completos combinando prototipado interactivo y tecnologías modernas de producción.',
      viewSite: 'Ver sitio en vivo',
      projectsList: [
        {
          id: 'juris-associados',
          title: 'Juris & Asociados',
          category: 'Landing Page • Servicios Jurídicos',
          year: '2024',
          metric: '+42% conversión',
          description:
            'Landing page institucional de alta conversión para firma jurídica corporativa, enfocada en captación de clientes cualificados, autoridad legal e integración directa con WhatsApp.',
          tags: ['UX Research', 'Figma', 'Low-Code', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCaB0qKaunEyp-Mp985TwfeAg-B4w3oX7TOgX_R9w3-XJr42SSpk8pJkw1VjH0CyL015HP7kLy5JHtVFcVSeiPa8-ZpePkmG9W9f8L37y-wJpDh8LijiKlf0QIAQ7yG3DxG_FOwNfyNN0JU5EwMw9OcF24i8ODtv-BibhoYPi_gAsqiekLxksjIKcwQc15SVheO4BKwC1YyKT0l0u3DJB4zhkDZ0aLKykAiyVlJQNCvrN9PPUBfKIiVDA',
          imageAlt: 'Interfaz de dashboard para Juris & Asociados',
          liveUrl: '',
        },
        {
          id: 'lumina-sound',
          title: 'Lumina Sound',
          category: 'Landing Page • Producto Físico & E-Commerce',
          year: '2024',
          metric: '+58% ventas',
          description:
            'Landing page de lanzamiento para sistema de sonido premium, con narrativa visual inmersiva, máxima velocidad de carga y checkout optimizado.',
          tags: ['Design System', 'Mobile First', 'User Testing', 'Figma'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB6woKqBZr05H2ELipV3xe65p-leuxW9KZM7sjDDslL8yuFdOvTa0PaHDqPOcZA-FWvZLo_S_ZZjWkTRK5UbK8P92MXyTGZtFPlvsl2dfjVNsRD6M_JStMQ3te0fyMrAxZBaTmhaor1TafgKKNky0TtBRiuqOSpxxF9-ZqhFpCr6DlbcGTfwZCNdpWLTM-l3-dONhMPhgS6Q1QqeLWnZZBvduBRrJ9hqeLeHG27jjlsEG0T8YPtc5FbeQ',
          imageAlt: 'E-commerce editorial de Lumina Sound en dispositivos Apple',
          liveUrl: '',
        },
        {
          id: 'mandato-lideranca',
          title: 'Mandato & Liderazgo Político',
          category: 'Landing Page • Campaña & Política',
          year: '2024',
          metric: 'Carga < 0.8s • Sensorial',
          description:
            'Landing page estratégica para figura pública y campaña electoral, estructurada para exposición de propuestas, movilización voluntaria y captación de partidarios.',
          tags: ['UX Research', 'Figma', 'Mobile First', 'CRO'],
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuALES8h06HZco_OFPyTPEQMd6OPUfMsuFnH78Qc9nfvVl1QCCepOFShQs0HwQbWv6QVgSIj1jsPCaEfmNGIoh-I9URXIf0BQBpHovN0EAJhUi_TnkpsyyEL2-26C2OaNpnkI1wBdHVfJKdhMASlVxM093XlyRoRSI7ndSIIzARmo9b75mo8dmbwx75RT2eTuo1ileaxmnbgFiwMASHh88rH9NI8QmCPH0D87yTyGLzjEkf1Qevhm64plQ',
          imageAlt: 'Dashboard para Mandato & Liderazgo Político',
          liveUrl: '',
        },
      ],
    },
    testimonials: {
      eyebrow: 'TESTIMONIOS Y RESULTADOS',
      heading: 'Confianza construida con entregas de alto impacto y claridad.',
      subtitle:
        'Lo que dicen socios y clientes sobre la velocidad, calidad visual y resultados generados en sus proyectos.',
      items: [
        {
          id: 'rodrigo-albuquerque',
          name: 'Rodrigo Albuquerque',
          role: 'Socio Director',
          company: 'Juris & Associados',
          initials: 'RA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"La Landing Page desarrollada por Manoel aumentó nuestra tasa de conversión en más de un 40% en las dos primeras semanas. La agilidad en las entregas superó cualquier expectativa."',
        },
        {
          id: 'camila-silveira',
          name: 'Camila Silveira',
          role: 'Directora de E-commerce',
          company: 'Lumina Sound',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"Necesitábamos lanzar una marca de lujo con narrativa atractiva y checkout veloz. El diseño quedó impecable y nos permitió iterar rápido sin fricción técnica."',
        },
        {
          id: 'matheus-nogueira',
          name: 'Matheus Nogueira',
          role: 'Fundador & CPO',
          company: 'Startup SaaS',
          initials: 'MN',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"Excelente capacidad de sintetizar flujos complejos en interfaces limpias y responsivas. Un profesional con visión de producto y código de primer nivel."',
        },
        {
          id: 'marcio-ramos',
          name: 'Marcio Ramos',
          role: 'CEO & Founder',
          company: 'Nexus Fin',
          initials: 'MR',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"La rapidez con la que Manoel entendió nuestro modelo y lo transformó en una Landing Page de altísima conversión fue impresionante. Duplicamos la captación de clientes."',
        },
        {
          id: 'carolina-silveira',
          name: 'Carolina Silveira',
          role: 'Head of Product',
          company: 'Vespera Atelier',
          initials: 'CS',
          avatarVariant: 'neutral',
          rating: 5,
          quote:
            '"Rara vez encontramos profesionales con sensibilidad estética refinada y dominio de código. El design system entregado ahorró meses de retrabajo."',
        },
        {
          id: 'gustavo-albuquerque',
          name: 'Gustavo Albuquerque',
          role: 'Socio Director',
          company: 'Juris & Associados',
          initials: 'GA',
          avatarVariant: 'blue',
          rating: 5,
          quote:
            '"La entrega de punta a punta nos brindó tranquilidad total. La claridad en la comunicación, el cumplimiento de plazos y el cuidado visual elevaron nuestra marca."',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas Frecuentes',
      heading: 'Preguntas Frecuentes.',
      subtitle: 'Respuestas directas sobre plazos, alcance del proyecto, entrega y modelos de contratación.',
      items: [
        {
          id: 'faq-prazo',
          question: '¿Cuál es el plazo medio de entrega de una Landing Page o proyecto?',
          answer:
            'El plazo varía según la complejidad. Una Landing Page suele entregarse entre 5 y 10 días hábiles. Los proyectos completos de UI/UX para apps/sitios se alinean en la sesión inicial de briefing.',
        },
        {
          id: 'faq-entrega',
          question: '¿Entregas la Landing Page ya publicada y lista para operar?',
          answer:
            'Sí. Realizo la entrega de extremo a extremo: desde el diseño en Figma hasta la implementación low-code completa, responsiva, vinculada a tu dominio y con formularios activos.',
        },
        {
          id: 'faq-pagamento',
          question: '¿Cómo funciona el pago para proyectos independientes?',
          answer:
            'Normalmente trabajamos con un anticipo del 50% al iniciar y 50% tras la aprobación final y despliegue del proyecto, con respaldo de contrato y facturación.',
        },
        {
          id: 'faq-edicao',
          question: '¿Qué cubre el servicio de Edición y Retoque de Imágenes?',
          answer:
            'Incluye tratamiento de fotografías de producto para e-commerce, manipulación digital avanzada, corrección de color y creación de banners optimizados para campañas publicitarias.',
        },
        {
          id: 'faq-oportunidades',
          question: '¿También estás disponible para oportunidades laborales continuas (equipos/remoto)?',
          answer:
            'Sí. Trabajo tanto como profesional independiente por proyecto como integrado en equipos de producto, diseño y desarrollo de software.',
        },
      ],
    },
    contact: {
      eyebrow: '¿Hacemos realidad tu idea?',
      heading: '¿Listo para darle vida a tu próximo proyecto?',
      leadText:
        'Ya sea para construir una nueva landing page, rediseñar un producto digital o sumar un diseñador estratégico a tu equipo, conversemos.',
      directEmailLabel: 'Correo Directo',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej: Elena Romero',
      emailLabel: 'Correo corporativo',
      emailPlaceholder: 'elena@empresa.com',
      projectTypeLabel: 'Tipo de proyecto',
      projectTypeOptions: [
        { value: 'mvp', label: 'Diseño & Desarrollo de MVP' },
        { value: 'design-system', label: 'Estructuración de Design System' },
        { value: 'redesign', label: 'Rediseño de Producto Existente' },
        { value: 'low-code', label: 'Implementación Webflow / Framer' },
        { value: 'consultoria', label: 'Consultoría de UX/UI' },
      ],
      messageLabel: 'Sobre el proyecto',
      messagePlaceholder: 'Comparte brevemente el alcance, cronograma estimado y principales objetivos...',
      submitBtn: 'Hablar con Manoel',
      submittingBtn: 'Enviando...',
      slaNote: 'Respuesta en menos de 24h • Sin compromiso',
      successTitle: '¡Mensaje enviado con éxito!',
      successDesc: (name: string) =>
        `Muchas gracias por comunicarte, ${name}. Analizaré los detalles de tu proyecto y te responderé en un plazo máximo de 24 horas al correo indicado.`,
      sendAnotherBtn: 'Enviar otro mensaje',
      whatsappFastBtn: 'Agilizar por WhatsApp ↗',
      errors: {
        nameRequired: 'Por favor, ingresa tu nombre completo.',
        nameMin: 'El nombre debe contener al menos 2 caracteres.',
        emailRequired: 'Por favor, ingresa tu correo corporativo.',
        emailInvalid: 'Ingresa un formato de correo válido (ej: nombre@empresa.com).',
        messageRequired: 'Por favor, comparte algunos detalles sobre el proyecto.',
        messageMin: 'El mensaje debe tener al menos 10 caracteres.',
      },
    },
    footer: {
      authorTitle: 'Manoel Coutinho',
      availability: 'Disponible para nuevos proyectos & contratos freelance',
      bio: 'Product Designer & Low-Code Developer especializado en crear interfaces de alto impacto, landing pages que convierten y experiencias digitales memorables.',
      navTitle: 'Navegación',
      navItems: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Sobre el Autor', href: '#sobre' },
        { label: 'Proceso de Trabajo', href: '#processo' },
        { label: 'Proyectos Seleccionados', href: '#projetos' },
        { label: 'Iniciar Contacto', href: '#contato' },
      ],
      contactTitle: 'Conexiones & Contacto',
      copyEmailTooltip: 'Haz clic para copiar el correo',
      copiedTooltip: '¡Copiado!',
      whatsappCta: 'Pedir Presupuesto en WhatsApp',
      copyright: '© 2025 Manoel Coutinho. Diseñado y programado con obsesión por la simplicidad y precisión.',
      backToTop: 'Volver arriba',
    },
    cvModal: {
      title: 'Currículum • Manoel Coutinho',
      subtitle: 'Product Designer & Low-Code Developer',
      professionalSummaryTitle: 'Resumen Profesional',
      professionalSummary:
        'Especialista en diseño de producto (UI/UX) con más de 6 años de experiencia creando interfaces enfocadas en alta conversión, retención y claridad. Combinando un dominio técnico profundo de Figma y Design Systems con ejecución en React, TypeScript y herramientas modernas de Low-Code.',
      coreSkillsTitle: 'Competencias Principales',
      coreSkills: [
        'UI/UX Design & Wireframing',
        'Design Systems Escalables',
        'Landing Pages de Alta Conversión',
        'React, Next.js, Tailwind CSS',
        'Figma Avanzado & Prototipado',
        'CRO & Optimización de Embudos',
      ],
      educationTitle: 'Educación & Certificaciones',
      education:
        'Licenciatura en Diseño Digital • Certificación en Nielsen Norman Group UX • Certificación en Frontend React & TypeScript.',
      closeBtn: 'Cerrar',
      downloadBtn: 'Descargar / Imprimir PDF',
    },
    seo: {
      inicio: {
        title: 'Manoel Coutinho - Portafolio | Diseño de Interfaces & Landing Pages',
        description:
          'Diseño estratégico de interfaces e landing pages que venden y fidelizan usuarios. Portafolio profesional de Manoel Coutinho, UX/UI Designer y Low-Code Developer.',
        keywords:
          'Manoel Coutinho, UI UX Designer, Landing Pages, Low-code Developer, Figma, React, Prototipado, Diseño Web, Portafolio',
      },
      sobre: {
        title: 'Especialidades & Soluciones | Manoel Coutinho - UX/UI & Low-Code',
        description:
          'Servicios especializados en Landing Pages de alta conversión, diseño UI/UX para plataformas web y SaaS, y edición fotográfica de productos.',
        keywords:
          'Servicios UX UI, Landing Pages alta conversion, Diseño de Interfaces, Low-Code, Retoque de imagen producto, Design System',
      },
      processo: {
        title: 'Metodología & Proceso de Trabajo | Manoel Coutinho',
        description:
          'Proceso ágil y transparente en 3 etapas: Alineación & Briefing, Prototipado & Validación en Figma, y Despliegue en Producción Low-Code.',
        keywords:
          'Proceso de diseño, metodología UX, flujo ágil, prototipado figma, briefing producto digital, despliegue low-code',
      },
      projetos: {
        title: 'Proyectos Destacados & Casos de Estudio | Manoel Coutinho',
        description:
          'Interfaces construidas para escala, retención y claridad: Juris & Asociados (+42% conversión), Lumina Sound (+58% ventas) y Mandato Político.',
        keywords:
          'Casos de estudio UX UI, portafolio landing pages, casos de éxito, Juris y Asociados, Lumina Sound, interface design cases',
      },
      faq: {
        title: 'Preguntas Frecuentes & Plazos | Manoel Coutinho',
        description:
          'Respuestas directas sobre plazos de entrega (5 a 10 días hábiles), publicación integral, esquemas de pago y contratación.',
        keywords:
          'FAQ portafolio diseñador, plazo de entrega landing page, presupuesto landing page figma, contratar diseñador freelance',
      },
      contato: {
        title: 'Solicitar Presupuesto & Contacto | Manoel Coutinho',
        description:
          '¿Listo para darle vida a tu próximo proyecto? Envía un mensaje con los detalles del alcance y recibe respuesta en menos de 24 horas.',
        keywords:
          'Contacto diseñador, solicitar presupuesto landing page, contratar diseñador UX UI, hablar por whatsapp presupuesto',
      },
    },
  },
};
