
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, FolderOpen, ArrowRight } from 'lucide-react';
import { type Language } from '../types';

export type FolderName =
  | 'Free Surf Photography'
  | 'Water Study'
  | 'Cofanetti'
  | 'Kave Home Series'
  | 'Windsurf'
  | 'Sessions for X';

interface GalleryItem {
  id: number;
  url: string;
  folder: FolderName;
}

type FolderConfig = {
  name: FolderName;
  directory: string;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
};

const COPY: Record<Language, {
  repository: string;
  framesTitle: string;
  intro: string;
  directoryLabel: string;
  exploreFolder: string;
  closeFolder: string;
}> = {
  en: {
    repository: 'KINETIC REPOSITORY',
    framesTitle: '100 FRAMES',
    intro: 'A visual documentation of the Torrent methodology applied to photography and art direction. Folders organized by technical essence.',
    directoryLabel: 'Directory',
    exploreFolder: 'Explore Folder',
    closeFolder: 'Close Folder'
  },
  es: {
    repository: 'REPOSITORIO CINÉTICO',
    framesTitle: '100 FOTOGRAMAS',
    intro: 'Documentación visual de la metodología Torrent aplicada a la fotografía y la dirección de arte. Carpetas organizadas por esencia técnica.',
    directoryLabel: 'Directorio',
    exploreFolder: 'Explorar carpeta',
    closeFolder: 'Cerrar carpeta'
  },
  ca: {
    repository: 'REPOSITORI CINÈTIC',
    framesTitle: '100 FOTOGRAMES',
    intro: 'Documentació visual de la metodologia Torrent aplicada a la fotografia i a la direcció d’art. Carpetes organitzades per essència tècnica.',
    directoryLabel: 'Directori',
    exploreFolder: 'Explorar carpeta',
    closeFolder: 'Tancar carpeta'
  }
};

const FOLDER_LABELS: Record<Language, Record<FolderName, string>> = {
  en: {
    'Free Surf Photography': 'Free Surf Photography',
    'Water Study': 'Water Study',
    Cofanetti: 'Cofanetti',
    'Kave Home Series': 'Kave Home Series',
    Windsurf: 'Windsurf',
    'Sessions for X': 'Sessions for X'
  },
  es: {
    'Free Surf Photography': 'Fotografía de Surf Libre',
    'Water Study': 'Estudio del Agua',
    Cofanetti: 'Cofanetti',
    'Kave Home Series': 'Serie Kave Home',
    Windsurf: 'Windsurf',
    'Sessions for X': 'Sesiones para X'
  },
  ca: {
    'Free Surf Photography': 'Fotografia de Surf Lliure',
    'Water Study': "Estudi de l'Aigua",
    Cofanetti: 'Cofanetti',
    'Kave Home Series': 'Sèrie Kave Home',
    Windsurf: 'Windsurf',
    'Sessions for X': 'Sessions per X'
  }
};

