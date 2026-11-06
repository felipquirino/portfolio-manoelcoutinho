import { Project, Service, WorkflowStep, FaqItem } from '../types';

export const HERO_AVATAR_URL = '/images/me-img.png';

export const SERVICES_DATA: Service[] = [
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
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
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
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'juris-associados',
    title: 'Juris & Associados',
    category: 'Landing Page • Advocacia',
    year: '2024',
    metric: '+42% conversão',
    description:
      'Landing page institucional de alta conversão para escritório de advocacia premium, focada em captação de clientes qualificados, autoridade jurídica e integração direta com WhatsApp.',
    tags: ['UX Research', 'Figma', 'Low-Code', 'CRO'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaB0qKaunEyp-Mp985TwfeAg-B4w3oX7TOgX_R9w3-XJr42SSpk8pJkw1VjH0CyL015HP7kLy5JHtVFcVSeiPa8-ZpePkmG9W9f8L37y-wJpDh8LijiKlf0QIAQ7yG3DxG_FOwNfyNN0JU5EwMw9OcF24i8ODtv-BibhoYPi_gAsqiekLxksjIKcwQc15SVheO4BKwC1YyKT0l0u3DJB4zhkDZ0aLKykAiyVlJQNCvrN9PPUBfKIiVDA',
    imageAlt: 'Interface do dashboard Aura Banking OS em laptop moderno para Juris & Associados',
    liveUrl: '',
    caseStudyDetails: {
      client: 'Juris & Associados Advocacia Empresarial',
      role: 'Dev & UI/UX Designer Freelancer',
      duration: '2 semanas',
      impact: 'Aumento de 42% na taxa de conversão de agendamentos jurídicos e redução de 65% no bounce rate.',
      highlights: [
        'Arquitetura de informação orientada a sanar objeções jurídicas de clientes de alto padrão',
        'Carregamento em 0.6s através de arquitetura ultra-otimizada em código limpo',
        'Fluxo de qualificação de leads com encaminhamento automatizado para a equipe de triagem',
      ],
    },
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
    caseStudyDetails: {
      client: 'Lumina Audio Hardware Inc.',
      role: 'Dev & Visual Designer Freelancer',
      duration: '3 semanas',
      impact: 'Crescimento de 58% no volume de pré-vendas nas primeiras 72 horas após a publicação.',
      highlights: [
        'Narrativa visual 3D interativa destacando os transdutores e acabamento acústico',
        'Experiência móvel com transições nativas a 60 quadros por segundo',
        'Integração instantânea com gateways de pagamento em 1 clique',
      ],
    },
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
    caseStudyDetails: {
      client: 'Mandato Cidadão & Estratégia Política',
      role: 'Dev & UI/UX Designer Freelancer',
      duration: '10 dias úteis',
      impact: 'Mais de 18.000 cadastros orgânicos de apoiadores e voluntários em um único mês.',
      highlights: [
        'Apresentação clara dos eixos temáticos e projetos de lei com busca instantânea',
        'Mapa interativo de atuação e engajamento regional com micro-comunidades',
        'Total conformidade com diretrizes de acessibilidade WCAG AA',
      ],
    },
  },
];

export const FAQ_DATA: FaqItem[] = [
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
];

export const NAV_LINKS = [
  { label: 'Início', href: '#hero', number: '01' },
  { label: 'Sobre & Trajetória', href: '#sobre', number: '02' },
  { label: 'Metodologia & Fluxo', href: '#processo', number: '03' },
  { label: 'Portfólio Selecionado', href: '#projetos', number: '04' },
  { label: 'Vamos conversar?', href: '#contato', number: '05' },
];
