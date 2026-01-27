
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';
import { ArrowRight } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <motion.div
      className="group relative h-[500px] md:h-[650px] w-full overflow-hidden bg-black cursor-pointer border-r border-white/5"
      initial="rest"
      whileHover="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={artist.image} 
          alt={artist.name} 
          layoutId={`artist-img-${artist.id}`}
          className="h-full w-full object-cover grayscale brightness-50 will-change-transform"
          variants={{
            rest: { scale: 1, filter: 'grayscale(100%) brightness(0.3)' },
            hover: { scale: 1.05, filter: 'grayscale(0%) brightness(0.6)' }
          }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        />
        {/* Subtle Pumpkin Spice Overlay on Hover */}
        <div className="absolute inset-0 bg-[#ff6700]/0 group-hover:bg-gradient-to-t group-hover:from-[#ff6700]/20 group-hover:to-transparent transition-all duration-700" />
      </div>

      {/* Header info - Project Number, Date and Company */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
         <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono font-black text-[#ff6700] uppercase tracking-[0.4em]">
              Project 0{artist.id} // {artist.year || '2024'}
            </span>
         </div>
         
         <div className="text-right flex flex-col items-end">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] bg-black/40 px-3 py-1 rounded-sm border border-white/10 backdrop-blur-md">
              {artist.day}
            </span>
         </div>
      </div>

      {/* Info Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="relative z-10">
          <motion.h3 
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-white leading-none mb-4 tracking-tighter"
            variants={{
              rest: { y: 0 },
              hover: { y: -10 }
            }}
          >
            {artist.name}
          </motion.h3>

          <motion.div
            className="overflow-hidden"
            variants={{
              rest: { height: 0, opacity: 0 },
              hover: { height: 'auto', opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6700] mb-2">
              {artist.genre}
            </p>
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest max-w-[80%]">
              {artist.description}
            </p>
          </motion.div>
        </div>

        {/* Interaction hint */}
        <motion.div 
          className="absolute bottom-8 right-8 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/20 backdrop-blur-sm group-hover:bg-[#ff6700] group-hover:border-[#ff6700] transition-all duration-500"
          variants={{
            rest: { scale: 0.8, opacity: 0, rotate: -45 },
            hover: { scale: 1, opacity: 1, rotate: 0 }
          }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArtistCard;