const FOLDER_CONFIGS: FolderConfig[] = [
  {
    name: 'Free Surf Photography',
    directory: 'freesurfphotography',
    description: {
      en: 'Raw energy and wave dynamics.',
      es: 'Energía cruda y dinámica de olas.',
      ca: "Energia crua i dinàmica d'onades."
    },
    longDescription: {
      en: 'A technical exploration of fluid dynamics and human interaction with unpredictable water surfaces. Captured during high-velocity sessions across Atlantic swells.',
      es: 'Exploración técnica de la dinámica de fluidos y la interacción humana con superficies de agua impredecibles. Capturada en sesiones de alta velocidad en oleaje atlántico.',
      ca: "Exploració tècnica de la dinàmica de fluids i la interacció humana amb superfícies d'aigua imprevisibles. Capturada en sessions d'alta velocitat en onatge atlàntic."
    }
  },
  {
    name: 'Water Study',
    directory: 'waterstudy',
    description: {
      en: 'Abstract textures and light refraction.',
      es: 'Texturas abstractas y refracción de la luz.',
      ca: 'Textures abstractes i refracció de la llum.'
    },
    longDescription: {
      en: 'Focusing on the micro-textures of liquid surfaces. This series analyzes how light refracts through different densities and movements of water.',
      es: 'Enfoque en las microtexturas de superficies líquidas. La serie analiza cómo la luz se refracta a través de distintas densidades y movimientos del agua.',
      ca: "Enfocament en les microtextures de les superfícies líquides. La sèrie analitza com la llum es refracta a través de diferents densitats i moviments de l'aigua."
    }
  },
  {
    name: 'Cofanetti',
    directory: 'cofaneti',
    description: {
      en: 'Product architecture and tactile luxury.',
      es: 'Arquitectura de producto y lujo táctil.',
      ca: 'Arquitectura de producte i luxe tàctil.'
    },
    longDescription: {
      en: 'A study on material perception and structural design in premium packaging. Investigating how shadows define luxury volumes.',
      es: 'Estudio sobre percepción material y diseño estructural en packaging premium. Investigación de cómo las sombras definen volúmenes de lujo.',
      ca: "Estudi sobre percepció material i disseny estructural en packaging premium. Investigació de com les ombres defineixen volums de luxe."
    }
  },
  {
    name: 'Kave Home Series',
    directory: 'kavehomeseries',
    description: {
      en: 'Interior materiality and space.',
      es: 'Materialidad interior y espacio.',
      ca: 'Materialitat interior i espai.'
    },
    longDescription: {
      en: 'Documentation of interior environments where furniture becomes a sculptural element. Focus on the relationship between product and architectural void.',
      es: 'Documentación de entornos interiores donde el mobiliario se convierte en un elemento escultórico. Enfoque en la relación entre producto y vacío arquitectónico.',
      ca: "Documentació d'entorns interiors on el mobiliari esdevé un element escultòric. Enfocament en la relació entre producte i buit arquitectònic."
    }
  },
  {
    name: 'Windsurf',
    directory: 'windsurf',
    description: {
      en: 'Intersection of air and water.',
      es: 'Intersección de aire y agua.',
      ca: "Intersecció d'aire i aigua."
    },
    longDescription: {
      en: 'Capturing the tension between wind and sail. This series documents the mechanical precision required to harness natural elements at high speeds.',
      es: 'Captura la tensión entre viento y vela. Esta serie documenta la precisión mecánica necesaria para aprovechar elementos naturales a alta velocidad.',
      ca: "Captura la tensió entre vent i vela. Aquesta sèrie documenta la precisió mecànica necessària per aprofitar elements naturals a alta velocitat."
    }
  },
  {
    name: 'Sessions for X',
    directory: 'sessionsforx',
    description: {
      en: 'Artistic portraits and brand sessions.',
      es: 'Retratos artísticos y sesiones de marca.',
      ca: 'Retrats artístics i sessions de marca.'
    },
    longDescription: {
      en: 'A curated collection of human-centric sessions. These frames prioritize emotion and environmental context over traditional commercial aesthetics.',
      es: 'Colección curada de sesiones centradas en lo humano. Estas piezas priorizan emoción y contexto ambiental sobre estética comercial tradicional.',
      ca: "Col·lecció curada de sessions centrades en la persona. Aquestes peces prioritzen emoció i context ambiental per sobre de l'estètica comercial tradicional."
    }
  },
];

const galleryAssets = (
  import.meta as ImportMeta & {
    glob: (pattern: string, options: { eager: true; import: 'default' }) => Record<string, string>;
  }
).glob('../Gallery/**/*.{jpg,JPG,jpeg,png}', {
  eager: true,
  import: 'default',
});

const findGalleryAsset = (suffix: string) =>
  Object.entries(galleryAssets).find(([path]) => path.endsWith(suffix))?.[1] ?? '';

const buildGalleryImages = () => {
  const imagesByFolder: Record<FolderName, GalleryItem[]> = {
    'Free Surf Photography': [],
    'Water Study': [],
    Cofanetti: [],
    'Kave Home Series': [],
    Windsurf: [],
    'Sessions for X': [],
  };
  const folderDirectoryMap = new Map(FOLDER_CONFIGS.map((folder) => [folder.directory, folder.name]));
  const counts: Record<FolderName, number> = {
    'Free Surf Photography': 0,
    'Water Study': 0,
    Cofanetti: 0,
    'Kave Home Series': 0,
    Windsurf: 0,
    'Sessions for X': 0,
  };
  let id = 1;

  Object.entries(galleryAssets)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .forEach(([path, url]) => {
      const segments = path.split('/');
      const directory = segments[segments.length - 2];
      const folderName = folderDirectoryMap.get(directory);
      if (!folderName) return;
      counts[folderName] += 1;
      imagesByFolder[folderName].push({
        id,
        folder: folderName,
        url,
      });
      id += 1;
    });

  const allImages = Object.values(imagesByFolder).flat();
  return { imagesByFolder, allImages };
};

