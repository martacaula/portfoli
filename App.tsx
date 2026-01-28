
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Ticket, Globe, Zap, Music, MapPin, Menu, X, Calendar, Play, ChevronLeft, ChevronRight, ArrowLeft, Camera, Layers, Cpu, Volume2, VolumeX, ArrowRight, Activity, Terminal, Briefcase, Workflow, Maximize2, ExternalLink, Eye, Image as ImageIcon, Languages, ShieldCheck, ShieldAlert, UserCheck, Timer, Target, Users, Lightbulb, TrendingUp, HelpCircle, GraduationCap, Waves, Coffee, Camera as CameraIcon, CheckCircle2, FileText, Instagram, Linkedin, Github } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ArtistCard from './components/ArtistCard';
import AIChat from './components/AIChat';
import TorrentAnimation from './components/TorrentAnimation';
import ToolAquarium from './components/ToolAquarium';
import TorrentStack from './components/TorrentStack';
import TorrentGallery from './components/TorrentGallery';
import { Artist as Work } from './types';

type Language = 'en' | 'es' | 'ca';

const TRANSLATIONS = {
  en: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(projects) mossfera x quant, internship at kave home",
    gallery: "Gallery",
    tfg: "FINAL DEGREE PROJECT",
    iteration: "Iteration 2025",
    designSprint: "Design Sprint",
    methodology: "Digital products evolved via TORRENT methodology.",
    viewMethod: "View Method",
    whoAmI: "Who AM I",
    aboutIntro: "Creative & Surfer focused on high-velocity innovation.",
    aboutBio: "I am currently finishing my BA in Visual Communication and Multimedia at ERAM University School (UdG). My perspective was recently expanded by a 6-month Erasmus at Copenhagen Business School (CBS).",
    workExp: "Diverse professional path: waitress since 18, underwater photographer, and studio photographer at Kave Home. I handle projects with full professionalism.",
    surferText: "Energetic, determined, and ready to develop my full potential.",
    iterateDeployRefine: "Observe. Capture. Iterate.",
    vision: "Creative Core",
    engine: "High Velocity",
    threeBranches: "Three Branches I work with",
    designBranch: "Design & Identity",
    designList: ["UI/UX Experience Systems", "Branding & Strategy"],
    visualBranch: "Visual Arts",
    visualList: ["Studio Photography", "Underwater Capture"],
    digitalBranch: "Digital Transformation",
    digitalList: ["AI TORRENT Integration", "Digital Product Dev"],
    ecosystemTitle: "Creative Ecosystem",
    method: "The Method",
    methodText: "TORRENT is a specialized, highly adaptive framework for digital innovation.",
    coachTitle: "THE COACH EXPERIENCE",
    coachText: "A TORRENT sprint is not just a tool; it's a coached journey. Professional guidance manages adaptive timelines and ensures AI acceleration is balanced with human criteria.",
    framework: "The Cognitive Framework",
    frameworkText: "TORRENT is a specialized digital product development method tailored for high-output creative departments.",
    statusReady: "Status: Ready",
    analyze: "[ANALYZE]",
    analyzeText: "Distilling product-market fit via node scanning.",
    iterate: "[ITERATE]",
    iterateText: "Generating 25+ layout variations instantly.",
    initialize: "Initialize Protocol",
    narrative: "The Narrative",
    challenge: "Challenge",
    outcome: "Outcome",
    launchPreview: "Launch Prototype",
    lineupFeed: "The Waves Feed",
    returnHome: "Return Home",
    gallerySubtitle: "A visual journey through my lens",
    exitEnvironment: "Exit Environment",
    project: "PROJECT",
    methodTitle: "DIGITAL PRODUCT DEVELOPMENT METHOD",
    forCreative: "FOR CREATIVE DEPARTMENTS",
    nextWork: "Next Work",
    problemAnalysis: "Problem / Insight",
    solutionTitle: "The Solution",
    personaTitle: "User Persona",
    metricsTitle: "Success Metrics",
    taskTitle: "Your Task",
    takeOnTitle: "Give us your take on",
    note: "Note",
    sideCardButton: "View Case Study",
    yourTaskPreLine: "Strategic Exploration",
    yourTaskQuestion: "What would make this experience effortless for people?",
    yourTaskReframe: "Turn complexity into a guided, human pace.",
    takeOnQuestions: ["Is the value obvious in 10 seconds?", "What creates daily habit?", "Where does trust fail first?"],
    takeOnNote: "Decisions prioritize clarity over noise.",
    problemTensions: ["Depth vs Speed", "Signal vs Noise", "Craft vs Scale"],
    personaName: "The Explorer",
    personaOneLiner: "Curious, fast-moving, and allergic to friction.",
    personaNeeds: ["Clear entry point", "Fast feedback loops", "Trustable outcomes"],
    solutionName: "Focused Experience Loop",
    solutionParagraph: "A concise narrative arc that moves users from curiosity to confident action with minimal steps.",
    solutionPhrases: ["Frictionless start", "Human verified AI", "Contextual delivery"],
    nextStepsLabel: "Next Steps",
    successMetricsLabel: "Success Metrics",
    nextSteps: ["Beta testing", "Tone fine-tuning", "Accessibility audit"],
    successMetrics: ["Daily active users", "Completion rate", "Conversion to premium"]
  },
  es: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(proyectos) mossfera x quant, prácticas en kave home",
    gallery: "Galería",
    tfg: "PROYECTO DE FINAL DE GRADO",
    iteration: "Iteration 2025",
    designSprint: "Design Sprint",
    methodology: "Productos digitales evolucionados mediante la metodología TORRENT.",
    viewMethod: "Ver Método",
    whoAmI: "Quién SOY",
    aboutIntro: "Creativa y surfista enfocada en la innovación de alta velocidad.",
    aboutBio: "Terminando mi Grado en Comunicación Visual y Multimedia en la Escuela Universitaria ERAM (UdG). Erasmus de 6 meses en la Copenhagen Business School (CBS).",
    workExp: "Trayectoria profesional diversa: camarera desde los 18, fotógrafa submarina y de estudio en Kave Home. Gestión profesional de proyectos.",
    surferText: "Enérgica, decidida y lista para desarrollar todo mi potencial.",
    iterateDeployRefine: "Observar. Capturar. Iterar.",
    vision: "Núcleo Creativo",
    engine: "Alta Velocidad",
    threeBranches: "Tres Ramas con las que trabajo",
    designBranch: "Diseño e Identidad",
    designList: ["Sistemas de Experiencia UI/UX", "Branding y Estrategia"],
    visualBranch: "Artes Visuales",
    visualList: ["Fotografía de Estudio", "Captura Submarina"],
    digitalBranch: "Transformación Digital",
    digitalList: ["Integración AI TORRENT", "Desarrollo de Producto"],
    ecosystemTitle: "Ecosistema Creativo",
    method: "El Método",
    methodText: "TORRENT es un marco especializado para la innovación digital.",
    coachTitle: "LA EXPERIENCIA CON COACH",
    coachText: "Un sprint TORRENT es un viaje guiado. El acompañamiento profesional asegura que la aceleración de la IA se equilibre con el criterio creativo humano.",
    framework: "El Marco Cognitivo",
    frameworkText: "TORRENT es un método de desarrollo de productos digitales especializado para departamentos creativos de alto rendimiento.",
    statusReady: "Estado: Listo",
    analyze: "[ANALIZAR]",
    analyzeText: "Destilando el ajuste producto-mercado.",
    iterate: "[ITERAR]",
    iterateText: "Generando más de 25 variaciones al instante.",
    initialize: "Initialize Protocol",
    narrative: "La Narrativa",
    challenge: "Desafío",
    outcome: "Resultado",
    launchPreview: "Lanzar Prototipo",
    lineupFeed: "Feed de The Waves",
    returnHome: "Volver a Inicio",
    gallerySubtitle: "Un viaje visual a través de mi mirada",
    exitEnvironment: "Salir del Entorno",
    project: "PROYECTO",
    methodTitle: "MÉTODO DE DESENVOLUPAMENT DE PRODUCTES DIGITALS",
    forCreative: "PARA DEPARTAMENTOS CREATIVOS",
    nextWork: "Siguiente Trabajo",
    problemAnalysis: "Problema / Insight",
    solutionTitle: "La Solución",
    personaTitle: "User Persona",
    metricsTitle: "Métricas de Éxito",
    taskTitle: "Tu Tarea",
    takeOnTitle: "Danos tu opinión sobre",
    note: "Nota",
    sideCardButton: "Ver Caso",
    yourTaskPreLine: "Exploración estratégica",
    yourTaskQuestion: "¿Qué haría que esta experiencia fuese effortless para las personas?",
    yourTaskReframe: "Convertir la complejidad en un ritmo guiado y humano.",
    takeOnQuestions: ["¿El valor es obvio en 10 segundos?", "¿Qué genera hábito diario?", "¿Dónde falla primero la confianza?"],
    takeOnNote: "Las decisiones priorizan la claridad sobre el ruido.",
    problemTensions: ["Profundidad vs Velocidad", "Señal vs Ruido", "Artesanía vs Escala"],
    personaName: "La Exploradora",
    personaOneLiner: "Curiosa, rápida y alérgica a la fricción.",
    personaNeeds: ["Punto de entrada claro", "Feedback rápido", "Resultados confiables"],
    solutionName: "Bucle de experiencia enfocado",
    solutionParagraph: "Un arco narrativo conciso que mueve a las personas de la curiosidad a la acción con pasos mínimos.",
    solutionPhrases: ["Inicio sin fricción", "IA verificada por humanos", "Entrega contextual"],
    nextStepsLabel: "Próximos pasos",
    successMetricsLabel: "Métricas de éxito",
    nextSteps: ["Beta testing", "Ajuste de tono", "Auditoría de accesibilidad"],
    successMetrics: ["Usuarios activos diarios", "Tasa de finalización", "Conversión a premium"]
  },
  ca: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(projectes) mossfera x quant, pràctiques a kave home",
    gallery: "Galeria",
    tfg: "TREBALL FINAL DE GRAU",
    iteration: "Iteració 2025",
    designSprint: "Design Sprint",
    methodology: "Productes digitals evolucionats mitjançant la metodologia TORRENT.",
    viewMethod: "Veure Mètode",
    whoAmI: "Qui SÓC",
    aboutIntro: "Creativa i surfista enfocada en la innovació d'alta velocitat.",
    aboutBio: "Acabant el meu Grau en Comunicació Visual i Multimèdia a l'Escola Universitària ERAM (UdG). Erasmus de 6 mesos a l'Copenhagen Business School (CBS).",
    workExp: "Trajectòria profesional diversa: cambrera des dels 18, fotògrafa submarina i d'estudi a Kave Home. Gestió professional de projectes.",
    surferText: "Enèrgica, decidida i llista per desenvolupar tot el meu potencial.",
    iterateDeployRefine: "Observar. Capturar. Iterar.",
    vision: "Nucli Creatiu",
    engine: "Alta Velocidad",
    threeBranches: "Tres Branques amb les que treballo",
    designBranch: "Disseny i Identitat",
    designList: ["Sistemes d'Experiència UI/UX", "Brànding i Estratègia"],
    visualBranch: "Arts Visuals",
    visualList: ["Fotografia d'Estudi", "Captura Submarina"],
    digitalBranch: "Transformació Digital",
    digitalList: ["Integración AI TORRENT", "Desenvolupament de Producte"],
    ecosystemTitle: "Ecosistema Creatiu",
    method: "El Mètode",
    methodText: "TORRENT és un marc especialitzat per a la innovació digital.",
    coachTitle: "L'EXPERIÈNCIA AMB COACH",
    coachText: "Un sprint TORRENT és un viatge guiat. L'acompanyament profesional assegura que l'acceleració de la IA s'equilibri amb el criteri creatiu humà.",
    framework: "El Marco Cognitivu",
    frameworkText: "TORRENT és un mètode de desenvolupament de productes digitals especialitzat per a departaments creatius d'alt rendiment.",
    statusReady: "Estat: Llest",
    analyze: "[ANALITZAR]",
    analyzeText: "Destil·lant l'ajust producte-mercat.",
    iterate: "[ITERAR]",
    iterateText: "Generant més de 25 variacions al instante.",
    initialize: "Inicialitzar Protocol",
    narrative: "La Narrativa",
    challenge: "Repte",
    outcome: "Resultat",
    launchPreview: "Llançar Prototip",
    lineupFeed: "Feed de The Waves",
    returnHome: "Tornar a l'Inici",
    gallerySubtitle: "Un viatge visual a través de la meva mirada",
    exitEnvironment: "Sortir de l'Entorno",
    project: "PROJECTE",
    methodTitle: "MÈTODE DE DESENVOLUPAMENT DE PRODUCTES DIGITALS",
    forCreative: "PER A DEPARTAMENTS CREATIUS",
    nextWork: "Següent Treball",
    problemAnalysis: "Problema / Insight",
    solutionTitle: "La Solució",
    personaTitle: "User Persona",
    metricsTitle: "Mètriques d'Èxit",
    taskTitle: "La teva tasca",
    takeOnTitle: "Dona'ns la teva visió sobre",
    note: "Nota",
    sideCardButton: "Veure Cas",
    yourTaskPreLine: "Exploració estratègica",
    yourTaskQuestion: "Què faria que aquesta experiència fos effortless per a les persones?",
    yourTaskReframe: "Convertir la complexitat en un ritme guiat i humà.",
    takeOnQuestions: ["El valor és obvi en 10 segons?", "Què genera hàbit diari?", "On falla primer la confiança?"],
    takeOnNote: "Les decisions prioritzen la claredat per sobre del soroll.",
    problemTensions: ["Profunditat vs Velocitat", "Senyal vs Soroll", "Artesania vs Escala"],
    personaName: "L'Exploradora",
    personaOneLiner: "Curiosa, ràpida i al·lèrgica a la fricció.",
    personaNeeds: ["Punt d'entrada clar", "Feedback ràpid", "Resultats fiables"],
    solutionName: "Bucle d'experiència enfocat",
    solutionParagraph: "Un arc narratiu concís que mou les persones de la curiositat a l'acció amb passos mínims.",
    solutionPhrases: ["Inici sense fricció", "IA verificada per humans", "Entrega contextual"],
    nextStepsLabel: "Següents passos",
    successMetricsLabel: "Mètriques d'èxit",
    nextSteps: ["Beta testing", "Ajust de to", "Auditoria d'accessibilitat"],
    successMetrics: ["Usuaris actius diaris", "Taxa de finalització", "Conversió a premium"]
  }
};

