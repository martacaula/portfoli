
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Ticket, Globe, Zap, MapPin, Menu, X, Calendar, ChevronLeft, ChevronRight, ArrowLeft, Camera, Layers, Cpu, ArrowRight, Activity, Terminal, Briefcase, Workflow, Maximize2, ExternalLink, Eye, Image as ImageIcon, Languages, ShieldCheck, ShieldAlert, UserCheck, Timer, Target, Users, Lightbulb, TrendingUp, HelpCircle, GraduationCap, Waves, Coffee, Camera as CameraIcon, CheckCircle2, FileText, Instagram, Linkedin, Github, Sparkles, Quote, Plane } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ArtistCard from './components/ArtistCard';
import AIChat from './components/AIChat';
import TorrentAnimation from './components/TorrentAnimation';
import ToolAquarium from './components/ToolAquarium';
import TorrentStack from './components/TorrentStack';
import TorrentGallery, { type FolderName } from './components/TorrentGallery';
import { Artist as Work, type Language } from './types';
import martaPhoto from './Assets/marta_caula.jpeg';

const TRANSLATIONS = {
  en: {
    home: "Home",
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
    aboutBio: "My name is Marta Caula Riera and I am 25 years old. I'm from Girona. There, at the ERAM University School, I studied a degree in Audiovisual and Multimedia Communication, 100% in English. This degree opened a door for me into underwater photography. I specialized in these techniques and learned skills that quickly led me into studio photography. After six months in Copenhagen, I now see a future in optimizing creative processes. This makes us one of the most important departments in times of AI, because creativity is born from the most unique things, not from high probabilities. But it is true that this artificial intelligence can help us improve our results by optimizing the most mechanical workloads. I hope to contribute as much as possible from everything I have learned in this department and, if possible, one day leave a mark.",
    workExp: "Diverse professional path: waitress since 18, underwater photographer, and studio photographer at Kave Home. I handle projects with full professionalism.",
    surferText: "Energetic, determined, and ready to develop my full potential.",
    aboutLocationLabel: "Location",
    aboutLocationValue: "Girona, Catalonia",
    aboutEducationLabel: "Education",
    aboutEducationValue: "ERAM (Audiovisual & Multimedia)",
    aboutAgeLabel: "Age",
    aboutAgeValue: "25 years",
    aboutJourneyLabel: "THE JOURNEY",
    aboutJourneyTitleLine1: "FROM AQUATIC PRECISION",
    aboutJourneyTitleLine2: "TO CREATIVE WORKFLOWS.",
    aboutJourneyQuote: "\"Studying Audiovisual and Multimedia Communication at the ERAM University School opened an unexpected path for me: underwater photography.\"",
    aboutJourneyParagraph: "This technical specialization let me understand light and movement in a unique way, taking me quickly from the unpredictability of water to the precision of studio photography.",
    aboutQuoteTitlePre: "Creativity comes from the",
    aboutQuoteTitleHighlight: "unique",
    aboutQuoteTitlePost: ", not from high probabilities.",
    aboutQuoteBody: "I'm part of the department that believes AI should optimize mechanical workloads, not replace the spark of originality. AI can help us improve results, but the imprint must always be human.",
    aboutInternationalLabel: "International perspective",
    aboutInternationalTitle: "6 MONTHS IN COPENHAGEN",
    aboutInternationalBody: "My time in Denmark consolidated my view of optimizing creative processes. I now see a future where design and technology collaborate seamlessly.",
    aboutVisionLabel: "Creative Vision",
    aboutVisionTitle: "LEAVING A MARK",
    aboutVisionBody: "I hope to contribute as much as possible with everything I've learned and, one day, leave a mark that redefines how we understand creative production in the digital era.",
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
    projectPdfs: "Project PDFs",
    noPdfs: "No PDFs available",
    nextSteps: ["Beta testing", "Tone fine-tuning", "Accessibility audit"],
    successMetrics: ["Daily active users", "Completion rate", "Conversion to premium"],
    languageLabel: "Language"
  },
  es: {
    home: "Inicio",
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(proyectos) mossfera x quant, prácticas en kave home",
    gallery: "Galería",
    tfg: "PROYECTO DE FINAL DE GRADO",
    iteration: "Iteración 2025",
    designSprint: "Sprint de Diseño",
    methodology: "Productos digitales evolucionados mediante la metodología TORRENT.",
    viewMethod: "Ver Método",
    whoAmI: "Quién SOY",
    aboutBio: "Me llamo Marta Caula Riera y tengo 25 años. Soy de Girona. Allí, en la Escuela Universitaria ERAM, estudié un grado en Comunicación Audiovisual y Multimedia, 100 % en inglés. Esta carrera me abrió un camino hacia la fotografía acuática. Me especialicé en estas técnicas y aprendí conocimientos que me llevaron muy rápido a la fotografía de estudio. Después de seis meses en Copenhague, ahora veo un futuro en la optimización de procesos creativos. Esto nos convierte en uno de los departamentos más importantes en épocas de IA, ya que la creatividad nace de las cosas más únicas, no de las altas probabilidades. Pero es cierto que esta inteligencia artificial nos puede servir para mejorar nuestros resultados, optimizando las cargas más mecánicas. Espero poder aportar al máximo todo lo que he aprendido en este departamento y, si es posible, algún día dejar huella.",
    workExp: "Trayectoria profesional diversa: camarera desde los 18, fotógrafa submarina y de estudio en Kave Home. Gestión profesional de proyectos.",
    surferText: "Enérgica, decidida y lista para desarrollar todo mi potencial.",
    aboutLocationLabel: "Ubicación",
    aboutLocationValue: "Girona, Cataluña",
    aboutEducationLabel: "Formación",
    aboutEducationValue: "ERAM (Audiovisual y Multimedia)",
    aboutAgeLabel: "Edad",
    aboutAgeValue: "25 años",
    aboutJourneyLabel: "EL RECORRIDO",
    aboutJourneyTitleLine1: "DE LA PRECISIÓN ACUÁTICA",
    aboutJourneyTitleLine2: "A FLUJOS DE TRABAJO CREATIVOS.",
    aboutJourneyQuote: "\"Estudiar Comunicación Audiovisual y Multimedia en la Escuela Universitaria ERAM me abrió un camino inesperado: la fotografía acuática.\"",
    aboutJourneyParagraph: "Esta especialización técnica me permitió entender la luz y el movimiento de una forma única, llevándome rápidamente de la imprevisibilidad del agua a la precisión de la fotografía de estudio.",
    aboutQuoteTitlePre: "La creatividad nace de lo",
    aboutQuoteTitleHighlight: "único",
    aboutQuoteTitlePost: ", no de las altas probabilidades.",
    aboutQuoteBody: "Soy del departamento que cree que la IA debe servir para optimizar las cargas mecánicas, no para sustituir la chispa de la originalidad. La IA puede ayudarnos a mejorar resultados, pero la huella siempre debe ser humana.",
    aboutInternationalLabel: "Perspectiva internacional",
    aboutInternationalTitle: "6 MESES EN COPENHAGUE",
    aboutInternationalBody: "Mi estancia en Dinamarca consolidó mi visión sobre la optimización de procesos creativos. Ahora veo un futuro en el que el diseño y la tecnología colaboran de forma fluida.",
    aboutVisionLabel: "Visión creativa",
    aboutVisionTitle: "DEJAR HUELLA",
    aboutVisionBody: "Espero poder aportar al máximo todo lo que he aprendido y, algún día, dejar una huella que redefina cómo entendemos la producción creativa en la era digital.",
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
    initialize: "Inicializar Protocolo",
    narrative: "La Narrativa",
    challenge: "Desafío",
    outcome: "Resultado",
    launchPreview: "Lanzar Prototipo",
    lineupFeed: "Feed de The Waves",
    returnHome: "Volver a Inicio",
    gallerySubtitle: "Un viaje visual a través de mi mirada",
    exitEnvironment: "Salir del Entorno",
    project: "PROYECTO",
    methodTitle: "MÉTODO DE DESARROLLO DE PRODUCTOS DIGITALES",
    forCreative: "PARA DEPARTAMENTOS CREATIVOS",
    nextWork: "Siguiente Trabajo",
    problemAnalysis: "Problema / Insight",
    solutionTitle: "La Solución",
    personaTitle: "Perfil de Usuario",
    metricsTitle: "Métricas de Éxito",
    taskTitle: "Tu Tarea",
    takeOnTitle: "Danos tu opinión sobre",
    note: "Nota",
    sideCardButton: "Ver Caso",
    yourTaskPreLine: "Exploración estratégica",
    yourTaskQuestion: "¿Qué haría que esta experiencia fuese sin esfuerzo para las personas?",
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
    projectPdfs: "PDFs del proyecto",
    noPdfs: "No hay PDFs disponibles",
    nextSteps: ["Pruebas beta", "Ajuste de tono", "Auditoría de accesibilidad"],
    successMetrics: ["Usuarios activos diarios", "Tasa de finalización", "Conversión a premium"],
    languageLabel: "Idioma"
  },
  ca: {
    home: "Inici",
    lineupNav: "Line Up",
    lineupTitle: "THE WAVES",
    lineupSubtitle: "(projectes) mossfera x quant, pràctiques a kave home",
    gallery: "Galeria",
    tfg: "TREBALL FINAL DE GRAU",
    iteration: "Iteració 2025",
    designSprint: "Sprint de Disseny",
    methodology: "Productes digitals evolucionats mitjançant la metodologia TORRENT.",
    viewMethod: "Veure Mètode",
    whoAmI: "Qui SÓC",
    aboutBio: "Em dic Marta Caula Riera i tinc 25 anys. Soc de Girona. I allà, a l’Escola Universitària ERAM, vaig estudiar un grau en Comunicació Audiovisual i Multimèdia, 100 % en anglès. Aquesta carrera va fer-me un forat en la fotografia aquàtica. Em vaig especialitzar en aquestes tècniques i vaig aprendre uns coneixements que em van portar a fotografia d’estudi molt ràpid. Després de sis mesos a Copenhaguen, ara veig un futur en optimitzacions de processos creatius. Fet que som un dels departaments més importants en èpoques d’IA, ja que la creativitat neix de les coses més úniques, pas de les altes probabilitats. Però és cert que aquesta intel·ligència artificial ens pot servir per millorar els nostres resultats, optimitzant les càrregues més mecàniques. Espero poder aportar el màxim possible de tot el que he après en aquest departament i a poder ser, algun dia, deixar empremta.",
    workExp: "Trajectòria professional diversa: cambrera des dels 18, fotògrafa submarina i d'estudi a Kave Home. Gestió professional de projectes.",
    surferText: "Enèrgica, decidida i llista per desenvolupar tot el meu potencial.",
    aboutLocationLabel: "Ubicació",
    aboutLocationValue: "Girona, Catalunya",
    aboutEducationLabel: "Formació",
    aboutEducationValue: "ERAM (Audiovisual i Multimèdia)",
    aboutAgeLabel: "Edat",
    aboutAgeValue: "25 anys",
    aboutJourneyLabel: "EL RECORREGUT",
    aboutJourneyTitleLine1: "DE LA PRECISIÓ AQUÀTICA",
    aboutJourneyTitleLine2: "A FLUXOS DE TREBALL CREATIUS.",
    aboutJourneyQuote: "\"Estudiar Comunicació Audiovisual i Multimèdia a l'Escola Universitària ERAM em va obrir un camí inesperat: la fotografia aquàtica.\"",
    aboutJourneyParagraph: "Aquesta especialització tècnica em va permetre entendre la llum i el moviment d'una manera única, portant-me ràpidament de la imprevisibilitat de l'aigua a la precisió de la fotografia d'estudi.",
    aboutQuoteTitlePre: "La creativitat neix del que és",
    aboutQuoteTitleHighlight: "únic",
    aboutQuoteTitlePost: ", no de les altes probabilitats.",
    aboutQuoteBody: "Sóc del departament que creu que la IA ha de servir per optimitzar les càrregues mecàniques, no per substituir la guspira de l'originalitat. La IA ens pot ajudar a millorar resultats, però l'empremta sempre ha de ser humana.",
    aboutInternationalLabel: "Perspectiva internacional",
    aboutInternationalTitle: "6 MESOS A COPENHAGUEN",
    aboutInternationalBody: "La meva estada a Dinamarca va consolidar la meva visió sobre l'optimització de processos creatius. Ara veig un futur on el disseny i la tecnologia col·laboren de forma fluida.",
    aboutVisionLabel: "Visió creativa",
    aboutVisionTitle: "DEIXAR EMPREMTA",
    aboutVisionBody: "Espero poder aportar el màxim possible de tot el que he après i, algun dia, deixar una empremta que redefineixi com entenem la producció creativa en l'era digital.",
    iterateDeployRefine: "Observar. Capturar. Iterar.",
    vision: "Nucli Creatiu",
    engine: "Alta Velocitat",
    threeBranches: "Tres branques amb les quals treballo",
    designBranch: "Disseny i Identitat",
    designList: ["Sistemes d'Experiència UI/UX", "Brànding i Estratègia"],
    visualBranch: "Arts Visuals",
    visualList: ["Fotografia d'Estudi", "Captura Submarina"],
    digitalBranch: "Transformació Digital",
    digitalList: ["Integració d'IA TORRENT", "Desenvolupament de Producte"],
    ecosystemTitle: "Ecosistema Creatiu",
    method: "El Mètode",
    methodText: "TORRENT és un marc especialitzat per a la innovació digital.",
    coachTitle: "L'EXPERIÈNCIA AMB COACH",
    coachText: "Un sprint TORRENT és un viatge guiat. L'acompanyament professional assegura que l'acceleració de la IA s'equilibri amb el criteri creatiu humà.",
    framework: "El Marc Cognitiu",
    frameworkText: "TORRENT és un mètode de desenvolupament de productes digitals especialitzat per a departaments creatius d'alt rendiment.",
    statusReady: "Estat: Llest",
    analyze: "[ANALITZAR]",
    analyzeText: "Destil·lant l'ajust producte-mercat.",
    iterate: "[ITERAR]",
    iterateText: "Generant més de 25 variacions a l'instant.",
    initialize: "Inicialitzar Protocol",
    narrative: "La Narrativa",
    challenge: "Repte",
    outcome: "Resultat",
    launchPreview: "Llançar Prototip",
    lineupFeed: "Feed de The Waves",
    returnHome: "Tornar a l'Inici",
    gallerySubtitle: "Un viatge visual a través de la meva mirada",
    exitEnvironment: "Sortir de l'Entorn",
    project: "PROJECTE",
    methodTitle: "MÈTODE DE DESENVOLUPAMENT DE PRODUCTES DIGITALS",
    forCreative: "PER A DEPARTAMENTS CREATIUS",
    nextWork: "Següent Treball",
    problemAnalysis: "Problema / Insight",
    solutionTitle: "La Solució",
    personaTitle: "Perfil d'Usuari",
    metricsTitle: "Mètriques d'Èxit",
    taskTitle: "La teva tasca",
    takeOnTitle: "Dona'ns la teva visió sobre",
    note: "Nota",
    sideCardButton: "Veure Cas",
    yourTaskPreLine: "Exploració estratègica",
    yourTaskQuestion: "Què faria que aquesta experiència fos sense esforç per a les persones?",
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
    projectPdfs: "PDFs del projecte",
    noPdfs: "No hi ha PDFs disponibles",
    nextSteps: ["Proves beta", "Ajust de to", "Auditoria d'accessibilitat"],
    successMetrics: ["Usuaris actius diaris", "Taxa de finalització", "Conversió a premium"],
    languageLabel: "Llengua"
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

const lineupAssets = import.meta.glob<string>('./Assets/**/*.{jpg,JPG,jpeg,png}', { eager: true, import: 'default' });

const lineupDocs = import.meta.glob<string>('./Assets/**/*.{pdf,PDF}', { eager: true, import: 'default' });

const lineupVideos = import.meta.glob<string>('./Assets/**/*.{mov,MOV,mp4,MP4}', { eager: true, import: 'default' });

const findLineupAsset = (suffix: string) =>
  Object.entries(lineupAssets).find(([path]) => path.endsWith(suffix))?.[1] ?? '';

const buildFolderAssets = (folderName: string) =>
  Object.entries(lineupAssets)
    .filter(([path]) => path.includes(`/Assets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, url]) => url);

type ProjectLink = {
  url: string;
  label: string;
  kind: 'pdf';
};

const buildFolderLinks = (folderName: string): ProjectLink[] =>
  Object.entries(lineupDocs)
    .filter(([path]) => path.includes(`/Assets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, url]) => {
      const filename = path.split('/').pop() ?? 'Document';
      return { url, label: filename, kind: 'pdf' };
    });

type ProjectMedia = { url: string; type: 'image' | 'video' };

const buildFolderMedia = (folderName: string, excludeUrls: Set<string> = new Set()): ProjectMedia[] => {
  const images = Object.entries(lineupAssets)
    .filter(([path]) => path.includes(`/Assets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, url]) => ({ url, type: 'image' as const }))
    .filter((media) => !excludeUrls.has(media.url));
  const videos = Object.entries(lineupVideos)
    .filter(([path]) => path.includes(`/Assets/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, url]) => ({ url, type: 'video' as const }));

  return [...images, ...videos];
};