const { imagesByFolder, allImages } = buildGalleryImages();

interface TorrentGalleryProps {
  lang: Language;
  initialFolder?: FolderName | null;
}

const TorrentGallery: React.FC<TorrentGalleryProps> = ({ lang, initialFolder = null }) => {
  const copy = COPY[lang];
  const folders = useMemo(() => {
    return FOLDER_CONFIGS.map((folder) => ({
      name: folder.name,
      label: FOLDER_LABELS[lang][folder.name],
      cover:
        folder.name === 'Sessions for X'
          ? findGalleryAsset('/sessionsforx/Freelance_Services13.JPG')
          : imagesByFolder[folder.name]?.[0]?.url ?? '',
      description: folder.description[lang],
      longDescription: folder.longDescription[lang],
    }));
  }, [lang]);
  const [expandedFolderName, setExpandedFolderName] = useState<FolderName | null>(null);
  const lastInitialFolder = useRef<FolderName | null>(null);
  const expandedFolder = useMemo(
    () => (expandedFolderName ? folders.find((item) => item.name === expandedFolderName) ?? null : null),
    [expandedFolderName, folders]
  );

  useEffect(() => {
    if (!initialFolder || initialFolder === lastInitialFolder.current) return;
    const folder = folders.find((item) => item.name === initialFolder);
    if (folder) {
      setExpandedFolderName(folder.name);
      lastInitialFolder.current = initialFolder;
    }
  }, [folders, initialFolder]);

  const folderImages = useMemo(() => {
    if (!expandedFolderName) return [];
    return allImages.filter((img) => img.folder === expandedFolderName);
  }, [expandedFolderName, allImages]);

  return (
    <div className="bg-[#f8f8f8] min-h-screen pt-40 pb-60 px-6 md:px-12 text-black transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <header className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ff6700] mb-6 block">
            {copy.repository}
          </span>
          <h2 className="text-6xl md:text-[10vw] font-heading font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            {copy.framesTitle.split(' ')[0]} <br /> {copy.framesTitle.split(' ').slice(1).join(' ')}
          </h2>
          <p className="text-lg md:text-xl font-light text-black/40 leading-relaxed max-w-xl">
            {copy.intro}
          </p>
        </header>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {folders.map((folder) => (
            <motion.div
              key={folder.name}
              className="flex flex-col gap-6 group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setExpandedFolderName(folder.name)}
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-white border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={folder.cover}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt={folder.label}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <Maximize2 className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                  <FolderOpen className="w-4 h-4 text-[#ff6700]" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/40">{copy.directoryLabel}</span>
                </div>
                <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter leading-none mb-4">{folder.label}</h3>
                <div className="flex items-center gap-4 text-[#ff6700] font-bold text-[10px] uppercase tracking-widest">
                  {copy.exploreFolder} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Folder Expansion Overlay */}
      <AnimatePresence>
        {expandedFolder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[150] bg-black text-white overflow-y-auto"
          >
            {/* Folder View Header */}
            <div className="sticky top-0 z-[160] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-8 flex justify-between items-center">
              <button
                onClick={() => setExpandedFolderName(null)}
                className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-[#ff6700] transition-colors"
              >
                <X className="w-6 h-6" /> {copy.closeFolder}
              </button>
            </div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-24">
              {/* Description Section */}
              <div className="max-w-4xl mb-32">
                <h3 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none mb-10">
                  {expandedFolder.label}
                </h3>
                <p className="text-xl md:text-3xl font-light text-white/60 leading-relaxed italic">
                  {expandedFolder.longDescription}
                </p>
                <div className="h-px w-40 bg-[#ff6700] mt-16" />
              </div>

              {/* Images Grid - Simplified, no text labels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 items-start auto-rows-min">
                {folderImages.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative overflow-hidden bg-white/5 shadow-lg"
                  >
                    <img src={img.url} className="w-full h-auto object-contain" alt={`${expandedFolder.label} ${i + 1}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TorrentGallery;