interface MultilangWork extends Work {
  longDescription: { en: string; es: string; ca: string };
  subtitle?: { en: string; es: string; ca: string };
  challenge: { en: string; es: string; ca: string };
  outcome: { en: string; es: string; ca: string };
  mediaType?: 'image' | 'video';
  content?: Partial<Record<Language, Partial<WorkContent>>>;
}

const lineupAssets = (
  import.meta as ImportMeta & {
    glob: (pattern: string, options: { eager: true; import: 'default' }) => Record<string, string>;
  }
).glob('./Assets/**/*.{jpg,JPG,jpeg,png}', { eager: true, import: 'default' });

const findLineupAsset = (suffix: string) =>
  Object.entries(lineupAssets).find(([path]) => path.endsWith(suffix))?.[1] ?? '';

const buildFolderAssets = (folderName: string) =>
  Object.entries(lineupAssets)
    .filter(([path]) => path.includes(`/Assets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, url]) => url);

const LINEUP_IMAGES = {
  reconnect: findLineupAsset('Assets/reconnectmedia/Captura de pantalla 2026-01-28 a las 13.23.06.png'),
  ditmad: findLineupAsset('Assets/ditmadmedia/heroditmad.jpg'),
  redcross: findLineupAsset('Assets/redcrossmedia/heroredcross.png'),
  moss: findLineupAsset('Assets/mossmedia/heromoss.jpg'),
  kave: findLineupAsset('Assets/kavehomeinternship/herokave.jpg'),
  neety: findLineupAsset('Assets/neetymedia/heroneety.png'),
  strenes: findLineupAsset('Assets/strenesmedia/herostrenes.png'),
};

const LINEUP_LOGS: Record<string, string[]> = {
  '1': buildFolderAssets('reconnectmedia'),
  '2': buildFolderAssets('ditmadmedia'),
  '3': buildFolderAssets('redcrossmedia'),
  '4': buildFolderAssets('mossmedia'),
  '6': buildFolderAssets('kavehomeinternship'),
  '8': buildFolderAssets('neetymedia'),
  '9': buildFolderAssets('strenesmedia'),
};

const WORKS: MultilangWork[] = [
  {
    id: '1',
    name: 'RE:CONNECT',
    genre: 'Digital Product Design',
    day: 'Politiken',
    year: 'Nov 2025',
    image: LINEUP_IMAGES.reconnect,
    description: 'AI-powered daily news briefings.',
    subtitle: {
      en: 'AI-powered daily news briefings that make Politiken effortless for students today and valuable tomorrow.',
      es: 'Resúmenes de noticias diarios impulsados por IA que hacen que Politiken sea fácil para los estudiantes hoy y valioso mañana.',
      ca: 'Briefings de notícies diaris impulsats per IA que fan que Politiken sigui fàcil per als estudiants d\'avui i valuós per als de demà.'
    },
    challenge: {
      en: 'BRIDGING THE GAP BETWEEN PREMIUM JOURNALISM AND STUDENT NEWS HABITS.',
      es: 'CERRAR LA BRECHA ENTRE EL PERIODISMO PREMIUM Y LOS HÁBITOS DE NOTICIAS DE LOS ESTUDIANTES.',
      ca: 'TANCAR L\'ESCLETXA ENTRE EL PERIODISME PREMIUM I ELS HÀBITS DE NOTÍCIES DELS ESTUDIANTS.'
    },
    outcome: {
      en: 'A focused, single-feature concept that increases daily engagement through personalized audio digests.',
      es: 'Un concepto centrado en una única funcionalidad que aumenta el compromiso diario mediante resúmenes de audio personalizados.',
      ca: 'Un concepte centrat en una única funcionalitat que augmenta el compromís diari mitjançant resums d\'àudio personalitzats.'
    },
    longDescription: {
      en: 'Re:Connect rethinks how Politiken is consumed across devices by turning long-form, premium journalism into short, curated audio briefings. Personalized by interests and age, it builds a daily habit for students.',
      es: 'Re:Connect replantea cómo se consume Politiken al convertir el periodismo premium en resúmenes de audio breves.',
      ca: 'Re:Connect replanteja com es consumeix Politiken en convertir el periodisme premium en resums d\'àudio breus.'
    },
    content: {
      en: {
        hero: {
          title: 'Politiken Re:Connect | Voice-First Morning Brief',
          subtitle: 'A flagship habit that proves premium value before payment.',
          narrative: 'In a 2-day sprint, we reframed Politiken\'s youth challenge around attention, trust, and daily rhythm. The concept is a 5 to 10 minute audio brief built for wake-up and commute, with a student on-ramp to reduce friction early.'
        },
        sideCard: {
          challenge: 'Print loss was not converting to digital, youth appeal felt limited, and app usage was estimated around 15 to 20% with discovery gated by subscription. Competitors won mornings with faster daily summaries, while product sprawl risked dilution.',
          outcome: 'A converged flagship concept with a clear scope boundary, plus an intended prototype and test plan to validate habit and trust.',
          buttonLabel: 'View Concept One-Pager'
        },
        yourTask: {
          preLine: 'Design for a real morning moment.',
          question: 'What is the smallest daily experience that makes Politiken feel worth coming back to?',
          reframe: 'If we can win 10 minutes a day, what should the brief include and exclude? How do we prove quality before we ask for payment?'
        },
        takeOn: {
          questions: [
            'What would make you opt in to a daily audio brief tomorrow morning?',
            'Which topics belong in the default brief, and which should be optional?',
            'What trust signals matter most for AI-supported summaries and voice Q&A?',
            'Where should the student on-ramp live: app, campus partnerships, or both?',
            'What is the one thing that would make this feel premium, not just convenient?'
          ],
          note: ''
        },
        problem: {
          insight: 'Younger readers commit to premium when it fits their routine and proves value with minimal friction.',
          tensions: [
            'Depth of journalism vs 5 to 10 minute consumption',
            'Paywall protection vs discovery and habit formation',
            'One flagship experience vs pressure to ship many features'
          ]
        },
        persona: {
          title: 'Time-Pressed Student Reader',
          oneLiner: 'Mobile-first, price-sensitive, and high trust expectations, with a preference for short audio and offline access.',
          needs: [
            'A brief that respects limited time',
            'Clear quality and credibility cues',
            'A low-friction student pathway (trial, partners)'
          ]
        },
        solution: {
          title: 'AI Morning News Brief',
          paragraph: 'A voice-first daily brief that opens from a timed notification, delivers curated summaries, and supports follow-up questions grounded in Politiken journalism. The experience stays intentionally narrow to protect quality and repeat use.',
          definingPhrases: [
            'Voice-first 5 to 10 minute brief',
            'Proof of value before payment',
            'Student on-ramp for later conversion'
          ]
        },
        metrics: {
          nextSteps: [
            'Wireframe the first 30 seconds and the core player flow.',
            'Build a clickable prototype and run short student interviews focused on timing, clarity, trust.',
            'Define a protected scope boundary and a lightweight content ops plan for daily briefs.'
          ],
          successMetrics: [
            'Listening frequency of at least 3 times per week per user (target).',
            '30+ day retention of the brief experience (target).',
            'Conversion pathway from student access to paid after graduation (target).'
          ]
        }
      },
      es: {
        hero: {
          title: 'Politiken Re:Connect | Voice-First Morning Brief',
          subtitle: 'A flagship habit that proves premium value before payment.',
          narrative: 'In a 2-day sprint, we reframed Politiken\'s youth challenge around attention, trust, and daily rhythm. The concept is a 5 to 10 minute audio brief built for wake-up and commute, with a student on-ramp to reduce friction early.'
        },
        sideCard: {
          challenge: 'Print loss was not converting to digital, youth appeal felt limited, and app usage was estimated around 15 to 20% with discovery gated by subscription. Competitors won mornings with faster daily summaries, while product sprawl risked dilution.',
          outcome: 'A converged flagship concept with a clear scope boundary, plus an intended prototype and test plan to validate habit and trust.',
          buttonLabel: 'View Concept One-Pager'
        },
        yourTask: {
          preLine: 'Design for a real morning moment.',
          question: 'What is the smallest daily experience that makes Politiken feel worth coming back to?',
          reframe: 'If we can win 10 minutes a day, what should the brief include and exclude? How do we prove quality before we ask for payment?'
        },
        takeOn: {
          questions: [
            'What would make you opt in to a daily audio brief tomorrow morning?',
            'Which topics belong in the default brief, and which should be optional?',
            'What trust signals matter most for AI-supported summaries and voice Q&A?',
            'Where should the student on-ramp live: app, campus partnerships, or both?',
            'What is the one thing that would make this feel premium, not just convenient?'
          ],
          note: ''
        },
        problem: {
          insight: 'Younger readers commit to premium when it fits their routine and proves value with minimal friction.',
          tensions: [
            'Depth of journalism vs 5 to 10 minute consumption',
            'Paywall protection vs discovery and habit formation',
            'One flagship experience vs pressure to ship many features'
          ]
        },
        persona: {
          title: 'Time-Pressed Student Reader',
          oneLiner: 'Mobile-first, price-sensitive, and high trust expectations, with a preference for short audio and offline access.',
          needs: [
            'A brief that respects limited time',
            'Clear quality and credibility cues',
            'A low-friction student pathway (trial, partners)'
          ]
        },
        solution: {
          title: 'AI Morning News Brief',
          paragraph: 'A voice-first daily brief that opens from a timed notification, delivers curated summaries, and supports follow-up questions grounded in Politiken journalism. The experience stays intentionally narrow to protect quality and repeat use.',
          definingPhrases: [
            'Voice-first 5 to 10 minute brief',
            'Proof of value before payment',
            'Student on-ramp for later conversion'
          ]
        },
        metrics: {
          nextSteps: [
            'Wireframe the first 30 seconds and the core player flow.',
            'Build a clickable prototype and run short student interviews focused on timing, clarity, trust.',
            'Define a protected scope boundary and a lightweight content ops plan for daily briefs.'
          ],
          successMetrics: [
            'Listening frequency of at least 3 times per week per user (target).',
            '30+ day retention of the brief experience (target).',
            'Conversion pathway from student access to paid after graduation (target).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Politiken Re:Connect | Voice-First Morning Brief',
          subtitle: 'A flagship habit that proves premium value before payment.',
          narrative: 'In a 2-day sprint, we reframed Politiken\'s youth challenge around attention, trust, and daily rhythm. The concept is a 5 to 10 minute audio brief built for wake-up and commute, with a student on-ramp to reduce friction early.'
        },
        sideCard: {
          challenge: 'Print loss was not converting to digital, youth appeal felt limited, and app usage was estimated around 15 to 20% with discovery gated by subscription. Competitors won mornings with faster daily summaries, while product sprawl risked dilution.',
          outcome: 'A converged flagship concept with a clear scope boundary, plus an intended prototype and test plan to validate habit and trust.',
          buttonLabel: 'View Concept One-Pager'
        },
        yourTask: {
          preLine: 'Design for a real morning moment.',
          question: 'What is the smallest daily experience that makes Politiken feel worth coming back to?',
          reframe: 'If we can win 10 minutes a day, what should the brief include and exclude? How do we prove quality before we ask for payment?'
        },
        takeOn: {
          questions: [
            'What would make you opt in to a daily audio brief tomorrow morning?',
            'Which topics belong in the default brief, and which should be optional?',
            'What trust signals matter most for AI-supported summaries and voice Q&A?',
            'Where should the student on-ramp live: app, campus partnerships, or both?',
            'What is the one thing that would make this feel premium, not just convenient?'
          ],
          note: ''
        },
        problem: {
          insight: 'Younger readers commit to premium when it fits their routine and proves value with minimal friction.',
          tensions: [
            'Depth of journalism vs 5 to 10 minute consumption',
            'Paywall protection vs discovery and habit formation',
            'One flagship experience vs pressure to ship many features'
          ]
        },
        persona: {
          title: 'Time-Pressed Student Reader',
          oneLiner: 'Mobile-first, price-sensitive, and high trust expectations, with a preference for short audio and offline access.',
          needs: [
            'A brief that respects limited time',
            'Clear quality and credibility cues',
            'A low-friction student pathway (trial, partners)'
          ]
        },
        solution: {
          title: 'AI Morning News Brief',
          paragraph: 'A voice-first daily brief that opens from a timed notification, delivers curated summaries, and supports follow-up questions grounded in Politiken journalism. The experience stays intentionally narrow to protect quality and repeat use.',
          definingPhrases: [
            'Voice-first 5 to 10 minute brief',
            'Proof of value before payment',
            'Student on-ramp for later conversion'
          ]
        },
        metrics: {
          nextSteps: [
            'Wireframe the first 30 seconds and the core player flow.',
            'Build a clickable prototype and run short student interviews focused on timing, clarity, trust.',
            'Define a protected scope boundary and a lightweight content ops plan for daily briefs.'
          ],
          successMetrics: [
            'Listening frequency of at least 3 times per week per user (target).',
            '30+ day retention of the brief experience (target).',
            'Conversion pathway from student access to paid after graduation (target).'
          ]
        }
      }
    }
  },
  {
    id: '2',
    name: 'DitMadKompass',
    genre: 'UX Design & Strategy',
    day: 'DitMad',
    year: 'Dec 2023',
    image: LINEUP_IMAGES.ditmad,
    description: 'UX for a specialized nutrition start-up.',
    challenge: {
      en: 'Translating complex nutritional data into a seamless, intuitive user experience.',
      es: 'Traducir datos nutricionales complejos en una experiencia de usuario fluida e intuitiva.',
      ca: 'Traduir dades nutricionals complexes en una experiència d\'usuari fluida i intuïtiva.'
    },
    outcome: {
      en: 'The MVP reached its acquisition target in under 3 months, securing seed funding.',
      es: 'El MVP alcanzó su objetivo de adquisición en menos de 3 meses, asegurando financiación inicial.',
      ca: 'L\'MVP va assolir el seu objectiu d\'adquisició en menys de 3 mesos, assegurant el finançament inicial.'
    },
    longDescription: {
      en: 'Working with the DitMad start-up, we developed a UX framework that empowers users to navigate their nutritional journey with precision.',
      es: 'Trabajando con la start-up DitMad, desarrollamos un marco de UX.',
      ca: 'Treballant amb la start-up DitMad, vam desenvolupar un marc d\'UX.'
    },
    content: {
      en: {
        hero: {
          title: 'DitMadkompas | Danish-First Food Scanner Concept',
          subtitle: 'A fast scan flow that translates ingredients into a clear, trustable choice.',
          narrative: 'DitMadkompas is a concept for a simple barcode scanning app that explains processing levels and ingredients in seconds, then suggests healthier alternatives. The work defined the product foundation, early UX, pricing logic, and a low-cost validation plan before building a database.'
        },
        sideCard: {
          challenge: 'Danish shoppers struggle to interpret labels, additives, and E-numbers in real time, and existing apps do not fully localize to Danish needs. The startup had no brand identity, no product database, and no scoring model, so building "the real thing" first would be a risky bet.',
          outcome: 'A defined scan-to-rating-to-alternatives experience, plus a Fake Door + Pinocchio pretotype to validate demand and trust before MVP.',
          buttonLabel: 'View Concept Deck'
        },
        yourTask: {
          preLine: 'Make food transparency usable in the aisle.',
          question: 'How might we help people in Denmark make healthier choices with a simple, trustworthy scan experience?',
          reframe: 'What should the app explain instantly, and what should it keep out to stay fast? What would make the score feel credible, not cosmetic?'
        },
        takeOn: {
          questions: [
            'What should the first scan result prioritize: additives, sugars, saturated fat, or processing level?',
            'Would you trust a traffic-light rating without a deep breakdown every time? Why?',
            'When do you want alternatives: only on "red" products, or always?',
            'What would make this feel Danish-first: Ø-mærket detection, local regulation explainers, or Nordic nutrition framing?',
            'What would convince you to pay: unlimited scans, personalized modes, or weekly insights?'
          ],
          note: ''
        },
        problem: {
          insight: 'Food information is too complex for real shopping moments, so clarity and trust beat depth by default.',
          tensions: [
            'Scientific complexity vs a 2-second decision in-store',
            'No existing database vs expectation of instant scanning results',
            '"Simple score" clarity vs the need to prove how the score is earned'
          ]
        },
        persona: {
          title: 'Everyday Grocery Parent',
          oneLiner: 'Shops fast, wants to do better for the household, and does not have time to decode labels.',
          needs: [
            'Instant, plain-language explanations (especially additives and processing)',
            'Confidence through a consistent visual system and repeatable logic',
            'Better swaps that are realistic to buy, not theoretical'
          ]
        },
        solution: {
          title: 'Scan, Score, Swap',
          paragraph: 'A Danish-first product scanning concept that simplifies nutrition into a traffic-light score, highlights positives and negatives, and offers healthier alternatives. The system is supported by a communication plan across social and short explainer formats, and a tiered freemium model that scales from basic clarity to deeper insights and personalization.',
          definingPhrases: [
            'Traffic-light trust layer',
            'Alternatives as the payoff',
            'Freemium to premium progression'
          ]
        },
        metrics: {
          nextSteps: [
            'Launch the Fake Door landing page with "Try the scanner now" and track real intent.',
            'Run the Pinocchio scan simulation using manual lookup (Open Food Facts behind the scenes) to test completion and trust.',
            'If validated, move to an MVP with automated scanning and a first-pass Danish scoring model.'
          ],
          successMetrics: [
            'Landing page CTA conversion above 20% (validation threshold).',
            'Full fake scan completion above 25% (validation threshold).',
            'Weekly usage intent above 15% (validation threshold).'
          ]
        }
      },
      es: {
        hero: {
          title: 'DitMadkompas | Danish-First Food Scanner Concept',
          subtitle: 'A fast scan flow that translates ingredients into a clear, trustable choice.',
          narrative: 'DitMadkompas is a concept for a simple barcode scanning app that explains processing levels and ingredients in seconds, then suggests healthier alternatives. The work defined the product foundation, early UX, pricing logic, and a low-cost validation plan before building a database.'
        },
        sideCard: {
          challenge: 'Danish shoppers struggle to interpret labels, additives, and E-numbers in real time, and existing apps do not fully localize to Danish needs. The startup had no brand identity, no product database, and no scoring model, so building "the real thing" first would be a risky bet.',
          outcome: 'A defined scan-to-rating-to-alternatives experience, plus a Fake Door + Pinocchio pretotype to validate demand and trust before MVP.',
          buttonLabel: 'View Concept Deck'
        },
        yourTask: {
          preLine: 'Make food transparency usable in the aisle.',
          question: 'How might we help people in Denmark make healthier choices with a simple, trustworthy scan experience?',
          reframe: 'What should the app explain instantly, and what should it keep out to stay fast? What would make the score feel credible, not cosmetic?'
        },
        takeOn: {
          questions: [
            'What should the first scan result prioritize: additives, sugars, saturated fat, or processing level?',
            'Would you trust a traffic-light rating without a deep breakdown every time? Why?',
            'When do you want alternatives: only on "red" products, or always?',
            'What would make this feel Danish-first: Ø-mærket detection, local regulation explainers, or Nordic nutrition framing?',
            'What would convince you to pay: unlimited scans, personalized modes, or weekly insights?'
          ],
          note: ''
        },
        problem: {
          insight: 'Food information is too complex for real shopping moments, so clarity and trust beat depth by default.',
          tensions: [
            'Scientific complexity vs a 2-second decision in-store',
            'No existing database vs expectation of instant scanning results',
            '"Simple score" clarity vs the need to prove how the score is earned'
          ]
        },
        persona: {
          title: 'Everyday Grocery Parent',
          oneLiner: 'Shops fast, wants to do better for the household, and does not have time to decode labels.',
          needs: [
            'Instant, plain-language explanations (especially additives and processing)',
            'Confidence through a consistent visual system and repeatable logic',
            'Better swaps that are realistic to buy, not theoretical'
          ]
        },
        solution: {
          title: 'Scan, Score, Swap',
          paragraph: 'A Danish-first product scanning concept that simplifies nutrition into a traffic-light score, highlights positives and negatives, and offers healthier alternatives. The system is supported by a communication plan across social and short explainer formats, and a tiered freemium model that scales from basic clarity to deeper insights and personalization.',
          definingPhrases: [
            'Traffic-light trust layer',
            'Alternatives as the payoff',
            'Freemium to premium progression'
          ]
        },
        metrics: {
          nextSteps: [
            'Launch the Fake Door landing page with "Try the scanner now" and track real intent.',
            'Run the Pinocchio scan simulation using manual lookup (Open Food Facts behind the scenes) to test completion and trust.',
            'If validated, move to an MVP with automated scanning and a first-pass Danish scoring model.'
          ],
          successMetrics: [
            'Landing page CTA conversion above 20% (validation threshold).',
            'Full fake scan completion above 25% (validation threshold).',
            'Weekly usage intent above 15% (validation threshold).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'DitMadkompas | Danish-First Food Scanner Concept',
          subtitle: 'A fast scan flow that translates ingredients into a clear, trustable choice.',
          narrative: 'DitMadkompas is a concept for a simple barcode scanning app that explains processing levels and ingredients in seconds, then suggests healthier alternatives. The work defined the product foundation, early UX, pricing logic, and a low-cost validation plan before building a database.'
        },
        sideCard: {
          challenge: 'Danish shoppers struggle to interpret labels, additives, and E-numbers in real time, and existing apps do not fully localize to Danish needs. The startup had no brand identity, no product database, and no scoring model, so building "the real thing" first would be a risky bet.',
          outcome: 'A defined scan-to-rating-to-alternatives experience, plus a Fake Door + Pinocchio pretotype to validate demand and trust before MVP.',
          buttonLabel: 'View Concept Deck'
        },
        yourTask: {
          preLine: 'Make food transparency usable in the aisle.',
          question: 'How might we help people in Denmark make healthier choices with a simple, trustworthy scan experience?',
          reframe: 'What should the app explain instantly, and what should it keep out to stay fast? What would make the score feel credible, not cosmetic?'
        },
        takeOn: {
          questions: [
            'What should the first scan result prioritize: additives, sugars, saturated fat, or processing level?',
            'Would you trust a traffic-light rating without a deep breakdown every time? Why?',
            'When do you want alternatives: only on "red" products, or always?',
            'What would make this feel Danish-first: Ø-mærket detection, local regulation explainers, or Nordic nutrition framing?',
            'What would convince you to pay: unlimited scans, personalized modes, or weekly insights?'
          ],
          note: ''
        },
        problem: {
          insight: 'Food information is too complex for real shopping moments, so clarity and trust beat depth by default.',
          tensions: [
            'Scientific complexity vs a 2-second decision in-store',
            'No existing database vs expectation of instant scanning results',
            '"Simple score" clarity vs the need to prove how the score is earned'
          ]
        },
        persona: {
          title: 'Everyday Grocery Parent',
          oneLiner: 'Shops fast, wants to do better for the household, and does not have time to decode labels.',
          needs: [
            'Instant, plain-language explanations (especially additives and processing)',
            'Confidence through a consistent visual system and repeatable logic',
            'Better swaps that are realistic to buy, not theoretical'
          ]
        },
        solution: {
          title: 'Scan, Score, Swap',
          paragraph: 'A Danish-first product scanning concept that simplifies nutrition into a traffic-light score, highlights positives and negatives, and offers healthier alternatives. The system is supported by a communication plan across social and short explainer formats, and a tiered freemium model that scales from basic clarity to deeper insights and personalization.',
          definingPhrases: [
            'Traffic-light trust layer',
            'Alternatives as the payoff',
            'Freemium to premium progression'
          ]
        },
        metrics: {
          nextSteps: [
            'Launch the Fake Door landing page with "Try the scanner now" and track real intent.',
            'Run the Pinocchio scan simulation using manual lookup (Open Food Facts behind the scenes) to test completion and trust.',
            'If validated, move to an MVP with automated scanning and a first-pass Danish scoring model.'
          ],
          successMetrics: [
            'Landing page CTA conversion above 20% (validation threshold).',
            'Full fake scan completion above 25% (validation threshold).',
            'Weekly usage intent above 15% (validation threshold).'
          ]
        }
      }
    }
  },
  {
    id: '3',
    name: 'Red Cross 360º',
    genre: 'Workflow Optimization',
    day: 'Red Cross Denmark',
    year: 'Nov 2025',
    image: LINEUP_IMAGES.redcross,
    description: 'AI powered verification workflow.',
    challenge: {
      en: 'Automating the verification process for thousands of volunteers.',
      es: 'Automatizar el proceso de verificación para miles de voluntarios.',
      ca: 'Automatitzar el procés de verificación per a milers de voluntaris.'
    },
    outcome: {
      en: 'Verification time reduced by 80%, allowing faster deployment.',
      es: 'El tiempo de verificación se redujo en un 80%, permitiendo un despliegue más rápido.',
      ca: 'El temps de verificación es va reduir en un 80%, permetent un desplegament més ràpid.'
    },
    longDescription: {
      en: 'An integrated system for Red Cross Denmark that leverages AI to streamline membership.',
      es: 'Un sistema integrado para la Cruz Roja Danesa que aprovecha la IA.',
      ca: 'Un sistema integrat per a la Creu Roja Danesa que aprofita la IA.'
    },
    content: {
      en: {
        hero: {
          title: 'Red Cross DK 360º | AI-Powered Donation Intake',
          subtitle: 'A faster drop-off flow that turns a bag into a verified record with visible impact.',
          narrative: 'This concept uses AI photo recognition to identify donated items, calculate estimated CO2 impact, and connect the donation to a member account. It is designed to reduce volunteer workload while motivating repeat donations through rewards and partner incentives.'
        },
        sideCard: {
          challenge: 'Donation intake is manual and time-heavy, especially when volume spikes. Donors get little feedback after drop-off, so the experience is easy to forget and hard to repeat.',
          outcome: 'A 360º flow from bag to digital record, with AI recognition, member identification, and a confirmation checkout for volunteer supervision.',
          buttonLabel: 'View Prototype Flow'
        },
        yourTask: {
          preLine: 'Make donating feel effortless and worth repeating.',
          question: 'How might we make Red Cross clothing donations faster, more transparent, and more motivating for both donors and volunteers?',
          reframe: 'In other words: If one bag could become a verified record in minutes, what must be automated and what must stay human-approved? What feedback should the donor receive immediately to feel impact and trust the system?'
        },
        takeOn: {
          questions: [
            'Which moment matters most: drop-off speed, impact feedback, or rewards?',
            'Should donors see item recognition details, or only a simple summary?',
            'Where should volunteer verification happen to stay fast but safe?',
            'What incentives feel aligned with Red Cross values: points, discounts, or community recognition?',
            'Would a bike pickup option change your donation frequency, and in which situations?'
          ],
          note: ''
        },
        problem: {
          insight: 'Donations increase when the process is quick, the impact is visible, and the organization can handle volume without adding manual work.',
          tensions: [
            'Automation speed vs the need for volunteer supervision and trust',
            'Impact storytelling vs accurate, explainable CO2 estimates',
            'Incentives and partner value vs keeping the experience mission-aligned'
          ]
        },
        persona: {
          title: 'Repeat Donor and Member',
          oneLiner: 'Wants donating to be quick and meaningful, and wants a record they can share.',
          needs: [
            'A frictionless drop-off that does not require extra steps',
            'Immediate proof of impact, including estimated CO2 savings over time',
            'Rewards that feel fair and simple (points, discounts, partner offers)'
          ]
        },
        solution: {
          title: 'Bag to Verified Impact Record',
          paragraph: 'A mobile intake flow where a volunteer captures 2 to 3 photos of the donation bag, AI detects item types, and the system links the donation to a member through identification. A confirmation checkout keeps humans in the loop, while donors receive a transparent digital record that can include impact and rewards.',
          definingPhrases: [
            'AI photo recognition with human approval',
            'Real-time impact feedback (estimated CO2)',
            'Rewards loop for repeat donations'
          ]
        },
        metrics: {
          nextSteps: [
            'Pilot the intake flow in one location with the four-step prototype: Member Identification, AI Object Detection, Volunteer Supervision, Confirmation Checkout.',
            'Define the recognition taxonomy (what categories matter) and tune photo guidance so volunteers can capture consistent inputs fast.',
            'Validate the incentive model and partner integration, plus the bike pickup option as a practical add-on service.'
          ],
          successMetrics: [
            'Faster handling time per bag and fewer manual steps for volunteers (measured in pilot).',
            'Higher repeat donation intent and member adoption of the digital record (measured via usage and follow-up prompts).',
            'Verified impact visibility: percentage of donations with AI recognition + approved checkout, and engagement with CO2 history sharing (measured in app).'
          ]
        }
      }
    }
  },
  {
    id: '4',
    name: 'Mossfera x Quant',
    genre: 'Identity & AI Strategy',
    day: 'Eram (UdG)',
    year: 'Jun 2025',
    image: LINEUP_IMAGES.moss,
    description: 'Experimental digital identity merging bio-elements with quantum logic.',
    subtitle: {
      en: 'A strategic exploration of digital identity where nature meets quantum computing.',
      es: 'Una exploración estratégica de la identidad digital donde la naturaleza se encuentra con la computación cuántica.',
      ca: 'Una exploració estratègica de la identitat digital on la natura es troba amb la computació quàntica.'
    },
    challenge: {
      en: 'CREATING A VISUAL LANGUAGE FOR NON-LINEAR DIGITAL ENTITIES.',
      es: 'CREAR UN LENGUAJE VISUAL PARA ENTIDADES DIGITALES NO LINEALES.',
      ca: 'CREAR UN LLENGUATGE VISUAL PER A ENTITATS DIGITALS NO LINEALS.'
    },
    outcome: {
      en: 'A dynamic, AI-generated branding system that adapts to user interactions in real-time.',
      es: 'Un sistema de branding dinámico generado por IA que se adapta a las interacciones del usuario.',
      ca: 'Un sistema de brànding dinàmic generat per IA que s\'adapta a les interaccions de l\'usuari.'
    },
    longDescription: {
      en: 'Mossfera x Quant represents the convergence of biological inspiration and algorithmic precision.',
      es: 'Mossfera x Quant representa la convergencia de la inspiración biológica y la precisión algorítmica.',
      ca: 'Mossfera x Quant representa la convergència de la inspiració biològica i la precisió algorítmica.'
    },
    // Placeholders for structure
    problem: { en: 'Placeholder Problem', es: 'Problema Placeholder', ca: 'Problema Placeholder' },
    persona: { en: 'Placeholder Persona', es: 'Persona Placeholder', ca: 'Persona Placeholder' },
    solution: { en: 'Placeholder Solution', es: 'Solución Placeholder', ca: 'Solució Placeholder' },
    task: { en: 'Placeholder Task', es: 'Tarea Placeholder', ca: 'Tasca Placeholder' },
    takeOn: { en: 'Placeholder Take', es: 'Opinión Placeholder', ca: 'Opinió Placeholder' },
    metrics: { en: 'Placeholder Metrics', es: 'Métricas Placeholder', ca: 'Mètriques Placeholder' }
  },
  {
    id: '6',
    name: 'Kave Home Studio',
    genre: 'Visual Arts & Photography',
    day: 'Kave Home',
    year: 'Abr 2024',
    image: LINEUP_IMAGES.kave,
    description: 'A reshoot brief to modernize a high-visual category.',
    challenge: {
      en: 'Capturing the tactile essence of Mediterranean design in a controlled studio environment.',
      es: 'Capturar la esencia táctil del diseño mediterráneo en un entorno de estudio.',
      ca: 'Capturar l\'essència tàctil del disseny mediterrani en un entorn d\'estudi.'
    },
    outcome: {
      en: 'Full photographic catalogue used for the 2024 Summer Collection rollout.',
      es: 'Catálogo fotográfico completo utilizado para la colección de verano 2024.',
      ca: 'Catàleg fotogràfic complet utilitzat per a la col·lecció d\'estiu 2024.'
    },
    longDescription: {
      en: 'During my internship at Kave Home, I managed studio lighting and high-end digital capture using Capture One.',
      es: 'Durante mis prácticas en Kave Home, gestioné la iluminación de estudio.',
      ca: 'Durant les meves pràctiques a Kave Home, vaig gestionar la il·luminació d\'estudi.'
    },
    content: {
      en: {
        hero: {
          title: 'Kave Home | Mirrors Category Refresh',
          subtitle: 'A reshoot brief to modernize a high-visual category and restore momentum.',
          narrative: 'The mirrors category was tracking below plan, while key SKUs carried outdated or missing lifestyle imagery. I defined a focused reshoot scope that upgrades context, scale cues, and cross-room usage without overextending production.'
        },
        sideCard: {
          challenge: 'Performance was softening while the category look and feel lagged behind the current assortment. Best sellers lacked fresh ambients, and some mirrors were visually locked to a single room use case.',
          outcome: 'A prioritized reshoot shortlist with clear rationale, plus direction for updated ambients and listing-ready outputs.',
          buttonLabel: 'View Reshoot Brief'
        },
        yourTask: {
          preLine: 'Make imagery earn its space.',
          question: 'What should we reshoot first to improve discovery and confidence from listing to PDP?',
          reframe: 'If we can only refresh a shortlist, which scenes best communicate style and true scale? What would you keep consistent across every mirror for faster comparison?'
        },
        takeOn: {
          questions: [
            'Which room contexts matter most for mirrors in your market mix?',
            'How should we balance lifestyle ambients vs clean product-first images?',
            'What is the one scale cue you want shoppers to feel instantly?',
            'Should bathroom mirrors be deliberately styled in other rooms to expand intent?',
            'What consistency rule should never change across the category (crop, angle, lighting, props)?'
          ],
          note: ''
        },
        problem: {
          insight: 'The category needed fresher, clearer visual cues to win attention and trust in a fast-scrolling environment.',
          tensions: [
            'High-visual category, but stale or missing ambients on key products',
            'Need to show real scale, while keeping production practical and repeatable',
            'Bathroom-led assortment, but broader room potential that current imagery does not unlock'
          ]
        },
        persona: {
          title: 'Mobile Home Shopper',
          oneLiner: 'Decides visually in seconds and needs scale reassurance before committing.',
          needs: [
            'A quick read on size and placement',
            'Clear differentiation between similar styles and finishes',
            'Confidence the mirror works beyond a single staged room'
          ]
        },
        solution: {
          title: 'Reshoot Scope + Category Image System',
          paragraph: 'A production-ready brief that prioritizes best sellers and content gaps, then applies a consistent image system to improve browsing, comparison, and perceived fit. The approach also opens new room narratives for mirrors that were previously framed too narrowly.',
          definingPhrases: [
            'Prioritized, not blanket reshoots',
            'Context that communicates scale',
            'Cross-room storytelling built for listings'
          ]
        },
        metrics: {
          nextSteps: [
            'Lock the shortlist and shotlist, including required outputs per SKU (listing, PDP, variants).',
            'Define the image system rules (crop, angle, lighting, prop limits) and apply across the reshoot.',
            'Roll out refreshed ambients in priority listings and validate learnings before expanding scope.'
          ],
          successMetrics: [
            'Category listing engagement (CTR to PDP, scroll depth, time on listing).',
            'PDP intent signals (gallery interaction, add-to-cart rate, variant selection rate).',
            'Commercial impact on the refreshed set (sell-through, stock coverage, returns or complaints tied to "size expectation").'
          ]
        }
      },
      es: {
        hero: {
          title: 'Kave Home | Mirrors Category Refresh',
          subtitle: 'A reshoot brief to modernize a high-visual category and restore momentum.',
          narrative: 'The mirrors category was tracking below plan, while key SKUs carried outdated or missing lifestyle imagery. I defined a focused reshoot scope that upgrades context, scale cues, and cross-room usage without overextending production.'
        },
        sideCard: {
          challenge: 'Performance was softening while the category look and feel lagged behind the current assortment. Best sellers lacked fresh ambients, and some mirrors were visually locked to a single room use case.',
          outcome: 'A prioritized reshoot shortlist with clear rationale, plus direction for updated ambients and listing-ready outputs.',
          buttonLabel: 'View Reshoot Brief'
        },
        yourTask: {
          preLine: 'Make imagery earn its space.',
          question: 'What should we reshoot first to improve discovery and confidence from listing to PDP?',
          reframe: 'If we can only refresh a shortlist, which scenes best communicate style and true scale? What would you keep consistent across every mirror for faster comparison?'
        },
        takeOn: {
          questions: [
            'Which room contexts matter most for mirrors in your market mix?',
            'How should we balance lifestyle ambients vs clean product-first images?',
            'What is the one scale cue you want shoppers to feel instantly?',
            'Should bathroom mirrors be deliberately styled in other rooms to expand intent?',
            'What consistency rule should never change across the category (crop, angle, lighting, props)?'
          ],
          note: ''
        },
        problem: {
          insight: 'The category needed fresher, clearer visual cues to win attention and trust in a fast-scrolling environment.',
          tensions: [
            'High-visual category, but stale or missing ambients on key products',
            'Need to show real scale, while keeping production practical and repeatable',
            'Bathroom-led assortment, but broader room potential that current imagery does not unlock'
          ]
        },
        persona: {
          title: 'Mobile Home Shopper',
          oneLiner: 'Decides visually in seconds and needs scale reassurance before committing.',
          needs: [
            'A quick read on size and placement',
            'Clear differentiation between similar styles and finishes',
            'Confidence the mirror works beyond a single staged room'
          ]
        },
        solution: {
          title: 'Reshoot Scope + Category Image System',
          paragraph: 'A production-ready brief that prioritizes best sellers and content gaps, then applies a consistent image system to improve browsing, comparison, and perceived fit. The approach also opens new room narratives for mirrors that were previously framed too narrowly.',
          definingPhrases: [
            'Prioritized, not blanket reshoots',
            'Context that communicates scale',
            'Cross-room storytelling built for listings'
          ]
        },
        metrics: {
          nextSteps: [
            'Lock the shortlist and shotlist, including required outputs per SKU (listing, PDP, variants).',
            'Define the image system rules (crop, angle, lighting, prop limits) and apply across the reshoot.',
            'Roll out refreshed ambients in priority listings and validate learnings before expanding scope.'
          ],
          successMetrics: [
            'Category listing engagement (CTR to PDP, scroll depth, time on listing).',
            'PDP intent signals (gallery interaction, add-to-cart rate, variant selection rate).',
            'Commercial impact on the refreshed set (sell-through, stock coverage, returns or complaints tied to "size expectation").'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Kave Home | Mirrors Category Refresh',
          subtitle: 'A reshoot brief to modernize a high-visual category and restore momentum.',
          narrative: 'The mirrors category was tracking below plan, while key SKUs carried outdated or missing lifestyle imagery. I defined a focused reshoot scope that upgrades context, scale cues, and cross-room usage without overextending production.'
        },
        sideCard: {
          challenge: 'Performance was softening while the category look and feel lagged behind the current assortment. Best sellers lacked fresh ambients, and some mirrors were visually locked to a single room use case.',
          outcome: 'A prioritized reshoot shortlist with clear rationale, plus direction for updated ambients and listing-ready outputs.',
          buttonLabel: 'View Reshoot Brief'
        },
        yourTask: {
          preLine: 'Make imagery earn its space.',
          question: 'What should we reshoot first to improve discovery and confidence from listing to PDP?',
          reframe: 'If we can only refresh a shortlist, which scenes best communicate style and true scale? What would you keep consistent across every mirror for faster comparison?'
        },
        takeOn: {
          questions: [
            'Which room contexts matter most for mirrors in your market mix?',
            'How should we balance lifestyle ambients vs clean product-first images?',
            'What is the one scale cue you want shoppers to feel instantly?',
            'Should bathroom mirrors be deliberately styled in other rooms to expand intent?',
            'What consistency rule should never change across the category (crop, angle, lighting, props)?'
          ],
          note: ''
        },
        problem: {
          insight: 'The category needed fresher, clearer visual cues to win attention and trust in a fast-scrolling environment.',
          tensions: [
            'High-visual category, but stale or missing ambients on key products',
            'Need to show real scale, while keeping production practical and repeatable',
            'Bathroom-led assortment, but broader room potential that current imagery does not unlock'
          ]
        },
        persona: {
          title: 'Mobile Home Shopper',
          oneLiner: 'Decides visually in seconds and needs scale reassurance before committing.',
          needs: [
            'A quick read on size and placement',
            'Clear differentiation between similar styles and finishes',
            'Confidence the mirror works beyond a single staged room'
          ]
        },
        solution: {
          title: 'Reshoot Scope + Category Image System',
          paragraph: 'A production-ready brief that prioritizes best sellers and content gaps, then applies a consistent image system to improve browsing, comparison, and perceived fit. The approach also opens new room narratives for mirrors that were previously framed too narrowly.',
          definingPhrases: [
            'Prioritized, not blanket reshoots',
            'Context that communicates scale',
            'Cross-room storytelling built for listings'
          ]
        },
        metrics: {
          nextSteps: [
            'Lock the shortlist and shotlist, including required outputs per SKU (listing, PDP, variants).',
            'Define the image system rules (crop, angle, lighting, prop limits) and apply across the reshoot.',
            'Roll out refreshed ambients in priority listings and validate learnings before expanding scope.'
          ],
          successMetrics: [
            'Category listing engagement (CTR to PDP, scroll depth, time on listing).',
            'PDP intent signals (gallery interaction, add-to-cart rate, variant selection rate).',
            'Commercial impact on the refreshed set (sell-through, stock coverage, returns or complaints tied to "size expectation").'
          ]
        }
      }
    }
  },
  {
    id: '8',
    name: 'Neety',
    genre: 'B2B Sales Automation',
    day: 'Neety',
    year: 'Oct 2023',
    image: LINEUP_IMAGES.neety,
    description: 'Campaign console redesign for faster action.',
    subtitle: {
      en: 'A calmer campaign console with clearer hierarchy and action paths.',
      es: 'A calmer campaign console with clearer hierarchy and action paths.',
      ca: 'A calmer campaign console with clearer hierarchy and action paths.'
    },
    challenge: {
      en: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.',
      es: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.',
      ca: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.'
    },
    outcome: {
      en: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.',
      es: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.',
      ca: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.'
    },
    longDescription: {
      en: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.',
      es: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.',
      ca: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.'
    },
    content: {
      en: {
        hero: {
          title: 'Neety | B2B Sales Automation UI Redesign',
          subtitle: 'A calmer campaign console with clearer hierarchy and action paths.',
          narrative: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.'
        },
        sideCard: {
          challenge: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.',
          outcome: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.',
          buttonLabel: 'View Before/After'
        },
        yourTask: {
          preLine: 'Make the next action obvious.',
          question: 'How should a campaign dashboard communicate status and unlock the right action in seconds?',
          reframe: 'If a new user opens this screen, what do they understand first? What do they do next, without reading everything?'
        },
        takeOn: {
          questions: [
            'Which three signals must always be visible above the fold?',
            'What task statuses cause the most confusion today, and why?',
            'Do bulk actions belong at the top, or closer to selected items?',
            'What should be expandable vs always-on in each task card?',
            'Where should lightweight notifications live so they help, not interrupt?'
          ],
          note: ''
        },
        problem: {
          insight: 'In automation tooling, ambiguity is the real bottleneck, not feature count.',
          tensions: [
            'Dense information vs scanability',
            'Transparency of execution vs cognitive load',
            'Brand expression vs utilitarian clarity'
          ]
        },
        persona: {
          title: 'Sales Ops Operator',
          oneLiner: 'Runs outbound workflows daily and needs fast, reliable feedback to keep campaigns moving.',
          needs: [
            'Progress that is readable at a glance',
            'Status clarity with minimal interpretation',
            'Strong primary actions that match the workflow'
          ]
        },
        solution: {
          title: 'Campaign Console Refresh',
          paragraph: 'A minimal, modern layout that improves progress visibility (radial progress), elevates primary actions (“Retry Selected”, “Continue Selected”), and strengthens hierarchy through clearer headers and task card structure. A small notification box keeps updates accessible without pulling focus.',
          definingPhrases: [
            'Clear hierarchy, less noise',
            'Primary actions, visually prioritized',
            'Status clarity inside task cards'
          ]
        },
        metrics: {
          nextSteps: [
            'Turn the proposal into a reusable component set (cards, status tags, buttons, progress).',
            'Validate the new hierarchy with quick usability checks on 3 key tasks (scan, select, act).',
            'Define analytics events for key actions to monitor workflow health post-implementation.'
          ],
          successMetrics: [
            'Time to identify the next action from page load (target).',
            'Task completion rate for selected actions (target).',
            'Reduction in status-related support questions or user confusion signals (target).'
          ]
        }
      },
      es: {
        hero: {
          title: 'Neety | B2B Sales Automation UI Redesign',
          subtitle: 'A calmer campaign console with clearer hierarchy and action paths.',
          narrative: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.'
        },
        sideCard: {
          challenge: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.',
          outcome: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.',
          buttonLabel: 'View Before/After'
        },
        yourTask: {
          preLine: 'Make the next action obvious.',
          question: 'How should a campaign dashboard communicate status and unlock the right action in seconds?',
          reframe: 'If a new user opens this screen, what do they understand first? What do they do next, without reading everything?'
        },
        takeOn: {
          questions: [
            'Which three signals must always be visible above the fold?',
            'What task statuses cause the most confusion today, and why?',
            'Do bulk actions belong at the top, or closer to selected items?',
            'What should be expandable vs always-on in each task card?',
            'Where should lightweight notifications live so they help, not interrupt?'
          ],
          note: ''
        },
        problem: {
          insight: 'In automation tooling, ambiguity is the real bottleneck, not feature count.',
          tensions: [
            'Dense information vs scanability',
            'Transparency of execution vs cognitive load',
            'Brand expression vs utilitarian clarity'
          ]
        },
        persona: {
          title: 'Sales Ops Operator',
          oneLiner: 'Runs outbound workflows daily and needs fast, reliable feedback to keep campaigns moving.',
          needs: [
            'Progress that is readable at a glance',
            'Status clarity with minimal interpretation',
            'Strong primary actions that match the workflow'
          ]
        },
        solution: {
          title: 'Campaign Console Refresh',
          paragraph: 'A minimal, modern layout that improves progress visibility (radial progress), elevates primary actions (“Retry Selected”, “Continue Selected”), and strengthens hierarchy through clearer headers and task card structure. A small notification box keeps updates accessible without pulling focus.',
          definingPhrases: [
            'Clear hierarchy, less noise',
            'Primary actions, visually prioritized',
            'Status clarity inside task cards'
          ]
        },
        metrics: {
          nextSteps: [
            'Turn the proposal into a reusable component set (cards, status tags, buttons, progress).',
            'Validate the new hierarchy with quick usability checks on 3 key tasks (scan, select, act).',
            'Define analytics events for key actions to monitor workflow health post-implementation.'
          ],
          successMetrics: [
            'Time to identify the next action from page load (target).',
            'Task completion rate for selected actions (target).',
            'Reduction in status-related support questions or user confusion signals (target).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Neety | B2B Sales Automation UI Redesign',
          subtitle: 'A calmer campaign console with clearer hierarchy and action paths.',
          narrative: 'I proposed a redesign to reduce visual friction in Neety’s campaign execution view. The focus is faster comprehension, cleaner navigation, and UI patterns that make “what’s next” obvious.'
        },
        sideCard: {
          challenge: 'The original layout made it hard to scan progress, interpret task status, and prioritize primary actions. Content density blurred hierarchy and increased decision fatigue.',
          outcome: 'A redesigned screen concept and rationale covering progress visualization, action emphasis, hierarchy, and lightweight notifications.',
          buttonLabel: 'View Before/After'
        },
        yourTask: {
          preLine: 'Make the next action obvious.',
          question: 'How should a campaign dashboard communicate status and unlock the right action in seconds?',
          reframe: 'If a new user opens this screen, what do they understand first? What do they do next, without reading everything?'
        },
        takeOn: {
          questions: [
            'Which three signals must always be visible above the fold?',
            'What task statuses cause the most confusion today, and why?',
            'Do bulk actions belong at the top, or closer to selected items?',
            'What should be expandable vs always-on in each task card?',
            'Where should lightweight notifications live so they help, not interrupt?'
          ],
          note: ''
        },
        problem: {
          insight: 'In automation tooling, ambiguity is the real bottleneck, not feature count.',
          tensions: [
            'Dense information vs scanability',
            'Transparency of execution vs cognitive load',
            'Brand expression vs utilitarian clarity'
          ]
        },
        persona: {
          title: 'Sales Ops Operator',
          oneLiner: 'Runs outbound workflows daily and needs fast, reliable feedback to keep campaigns moving.',
          needs: [
            'Progress that is readable at a glance',
            'Status clarity with minimal interpretation',
            'Strong primary actions that match the workflow'
          ]
        },
        solution: {
          title: 'Campaign Console Refresh',
          paragraph: 'A minimal, modern layout that improves progress visibility (radial progress), elevates primary actions (“Retry Selected”, “Continue Selected”), and strengthens hierarchy through clearer headers and task card structure. A small notification box keeps updates accessible without pulling focus.',
          definingPhrases: [
            'Clear hierarchy, less noise',
            'Primary actions, visually prioritized',
            'Status clarity inside task cards'
          ]
        },
        metrics: {
          nextSteps: [
            'Turn the proposal into a reusable component set (cards, status tags, buttons, progress).',
            'Validate the new hierarchy with quick usability checks on 3 key tasks (scan, select, act).',
            'Define analytics events for key actions to monitor workflow health post-implementation.'
          ],
          successMetrics: [
            'Time to identify the next action from page load (target).',
            'Task completion rate for selected actions (target).',
            'Reduction in status-related support questions or user confusion signals (target).'
          ]
        }
      }
    }
  }
  ,
  {
    id: '9',
    name: 'Strenes Concert',
    genre: 'Visual Identity System',
    day: 'Strenes',
    year: 'Mar 2023',
    image: LINEUP_IMAGES.strenes,
    description: 'Visual identity system proposal for a locally rooted festival.',
    subtitle: {
      en: 'A modular, locally rooted system designed to scale across touchpoints.',
      es: 'A modular, locally rooted system designed to scale across touchpoints.',
      ca: 'A modular, locally rooted system designed to scale across touchpoints.'
    },
    challenge: {
      en: 'A festival identity must be instantly recognizable, flexible across formats, and still feel specific to place. It also needs clear rules so the system survives production at scale.',
      es: 'A festival identity must be instantly recognizable, flexible across formats, and still feel specific to place. It also needs clear rules so the system survives production at scale.',
      ca: 'A festival identity must be instantly recognizable, flexible across formats, and still feel specific to place. It also needs clear rules so the system survives production at scale.'
    },
    outcome: {
      en: 'A production-ready identity toolkit including proportions, safety zones, color modes, typography, patterns, and mock-up applications.',
      es: 'A production-ready identity toolkit including proportions, safety zones, color modes, typography, patterns, and mock-up applications.',
      ca: 'A production-ready identity toolkit including proportions, safety zones, color modes, typography, patterns, and mock-up applications.'
    },
    longDescription: {
      en: 'Strenes celebrates Girona\'s essence through community pride and shared connection. I developed a graphic identity and system inspired by the Basilica\'s stained glass, built for consistent use across print and digital.',
      es: 'Strenes celebrates Girona\'s essence through community pride and shared connection. I developed a graphic identity and system inspired by the Basilica\'s stained glass, built for consistent use across print and digital.',
      ca: 'Strenes celebrates Girona\'s essence through community pride and shared connection. I developed a graphic identity and system inspired by the Basilica\'s stained glass, built for consistent use across print and digital.'
    },
    content: {
      en: {
        hero: {
          title: 'Strenes Concert | Visual Identity System Proposal',
          subtitle: 'A modular, locally rooted system designed to scale across touchpoints.',
          narrative: 'Strenes celebrates Girona\'s essence through community pride and shared connection. I developed a graphic identity and system inspired by the Basilica\'s stained glass, built for consistent use across print and digital.'
        },
        sideCard: {
          challenge: 'A festival identity must be instantly recognizable, flexible across formats, and still feel specific to place. It also needs clear rules so the system survives production at scale.',
          outcome: 'A production-ready identity toolkit including proportions, safety zones, color modes, typography, patterns, and mock-up applications.',
          buttonLabel: 'View Brand System'
        },
        yourTask: {
          preLine: 'Make the system easy to use, not just nice to look at.',
          question: 'What visual rules keep Strenes consistent across tickets, posters, social, and signage?',
          reframe: 'In other words: If different teams produce assets, what guardrails prevent drift? Where should the system allow variation, and where should it stay strict?'
        },
        takeOn: {
          questions: [
            'Which applications matter most for first impression: street posters, social, or venue signage?',
            'How bold can the pattern be before it hurts legibility of lineup information?',
            'Does the stained-glass reference read as Girona, even without the Basilica context?',
            'What typography pairing feels right for a youthful festival while staying functional?',
            'What accessibility checks should we apply to the palette across day and night contexts?'
          ],
          note: ''
        },
        problem: {
          insight: 'A local festival brand wins when it balances cultural specificity with a repeatable system that scales cleanly.',
          tensions: [
            'Consistency vs flexibility across many formats',
            'Heritage cues vs contemporary youth energy',
            'Bold chroma and pattern vs accessibility and information clarity'
          ]
        },
        persona: {
          title: 'City-First Festival-Goer',
          oneLiner: 'Discovers events on the street and on mobile, decides quickly, and wants a cohesive experience.',
          needs: [
            'Instant recognition at a distance',
            'Clear hierarchy for date, venue, and lineup',
            'A visual system that stays consistent across touchpoints'
          ]
        },
        solution: {
          title: 'Stained-Glass Modular Identity',
          paragraph: 'A symbol and pattern language derived from a single core shape, paired with a defined chroma palette and a practical typography system. The toolkit includes proportions, safety zones, positive and negative color use, and mock-ups to guide real-world rollout.',
          definingPhrases: [
            'One shape, many applications',
            'Rules that protect consistency',
            'Local meaning, modern execution'
          ]
        },
        metrics: {
          nextSteps: [
            'Convert the system into ready-to-use templates for social, posters, tickets, and signage.',
            'Run accessibility and legibility checks on key layouts and color pairings.',
            'Extend mock-ups into a full event kit with clear production specs and handoff files.'
          ],
          successMetrics: [
            'Template adoption and consistency across teams (audit-based) (target).',
            'Reduction in production errors (wrong spacing, off-brand color, typography drift) (target).',
            'Audience recognition in lightweight intercept feedback (street and social) (target).'
          ]
        }
      }
    }
  }
];

type WorkContent = {
  hero: { title: string; subtitle: string; narrative: string };
  sideCard: { challenge: string; outcome: string; buttonLabel: string };
  yourTask: { preLine: string; question: string; reframe: string };
  takeOn: { questions: string[]; note: string };
  problem: { insight: string; tensions: string[] };
  persona: { title: string; oneLiner: string; needs: string[] };
  solution: { title: string; paragraph: string; definingPhrases: string[] };
  metrics: { nextSteps: string[]; successMetrics: string[] };
};

const mergeWorkContent = (base: WorkContent, override?: Partial<WorkContent>): WorkContent => ({
  hero: { ...base.hero, ...override?.hero },
  sideCard: { ...base.sideCard, ...override?.sideCard },
  yourTask: { ...base.yourTask, ...override?.yourTask },
  takeOn: { ...base.takeOn, ...override?.takeOn },
  problem: { ...base.problem, ...override?.problem },
  persona: { ...base.persona, ...override?.persona },
  solution: { ...base.solution, ...override?.solution },
  metrics: { ...base.metrics, ...override?.metrics }
});

const buildWorkContent = (work: MultilangWork, lang: Language): WorkContent => {
  const copy = TRANSLATIONS[lang];
  const base: WorkContent = {
    hero: {
      title: work.name,
      subtitle: work.subtitle?.[lang] || work.description,
      narrative: work.longDescription[lang]
    },
    sideCard: {
      challenge: work.challenge[lang],
      outcome: work.outcome[lang],
      buttonLabel: copy.sideCardButton
    },
    yourTask: {
      preLine: copy.yourTaskPreLine,
      question: copy.yourTaskQuestion,
      reframe: copy.yourTaskReframe
    },
    takeOn: {
      questions: copy.takeOnQuestions,
      note: copy.takeOnNote
    },
    problem: {
      insight: work.subtitle?.[lang] || work.description,
      tensions: copy.problemTensions
    },
    persona: {
      title: copy.personaName,
      oneLiner: copy.personaOneLiner,
      needs: copy.personaNeeds
    },
    solution: {
      title: copy.solutionName,
      paragraph: copy.solutionParagraph,
      definingPhrases: copy.solutionPhrases
    },
    metrics: {
      nextSteps: copy.nextSteps,
      successMetrics: copy.successMetrics
    }
  };

  const override = work.content?.[lang] || work.content?.en;
  return mergeWorkContent(base, override);
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'lineup' | 'gallery' | 'torrent' | 'work-detail'>('home');
  const [selectedWork, setSelectedWork] = useState<MultilangWork | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  const torrentAudioRef = useRef<HTMLAudioElement | null>(null);

  const t = (key: keyof typeof TRANSLATIONS['en']) => (TRANSLATIONS[lang] as any)[key] || key;

  useEffect(() => {
    torrentAudioRef.current = new Audio('https://ia801602.us.archive.org/3/items/james-horner-avatar-ost/08.%20Becoming%20One%20With%20Neytiri.mp3');
    torrentAudioRef.current.loop = true;

    const handleNavigateLineup = () => navigateTo('lineup');
    window.addEventListener('navigate-lineup', handleNavigateLineup);

    return () => {
      if (torrentAudioRef.current) {
        torrentAudioRef.current.pause();
        torrentAudioRef.current = null;
      }
      window.removeEventListener('navigate-lineup', handleNavigateLineup);
    };
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [currentPage]);

  const navigateTo = (page: typeof currentPage, sectionId?: string, workData?: MultilangWork) => {
    setMobileMenuOpen(false);
    if (workData) setSelectedWork(workData);

    if (page === 'torrent' && torrentAudioRef.current) {
      torrentAudioRef.current.volume = 0.5;
      torrentAudioRef.current.play().catch(e => console.log("Audio playback blocked:", e));
    } else if (page !== 'torrent' && torrentAudioRef.current) {
      torrentAudioRef.current.pause();
    }

    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const pos = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    const next: Language = lang === 'en' ? 'es' : lang === 'es' ? 'ca' : 'en';
    setLang(next);
  };

  return (
    <div className="relative min-h-screen text-[#ebebeb] selection:bg-[#ff6700] selection:text-white cursor-auto md:cursor-none overflow-x-hidden bg-[#1a2a3a]">
      <CustomCursor />
      <FluidBackground />
      <AIChat />

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
        <button onClick={() => navigateTo('home')} className="bebas-neue-regular text-2xl md:text-4xl tracking-[0.15em] text-white bg-transparent border-none z-50">
          MARTA CAULA
        </button>
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase items-center">
          <button onClick={() => navigateTo('lineup')} className={`transition-colors text-white hover:text-[#ff6700] ${currentPage === 'lineup' ? 'text-[#ff6700]' : ''}`}>{t('lineupNav')}</button>
          <button onClick={() => navigateTo('gallery')} className={`transition-colors text-white hover:text-[#ff6700] ${currentPage === 'gallery' ? 'text-[#ff6700]' : ''}`}>{t('gallery')}</button>
          <button
            onClick={() => navigateTo('torrent')}
            className={`bitcount-single-hero text-2xl tracking-normal transition-all hover:scale-110 ${currentPage === 'torrent' ? 'text-[#ff6700]' : 'text-white'}`}
          >
            TORRENT
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full hover:border-[#ff6700] transition-colors text-white"
            data-hover="true"
          >
            <Languages className="w-3 h-3 text-[#ff6700]" />
            <span className="font-mono text-[10px]">{lang.toUpperCase()}</span>
          </button>
        </div>
        <button className="md:hidden text-white z-50 flex items-center gap-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span onClick={(e) => { e.stopPropagation(); navigateTo('torrent'); }} className="bitcount-single-hero text-xl text-[#ff6700]">TORRENT</span>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-40 bg-[#1a3a5a] flex flex-col items-center justify-center gap-8 md:hidden">
            <button onClick={() => navigateTo('home')} className="text-4xl font-heading font-bold text-white uppercase">Home</button>
            <button onClick={() => navigateTo('lineup')} className="text-4xl font-heading font-bold text-white uppercase">{t('lineupNav')}</button>
            <button onClick={() => navigateTo('gallery')} className="text-4xl font-heading font-bold text-white uppercase">{t('gallery')}</button>
            <button onClick={() => navigateTo('torrent')} className="bitcount-single-hero text-6xl text-[#ff6700]">TORRENT</button>
            <button onClick={toggleLang} className="mt-8 text-xl font-mono text-[#ff6700] uppercase border-b border-[#ff6700]">Language: {lang.toUpperCase()}</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative pt-24 min-h-screen">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="relative h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-hidden px-4">
                <motion.div style={{ y, opacity }} className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-24">
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8 flex items-center justify-center text-white/40">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.6em] whitespace-nowrap">{t('tfg')}</span>
                  </motion.div>
                  <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-[#ff6700] tracking-[0.3em] uppercase mb-4 bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
                    <span>{t('iteration')}</span>
                    <span className="w-2 h-2 bg-[#ff6700] rounded-full animate-pulse" />
                    <span>{t('designSprint')}</span>
                  </div>
                  <button onClick={() => navigateTo('torrent')} className="group/hero relative block bg-transparent border-none p-0 cursor-pointer">
                    <GradientText text="TORRENT" as="h1" className="bitcount-single-hero text-[15vw] md:text-[12vw] max-w-screen-xl leading-[0.8] text-center" />
                    <motion.div initial={{ opacity: 0, y: 10 }} whileHover={{ opacity: 1, y: 0 }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#ff6700] font-mono text-xs uppercase tracking-[0.5em]">
                      {t('viewMethod')} <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#3a6ea5]/50 to-transparent mt-8 mb-8" />
                  <p className="text-lg md:text-3xl font-light max-w-2xl mx-auto text-[#ebebeb]/80 leading-relaxed px-4 tracking-wide">{t('methodology')}</p>
                </motion.div>
              </header>

              <section id="about" className="relative z-10 py-24 md:py-40 bg-black/40 border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <div className="flex flex-col items-center gap-16">
                    <div className="relative z-10 space-y-6 max-w-3xl">
                      <h2 className="text-5xl md:text-8xl font-heading font-bold leading-[0.9]">
                        {lang === 'en' ? 'Who' : lang === 'es' ? 'Quién' : 'Qui'} <br /> <GradientText text={lang === 'en' ? 'AM I' : lang === 'es' ? 'SOY' : 'SÓC'} className="text-6xl md:text-9xl" />
                      </h2>
                      <p className="text-2xl font-bold text-white leading-tight uppercase tracking-tight mx-auto">{t('aboutIntro')}</p>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,103,0,0.15)] bg-black group">
                      <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-background-loop-3129-large.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                        <button onClick={() => setIsMuted(!isMuted)} className="p-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-[#ff6700] transition-colors">
                          {isMuted ? <VolumeX className="w-10 h-10 text-white" /> : <Volume2 className="w-10 h-10 text-white" />}
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              <section id="disciplines" className="relative z-10 py-24 md:py-32 px-6 bg-[#1a2a3a]/50">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-20 flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-tight max-w-2xl">
                      {lang === 'en' ? 'Three Branches' : lang === 'es' ? 'Tres Ramas' : 'Tres Branques'} <br />
                      <span className="text-[#ff6700]">{lang === 'en' ? 'I work with' : lang === 'es' ? 'con las que trabajo' : 'amb les que treballo'}</span>
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    <div className="p-10 border border-white/5 bg-black/20 backdrop-blur-xl rounded-3xl">
                      <div className="w-16 h-16 rounded-2xl bg-[#3a6ea5]/20 flex items-center justify-center mb-10"><Layers className="w-8 h-8 text-[#3a6ea5]" /></div>
                      <h3 className="text-2xl font-heading font-bold mb-6 text-white uppercase">{t('designBranch')}</h3>
                      <div className="space-y-4 text-[#c0c0c0]">
                        {TRANSLATIONS[lang].designList.map((item, i) => (<p key={i} className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6700]" /> {item}</p>))}
                      </div>
                    </div>
                    <div className="p-10 border border-white/5 bg-black/20 backdrop-blur-xl rounded-3xl">
                      <div className="w-16 h-16 rounded-2xl bg-[#ff6700]/20 flex items-center justify-center mb-10"><Camera className="w-8 h-8 text-[#ff6700]" /></div>
                      <h3 className="text-2xl font-heading font-bold mb-6 text-white uppercase">{t('visualBranch')}</h3>
                      <div className="space-y-4 text-[#c0c0c0]">
                        {TRANSLATIONS[lang].visualList.map((item, i) => (<p key={i} className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6700]" /> {item}</p>))}
                      </div>
                    </div>
                    <div className="p-10 border border-white/5 bg-black/20 backdrop-blur-xl rounded-3xl">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10"><Cpu className="w-8 h-8 text-white" /></div>
                      <h3 className="text-2xl font-heading font-bold mb-6 text-white uppercase">{t('digitalBranch')}</h3>
                      <div className="space-y-4 text-[#c0c0c0]">
                        {TRANSLATIONS[lang].digitalList.map((item, i) => (<p key={i} className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6700]" /> {item}</p>))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-12">
                    <div className="text-center"><h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter leading-none mb-6">{t('ecosystemTitle')}</h2></div>
                    <ToolAquarium />
                  </div>
                </div>
              </section>
            </motion.div>
          ) : currentPage === 'lineup' ? (
            <motion.div key="lineup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-6 py-12 md:py-24 max-w-[1600px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div className="flex-1">
                  <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-[#ff6700] font-mono uppercase tracking-widest text-xs mb-4"><ArrowLeft className="w-4 h-4" /> Home</button>
                  <h1 className="text-6xl md:text-[10rem] font-heading font-bold uppercase leading-[0.8] tracking-tighter text-white mb-8">{t('lineupTitle')}</h1>
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#ff6700] max-w-3xl leading-loose font-bold border-l-2 border-[#ff6700] pl-6 py-2">{t('lineupSubtitle')}</p>
                </div>
                <div className="max-w-md text-[#c0c0c0] text-sm md:text-base leading-relaxed border-l border-white/10 pl-8 py-2">
                  Professional feed of high-velocity digital projects, UX cases, and artistic explorations developed throughout my career.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                {WORKS.map((work) => <ArtistCard key={work.id} artist={work} onClick={() => navigateTo('work-detail', undefined, work)} />)}
              </div>
            </motion.div>
          ) : currentPage === 'gallery' ? (
            <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TorrentGallery />
            </motion.div>
          ) : currentPage === 'work-detail' && selectedWork ? (
            <motion.div key="work-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#f8f8f8] text-black pb-40">
              {(() => {
                const content = buildWorkContent(selectedWork, lang);
                const workLog = LINEUP_LOGS[selectedWork.id] ?? [];
                return (
                  <>
                    <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-24 pb-20 border-b border-black/5">
                      <button onClick={() => navigateTo('lineup')} className="mb-20 inline-flex items-center gap-3 text-black/30 font-mono text-[10px] uppercase tracking-widest hover:text-[#ff6700] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> {t('lineupFeed')}
                      </button>
                      <div className="max-w-6xl">
                        <h1 className="text-5xl md:text-[8vw] font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8">{content.hero.title}</h1>
                        <p className="text-xl md:text-2xl text-black/40 font-light mb-12 max-w-2xl">{content.hero.subtitle}</p>
                        <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl">{content.hero.narrative}</p>
                      </div>
                    </section>

                    <section className="px-6 md:px-24 py-24 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                      <div className="lg:col-span-8 space-y-32">
                        <div>
                          <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/30 mb-8">{t('problemAnalysis')}</h3>
                          <p className="text-2xl md:text-4xl font-bold leading-tight mb-10">{content.problem.insight}</p>
                          <div className="space-y-4">
                            {content.problem.tensions.map((tension, i) => (
                              <div key={i} className="flex items-center gap-4 text-black/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                <p className="text-sm font-medium uppercase tracking-widest">{tension}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
                          <MediaRenderer url={selectedWork.image} type={selectedWork.mediaType} />
                        </div>

                        {workLog.length ? (
                          <div>
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/30 mb-8">Project Log</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-start auto-rows-min">
                              {workLog.map((asset, index) => (
                                <div key={`${selectedWork.id}-log-${index}`} className="relative overflow-hidden bg-white/5 shadow-lg">
                                  <MediaRenderer url={asset} className="w-full h-auto object-contain" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                          <div>
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/30 mb-8">{t('personaTitle')}</h3>
                            <p className="text-xl font-bold uppercase mb-4">{content.persona.title}</p>
                            <p className="text-black/50 leading-relaxed mb-8">{content.persona.oneLiner}</p>
                          </div>
                          <div className="space-y-6">
                            {content.persona.needs.map((need, i) => (
                              <div key={i} className="flex gap-4 p-4 border border-black/5 rounded-xl bg-white">
                                <CheckCircle2 className="w-5 h-5 text-[#ff6700] shrink-0" />
                                <p className="text-xs uppercase font-bold tracking-tight">{need}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-12 md:p-20 bg-black text-white rounded-[3rem] relative overflow-hidden">
                          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 block mb-6">{content.yourTask.preLine}</span>
                          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-12 leading-[1.1]">{content.yourTask.question}</h2>
                          <div className="flex gap-4 items-center text-white/40">
                            <span className="w-8 h-px bg-white/20" />
                            <p className="italic font-light text-xl">{content.yourTask.reframe}</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 space-y-12">
                        <div className="p-10 bg-white border border-black/5 rounded-[2.5rem] sticky top-32 shadow-sm">
                          <div className="space-y-12">
                            <div>
                              <h5 className="text-[10px] font-mono uppercase tracking-widest text-black/20 mb-4">{t('challenge')}</h5>
                              <p className="text-sm leading-relaxed text-black/80">{content.sideCard.challenge}</p>
                            </div>
                            <div className="h-px bg-black/5" />
                            <div>
                              <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#ff6700] mb-4">{t('outcome')}</h5>
                              <p className="text-sm leading-relaxed text-black/80">{content.sideCard.outcome}</p>
                            </div>
                            <button className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-[#ff6700] transition-colors">
                              {content.sideCard.buttonLabel}
                            </button>
                          </div>
                        </div>

                        <div className="p-10 space-y-8">
                          <h3 className="text-[10px] font-mono uppercase tracking-widest text-black/30">{t('takeOnTitle')}</h3>
                          <div className="space-y-6">
                            {content.takeOn.questions.map((question, i) => (
                              <div key={i} className="flex gap-4 group cursor-help">
                                <span className="text-[#ff6700] font-mono text-xs">0{i + 1}</span>
                                <p className="text-xs font-bold uppercase tracking-tight text-black/60 group-hover:text-black transition-colors">{question}</p>
                              </div>
                            ))}
                          </div>
                          {content.takeOn.note.trim() ? (
                            <div className="pt-8 border-t border-black/5">
                              <p className="text-[10px] font-mono text-black/20 uppercase italic">{t('note')}: {content.takeOn.note}</p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </section>

                    <section className="px-6 md:px-24 py-32 bg-white border-y border-black/5">
                      <div className="max-w-5xl mx-auto text-center space-y-12">
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ff6700]">{t('solutionTitle')}</h3>
                        <h2 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-none">{content.solution.title}</h2>
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed max-w-3xl mx-auto">{content.solution.paragraph}</p>
                        <div className="flex flex-wrap justify-center gap-4 pt-10">
                          {content.solution.definingPhrases.map((phrase, i) => (
                            <span key={i} className="px-6 py-3 rounded-full border border-black/5 text-xs font-bold uppercase tracking-widest text-black/40">
                              {phrase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section className="px-6 md:px-24 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                      <div className="space-y-12">
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-black/30">{t('nextStepsLabel')}</h3>
                        <div className="space-y-4">
                          {content.metrics.nextSteps.map((step, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 bg-white border border-black/5 rounded-2xl">
                              <ChevronRight className="w-4 h-4 text-[#ff6700]" />
                              <p className="text-sm font-bold uppercase tracking-tight">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-12">
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-black/30">{t('successMetricsLabel')}</h3>
                        <div className="space-y-4">
                          {content.metrics.successMetrics.map((metric, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-black/5 rounded-2xl">
                              <p className="text-sm font-bold uppercase tracking-tight text-black/60">{metric}</p>
                              <TrendingUp className="w-4 h-4 text-black/20" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section className="px-6 md:px-24 py-40 border-t border-black/5 text-center">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-black/20 mb-8">{t('nextWork')}</h5>
                      <button
                        onClick={() => {
                          const idx = WORKS.findIndex((w) => w.id === selectedWork?.id);
                          const next = WORKS[(idx + 1) % WORKS.length];
                          navigateTo('work-detail', undefined, next);
                        }}
                        className="group flex flex-col items-center"
                      >
                        <span className="text-5xl md:text-[10vw] font-heading font-bold uppercase tracking-tighter group-hover:text-[#ff6700] transition-colors">
                          {WORKS[(WORKS.findIndex(w => w.id === selectedWork?.id) + 1) % WORKS.length].name}
                        </span>
                        <ArrowRight className="w-20 h-20 text-[#ff6700] group-hover:translate-x-10 transition-transform duration-500" />
                      </button>
                    </section>
                  </>
                );
              })()}
            </motion.div>
          ) : (
            <motion.div key="torrent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen">
              <header className="relative h-[60vh] flex items-center justify-center">
                <div className="text-center px-6">
                  <h1 className="text-xl font-heading font-bold uppercase text-white/40 mb-4 tracking-[0.4em]">AI-AUGMENTED DESIGN SPRINT</h1>
                  <GradientText
                    text="TORRENT"
                    as="h2"
                    className="bitcount-single-hero text-[15vw] md:text-[10vw] leading-[0.9] pt-[0.14em] pb-[0.16em] overflow-visible"
                  />
                  <p className="mt-8 text-xl md:text-2xl font-light text-white/80 max-w-4xl mx-auto italic">AI-augmented Design Sprint for creative teams</p>
                  <p className="mt-4 text-sm md:text-base font-mono uppercase tracking-widest text-white/40 max-w-3xl mx-auto">
                    A governed sprint protocol where AI accelerates instrumental work, and humans keep creative judgement.
                  </p>
                </div>
              </header>

              <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                  <div className="space-y-8">
                    <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-[#ff6700]">THE NARRATIVE</h3>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-white/80">
                      TORRENT is a hybrid Design Sprint framework that integrates AI at specific "injection points" to reduce mechanical workload while protecting human decision-making.
                    </p>
                    <p className="text-base text-white/40 leading-relaxed">
                      This methodology was battle-tested and first applied in collaboration with <span className="text-white border-b border-white/20">Politiken.dk</span>, where we used the 5-day flow to
                      redefine news consumption habits for younger audiences.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#ff6700] mb-4">CHALLENGE</h4>
                      <p className="text-sm leading-relaxed text-white/70 italic">
                        How can small creative teams keep Sprint speed, but reduce cognitive overload and improve decision quality, without delegating judgement to AI?
                      </p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">OUTCOME</h4>
                      <p className="text-sm leading-relaxed text-white/70">
                        A complete operational protocol (schedule, artifacts, injection points, governance rules). Current delivery covers the theoretical groundwork applied in real contexts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-40">
                  <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-white/30 text-center mb-12">METHODOLOGY COMPARISON (DECISION TREE)</h3>
                  <TorrentAnimation />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-40">
                  {[
                    { day: 'Day 1', label: 'Synthesis', list: ['Deep Research Grounding', 'Contextual Mapping', 'Automated Synthesis'] },
                    { day: 'Day 2', label: 'Map', list: ['User Journey Audit', 'Critical Friction Map', 'Challenge Framing'] },
                    { day: 'Day 3', label: 'Incubation', list: ['PROTECTED MANUAL ZONE', 'Strategic Divergence', 'Human Decision Core'] },
                    { day: 'Day 4', label: 'Build', list: ['Augmented Drafting', 'Structural Deployment', 'Technical Layout Mapping'] },
                    { day: 'Day 5', label: 'Test', list: ['Workflow Orchestration', 'Rapid Validation Cycles', 'Dynamic Insight Generation'] }
                  ].map((step, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff6700]">{step.day}</span>
                      <h5 className="text-xl font-bold uppercase mb-6 tracking-tight">{step.label}</h5>
                      <ul className="space-y-3">
                        {step.list.map((l, j) => (
                          <li key={j} className="text-[10px] uppercase font-bold text-white/40">
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <TorrentStack />
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-24 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <button onClick={() => navigateTo('home')} className="bebas-neue-regular text-3xl tracking-widest text-white bg-transparent border-none p-0 cursor-pointer">MARTA CAULA</button>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest leading-relaxed">Visual Communication & Multimedia <br /> Professional Portfolio <br /> Iteration v2.5</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#ff6700]">Navigation Map</h4>
            <nav className="flex flex-col gap-3">
              <button onClick={() => navigateTo('home')} className="text-[10px] text-white/60 hover:text-white text-left uppercase tracking-widest transition-colors font-bold">Home</button>
              <button onClick={() => navigateTo('lineup')} className="text-[10px] text-white/60 hover:text-white text-left uppercase tracking-widest transition-colors font-bold">Line Up</button>
              <button onClick={() => navigateTo('gallery')} className="text-[10px] text-white/60 hover:text-white text-left uppercase tracking-widest transition-colors font-bold">Gallery</button>
              <button onClick={() => navigateTo('torrent')} className="text-[10px] text-[#ff6700]/60 hover:text-[#ff6700] text-left uppercase tracking-widest transition-colors font-bold">Torrent Method</button>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#3a6ea5]">Social Signals</h4>
            <nav className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/marta-caula/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Linkedin className="w-3 h-3 text-[#3a6ea5]" /> LinkedIn</a>
              <a href="https://www.instagram.com/marta.caula/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Instagram className="w-3 h-3 text-[#ff6700]" /> Instagram</a>
              <a href="https://github.com/martacaula" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Github className="w-3 h-3 text-white" /> GitHub</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white/20">System Details</h4>
            <div className="flex flex-col gap-4">
              <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:border-[#ff6700] transition-colors w-fit"><Languages className="w-3 h-3 text-[#ff6700]" /><span className="text-[10px] font-mono uppercase tracking-widest">{lang} Mode</span></button>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] leading-loose">© 2025 Marta Caula <br /> Powered by TORRENT v2.5</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MediaRenderer: React.FC<{ url: string; type?: 'image' | 'video'; className?: string }> = ({ url, type = 'image', className }) => {
  const mediaClassName = className ?? 'w-full h-full object-cover';
  if (type === 'video' || url.endsWith('.mp4')) {
    return (
      <video autoPlay loop muted playsInline className={mediaClassName}>
        <source src={url} type="video/mp4" />
      </video>
    );
  }
  return <img src={url} className={mediaClassName} />;
};

export default App;
