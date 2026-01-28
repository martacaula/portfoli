import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal, ShieldCheck, Zap, Hexagon, BrainCircuit, Mic, Figma, Lock, Sparkles } from 'lucide-react';
import { type Language } from '../types';

interface Tool {
  name: string;
  brand: string;
  icon: React.ReactNode;
  color: string;
}

type BranchId = 'synthesis' | 'build' | 'automation';

interface Branch {
  id: BranchId;
  title: Record<Language, string>;
  tools: Tool[];
  accent: string;
}

const COPY: Record<Language, {
  title: string;
  subtitle: string;
  lockText: string;
  badges: [string, string, string];
}> = {
  en: {
    title: 'TORRENT STACK',
    subtitle: 'AI INJECTION POINTS BY SPRINT PHASE',
    lockText: 'PHASE 2-3: NO AI INJECTION. PROTECTED ZONE FOR MANUAL IDEATION, INCUBATION AND HUMAN DECISION.',
    badges: ['Governance First', 'Make.com Testing', 'Human Decision Core']
  },
  es: {
    title: 'STACK TORRENT',
    subtitle: 'PUNTOS DE INYECCIÓN DE IA POR FASE DE SPRINT',
    lockText: 'FASE 2-3: SIN INYECCIÓN DE IA. ZONA PROTEGIDA PARA IDEACIÓN MANUAL, INCUBACIÓN Y DECISIÓN HUMANA.',
    badges: ['Gobernanza primero', 'Pruebas en Make.com', 'Núcleo de decisión humana']
  },
  ca: {
    title: 'STACK TORRENT',
    subtitle: "PUNTS D'INJECCIÓ D'IA PER FASE DE SPRINT",
    lockText: "FASE 2-3: SENSE INJECCIÓ D'IA. ZONA PROTEGIDA PER A IDEACIÓ MANUAL, INCUBACIÓ I DECISIÓ HUMANA.",
    badges: ['Governança primer', 'Proves a Make.com', 'Nucli de decisió humana']
  }
};

const BRANCHES: Branch[] = [
  {
    id: 'synthesis',
    title: {
      en: 'Phase 1: Synthesis',
      es: 'Fase 1: Síntesis',
      ca: 'Fase 1: Síntesi'
    },
    accent: '#ff6700',
    tools: [
      { name: 'NotebookLM', brand: 'Source Grounding', icon: <Database className="w-4 h-4" />, color: '#4285F4' },
      { name: 'ChatGPT', brand: 'Contextual Research', icon: <BrainCircuit className="w-4 h-4" />, color: '#10a37f' },
      { name: 'Otter.ai', brand: 'Live Capture', icon: <Mic className="w-4 h-4" />, color: '#FFFFFF' }
    ]
  },
  {
    id: 'build',
    title: {
      en: 'Phase 4: Build Support',
      es: 'Fase 4: Soporte de construcción',
      ca: 'Fase 4: Suport de construcció'
    },
    accent: '#ff6700',
    tools: [
      { name: 'Google AI Studio', brand: 'System Prompting', icon: <Terminal className="w-4 h-4" />, color: '#3a6ea5' },
      { name: 'Antigravity', brand: 'Strategic Flux', icon: <Hexagon className="w-4 h-4" />, color: '#ff6700' },
      { name: 'Figma AI', brand: 'UI Automations', icon: <Figma className="w-4 h-4" />, color: '#F24E1E' }
    ]
  },
  {
    id: 'automation',
    title: {
      en: 'Phase 5: Test Automation',
      es: 'Fase 5: Automatización de pruebas',
      ca: 'Fase 5: Automatització de proves'
    },
    accent: '#3a6ea5',
    tools: [{ name: 'Make.com', brand: 'Rapid Validation', icon: <Zap className="w-4 h-4" />, color: '#FF9A00' }]
  }
];

const ToolModule: React.FC<{ tool: Tool }> = ({ tool }) => (
  <motion.div
    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
    className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/20 transition-all"
  >
    <div className="p-2.5 rounded-lg bg-black/20 border border-white/5 transition-colors" style={{ color: tool.color }}>
      {tool.icon}
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-white uppercase tracking-widest">{tool.name}</span>
      <span className="text-[9px] font-medium text-white/30 lowercase italic tracking-tight">{tool.brand}</span>
    </div>
  </motion.div>
);

const TorrentStack: React.FC<{ lang: Language }> = ({ lang }) => {
  const copy = COPY[lang];
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-[#ff6700]">{copy.title}</h3>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{copy.subtitle}</span>
      </div>

      <div className="relative w-full py-12 px-8 bg-black/20 rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6700]/5 blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-4 p-6 bg-[#ff6700]/5 border border-[#ff6700]/20 rounded-2xl">
            <Lock className="w-5 h-5 text-[#ff6700]" />
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">{copy.lockText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANCHES.map((branch, idx) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: branch.accent }} />
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/40">{branch.title[lang]}</h4>
                </div>

                <div className="space-y-3">
                  {branch.tools.map((tool, i) => (
                    <ToolModule key={i} tool={tool} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12 pt-12 opacity-30 border-t border-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">{copy.badges[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#ff6700]" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">{copy.badges[1]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">{copy.badges[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TorrentStack;
