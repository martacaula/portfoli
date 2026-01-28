
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, FolderOpen, ArrowRight } from 'lucide-react';

type FolderName =
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
  title: string;
}

const FOLDERS: {
  name: FolderName;
  cover: string;
  description: string;
  longDescription: string;
}[] = [
  {
    name: 'Free Surf Photography',
    cover: 'https://images.unsplash.com/photo-1502680399488-646b5a3167a5?q=80&w=1200&auto=format&fit=crop',
    description: 'Raw energy and wave dynamics.',
    longDescription:
      'A technical exploration of fluid dynamics and human interaction with unpredictable water surfaces. Captured during high-velocity sessions across Atlantic swells.',
  },
  {
    name: 'Water Study',
    cover: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop',
    description: 'Abstract textures and light refraction.',
    longDescription:
      'Focusing on the micro-textures of liquid surfaces. This series analyzes how light refracts through different densities and movements of water.',
  },
  {
    name: 'Cofanetti',
    cover: 'https://images.unsplash.com/photo-1512418431372-71059bc16995?q=80&w=1200&auto=format&fit=crop',
    description: 'Product architecture and tactile luxury.',
    longDescription:
      'A study on material perception and structural design in premium packaging. Investigating how shadows define luxury volumes.',
  },
  {
    name: 'Kave Home Series',
    cover: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop',
    description: 'Interior materiality and space.',
    longDescription:
      'Documentation of interior environments where furniture becomes a sculptural element. Focus on the relationship between product and architectural void.',
  },
  {
    name: 'Windsurf',
    cover: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1200&auto=format&fit=crop',
    description: 'Intersection of air and water.',
    longDescription:
      'Capturing the tension between wind and sail. This series documents the mechanical precision required to harness natural elements at high speeds.',
  },
  {
    name: 'Sessions for X',
    cover: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    description: 'Artistic portraits and brand sessions.',
    longDescription:
      'A curated collection of human-centric sessions. These frames prioritize emotion and environmental context over traditional commercial aesthetics.',
  },
];

const unsplashSeeds: Record<FolderName, string[]> = {
  'Free Surf Photography': [
    'photo-1502680399488-646b5a3167a5',
    'photo-1439405326854-01523417459d',
    'photo-1519046904884-53103b34b206',
    'photo-1507525428034-b723cf961d3e',
  ],
  'Water Study': [
    'photo-1518837695005-2083093ee35b',
    'photo-1505118380757-91f5f45d8de4',
    'photo-1507525428034-b723cf961d3e',
    'photo-1512236393941-3d6da97e00ba',
  ],
  'Cofanetti': [
    'photo-1512418431372-71059bc16995',
    'photo-1523275335684-37898b6baf30',
    'photo-1505156108126-02cd447e3a10',
    'photo-1542038784456-1ea8e935640e',
  ],
  'Kave Home Series': [
    'photo-1556228453-efd6c1ff04f6',
    'photo-1586023492125-27b2c045efd7',
    'photo-1501183638710-841dd1904471',
    'photo-1616489953149-75573b1b5199',
  ],
  Windsurf: [
    'photo-1521336575822-6da63fb45455',
    'photo-1517176102644-b81682859942',
    'photo-1500305060288-038335940608',
    'photo-1508739773434-c26b3d09e071',
  ],
  'Sessions for X': [
    'photo-1492724441997-5dc865305da7',
    'photo-1494790108377-be9c29b29330',
    'photo-1517841905240-472988babdf9',
    'photo-1534528741775-53994a69daeb',
  ],
};

const generateImages = (): GalleryItem[] => {
  const allImages: GalleryItem[] = [];
  FOLDERS.forEach((folder) => {
    const seeds = unsplashSeeds[folder.name];
    for (let i = 0; i < 12; i += 1) {
      const baseId = seeds[i % seeds.length];
      allImages.push({
        id: allImages.length + 1,
        folder: folder.name,
        title: `${folder.name} Study ${i + 1}`,
        url: `https://images.unsplash.com/${baseId}?auto=format&fit=crop&q=80&w=1200&h=1500`,
      });
    }
  });
  return allImages;
};

const TorrentGallery: React.FC = () => {
  const allImages = useMemo(() => generateImages(), []);
  const [expandedFolder, setExpandedFolder] = useState<typeof FOLDERS[0] | null>(null);

  const folderImages = useMemo(() => {
    if (!expandedFolder) return [];
    return allImages.filter((img) => img.folder === expandedFolder.name);
  }, [expandedFolder, allImages]);

  return (
    <div className="bg-[#f8f8f8] min-h-screen pt-40 pb-60 px-6 md:px-12 text-black transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <header className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#ff6700] mb-6 block">
            KINETIC REPOSITORY
          </span>
          <h2 className="text-6xl md:text-[10vw] font-heading font-bold uppercase tracking-tighter leading-[0.85] mb-8">
            100 <br /> FRAMES
          </h2>
          <p className="text-lg md:text-xl font-light text-black/40 leading-relaxed max-w-xl">
            A visual documentation of the Torrent methodology applied to photography and art direction. Folders organized by technical
            essence.
          </p>
        </header>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FOLDERS.map((folder) => (
            <motion.div
              key={folder.name}
              className="flex flex-col gap-6 group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setExpandedFolder(folder)}
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-white border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={folder.cover}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt={folder.name}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <Maximize2 className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                  <FolderOpen className="w-4 h-4 text-[#ff6700]" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/40">Directory</span>
                </div>
                <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter leading-none mb-4">{folder.name}</h3>
                <div className="flex items-center gap-4 text-[#ff6700] font-bold text-[10px] uppercase tracking-widest">
                  Explore Folder <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
                onClick={() => setExpandedFolder(null)}
                className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:text-[#ff6700] transition-colors"
              >
                <X className="w-6 h-6" /> Close Folder
              </button>
            </div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-24">
              {/* Description Section */}
              <div className="max-w-4xl mb-32">
                <h3 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none mb-10">
                  {expandedFolder.name}
                </h3>
                <p className="text-xl md:text-3xl font-light text-white/60 leading-relaxed italic">
                  {expandedFolder.longDescription}
                </p>
                <div className="h-px w-40 bg-[#ff6700] mt-16" />
              </div>

              {/* Images Grid - Simplified, no text labels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {folderImages.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative aspect-[3/2] rounded-[2.5rem] overflow-hidden bg-white/5 shadow-lg"
                  >
                    <img src={img.url} className="w-full h-full object-cover" alt={img.title} />
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
