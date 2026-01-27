
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface GalleryItem {
  id: number;
  url: string;
  category: string;
}

const CATEGORIES = [
  { name: 'all', count: 234 },
  { name: 'topshots', count: 12 },
  { name: 'design', count: 91 },
  { name: 'studio', count: 87 },
  { name: 'underwater', count: 82 },
  { name: 'process', count: 74 },
  { name: 'events', count: 69 },
  { name: 'experimental', count: 66 },
];

const IMAGES: GalleryItem[] = [
  { id: 1, category: 'topshots', url: 'https://images.unsplash.com/photo-1492691523567-61723429a8d1?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, category: 'studio', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, category: 'underwater', url: 'https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, category: 'design', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, category: 'experimental', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, category: 'topshots', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop' },
  { id: 7, category: 'studio', url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop' },
  { id: 8, category: 'process', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop' },
  { id: 9, category: 'events', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { id: 10, category: 'experimental', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop' },
];

const TorrentGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#f0f0f0] text-black">
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* The Stack Area */}
        <div className="relative w-full h-full max-w-7xl flex items-center justify-center px-12 md:px-24">
          <div className="relative w-full h-full perspective-[2000px] flex items-center">
            
            {IMAGES.map((img, index) => {
              const filterPass = activeCategory === 'all' || img.category === activeCategory;
              if (!filterPass) return null;

              // Calculate 3D position based on scroll and index
              // We create a "torrent" that flows from bottom-left to top-right
              const scrollOffset = index * 0.05;
              const progress = useTransform(smoothScroll, [0, 1], [-1 + scrollOffset, 1.5 + scrollOffset]);
              
              return (
                <GalleryCard 
                  key={img.id} 
                  img={img} 
                  index={index} 
                  total={IMAGES.length}
                  isHovered={hoveredId === img.id}
                  onHover={() => setHoveredId(img.id)}
                  onLeave={() => setHoveredId(null)}
                />
              );
            })}
          </div>
        </div>

        {/* Right Side Categories (Reference Image Style) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 z-50">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`group flex items-start gap-1 transition-all duration-300 ${
                activeCategory === cat.name ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <span className={`text-sm md:text-base font-bold uppercase tracking-tighter ${
                activeCategory === cat.name ? 'text-black' : 'text-black/60'
              }`}>
                {cat.name}
              </span>
              <span className="text-[10px] font-mono font-medium align-super opacity-60">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-12 left-12 flex flex-col gap-2">
           <div className="h-px w-24 bg-black/10" />
           <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40">Visual Torrent x Marta Caula</p>
        </div>
      </div>
    </div>
  );
};

const GalleryCard: React.FC<{ 
  img: GalleryItem; 
  index: number; 
  total: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ img, index, isHovered, onHover, onLeave }) => {
  // Static 3D positioning with some variation to look like a "pile"
  const baseRotation = -45 + (index * 2);
  const baseTranslationX = -200 + (index * 40);
  const baseTranslationZ = -index * 50;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={false}
      animate={{
        rotateY: isHovered ? 0 : baseRotation,
        x: isHovered ? 0 : baseTranslationX,
        z: isHovered ? 400 : baseTranslationZ,
        scale: isHovered ? 1.2 : 1,
        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
        opacity: isHovered ? 1 : 0.8,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className={`absolute w-[300px] md:w-[450px] aspect-[4/3] bg-white shadow-2xl overflow-hidden cursor-none z-[${index}]`}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: isHovered ? '0 50px 100px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)'
      }}
    >
      <img 
        src={img.url} 
        alt={img.category} 
        className="w-full h-full object-cover pointer-events-none"
      />
      
      {/* Label on the card */}
      <div className={`absolute bottom-4 left-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
          {img.category} // 0{img.id}
        </span>
      </div>
    </motion.div>
  );
};

export default TorrentGallery;
