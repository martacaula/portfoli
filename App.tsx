
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
import TorrentGallery from './components/TorrentGallery';
import { Artist as Work } from './types';

type Language = 'en' | 'es' | 'ca';

const TRANSLATIONS = {
  en: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(projects) mossfera x quant, quant x mossfera, sirene de OOONOS, internship at kave home",
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
    note: "Note"
  },
  es: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(proyectos) mossfera x quant, quant x mossfera, sirene de OOONOS, prácticas en kave home",
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
    note: "Note"
  },
  ca: {
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(projectes) mossfera x quant, quant x mossfera, sirene de OOONOS, pràctiques a kave home",
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
    note: "Nota"
  }
};

interface MultilangWork extends Work {
  longDescription: { en: string; es: string; ca: string };
  subtitle?: { en: string; es: string; ca: string };
  challenge: { en: string; es: string; ca: string };
  outcome: { en: string; es: string; ca: string };
}

const WORKS: MultilangWork[] = [
  { 
    id: '1', 
    name: 'RE:CONNECT', 
    genre: 'Digital Product Design', 
    day: 'Politiken', 
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop',
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
    }
  },
  { 
    id: '2', 
    name: 'DitMadKompass', 
    genre: 'UX Design & Strategy', 
    day: 'DitMad', 
    year: '2023',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop',
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
    }
  },
  { 
    id: '3', 
    name: 'Members App', 
    genre: 'Workflow Optimization', 
    day: 'Red Cross Denmark', 
    year: '2024',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=1600&auto=format&fit=crop',
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
    }
  },
  { 
    id: '4', 
    name: 'Mossfera x Quant', 
    genre: 'Identity & AI Strategy', 
    day: 'Mossfera', 
    year: '2025',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',
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
    }
  },
  { 
    id: '5', 
    name: 'Sirene de OOONOS', 
    genre: 'Product Design & UX', 
    day: 'OOONOS', 
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    description: 'High-fidelity UI/UX for acoustic monitoring systems.',
    challenge: {
      en: 'Visualizing sound patterns for high-stakes environmental monitoring.',
      es: 'Visualizar patrones de sonido para el monitoreo ambiental de alto riesgo.',
      ca: 'Visualitzar patrons de so per al monitoratge ambiental d\'alt risc.'
    },
    outcome: {
      en: '85% increase in user response speed during critical signal detection tests.',
      es: 'Aumento del 85% en la velocidad de respuesta del usuario durante pruebas críticas.',
      ca: 'Augment del 85% en la velocitat de resposta de l\'usuari durant proves crítiques.'
    },
    longDescription: {
      en: 'Sirene is a specialized UX project for OOONOS, focusing on the intuitive visualization of acoustic data.',
      es: 'Sirene es un proyecto de UX especializado para OOONOS.',
      ca: 'Sirene és un projecte d\'UX especialitzat per a OOONOS.'
    }
  },
  { 
    id: '6', 
    name: 'Kave Home Studio', 
    genre: 'Visual Arts & Photography', 
    day: 'Kave Home', 
    year: '2024',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop',
    description: 'Professional studio photography and lighting design for high-end furniture.',
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
    }
  },
  { 
    id: '7', 
    name: 'Quant x Mossfera', 
    genre: 'AI Workflow Integration', 
    day: 'Quant Labs', 
    year: '2025',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop',
    description: 'Integration of generative AI models into creative production pipelines.',
    challenge: {
      en: 'Automating the creative bottleneck without losing human authorship.',
      es: 'Automatizar el cuello de botella creativo sin perder la autoría humana.',
      ca: 'Automatitzar el coll de botella creatiu sense perdre l\'autoria humana.'
    },
    outcome: {
      en: 'Production turnaround time reduced by 60% across the identity department.',
      es: 'Tiempo de producción reducido en un 60% en el departamento de identidad.',
      ca: 'Temps de producció reduït en un 60% al departament d\'identitat.'
    },
    longDescription: {
      en: 'The sequel to the initial collaboration, Quant x Mossfera focused on custom GPTs and image models.',
      es: 'Quant x Mossfera se centró en la creación de GPTs personalizados.',
      ca: 'Quant x Mossfera es va centrar en la creació de GPTs personalitzats.'
    }
  },
  { 
    id: '8', 
    name: 'TORRENT', 
    genre: 'Design Sprint & AI Strategy', 
    day: 'TFG_Fase1_Marta_Caula_Riera', 
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    description: 'An AI-augmented Design Sprint that protects human judgment while reducing cycle time.',
    subtitle: {
      en: 'An AI-augmented Design Sprint that protects human judgment while reducing cycle time.',
      es: 'Un Design Sprint aumentado por IA que protege el juicio humano mientras reduce el tiempo de ciclo.',
      ca: 'Un Design Sprint augmentat per IA que protegeix el judici humà mentre redueix el temps de cicle.'
    },
    challenge: {
      en: 'BALANCING AI SPEED WITH HUMAN CREATIVITY IN DESIGN SPRINTS.',
      es: 'EQUILIBRAR LA VELOCIDAD DE LA IA CON LA CREATIVIDAD HUMANA EN DESIGN SPRINTS.',
      ca: 'EQUILIBRAR LA VELOCITAT DE LA IA AMB LA CREATIVITAT HUMANA EN DESIGN SPRINTS.'
    },
    outcome: {
      en: 'A robust methodology with "no-AI" windows for ideation and mandatory traceability.',
      es: 'Una metodología robusta con ventanas "sin IA" para ideación y trazabilidad obligatoria.',
      ca: 'Una metodologia robusta amb finestres "sense IA" per a ideació i traçabilitat obligatòria.'
    },
    longDescription: {
      en: 'TORRENT is a Design Sprint enriched with AI for small creative teams. AI is used as a collaborative cognitive tool embedded in the workflow, focused on instrumental tasks like transcription, synthesis, formatting, and rapid prototyping, while decisions remain fully human (human-in-the-loop). The method introduces explicit “no-AI” windows for ideation and incubation, plus mandatory traceability through a Decision Log and an Insight Repo, and Green AI limits to keep usage intentional and sustainable.',
      es: 'TORRENT es un Design Sprint enriquecido con IA para pequeños equipos creativos. La IA actúa como herramienta cognitiva colaborativa en tareas instrumentales, mientras las decisiones siguen siendo plenamente dirigida por humanos. El método incluye ventanas "sin IA" para ideación pura, asegura trazabilidad mediante registros de decisión y promueve un uso sostenible de la IA.',
      ca: 'TORRENT és un Design Sprint enriquit amb IA per a petits equips creatius. La IA actua com a eina cognitiva col·laborativa per a tasques instrumentals, mentre les decisions segueixen sent plenament dirigida per humans. El mètode inclou finestres "sense IA" per a ideació pura, assegura traçabilitat mitjançant registres de decisió i promou un ús sostenible de la IA.'
    }
  }
];

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
                    <span className="w-2 h-2 bg-[#ff6700] rounded-full animate-pulse"/>
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
                        {lang === 'en' ? 'Who' : lang === 'es' ? 'Quién' : 'Qui'} <br/> <GradientText text={lang === 'en' ? 'AM I' : lang === 'es' ? 'SOY' : 'SÓC'} className="text-6xl md:text-9xl" />
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
                        {lang === 'en' ? 'Three Branches' : lang === 'es' ? 'Tres Ramas' : 'Tres Branques'} <br/> 
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
            <motion.div key="work-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0a0a0a]">
              <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" /><img src={selectedWork.image} className="w-full h-full object-cover grayscale opacity-30" /></div>
                 <div className="relative z-20 text-center max-w-6xl px-6">
                    <button onClick={() => navigateTo('lineup')} className="mb-8 inline-flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-[0.4em] hover:text-[#ff6700] transition-colors"><ArrowLeft className="w-4 h-4" /> {t('lineupFeed')}</button>
                    <h1 className="text-5xl md:text-[9rem] font-heading font-bold text-white leading-[0.8] mb-6 tracking-tighter uppercase">{selectedWork.name}</h1>
                    <p className="text-lg md:text-2xl text-[#ff6700] font-mono tracking-widest max-w-3xl mx-auto uppercase">{selectedWork.subtitle?.[lang] || selectedWork.description}</p>
                 </div>
              </section>
              <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-32">
                       <div className="space-y-12"><h2 className="text-4xl md:text-6xl font-heading font-bold uppercase">{t('narrative')}</h2><p className="text-xl md:text-3xl text-white/70 leading-relaxed font-light">{selectedWork.longDescription[lang]}</p></div>
                       <div className="p-10 border border-white/10 bg-black/60 backdrop-blur-3xl rounded-[3rem] space-y-10">
                          <div><h5 className="text-[#ff6700] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">{t('challenge')}</h5><p className="text-white text-xl font-heading font-bold leading-tight tracking-tight uppercase">{selectedWork.challenge[lang]}</p></div>
                          <div className="h-px bg-white/10" />
                          <div><h5 className="text-[#3a6ea5] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">{t('outcome')}</h5><p className="text-white/70 text-sm leading-relaxed">{selectedWork.outcome[lang]}</p></div>
                       </div>
                    </div>
                    <aside className="lg:col-span-4 lg:sticky lg:top-40 self-start"><div className="p-10 border border-white/5 rounded-[2.5rem]"><h5 className="text-white/20 mb-6 text-[10px] font-mono uppercase tracking-widest">{t('nextWork')}</h5><button onClick={() => { const idx = WORKS.findIndex(w => w.id === selectedWork?.id); const next = WORKS[(idx + 1) % WORKS.length]; navigateTo('work-detail', undefined, next); }} className="group flex items-center justify-between w-full text-left"><span className="text-3xl font-black uppercase group-hover:text-[#ff6700] transition-colors leading-none tracking-tighter">{WORKS[(WORKS.findIndex(w => w.id === selectedWork?.id) + 1) % WORKS.length].name}</span><ArrowRight className="w-8 h-8 text-[#ff6700] group-hover:translate-x-3 transition-transform" /></button></div></aside>
                 </div>
              </section>
            </motion.div>
          ) : (
            <motion.div key="torrent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0a0a0a] overflow-x-hidden pb-40">
              <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                 <div className="absolute inset-0 opacity-40"><div className="absolute inset-0 bg-gradient-to-b from-[#ff6700]/20 to-[#0a0a0a] z-10" /><img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" /></div>
                 <div className="relative z-20 text-center max-w-7xl px-6 w-full">
                    <button onClick={() => navigateTo('home')} className="mb-12 inline-flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-[0.4em] hover:text-[#ff6700] transition-colors"><ArrowLeft className="w-4 h-4" /> {t('exitEnvironment')}</button>
                    <h1 className="text-4xl md:text-[6rem] font-heading font-bold text-white leading-none mb-4 tracking-tighter uppercase">{t('project')}</h1>
                    <div className="w-full flex justify-center"><GradientText text="TORRENT" as="h2" className="bitcount-single-hero text-[15vw] md:text-[10vw] leading-[0.6] text-center mb-12" /></div>
                 </div>
              </section>
              <section className="py-24 px-6 max-w-7xl mx-auto space-y-12"><TorrentAnimation /></section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-24 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <button onClick={() => navigateTo('home')} className="bebas-neue-regular text-3xl tracking-widest text-white bg-transparent border-none p-0 cursor-pointer">MARTA CAULA</button>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest leading-relaxed">Visual Communication & Multimedia <br/> Professional Portfolio <br/> Iteration v2.5</p>
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
              <a href="https://linkedin.com/in/martacaula" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Linkedin className="w-3 h-3 text-[#3a6ea5]" /> LinkedIn</a>
              <a href="https://instagram.com/martacaula" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Instagram className="w-3 h-3 text-[#ff6700]" /> Instagram</a>
              <a href="https://github.com/martacaula" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] text-white/60 hover:text-white uppercase tracking-widest transition-colors font-bold"><Github className="w-3 h-3 text-white" /> GitHub</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white/20">System Details</h4>
            <div className="flex flex-col gap-4">
              <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:border-[#ff6700] transition-colors w-fit"><Languages className="w-3 h-3 text-[#ff6700]" /><span className="text-[10px] font-mono uppercase tracking-widest">{lang} Mode</span></button>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] leading-loose">© 2025 Marta Caula <br/> Powered by TORRENT v2.5</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