const LINEUP_IMAGES = {
  reconnect: findLineupAsset('Assets/reconnectmedia/hero_reconect.jpeg') || '/hero_reconect.jpeg',
  ditmad: findLineupAsset('Assets/ditmadmedia/heroditmad.jpg'),
  redcross: findLineupAsset('Assets/redcrossmedia/heroredcross.png'),
  moss: findLineupAsset('Assets/mossmedia/Captura de pantalla 2026-01-28 a las 14.46.49.png'),
  blu: findLineupAsset('Assets/blu/hero_blu.jpeg'),
  kave: findLineupAsset('Assets/kavehomeinternship/herokave.jpg'),
  neety: findLineupAsset('Assets/neetymedia/heroneety.png'),
  strenes: findLineupAsset('Assets/strenesmedia/herostrenes.png'),
};

const LINEUP_DETAIL_IMAGES = {
  moss: findLineupAsset('Assets/mossmedia/heromoss.jpg')
};

const LINEUP_HERO_EXCLUDES: Record<string, Set<string>> = {
  '1': new Set([LINEUP_IMAGES.reconnect]),
  '2': new Set([LINEUP_IMAGES.ditmad]),
  '3': new Set([LINEUP_IMAGES.redcross]),
  '4': new Set([LINEUP_IMAGES.moss, LINEUP_DETAIL_IMAGES.moss].filter(Boolean) as string[]),
  '5': new Set([LINEUP_IMAGES.blu]),
  '6': new Set([LINEUP_IMAGES.kave]),
  '8': new Set([LINEUP_IMAGES.neety]),
  '9': new Set([LINEUP_IMAGES.strenes]),
};

const LINEUP_LOGS: Record<string, ProjectMedia[]> = {
  '1': buildFolderMedia('reconnectmedia', LINEUP_HERO_EXCLUDES['1']),
  '2': [],
  '3': buildFolderMedia('redcrossmedia', LINEUP_HERO_EXCLUDES['3']),
  '4': buildFolderMedia('mossmedia', LINEUP_HERO_EXCLUDES['4']),
  '5': buildFolderMedia('blu', LINEUP_HERO_EXCLUDES['5']),
  '6': buildFolderMedia('kavehomeinternship', LINEUP_HERO_EXCLUDES['6']),
  '8': buildFolderMedia('neetymedia', LINEUP_HERO_EXCLUDES['8']),
  '9': buildFolderMedia('strenesmedia', LINEUP_HERO_EXCLUDES['9']),
};

