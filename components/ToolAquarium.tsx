
import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Github, Layers, Scissors, PenTool, Video, Aperture, Cpu, Share2, Zap, Command, Palette, Camera, Code, Sun, Film, Wind, CheckCircle } from 'lucide-react';
import { type Language } from '../types';

interface Tool {
  name: string;
  brand: string;
  icon: React.ReactNode;
  color: string;
}

type BranchId = 'design' | 'visual' | 'digital';

interface Branch {
  id: BranchId;
  title: Record<Language, string>;
  tools: Tool[];
  accent: string;
}

const COPY: Record<Language, { fromLabel: string; footer: [string, string, string] }> = {
  en: {
    fromLabel: 'from',
    footer: ['Enterprise Ready', 'Creative Suite v2.5', 'Optimized Workflow']
  },
  es: {
    fromLabel: 'de',
    footer: ['Listo para empresa', 'Suite creativa v2.5', 'Flujo optimizado']
  },
  ca: {
    fromLabel: 'de',
    footer: ['Preparat per a empresa', 'Suite creativa v2.5', 'Flux optimitzat']
  }
};

const BRANCHES: Branch[] = [
  {
    id: 'design',
    title: {
      en: 'Design & Identity',
      es: 'Diseño e Identidad',
      ca: 'Disseny i Identitat'
    },
    accent: '#3a6ea5',
    tools: [
      { name: 'Figma', brand: 'Figma Inc.', icon: <Layers className="w-4 h-4" />, color: '#F24E1E' },
      { name: 'Illustrator', brand: 'Adobe Systems', icon: <PenTool className="w-4 h-4" />, color: '#FF9A00' },
      { name: 'Miro', brand: 'Miro', icon: <Share2 className="w-4 h-4" />, color: '#FFD02F' },
    ]
  },
  {
    id: 'visual',
    title: {
      en: 'Visual Arts',
      es: 'Artes Visuales',
      ca: 'Arts Visuals'
    },
    accent: '#ff6700',
    tools: [
      { name: 'Final Cut Pro', brand: 'Apple Inc.', icon: <Scissors className="w-4 h-4" />, color: '#EA77FF' },
      { name: 'DaVinci Resolve', brand: 'Blackmagic Design', icon: <Film className="w-4 h-4" />, color: '#31A8FF' },
      { name: 'Lightroom', brand: 'Adobe Systems', icon: <Sun className="w-4 h-4" />, color: '#4285F4' },
      { name: 'Capture One', brand: 'Capture One A/S', icon: <Aperture className="w-4 h-4" />, color: '#52ADFF' },
    ]
  },
  {
    id: 'digital',
    title: {
      en: 'Digital Transformation',
      es: 'Transformación Digital',
      ca: 'Transformació Digital'
    },
    accent: '#ebebeb',
    tools: [
      { name: 'AI Studio', brand: 'Google Cloud', icon: <Cpu className="w-4 h-4" />, color: '#4285F4' },
      { name: 'GitHub', brand: 'Microsoft Corp.', icon: <Github className="w-4 h-4" />, color: '#FFFFFF' },
      { name: 'Antigravity', brand: 'Google Research', icon: <Wind className="w-4 h-4" />, color: '#ff6700' },
    ]
  }
];

const ToolModule: React.FC<{ tool: Tool; fromLabel: string }> = ({ tool, fromLabel }) => (
  <motion.div
    whileHover={{ x: 3 }}
    className="group flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:border-white/10 transition-all"
  >
    <div 
      className="p-1.5 rounded bg-black/20 border border-white/5 text-white/40 group-hover:text-white transition-colors"
      style={{ color: tool.color }}
    >
      {tool.icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-white uppercase tracking-wider">{tool.name}</span>
      <span className="text-[9px] font-medium text-white/30 lowercase italic tracking-tight">{fromLabel} {tool.brand}</span>
    </div>
  </motion.div>
);

const ToolAquarium: React.FC<{ lang: Language }> = ({ lang }) => {
  const copy = COPY[lang];
  return (
    <div className="relative w-full py-8 px-6 bg-transparent border-y border-white/5">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANCHES.map((branch, idx) => (
            <motion.div 
              key={branch.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                 <div className="w-1 h-3 rounded-full" style={{ backgroundColor: branch.accent }} />
                 <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">{branch.title[lang]}</h4>
              </div>

              <div className="space-y-2">
                {branch.tools.map((tool, i) => (
                  <ToolModule key={i} tool={tool} fromLabel={copy.fromLabel} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-8 pt-8 opacity-20 border-t border-white/5">
           <span className="text-[8px] font-mono uppercase tracking-widest">{copy.footer[0]}</span>
           <span className="text-[8px] font-mono uppercase tracking-widest">{copy.footer[1]}</span>
           <span className="text-[8px] font-mono uppercase tracking-widest">{copy.footer[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default ToolAquarium;