const LINEUP_LINKS: Record<string, ProjectLink[]> = {
  '1': buildFolderLinks('reconnectmedia'),
  '2': buildFolderLinks('ditmadmedia'),
  '3': buildFolderLinks('redcrossmedia'),
  '4': buildFolderLinks('mossmedia'),
  '5': buildFolderLinks('blu'),
  '6': buildFolderLinks('kavehomeinternship'),
  '8': buildFolderLinks('neetymedia'),
  '9': buildFolderLinks('strenesmedia'),
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
          subtitle: 'Un hábito insignia que demuestra valor premium antes del pago.',
          narrative: 'En un sprint de 2 días, replanteamos el reto juvenil de Politiken en torno a atención, confianza y ritmo diario. El concepto es un brief de audio de 5 a 10 minutos para el despertar y el trayecto, con una vía de entrada para estudiantes que reduce la fricción desde el inicio.'
        },
        sideCard: {
          challenge: 'La pérdida en print no se convertía a digital, el atractivo juvenil era limitado y el uso de la app se estimaba en torno al 15–20% con descubrimiento bloqueado por suscripción. La competencia ganaba las mañanas con resúmenes más rápidos, mientras la dispersión del producto amenazaba con diluir el foco.',
          outcome: 'Un concepto insignia convergente con un límite de alcance claro, además de un prototipo previsto y un plan de test para validar hábito y confianza.',
          buttonLabel: 'Ver one‑pager del concepto'
        },
        yourTask: {
          preLine: 'Diseña para un momento real de la mañana.',
          question: '¿Cuál es la experiencia diaria más pequeña que hace que Politiken merezca volver?',
          reframe: 'Si podemos ganar 10 minutos al día, ¿qué debe incluir y excluir el brief? ¿Cómo demostramos calidad antes de pedir pago?'
        },
        takeOn: {
          questions: [
            '¿Qué te haría apuntarte a un brief de audio diario mañana por la mañana?',
            '¿Qué temas deberían estar en el brief por defecto y cuáles deberían ser opcionales?',
            '¿Qué señales de confianza importan más en resúmenes con IA y preguntas por voz?',
            '¿Dónde debería vivir la vía de entrada para estudiantes: app, acuerdos con campus o ambos?',
            '¿Cuál es la única cosa que haría que esto se sintiera premium, no solo conveniente?'
          ],
          note: ''
        },
        problem: {
          insight: 'Los lectores jóvenes se comprometen con premium cuando encaja en su rutina y demuestra valor con mínima fricción.',
          tensions: [
            'Profundidad periodística vs consumo de 5 a 10 minutos',
            'Protección del paywall vs descubrimiento y formación de hábito',
            'Un solo producto insignia vs presión por lanzar muchas funciones'
          ]
        },
        persona: {
          title: 'Estudiante lector con poco tiempo',
          oneLiner: 'Móvil primero, sensible al precio y con altas expectativas de confianza, con preferencia por audio corto y acceso offline.',
          needs: [
            'Un brief que respete el poco tiempo',
            'Señales claras de calidad y credibilidad',
            'Vía de entrada para estudiantes con baja fricción (prueba, partners)'
          ]
        },
        solution: {
          title: 'Brief matutino de noticias con IA',
          paragraph: 'Un brief diario con voz que se abre desde una notificación programada, entrega resúmenes curados y permite preguntas de seguimiento basadas en el periodismo de Politiken. La experiencia se mantiene deliberadamente acotada para proteger calidad y repetición.',
          definingPhrases: [
            'Brief de voz de 5 a 10 minutos',
            'Demostrar valor antes del pago',
            'Vía de entrada para estudiantes para conversión posterior'
          ]
        },
        metrics: {
          nextSteps: [
            'Wireframe de los primeros 30 segundos y el flujo principal del reproductor.',
            'Construir un prototipo clicable y hacer entrevistas cortas con estudiantes centradas en timing, claridad y confianza.',
            'Definir un límite de alcance protegido y un plan ligero de operaciones de contenido para briefs diarios.'
          ],
          successMetrics: [
            'Frecuencia de escucha de al menos 3 veces por semana por usuario (objetivo).',
            'Retención a 30+ días de la experiencia de brief (objetivo).',
            'Conversión de acceso estudiante a pago tras graduación (objetivo).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Politiken Re:Connect | Voice-First Morning Brief',
          subtitle: 'Un hàbit insígnia que demostra valor premium abans del pagament.',
          narrative: 'En un sprint de 2 dies, vam replantejar el repte juvenil de Politiken al voltant d’atenció, confiança i ritme diari. El concepte és un brief d’àudio de 5 a 10 minuts pensat per al despertar i el trajecte, amb una via d’entrada per a estudiants que redueix la fricció des del principi.'
        },
        sideCard: {
          challenge: 'La pèrdua en paper no es convertia a digital, l’atractiu juvenil era limitat i l’ús de l’app s’estimava al voltant del 15–20% amb descobriment bloquejat per subscripció. Els competidors guanyaven els matins amb resums més ràpids, mentre la dispersió del producte amenaçava de diluir el focus.',
          outcome: 'Un concepte insígnia convergent amb un límit d’abast clar, més un prototip previst i un pla de test per validar hàbit i confiança.',
          buttonLabel: 'Veure one‑pager del concepte'
        },
        yourTask: {
          preLine: 'Dissenya per a un moment real del matí.',
          question: 'Quina és l’experiència diària més petita que fa que Politiken valgui la pena tornar-hi?',
          reframe: 'Si podem guanyar 10 minuts al dia, què ha d’incloure i excloure el brief? Com demostrem qualitat abans de demanar pagament?'
        },
        takeOn: {
          questions: [
            'Què et faria apuntar-te a un brief d’àudio diari demà al matí?',
            'Quins temes han d’anar al brief per defecte i quins han de ser opcionals?',
            'Quins senyals de confiança són més importants en resums amb IA i Q&A per veu?',
            'On hauria de viure la via d’entrada per a estudiants: app, acords amb campus o tots dos?',
            'Quina és l’única cosa que faria que això se sentís premium, no només convenient?'
          ],
          note: ''
        },
        problem: {
          insight: 'Els lectors joves es comprometen amb el premium quan s’adapta a la seva rutina i demostra valor amb mínima fricció.',
          tensions: [
            'Profunditat periodística vs consum de 5 a 10 minuts',
            'Protecció del paywall vs descobriment i formació d’hàbit',
            'Un sol producte insígnia vs pressió per llançar moltes funcionalitats'
          ]
        },
        persona: {
          title: 'Estudiant lector amb poc temps',
          oneLiner: 'Mobile-first, sensible al preu i amb altes expectatives de confiança, amb preferència per àudio curt i accés offline.',
          needs: [
            'Un brief que respecti el poc temps',
            'Senyals clars de qualitat i credibilitat',
            'Via d’entrada per a estudiants amb baixa fricció (prova, partners)'
          ]
        },
        solution: {
          title: 'Brief matinal de notícies amb IA',
          paragraph: 'Un brief diari amb veu que s’obre des d’una notificació programada, ofereix resums curats i permet preguntes de seguiment basades en el periodisme de Politiken. L’experiència es manté deliberadament acotada per protegir la qualitat i la repetició.',
          definingPhrases: [
            'Brief de veu de 5 a 10 minuts',
            'Prova de valor abans del pagament',
            'Via d’entrada per a estudiants per a conversió posterior'
          ]
        },
        metrics: {
          nextSteps: [
            'Fer el wireframe dels primers 30 segons i el flux principal del reproductor.',
            'Construir un prototip clicable i fer entrevistes curtes amb estudiants centrades en timing, claredat i confiança.',
            'Definir un límit d’abast protegit i un pla lleuger d’operacions de contingut per a briefs diaris.'
          ],
          successMetrics: [
            'Freqüència d’escolta d’almenys 3 vegades per setmana per usuari (objectiu).',
            'Retenció a 30+ dies de l’experiència de brief (objectiu).',
            'Conversió d’accés estudiant a pagament després de graduació (objectiu).'
          ]
        }
      }
    }
  },
  {
    id: '2',
    name: 'DitMad',
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
          challenge: 'Los compradores daneses tienen dificultades para interpretar etiquetas, aditivos y números E en tiempo real, y las apps existentes no se localizan del todo a sus necesidades. La start-up no tenía identidad de marca, base de datos ni modelo de scoring, así que construir “lo real” primero era arriesgado.',
          outcome: 'Una experiencia definida de escaneo‑valoración‑alternativas, además de un prototipo Fake Door + Pinocchio para validar demanda y confianza antes del MVP.',
          buttonLabel: 'Ver deck de concepto'
        },
        yourTask: {
          preLine: 'Haz que la transparencia alimentaria sea usable en el pasillo.',
          question: '¿Cómo podríamos ayudar a la gente en Dinamarca a tomar decisiones más saludables con un escaneo simple y confiable?',
          reframe: '¿Qué debería explicar la app al instante y qué debería dejar fuera para mantener la rapidez? ¿Qué haría que la puntuación se perciba creíble y no cosmética?'
        },
        takeOn: {
          questions: [
            '¿Qué debería priorizar el primer resultado: aditivos, azúcares, grasas saturadas o nivel de procesamiento?',
            '¿Confiarías en una puntuación tipo semáforo sin un desglose profundo cada vez? ¿Por qué?',
            '¿Cuándo quieres alternativas: solo en productos “rojos” o siempre?',
            '¿Qué haría que se sintiera danesa: detección Ø‑mærket, explicadores de regulación local o marco nutricional nórdico?',
            '¿Qué te convencería de pagar: escaneos ilimitados, modos personalizados o insights semanales?'
          ],
          note: ''
        },
        problem: {
          insight: 'La información alimentaria es demasiado compleja para momentos reales de compra, así que la claridad y la confianza ganan a la profundidad por defecto.',
          tensions: [
            'Complejidad científica vs decisión en 2 segundos en tienda',
            'Sin base de datos existente vs expectativa de resultados instantáneos',
            'Claridad de “puntuación simple” vs necesidad de demostrar cómo se obtiene'
          ]
        },
        persona: {
          title: 'Padre/Madre comprador/a cotidiano/a',
          oneLiner: 'Compra rápido, quiere hacerlo mejor para el hogar y no tiene tiempo para descifrar etiquetas.',
          needs: [
            'Explicaciones inmediatas y en lenguaje claro (especialmente aditivos y procesado)',
            'Confianza mediante un sistema visual consistente y una lógica repetible',
            'Alternativas mejores que sean realistas de comprar, no teóricas'
          ]
        },
        solution: {
          title: 'Escanear, Puntuar, Sustituir',
          paragraph: 'Un concepto de escaneo de productos pensado para Dinamarca que simplifica la nutrición en una puntuación tipo semáforo, destaca positivos y negativos y ofrece alternativas más saludables. El sistema se apoya en un plan de comunicación en social y formatos breves, y en un modelo freemium por niveles que escala desde claridad básica a insights y personalización.',
          definingPhrases: [
            'Capa de confianza tipo semáforo',
            'Alternativas como recompensa',
            'Progresión de freemium a premium'
          ]
        },
        metrics: {
          nextSteps: [
            'Lanzar la landing Fake Door con “Prueba el escáner ahora” y medir intención real.',
            'Ejecutar la simulación Pinocchio con búsqueda manual (Open Food Facts detrás) para probar finalización y confianza.',
            'Si se valida, pasar a un MVP con escaneo automatizado y un primer modelo de scoring danés.'
          ],
          successMetrics: [
            'Conversión del CTA en la landing por encima del 20% (umbral de validación).',
            'Finalización del escaneo falso por encima del 25% (umbral de validación).',
            'Intención de uso semanal por encima del 15% (umbral de validación).'
          ]
        }
      },
      es: {
        hero: {
          title: 'DitMadkompas | Danish-First Food Scanner Concept',
          subtitle: 'Un flujo de escaneo rápido que traduce ingredientes en una elección clara y confiable.',
          narrative: 'DitMadkompas es un concepto de app de escaneo de códigos de barras que explica niveles de procesamiento e ingredientes en segundos, y luego sugiere alternativas más saludables. El trabajo definió la base del producto, la UX inicial, la lógica de precios y un plan de validación de bajo coste antes de construir la base de datos.'
        },
        sideCard: {
          challenge: 'Els compradors danesos tenen dificultats per interpretar etiquetes, additius i números E en temps real, i les apps existents no es localitzen del tot a les seves necessitats. La start-up no tenia identitat de marca, base de dades ni model de scoring, així que construir “el real” primer era arriscat.',
          outcome: 'Una experiència definida d’escaneig‑valoració‑alternatives, més un prototip Fake Door + Pinocchio per validar demanda i confiança abans del MVP.',
          buttonLabel: 'Veure deck de concepte'
        },
        yourTask: {
          preLine: 'Fes que la transparència alimentària sigui usable al passadís.',
          question: 'Com podríem ajudar la gent de Dinamarca a prendre decisions més saludables amb un escaneig simple i fiable?',
          reframe: 'Què hauria d’explicar l’app a l’instant i què hauria de deixar fora per mantenir-se ràpida? Què faria que la puntuació fos creïble i no cosmètica?'
        },
        takeOn: {
          questions: [
            'Què hauria de prioritzar el primer resultat: additius, sucres, greixos saturats o nivell de processament?',
            'Confiaries en una puntuació tipus semàfor sense un desglossament profund cada vegada? Per què?',
            'Quan vols alternatives: només en productes “vermells” o sempre?',
            'Què faria que se sentís danesa: detecció Ø‑mærket, explicadors de regulació local o marc nutricional nòrdic?',
            'Què et convencera de pagar: escanejos il·limitats, modes personalitzats o insights setmanals?'
          ],
          note: ''
        },
        problem: {
          insight: 'La informació alimentària és massa complexa per a moments reals de compra, així que la claredat i la confiança guanyen a la profunditat per defecte.',
          tensions: [
            'Complexitat científica vs decisió en 2 segons a la botiga',
            'Sense base de dades existent vs expectativa de resultats instantanis',
            'Claredat d’“una puntuació simple” vs necessitat de demostrar com s’obté'
          ]
        },
        persona: {
          title: 'Pare/Mare comprador/a quotidiana',
          oneLiner: 'Compra ràpid, vol fer-ho millor per a la llar i no té temps de desxifrar etiquetes.',
          needs: [
            'Explicacions immediates i en llenguatge clar (especialment additius i processat)',
            'Confiança mitjançant un sistema visual consistent i una lògica repetible',
            'Alternatives millors que siguin realistes de comprar, no teòriques'
          ]
        },
        solution: {
          title: 'Escanejar, Puntuar, Substituir',
          paragraph: 'Un concepte d’escaneig de productes pensat per a Dinamarca que simplifica la nutrició en una puntuació tipus semàfor, destaca positius i negatius i ofereix alternatives més saludables. El sistema es recolza en un pla de comunicació a social i formats breus, i en un model freemium per nivells que escala de la claredat bàsica a insights i personalització.',
          definingPhrases: [
            'Capa de confiança tipus semàfor',
            'Alternatives com a recompensa',
            'Progressió de freemium a premium'
          ]
        },
        metrics: {
          nextSteps: [
            'Llançar la landing Fake Door amb “Prova l’escàner ara” i mesurar intenció real.',
            'Executar la simulació Pinocchio amb cerca manual (Open Food Facts al darrere) per provar finalització i confiança.',
            'Si es valida, passar a un MVP amb escaneig automatitzat i un primer model de scoring danès.'
          ],
          successMetrics: [
            'Conversió del CTA a la landing per sobre del 20% (llindar de validació).',
            'Finalització de l’escaneig fals per sobre del 25% (llindar de validació).',
            'Intenció d’ús setmanal per sobre del 15% (llindar de validació).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'DitMadkompas | Danish-First Food Scanner Concept',
          subtitle: 'Un flux d’escaneig ràpid que tradueix ingredients en una elecció clara i fiable.',
          narrative: 'DitMadkompas és un concepte d’app d’escaneig de codis de barres que explica nivells de processament i ingredients en segons, i després suggereix alternatives més saludables. El treball va definir la base del producte, la UX inicial, la lògica de preus i un pla de validació de baix cost abans de construir la base de dades.'
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
      },
      es: {
        hero: {
          title: 'Red Cross DK 360º | AI-Powered Donation Intake',
          subtitle: 'Un flujo de entrega más rápido que convierte una bolsa en un registro verificado con impacto visible.',
          narrative: 'Este concepto usa reconocimiento de fotos con IA para identificar artículos donados, calcular impacto de CO2 estimado y conectar la donación a una cuenta de miembro. Está diseñado para reducir la carga de voluntariado y motivar donaciones recurrentes mediante recompensas e incentivos de partners.'
        },
        sideCard: {
          challenge: 'La recepción de donaciones es manual y consume tiempo, especialmente cuando sube el volumen. Los donantes reciben poco feedback tras dejar la bolsa, por lo que la experiencia se olvida y es difícil repetir.',
          outcome: 'Un flujo 360º de bolsa a registro digital, con reconocimiento por IA, identificación de miembro y un checkout de confirmación para supervisión voluntaria.',
          buttonLabel: 'Ver flujo de prototipo'
        },
        yourTask: {
          preLine: 'Haz que donar sea fácil y valga repetir.',
          question: '¿Cómo podríamos hacer las donaciones de ropa a la Cruz Roja más rápidas, más transparentes y más motivadoras tanto para donantes como para voluntariado?',
          reframe: 'En otras palabras: si una bolsa pudiera convertirse en un registro verificado en minutos, ¿qué debe automatizarse y qué debe quedar con aprobación humana? ¿Qué feedback debería recibir el donante inmediatamente para sentir impacto y confiar en el sistema?'
        },
        takeOn: {
          questions: [
            '¿Qué momento importa más: la velocidad de entrega, el feedback de impacto o las recompensas?',
            '¿Los donantes deberían ver detalles de reconocimiento de artículos o solo un resumen simple?',
            '¿Dónde debería ocurrir la verificación de voluntariado para ser rápida pero segura?',
            '¿Qué incentivos encajan con los valores de Cruz Roja: puntos, descuentos o reconocimiento comunitario?',
            '¿Una opción de recogida en bici cambiaría tu frecuencia de donación y en qué situaciones?'
          ],
          note: ''
        },
        problem: {
          insight: 'Las donaciones aumentan cuando el proceso es rápido, el impacto es visible y la organización puede gestionar volumen sin añadir trabajo manual.',
          tensions: [
            'Velocidad de automatización vs necesidad de supervisión y confianza del voluntariado',
            'Storytelling de impacto vs estimaciones de CO2 precisas y explicables',
            'Incentivos y valor para partners vs mantener la experiencia alineada con la misión'
          ]
        },
        persona: {
          title: 'Donante recurrente y miembro',
          oneLiner: 'Quiere que donar sea rápido y significativo, y quiere un registro que pueda compartir.',
          needs: [
            'Una entrega sin fricción que no requiera pasos extra',
            'Prueba inmediata de impacto, incluyendo ahorro de CO2 estimado con el tiempo',
            'Recompensas que se sientan justas y simples (puntos, descuentos, ofertas de partners)'
          ]
        },
        solution: {
          title: 'De bolsa a registro de impacto verificado',
          paragraph: 'Un flujo móvil de recepción donde un voluntario toma 2 o 3 fotos de la bolsa, la IA detecta tipos de artículos y el sistema vincula la donación a un miembro mediante identificación. Un checkout de confirmación mantiene a las personas en el circuito, mientras los donantes reciben un registro digital transparente que puede incluir impacto y recompensas.',
          definingPhrases: [
            'Reconocimiento de fotos con IA y aprobación humana',
            'Feedback de impacto en tiempo real (CO2 estimado)',
            'Ciclo de recompensas para donaciones repetidas'
          ]
        },
        metrics: {
          nextSteps: [
            'Piloto del flujo en una ubicación con el prototipo de cuatro pasos: Identificación de miembro, Detección de objetos con IA, Supervisión voluntaria, Checkout de confirmación.',
            'Definir la taxonomía de reconocimiento (qué categorías importan) y ajustar la guía de fotos para capturas consistentes y rápidas.',
            'Validar el modelo de incentivos y la integración con partners, además de la recogida en bici como servicio adicional.'
          ],
          successMetrics: [
            'Menor tiempo de gestión por bolsa y menos pasos manuales para voluntariado (medido en piloto).',
            'Mayor intención de donación repetida y adopción del registro digital (medido por uso y prompts).',
            'Visibilidad de impacto verificado: porcentaje de donaciones con IA + checkout aprobado y uso del historial de CO2 (medido en app).'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Red Cross DK 360º | AI-Powered Donation Intake',
          subtitle: 'Un flux de lliurament més ràpid que converteix una bossa en un registre verificat amb impacte visible.',
          narrative: 'Aquest concepte fa servir reconeixement de fotos amb IA per identificar articles donats, calcular l’impacte de CO2 estimat i connectar la donació a un compte de membre. Està dissenyat per reduir la càrrega del voluntariat i motivar donacions repetides amb recompenses i incentius de partners.'
        },
        sideCard: {
          challenge: 'L’entrada de donacions és manual i consumeix temps, especialment quan puja el volum. Els donants reben poc feedback després de deixar la bossa, així que l’experiència s’oblida i costa repetir.',
          outcome: 'Un flux 360º de bossa a registre digital, amb reconeixement d’IA, identificació de membre i un checkout de confirmació per a la supervisió del voluntariat.',
          buttonLabel: 'Veure flux de prototip'
        },
        yourTask: {
          preLine: 'Fes que donar sigui fàcil i valgui la pena repetir.',
          question: 'Com podríem fer les donacions de roba a la Creu Roja més ràpides, més transparents i més motivadores tant per a donants com per al voluntariat?',
          reframe: 'En altres paraules: si una bossa pogués convertir-se en un registre verificat en minuts, què s’ha d’automatitzar i què ha de quedar amb aprovació humana? Quin feedback hauria de rebre el donant immediatament per sentir impacte i confiar en el sistema?'
        },
        takeOn: {
          questions: [
            'Quin moment importa més: la velocitat de lliurament, el feedback d’impacte o les recompenses?',
            'Els donants haurien de veure detalls del reconeixement d’articles o només un resum simple?',
            'On hauria de passar la verificació del voluntariat per ser ràpida però segura?',
            'Quins incentius encaixen amb els valors de la Creu Roja: punts, descomptes o reconeixement comunitari?',
            'Una opció de recollida amb bici canviaria la teva freqüència de donació i en quines situacions?'
          ],
          note: ''
        },
        problem: {
          insight: 'Les donacions augmenten quan el procés és ràpid, l’impacte és visible i l’organització pot gestionar volum sense afegir feina manual.',
          tensions: [
            'Velocitat d’automatització vs necessitat de supervisió i confiança del voluntariat',
            'Relat d’impacte vs estimacions de CO2 precises i explicables',
            'Incentius i valor per a partners vs mantenir l’experiència alineada amb la missió'
          ]
        },
        persona: {
          title: 'Donant recurrent i membre',
          oneLiner: 'Vol que donar sigui ràpid i amb sentit, i vol un registre que pugui compartir.',
          needs: [
            'Un lliurament sense fricció que no requereixi passos extra',
            'Prova immediata d’impacte, incloent estalvi de CO2 estimat amb el temps',
            'Recompenses que se sentin justes i simples (punts, descomptes, ofertes de partners)'
          ]
        },
        solution: {
          title: 'De bossa a registre d’impacte verificat',
          paragraph: 'Un flux mòbil d’entrada on un voluntari fa 2 o 3 fotos de la bossa, la IA detecta tipus d’articles i el sistema vincula la donació a un membre mitjançant identificació. Un checkout de confirmació manté les persones en el circuit, mentre els donants reben un registre digital transparent que pot incloure impacte i recompenses.',
          definingPhrases: [
            'Reconeixement de fotos amb IA i aprovació humana',
            'Feedback d’impacte en temps real (CO2 estimat)',
            'Cicle de recompenses per a donacions repetides'
          ]
        },
        metrics: {
          nextSteps: [
            'Pilotar el flux en una ubicació amb el prototip de quatre passos: Identificació de membre, Detecció d’objectes amb IA, Supervisió voluntària, Checkout de confirmació.',
            'Definir la taxonomia de reconeixement (quines categories importen) i ajustar la guia de fotos per capturar inputs consistents i ràpids.',
            'Validar el model d’incentius i la integració amb partners, i també la recollida amb bici com a servei addicional.'
          ],
          successMetrics: [
            'Menys temps de gestió per bossa i menys passos manuals per al voluntariat (mesurat al pilot).',
            'Més intenció de donar de nou i adopció del registre digital (mesurat per ús i prompts).',
            'Visibilitat d’impacte verificat: percentatge de donacions amb IA + checkout aprovat i ús de l’historial de CO2 (mesurat a l’app).'
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
    detailImage: LINEUP_DETAIL_IMAGES.moss || LINEUP_IMAGES.moss,
    description: 'Art direction for material memory.',
    subtitle: {
      en: 'A site-specific object, brand system, and process film rooted in craft and cultural heritage.',
      es: 'A site-specific object, brand system, and process film rooted in craft and cultural heritage.',
      ca: 'A site-specific object, brand system, and process film rooted in craft and cultural heritage.'
    },
    challenge: {
      en: 'Create a conceptually strong art direction project with real-world production constraints, no budget, and access to highly specialized artisans. The outcome needed to be coherent across object, identity, and narrative, not just visually appealing.',
      es: 'Create a conceptually strong art direction project with real-world production constraints, no budget, and access to highly specialized artisans. The outcome needed to be coherent across object, identity, and narrative, not just visually appealing.',
      ca: 'Create a conceptually strong art direction project with real-world production constraints, no budget, and access to highly specialized artisans. The outcome needed to be coherent across object, identity, and narrative, not just visually appealing.'
    },
    outcome: {
      en: 'A complete project including naming, brand identity, art direction system, a one-off physical prototype, and a documentary process film. Awarded highest academic distinction.',
      es: 'A complete project including naming, brand identity, art direction system, a one-off physical prototype, and a documentary process film. Awarded highest academic distinction.',
      ca: 'A complete project including naming, brand identity, art direction system, a one-off physical prototype, and a documentary process film. Awarded highest academic distinction.'
    },
    longDescription: {
      en: 'This project explores how contemporary art direction can translate rare craftsmanship into a coherent identity, physical artifact, and narrative. It resulted in a unique prototype developed with expert mold-makers behind the final tower of the Sagrada Familia and was awarded Matricula d\'Honor.',
      es: 'This project explores how contemporary art direction can translate rare craftsmanship into a coherent identity, physical artifact, and narrative. It resulted in a unique prototype developed with expert mold-makers behind the final tower of the Sagrada Familia and was awarded Matricula d\'Honor.',
      ca: 'This project explores how contemporary art direction can translate rare craftsmanship into a coherent identity, physical artifact, and narrative. It resulted in a unique prototype developed with expert mold-makers behind the final tower of the Sagrada Familia and was awarded Matricula d\'Honor.'
    },
    content: {
      en: {
        hero: {
          title: 'Mossfera × Quant | Art Direction for Material Memory',
          subtitle: 'A site-specific object, brand system, and process film rooted in craft and cultural heritage.',
          narrative: 'This project explores how contemporary art direction can translate rare craftsmanship into a coherent identity, physical artifact, and narrative. It resulted in a unique prototype developed with expert mold-makers behind the final tower of the Sagrada Familia and was awarded Matricula d\'Honor.'
        },
        sideCard: {
          challenge: 'Crear un proyecto de dirección de arte con fuerza conceptual, restricciones reales de producción, sin presupuesto y acceso a artesanos altamente especializados. El resultado debía ser coherente entre objeto, identidad y narrativa, no solo atractivo visualmente.',
          outcome: 'Un proyecto completo con naming, identidad de marca, sistema de dirección de arte, un prototipo físico único y un film documental de proceso. Premio con la máxima distinción académica.',
          buttonLabel: 'Ver proyecto'
        },
        yourTask: {
          preLine: 'La dirección no es decoración.',
          question: '¿Cómo puede la dirección de arte honrar la tradición y a la vez proponer un objeto cultural contemporáneo?',
          reframe: 'En otras palabras: ¿cómo transformas un proceso técnico en un lenguaje visual significativo? ¿Cuándo un objeto se convierte en símbolo y no solo en producto?'
        },
        takeOn: {
          questions: [
            '¿Cuándo un objeto artesanal cruza la línea hacia artefacto cultural?',
            '¿Qué importancia tiene la transparencia del proceso en diseño y dirección de arte contemporáneos?',
            '¿Debe la sostenibilidad moldear la estética, incluso si limita el simbolismo?',
            '¿Qué hace que el branding se sienta respetuoso en proyectos de patrimonio?',
            '¿Valorarías más un objeto si conocieras la historia de cómo se hizo?'
          ],
          note: ''
        },
        problem: {
          insight: 'Muchos procesos culturales y artesanales están poco documentados visualmente o mal traducidos a sistemas visuales contemporáneos, lo que limita su relevancia y permanencia.',
          tensions: [
            'Profundidad conceptual vs viabilidad física',
            'Restricciones de sostenibilidad vs ambición simbólica',
            'Respeto al patrimonio vs autoría contemporánea'
          ]
        },
        persona: {
          title: 'Público de diseño orientado a la cultura',
          oneLiner: 'Se relaciona con diseño, arte y patrimonio a través del significado, no de las tendencias.',
          needs: [
            'Objetos que lleven narrativa e intención',
            'Sistemas visuales coherentes, no superficiales',
            'Prueba de proceso y autoría'
          ]
        },
        solution: {
          title: 'Dirección de arte en objeto, identidad y relato',
          paragraph: 'Desarrollé Mossfera como un proyecto completo de dirección de arte: naming, marco conceptual, identidad visual y artefacto físico. En colaboración con Quant, el prototipo se produjo con una técnica rara de molde de yeso, mientras el film adjunto documenta el proceso como parte del sistema narrativo. El trabajo está pensado para evolucionar hacia una colección futura con formas más simbólicas y menos limitadas por sostenibilidad.',
          definingPhrases: [
            'Objeto como medio narrativo',
            'Proceso integrado en la identidad',
            'Dirección más allá de la estética'
          ]
        },
        metrics: {
          nextSteps: [
            'Desarrollar una segunda iteración de Mossfera con formas más simbólicas y conceptuales.',
            'Expandir el sistema a una pequeña colección en lugar de un único artefacto.',
            'Exhibir el proyecto en contextos culturales o de diseño.'
          ],
          successMetrics: [
            'Continuidad del proyecto más allá del contexto académico hacia la práctica real.',
            'Interés de comisarios, instituciones o plataformas culturales.',
            'Coherencia mantenida en futuros objetos, identidad y narrativa.'
          ]
        }
      },
      es: {
        hero: {
          title: 'Mossfera × Quant | Art Direction for Material Memory',
          subtitle: 'Objeto site-specific, sistema de marca y film de proceso con raíces artesanales y patrimonio cultural.',
          narrative: 'Este proyecto explora cómo la dirección de arte contemporánea puede traducir una artesanía rara en una identidad coherente, un artefacto físico y un relato. Resultó en un prototipo único desarrollado con maestros moldistas de la torre final de la Sagrada Familia y recibió Matrícula de Honor.'
        },
        sideCard: {
          challenge: 'Crear un projecte de direcció d’art conceptualment sòlid amb restriccions reals de producció, sense pressupost i amb accés a artesans altament especialitzats. El resultat havia de ser coherent entre objecte, identitat i narrativa, no només atractiu visualment.',
          outcome: 'Projecte complet amb naming, identitat de marca, sistema de direcció d’art, un prototip físic únic i un film documental de procés. Premiat amb la màxima distinció acadèmica.',
          buttonLabel: 'Veure projecte'
        },
        yourTask: {
          preLine: 'La direcció no és decoració.',
          question: 'Com pot la direcció d’art honorar la tradició i alhora proposar un objecte cultural contemporani?',
          reframe: 'En altres paraules: com transformes un procés tècnic en un llenguatge visual significatiu? Quan un objecte esdevé símbol i no només producte?'
        },
        takeOn: {
          questions: [
            'Quan un objecte artesanal travessa la línia cap a l’artefacte cultural?',
            'Com d’important és la transparència del procés en disseny i direcció d’art contemporanis?',
            'La sostenibilitat hauria de modelar l’estètica, fins i tot si limita el simbolisme?',
            'Què fa que el branding se senti respectuós en projectes de patrimoni?',
            'Valoraries més un objecte si coneguessis la història de com s’ha fet?'
          ],
          note: ''
        },
        problem: {
          insight: 'Molts processos culturals i artesanals estan poc documentats visualment o mal traduïts a sistemes visuals contemporanis, cosa que en limita la rellevància i la perdurabilitat.',
          tensions: [
            'Profunditat conceptual vs viabilitat física',
            'Restriccions de sostenibilitat vs ambició simbòlica',
            'Respecte pel patrimoni vs autoria contemporània'
          ]
        },
        persona: {
          title: 'Públic de disseny orientat a la cultura',
          oneLiner: 'Es relaciona amb el disseny, l’art i el patrimoni a través del significat, no de les tendències.',
          needs: [
            'Objectes que portin narrativa i intenció',
            'Sistemes visuals coherents, no superficials',
            'Prova de procés i autoria'
          ]
        },
        solution: {
          title: 'Direcció d’art en objecte, identitat i relat',
          paragraph: 'Vaig desenvolupar Mossfera com un projecte complet de direcció d’art: naming, marc conceptual, identitat visual i artefacte físic. En col·laboració amb Quant, el prototip es va produir amb una tècnica rara de motlle de guix, mentre el film adjunt documenta el procés com a part del sistema narratiu. El treball està pensat per evolucionar cap a una col·lecció futura amb formes més simbòliques i menys limitades per sostenibilitat.',
          definingPhrases: [
            'Objecte com a mitjà narratiu',
            'Procés integrat a la identitat',
            'Direcció més enllà de l’estètica'
          ]
        },
        metrics: {
          nextSteps: [
            'Desenvolupar una segona iteració de Mossfera amb formes més simbòliques i conceptuals.',
            'Expandir el sistema a una petita col·lecció en lloc d’un únic artefacte.',
            'Exhibir el projecte en contextos culturals o de disseny.'
          ],
          successMetrics: [
            'Continuïtat del projecte més enllà del context acadèmic cap a la pràctica real.',
            'Interès de comissaris, institucions o plataformes culturals.',
            'Coherència mantinguda en futurs objectes, identitat i narrativa.'
          ]
        }
      },
      ca: {
        hero: {
          title: 'Mossfera × Quant | Art Direction for Material Memory',
          subtitle: 'Objecte site-specific, sistema de marca i film de procés arrelat a l’artesania i al patrimoni cultural.',
          narrative: 'Aquest projecte explora com la direcció d’art contemporània pot traduir una artesania rara en una identitat coherent, un artefacte físic i un relat. Va donar lloc a un prototip únic desenvolupat amb mestres motllistes de la torre final de la Sagrada Família i va rebre Matrícula d’Honor.'
        },
        sideCard: {
          challenge: 'Crear un projecte de direcció d’art conceptualment sòlid amb restriccions reals de producció, sense pressupost i amb accés a artesans altament especialitzats. El resultat havia de ser coherent entre objecte, identitat i narrativa, no només atractiu visualment.',
          outcome: 'Projecte complet amb naming, identitat de marca, sistema de direcció d’art, un prototip físic únic i un film documental de procés. Premiat amb la màxima distinció acadèmica.',
          buttonLabel: 'Veure projecte'
        },
        yourTask: {
          preLine: 'La direcció no és decoració.',
          question: 'Com pot la direcció d’art honorar la tradició i alhora proposar un objecte cultural contemporani?',
          reframe: 'En altres paraules: com transformes un procés tècnic en un llenguatge visual significatiu? Quan un objecte esdevé símbol i no només producte?'
        },
        takeOn: {
          questions: [
            'Quan un objecte artesanal travessa la línia cap a l’artefacte cultural?',
            'Com d’important és la transparència del procés en disseny i direcció d’art contemporanis?',
            'La sostenibilitat hauria de modelar l’estètica, fins i tot si limita el simbolisme?',
            'Què fa que el branding se senti respectuós en projectes de patrimoni?',
            'Valoraries més un objecte si coneguessis la història de com s’ha fet?'
          ],
          note: ''
        },
        problem: {
          insight: 'Molts processos culturals i artesanals estan poc documentats visualment o mal traduïts a sistemes visuals contemporanis, cosa que en limita la rellevància i la perdurabilitat.',
          tensions: [
            'Profunditat conceptual vs viabilitat física',
            'Restriccions de sostenibilitat vs ambició simbòlica',
            'Respecte pel patrimoni vs autoria contemporània'
          ]
        },
        persona: {
          title: 'Públic de disseny orientat a la cultura',
          oneLiner: 'Es relaciona amb el disseny, l’art i el patrimoni a través del significat, no de les tendències.',
          needs: [
            'Objectes que portin narrativa i intenció',
            'Sistemes visuals coherents, no superficials',
            'Prova de procés i autoria'
          ]
        },
        solution: {
          title: 'Direcció d’art en objecte, identitat i relat',
          paragraph: 'Vaig desenvolupar Mossfera com un projecte complet de direcció d’art: naming, marc conceptual, identitat visual i artefacte físic. En col·laboració amb Quant, el prototip es va produir amb una tècnica rara de motlle de guix, mentre el film adjunt documenta el procés com a part del sistema narratiu. El treball està pensat per evolucionar cap a una col·lecció futura amb formes més simbòliques i menys limitades per sostenibilitat.',
          definingPhrases: [
            'Objecte com a mitjà narratiu',
            'Procés integrat a la identitat',
            'Direcció més enllà de l’estètica'
          ]
        },
        metrics: {
          nextSteps: [
            'Desenvolupar una segona iteració de Mossfera amb formes més simbòliques i conceptuals.',
            'Expandir el sistema a una petita col·lecció en lloc d’un únic artefacte.',
            'Exhibir el projecte en contextos culturals o de disseny.'
          ],
          successMetrics: [
            'Continuïtat del projecte més enllà del context acadèmic cap a la pràctica real.',
            'Interès de comissaris, institucions o plataformes culturals.',
            'Coherència mantinguda en futurs objectes, identitat i narrativa.'
          ]
        }
      }
    }
  },
  {
    id: '5',
    name: 'blu.',
    genre: 'Cultural Event Production',
    day: 'blu.',
    year: 'Jan 2026',
    image: LINEUP_IMAGES.blu,
    description: 'A curated cultural event in Girona with short performances and talks.',
    subtitle: {
      en: 'A curated local event that brings emerging voices into the room.',
      es: 'A curated local event that brings emerging voices into the room.',
      ca: 'A curated local event that brings emerging voices into the room.'
    },
    challenge: {
      en: 'Build a real cultural event from scratch with limited budget, shifting team dynamics, and no existing infrastructure. Define format, manage production, coordinate artists, venue, operations, and ensure the project actually happens.',
      es: 'Build a real cultural event from scratch with limited budget, shifting team dynamics, and no existing infrastructure. Define format, manage production, coordinate artists, venue, operations, and ensure the project actually happens.',
      ca: 'Build a real cultural event from scratch with limited budget, shifting team dynamics, and no existing infrastructure. Define format, manage production, coordinate artists, venue, operations, and ensure the project actually happens.'
    },
    outcome: {
      en: 'A delivered live event with curated program, controlled capacity, clear run-of-show, cohesive visual identity, and extended life through digital content.',
      es: 'A delivered live event with curated program, controlled capacity, clear run-of-show, cohesive visual identity, and extended life through digital content.',
      ca: 'A delivered live event with curated program, controlled capacity, clear run-of-show, cohesive visual identity, and extended life through digital content.'
    },
    longDescription: {
      en: 'I co-created and produced a 40+ person cultural event in Girona built around short performances, talks, and intentional community. Alongside production, I also contributed to the brand direction as part of a small, cross-functional team.',
      es: 'I co-created and produced a 40+ person cultural event in Girona built around short performances, talks, and intentional community. Alongside production, I also contributed to the brand direction as part of a small, cross-functional team.',
      ca: 'I co-created and produced a 40+ person cultural event in Girona built around short performances, talks, and intentional community. Alongside production, I also contributed to the brand direction as part of a small, cross-functional team.'
    },
    content: {
      en: {
        hero: {
          title: 'blu. | Bringing Life to Uniqueness',
          subtitle: 'A curated local event that brings emerging voices into the room.',
          narrative: 'I co-created and produced a 40+ person cultural event in Girona built around short performances, talks, and intentional community. Alongside production, I also contributed to the brand direction as part of a small, cross-functional team.'
        },
        sideCard: {
          challenge: 'Build a real cultural event from scratch with limited budget, shifting team dynamics, and no existing infrastructure. Define format, manage production, coordinate artists, venue, operations, and ensure the project actually happens.',
          outcome: 'A delivered live event with curated program, controlled capacity, clear run-of-show, cohesive visual identity, and extended life through digital content.',
          buttonLabel: 'View Event Case'
        },
        yourTask: {
          preLine: 'Culture only works if people show up.',
          question: 'How do you design a local event that people actually commit to attending, not just liking online?',
          reframe: 'In other words: What makes an event feel worth leaving the house for? What makes it memorable enough to talk about afterward?'
        },
        takeOn: {
          questions: [
            'What would make you commit to a local cultural event in advance?',
            'Do you prefer short dynamic formats or longer uninterrupted performances? Why?',
            'How important is visual identity when deciding whether an event feels serious?',
            'Would you attend alone if the atmosphere felt safe and curated?',
            'What makes an event feel authentic rather than overproduced?'
          ],
          note: ''
        },
        problem: {
          insight: 'Local talent exists, but without strong curation, structure, and identity, both audiences and creators assume that meaningful culture happens elsewhere.',
          tensions: [
            'Intimacy vs scalability',
            'Creative freedom vs logistical constraints',
            'Authentic community vs perceived professionalism'
          ]
        },
        persona: {
          title: 'Culture-Curious Local',
          oneLiner: 'Wants to discover new voices but needs the experience to feel intentional, safe, and worth their time.',
          needs: [
            'A clear format and timing they can trust',
            'Visual signals that communicate quality and care',
            'A sense of belonging, not just passive consumption'
          ]
        },
        solution: {
          title: 'A Produced Cultural Format, Not Just an Event',
          paragraph: 'blu. was designed as a repeatable event concept: curated artists, short formats, strong hosting, clear program structure, and controlled capacity. I led production planning, budgeting, scheduling, logistics, coordination with venue and artists, and contributed to shaping the brand identity with the team to ensure coherence between concept and visual expression.',
          definingPhrases: [
            'Curated program over open mic chaos',
            'Structure that protects the experience',
            'Identity that feels human, not corporate'
          ]
        },
        metrics: {
          nextSteps: [
            'Package blu. into a repeatable event format with documented playbook.',
            'Strengthen the brand system so future editions stay consistent.',
            'Build partnerships with venues and local cultural networks to scale sustainably.'
          ],
          successMetrics: [
            'Audience quality: attendance stability, repeat guests, organic word of mouth.',
            'Artist value: willingness to return, referrals, post-event visibility.',
            'Format viability: ability to reproduce the event without burnout or over-dependence on one person.'
          ]
        }
      },
      es: {
        hero: {
          title: 'blu. | Bringing Life to Uniqueness',
          subtitle: 'Un evento local curado que trae voces emergentes a la sala.',
          narrative: 'Co‑creé y produje un evento cultural de más de 40 personas en Girona con performances breves, charlas y comunidad intencional. Además de la producción, contribuí a la dirección de marca en un equipo pequeño y transversal.'
        },
        sideCard: {
          challenge: 'Construir un evento cultural real desde cero con presupuesto limitado, dinámicas de equipo cambiantes y sin infraestructura previa. Definir formato, gestionar producción, coordinar artistas, espacio y operaciones, y asegurar que el proyecto suceda.',
          outcome: 'Evento en vivo entregado con programa curado, capacidad controlada, run‑of‑show claro, identidad visual coherente y vida extendida con contenido digital.',
          buttonLabel: 'Ver caso del evento'
        },
        yourTask: {
          preLine: 'La cultura solo funciona si la gente aparece.',
          question: '¿Cómo diseñas un evento local al que la gente se comprometa a asistir, no solo a dar like online?',
          reframe: 'En otras palabras: ¿qué hace que un evento valga salir de casa? ¿Qué lo hace lo bastante memorable para comentarlo después?'
        },
        takeOn: {
          questions: [
            '¿Qué te haría comprometerte con un evento cultural local con antelación?',
            '¿Prefieres formatos cortos y dinámicos o actuaciones largas e ininterrumpidas? ¿Por qué?',
            '¿Qué importancia tiene la identidad visual para decidir si un evento se siente serio?',
            '¿Irías solo/a si el ambiente se sintiera seguro y curado?',
            '¿Qué hace que un evento se sienta auténtico y no sobreproducido?'
          ],
          note: ''
        },
        problem: {
          insight: 'El talento local existe, pero sin una curaduría, estructura e identidad sólidas, tanto público como creadores asumen que la cultura significativa sucede en otro lugar.',
          tensions: [
            'Intimidad vs escalabilidad',
            'Libertad creativa vs restricciones logísticas',
            'Comunidad auténtica vs profesionalidad percibida'
          ]
        },
        persona: {
          title: 'Local con curiosidad cultural',
          oneLiner: 'Quiere descubrir nuevas voces pero necesita que la experiencia se sienta intencional, segura y que valga su tiempo.',
          needs: [
            'Un formato y horarios claros en los que confiar',
            'Señales visuales que comuniquen calidad y cuidado',
            'Sentido de pertenencia, no solo consumo pasivo'
          ]
        },
        solution: {
          title: 'Un formato cultural producido, no solo un evento',
          paragraph: 'blu. se diseñó como un concepto de evento repetible: artistas curados, formatos cortos, buen hosting, estructura clara de programa y capacidad controlada. Lideré planificación de producción, presupuesto, scheduling, logística y coordinación con sala y artistas, y contribuí a la identidad de marca para asegurar coherencia entre concepto y expresión visual.',
          definingPhrases: [
            'Programa curado frente al caos del open mic',
            'Estructura que protege la experiencia',
            'Identidad humana, no corporativa'
          ]
        },
        metrics: {
          nextSteps: [
            'Empaquetar blu. en un formato de evento repetible con playbook documentado.',
            'Fortalecer el sistema de marca para que futuras ediciones sean consistentes.',
            'Construir alianzas con salas y redes culturales locales para escalar de forma sostenible.'
          ],
          successMetrics: [
            'Calidad de audiencia: estabilidad de asistencia, repetición, boca‑a‑boca orgánico.',
            'Valor para artistas: ganas de volver, referidos, visibilidad post‑evento.',
            'Viabilidad del formato: capacidad de reproducir el evento sin burnout ni dependencia de una sola persona.'
          ]
        }
      },
      ca: {
        hero: {
          title: 'blu. | Bringing Life to Uniqueness',
          subtitle: 'Un esdeveniment local curat que porta veus emergents a la sala.',
          narrative: 'Vaig co‑crear i produir un esdeveniment cultural de més de 40 persones a Girona amb actuacions breus, xerrades i comunitat intencional. A més de la producció, vaig contribuir a la direcció de marca dins d’un equip petit i transversal.'
        },
        sideCard: {
          challenge: 'Construir un esdeveniment cultural real des de zero amb pressupost limitat, dinàmiques d’equip canviants i sense infraestructura prèvia. Definir format, gestionar producció, coordinar artistes, espai i operacions, i assegurar que el projecte passa.',
          outcome: 'Esdeveniment en viu realitzat amb programa curat, capacitat controlada, run‑of‑show clar, identitat visual coherent i vida estesa amb contingut digital.',
          buttonLabel: 'Veure cas de l’esdeveniment'
        },
        yourTask: {
          preLine: 'La cultura només funciona si la gent hi va.',
          question: 'Com dissenyes un esdeveniment local al qual la gent es comprometi a assistir, no només a fer like online?',
          reframe: 'En altres paraules: què fa que un esdeveniment valgui sortir de casa? Què el fa prou memorable per comentar‑lo després?'
        },
        takeOn: {
          questions: [
            'Què et faria comprometre’t amb un esdeveniment cultural local amb antelació?',
            'Prefereixes formats curts i dinàmics o actuacions llargues i ininterrompudes? Per què?',
            'Com d’important és la identitat visual per decidir si un esdeveniment es pren seriosament?',
            'Hi aniries sol/a si l’ambient fos segur i curat?',
            'Què fa que un esdeveniment se senti autèntic i no sobreproduït?'
          ],
          note: ''
        },
        problem: {
          insight: 'El talent local existeix, però sense una curadoria, estructura i identitat sòlides, tant el públic com els creadors assumeixen que la cultura significativa passa en un altre lloc.',
          tensions: [
            'Intimitat vs escalabilitat',
            'Llibertat creativa vs restriccions logístiques',
            'Comunitat autèntica vs professionalitat percebuda'
          ]
        },
        persona: {
          title: 'Local amb curiositat cultural',
          oneLiner: 'Vol descobrir noves veus però necessita que l’experiència se senti intencional, segura i que valgui el seu temps.',
          needs: [
            'Un format i uns horaris clars en què confiar',
            'Senyals visuals que comuniquin qualitat i cura',
            'Sentit de pertinença, no només consum passiu'
          ]
        },
        solution: {
          title: 'Un format cultural produït, no només un esdeveniment',
          paragraph: 'blu. es va dissenyar com un concepte d’esdeveniment repetible: artistes curats, formats curts, bon hosting, estructura clara de programa i capacitat controlada. Vaig liderar planificació de producció, pressupost, scheduling, logística i coordinació amb sala i artistes, i vaig contribuir a la identitat de marca per assegurar coherència entre concepte i expressió visual.',
          definingPhrases: [
            'Programa curat davant el caos d’open mic',
            'Estructura que protegeix l’experiència',
            'Identitat humana, no corporativa'
          ]
        },
        metrics: {
          nextSteps: [
            'Empaquetar blu. en un format d’esdeveniment repetible amb playbook documentat.',
            'Enfortir el sistema de marca perquè futures edicions siguin consistents.',
            'Construir aliances amb sales i xarxes culturals locals per escalar de manera sostenible.'
          ],
          successMetrics: [
            'Qualitat d’audiència: estabilitat d’assistència, repetició, boca‑orella orgànic.',
            'Valor per a artistes: ganes de tornar, referències, visibilitat post‑esdeveniment.',
            'Viabilitat del format: capacitat de reproduir l’esdeveniment sense burnout ni dependència d’una sola persona.'
          ]
        }
      }
    }
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
          title: 'Kave Home | Category Image Direction',
          subtitle: 'A collaborative visual refresh to restore consistency and confidence in a high-visual category.',
          narrative: 'I worked within a small team to rethink the mirrors category, contributing both to the reshoot strategy and to broader visual and branding decisions. The goal was to align imagery, context, and tone with Kave Home’s evolving identity while improving how products are perceived in listings.'
        },
        sideCard: {
          challenge: 'The category suffered from outdated ambients, inconsistent visual language, and missing lifestyle context on key products. At the same time, any proposal needed to respect Kave Home’s established brand while pushing it forward.',
          outcome: 'A prioritized reshoot brief, updated visual criteria, and shared direction that informed both imagery decisions and category-level consistency.',
          buttonLabel: 'View Visual Direction'
        },
        yourTask: {
          preLine: 'Images define perception.',
          question: 'How do we evolve a category visually without breaking brand consistency?',
          reframe: 'In other words: What should change to improve clarity and desirability, and what must stay stable to preserve identity? Where does art direction stop being decorative and start shaping trust?'
        },
        takeOn: {
          questions: [
            'What makes a furniture brand feel visually premium rather than generic?',
            'How much lifestyle context is useful before it becomes distracting?',
            'What helps you understand scale faster: props, people, framing, or architecture?',
            'Should every product follow the same visual system, or is flexibility necessary?',
            'When browsing, what makes you trust that a product will look good in your own space?'
          ],
          note: ''
        },
        problem: {
          insight: 'In e-commerce, visual inconsistency does not just affect aesthetics, it directly affects perceived quality and trust.',
          tensions: [
            'Brand coherence vs category flexibility',
            'Lifestyle richness vs product clarity',
            'Creative ambition vs production constraints'
          ]
        },
        persona: {
          title: 'Design-Conscious Online Shopper',
          oneLiner: 'Browses quickly, decides visually, and expects coherence from brands they trust.',
          needs: [
            'Clear understanding of scale and use',
            'Consistent visual language across similar products',
            'Imagery that feels real, not staged'
          ]
        },
        solution: {
          title: 'Shared Art Direction for Category-Level Consistency',
          paragraph: 'Rather than treating each image independently, the work focused on defining a shared visual logic across the mirrors category. I contributed to shaping the reshoot priorities, defining what type of scenes and framing better represent the products, and aligning imagery decisions with the brand’s tone. The result is a direction that supports both product clarity and brand perception.',
          definingPhrases: [
            'Category as visual system',
            'Direction over decoration',
            'Consistency that builds trust'
          ]
        },
        metrics: {
          nextSteps: [
            'Apply the same visual criteria to additional home decor categories.',
            'Formalize the learnings into internal image guidelines.',
            'Continue testing imagery styles through staged rollouts.'
          ],
          successMetrics: [
            'Internal adoption of the visual direction across teams.',
            'Clearer category coherence as seen in listings and collections.',
            'Perceived improvement in product clarity and visual trust (qualitative feedback, stakeholder alignment).'
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
          buttonLabel: 'Ver galería de Kave Home'
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
          buttonLabel: 'Veure galeria de Kave Home'
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

const LINEUP_COPY: Record<Language, Record<string, { genre: string; description: string; day?: string; year?: string }>> = {
  en: {
    '1': {
      genre: 'Digital Product Design',
      description: 'AI-powered daily news briefings.'
    },
    '2': {
      genre: 'UX Design & Strategy',
      description: 'UX for a specialized nutrition start-up.'
    },
    '3': {
      genre: 'Workflow Optimization',
      description: 'AI powered verification workflow.',
      day: 'Red Cross Denmark'
    },
    '4': {
      genre: 'Identity & AI Strategy',
      description: 'Art direction for material memory.'
    },
    '5': {
      genre: 'Cultural Event Production',
      description: 'A curated cultural event in Girona with short performances and talks.'
    },
    '6': {
      genre: 'Visual Arts & Photography',
      description: 'A reshoot brief to modernize a high-visual category.',
      year: 'Apr 2024'
    },
    '8': {
      genre: 'B2B Sales Automation',
      description: 'Campaign console redesign for faster action.'
    },
    '9': {
      genre: 'Visual Identity System',
      description: 'Visual identity system proposal for a locally rooted festival.'
    }
  },
  es: {
    '1': {
      genre: 'Diseño de Producto Digital',
      description: 'Resúmenes diarios de noticias con IA.'
    },
    '2': {
      genre: 'Diseño y estrategia UX',
      description: 'UX para una start-up de nutrición especializada.',
      year: 'Dic 2023'
    },
    '3': {
      genre: 'Optimización de flujos de trabajo',
      description: 'Flujo de verificación impulsado por IA.',
      day: 'Cruz Roja Dinamarca'
    },
    '4': {
      genre: 'Identidad y estrategia de IA',
      description: 'Dirección de arte para la memoria material.'
    },
    '5': {
      genre: 'Producción de evento cultural',
      description: 'Un evento cultural curado en Girona con actuaciones breves y charlas.',
      year: 'Ene 2026'
    },
    '6': {
      genre: 'Artes visuales y fotografía',
      description: 'Brief de reshoot para modernizar una categoría muy visual.',
      year: 'Abr 2024'
    },
    '8': {
      genre: 'Automatización de ventas B2B',
      description: 'Rediseño de la consola de campañas para actuar más rápido.'
    },
    '9': {
      genre: 'Sistema de identidad visual',
      description: 'Propuesta de sistema de identidad visual para un festival arraigado localmente.'
    }
  },
  ca: {
    '1': {
      genre: 'Disseny de Producte Digital',
      description: 'Resums diaris de notícies amb IA.'
    },
    '2': {
      genre: 'Disseny i estratègia UX',
      description: 'UX per a una start-up de nutrició especialitzada.',
      year: 'Des 2023'
    },
    '3': {
      genre: 'Optimització de fluxos de treball',
      description: 'Flux de verificació impulsat per IA.',
      day: 'Creu Roja Dinamarca'
    },
    '4': {
      genre: "Identitat i estratègia d'IA",
      description: "Direcció d'art per a la memòria material."
    },
    '5': {
      genre: "Producció d'esdeveniment cultural",
      description: 'Un esdeveniment cultural curat a Girona amb actuacions breus i xerrades.',
      year: 'Gen 2026'
    },
    '6': {
      genre: 'Arts visuals i fotografia',
      description: 'Brief de reshoot per modernitzar una categoria molt visual.',
      year: 'Abr 2024'
    },
    '8': {
      genre: 'Automatització de vendes B2B',
      description: 'Redisseny de la consola de campanyes per actuar més ràpid.'
    },
    '9': {
      genre: "Sistema d'identitat visual",
      description: "Proposta de sistema d'identitat visual per a un festival arrelat localment."
    }
  }
};

const localizeWork = (work: MultilangWork, lang: Language): MultilangWork => {
  const copy = LINEUP_COPY[lang]?.[work.id];
  if (!copy) return work;
  return {
    ...work,
    genre: copy.genre,
    description: copy.description,
    day: copy.day ?? work.day,
    year: copy.year ?? work.year
  };
};

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
  const [galleryFocus, setGalleryFocus] = useState<FolderName | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const torrentAudioRef = useRef<HTMLAudioElement | null>(null);

  const t = (key: keyof typeof TRANSLATIONS['en']) => (TRANSLATIONS[lang] as any)[key] || key;
  const localizedWorks = useMemo(() => WORKS.map((work) => localizeWork(work, lang)), [lang]);

  useEffect(() => {
    if (!selectedWork) return;
    const updated = localizedWorks.find((work) => work.id === selectedWork.id);
    if (!updated) return;
    if (
      updated.description !== selectedWork.description ||
      updated.genre !== selectedWork.genre ||
      updated.day !== selectedWork.day ||
      updated.year !== selectedWork.year
    ) {
      setSelectedWork(updated);
    }
  }, [localizedWorks, selectedWork]);

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
    if (page !== 'gallery') setGalleryFocus(null);

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
      <CustomCursor lang={lang} />
      <FluidBackground />
      <AIChat lang={lang} />

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
            <button onClick={() => navigateTo('home')} className="text-4xl font-heading font-bold text-white uppercase">{t('home')}</button>
            <button onClick={() => navigateTo('lineup')} className="text-4xl font-heading font-bold text-white uppercase">{t('lineupNav')}</button>
            <button onClick={() => navigateTo('gallery')} className="text-4xl font-heading font-bold text-white uppercase">{t('gallery')}</button>
            <button onClick={() => navigateTo('torrent')} className="bitcount-single-hero text-6xl text-[#ff6700]">TORRENT</button>
            <button onClick={toggleLang} className="mt-8 text-xl font-mono text-[#ff6700] uppercase border-b border-[#ff6700]">{t('languageLabel')}: {lang.toUpperCase()}</button>
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

              <section id="about" className="relative z-10 bg-[#f8f8f8] text-black pt-40 pb-60 px-6 md:px-12">
                <div className="max-w-[1800px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-4 space-y-12">
                      <div className="sticky top-40">
                        <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-12 shadow-2xl group">
                          <img
                            src={martaPhoto}
                            alt="Marta Caula Riera"
                            className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                            <h2 className="text-white text-3xl font-heading font-bold uppercase tracking-tighter leading-none">Marta Caula <br /> Riera</h2>
                          </div>
                        </div>

                        <div className="space-y-8 px-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-[#ff6700]" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-black/30 block">{t('aboutLocationLabel')}</span>
                              <span className="text-sm font-bold uppercase">{t('aboutLocationValue')}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                              <GraduationCap className="w-4 h-4 text-[#ff6700]" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-black/30 block">{t('aboutEducationLabel')}</span>
                              <span className="text-sm font-bold uppercase">{t('aboutEducationValue')}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-[#ff6700]" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-black/30 block">{t('aboutAgeLabel')}</span>
                              <span className="text-sm font-bold uppercase">{t('aboutAgeValue')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-32">
                      <section>
                        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ff6700] mb-8 block">{t('aboutJourneyLabel')}</span>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-[0.85] mb-12">
                          {t('aboutJourneyTitleLine1')} <br /> {t('aboutJourneyTitleLine2')}
                        </h1>
                        <div className="max-w-3xl space-y-8">
                          <p className="text-xl md:text-2xl font-light text-black/70 leading-relaxed italic">
                            {t('aboutJourneyQuote')}
                          </p>
                          <p className="text-lg text-black/60 leading-relaxed">
                            {t('aboutJourneyParagraph')}
                          </p>
                        </div>
                      </section>

                      <section className="bg-black text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                          <Quote className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 space-y-10">
                          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ff6700]"></span>
                          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter leading-[1.1]">
                            {t('aboutQuoteTitlePre')} <span className="text-[#ff6700]">{t('aboutQuoteTitleHighlight')}</span> {t('aboutQuoteTitlePost')}
                          </h2>
                          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                            {t('aboutQuoteBody')}
                          </p>
                        </div>
                      </section>

                      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 text-[#ff6700]">
                            <Plane className="w-5 h-5" />
                            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">{t('aboutInternationalLabel')}</span>
                          </div>
                          <h3 className="text-3xl font-heading font-bold uppercase">{t('aboutInternationalTitle')}</h3>
                          <p className="text-black/50 leading-relaxed">
                            {t('aboutInternationalBody')}
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-4 text-[#ff6700]">
                            <Camera className="w-5 h-5" />
                            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">{t('aboutVisionLabel')}</span>
                          </div>
                          <h3 className="text-3xl font-heading font-bold uppercase">{t('aboutVisionTitle')}</h3>
                          <p className="text-black/50 leading-relaxed">
                            {t('aboutVisionBody')}
                          </p>
                        </div>
                      </section>

                    </div>
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
                    <ToolAquarium lang={lang} />
                  </div>
                </div>
              </section>
            </motion.div>
          ) : currentPage === 'lineup' ? (
            <motion.div key="lineup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-6 py-12 md:py-24 max-w-[1600px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div className="flex-1">
                  <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-[#ff6700] font-mono uppercase tracking-widest text-xs mb-4"><ArrowLeft className="w-4 h-4" /> {t('home')}</button>
                  <h1 className="text-6xl md:text-[10rem] font-heading font-bold uppercase leading-[0.8] tracking-tighter text-white mb-8">{t('lineupTitle')}</h1>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                {localizedWorks.map((work) => <ArtistCard key={work.id} artist={work} onClick={() => navigateTo('work-detail', undefined, work)} />)}
              </div>
            </motion.div>
          ) : currentPage === 'gallery' ? (
            <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TorrentGallery lang={lang} initialFolder={galleryFocus} />
            </motion.div>
          ) : currentPage === 'work-detail' && selectedWork ? (
            <motion.div key="work-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#f8f8f8] text-black pb-40">
              {(() => {
                const content = buildWorkContent(selectedWork, lang);
                const workLog = LINEUP_LOGS[selectedWork.id] ?? [];
                const pdfLinks = LINEUP_LINKS[selectedWork.id] ?? [];
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

                        {selectedWork.id !== '1' ? (
                          <div className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/5 ${selectedWork.id === '6' ? '' : 'aspect-video'}`}>
                            <MediaRenderer
                              url={selectedWork.detailImage || selectedWork.image}
                              type={selectedWork.mediaType}
                              className={selectedWork.id === '6' ? 'w-full h-auto object-contain' : undefined}
                            />
                          </div>
                        ) : null}

                        {workLog.length ? (
                          <div>
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/30 mb-8">Project Log</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-start auto-rows-min">
                              {workLog.map((asset, index) => (
                                <div key={`${selectedWork.id}-log-${index}`} className="relative overflow-hidden bg-white/5 shadow-lg">
                                  <MediaRenderer url={asset.url} type={asset.type} className="w-full h-auto object-contain" />
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
                            {selectedWork.id === '6' ? (
                              <button
                                onClick={() => {
                                  setGalleryFocus('Kave Home Series');
                                  navigateTo('gallery');
                                }}
                                className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-[#ff6700] transition-colors"
                              >
                                {content.sideCard.buttonLabel}
                              </button>
                            ) : null}
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

                    <section className="px-6 md:px-24 py-24 max-w-7xl mx-auto border-t border-black/5">
                      <div className="space-y-6 max-w-3xl">
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-black/30">{t('projectPdfs')}</h3>
                        {pdfLinks.length ? (
                          <div className="space-y-4">
                            {pdfLinks.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between gap-4 p-5 bg-black/5 rounded-2xl hover:bg-black/10 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <FileText className="w-4 h-4 text-[#ff6700]" />
                                  <span className="text-xs font-bold uppercase tracking-tight text-black/70">{link.label}</span>
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-black/30">PDF</span>
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-black/40">{t('noPdfs')}</p>
                        )}
                      </div>
                    </section>

                    <section className="px-6 md:px-24 py-40 border-t border-black/5 text-center">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-black/20 mb-8">{t('nextWork')}</h5>
                      <button
                        onClick={() => {
                          const idx = localizedWorks.findIndex((w) => w.id === selectedWork?.id);
                          const next = localizedWorks[(idx + 1) % localizedWorks.length];
                          navigateTo('work-detail', undefined, next);
                        }}
                        className="group flex flex-col items-center"
                      >
                        <span className="text-5xl md:text-[10vw] font-heading font-bold uppercase tracking-tighter group-hover:text-[#ff6700] transition-colors">
                          {localizedWorks[(localizedWorks.findIndex(w => w.id === selectedWork?.id) + 1) % localizedWorks.length].name}
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
                  <TorrentAnimation lang={lang} />
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
                  <TorrentStack lang={lang} />
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
