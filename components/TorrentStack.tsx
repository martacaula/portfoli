import React from 'react';
import { motion } from 'framer-motion';
import { Database, Terminal, ShieldCheck, Zap, Hexagon, BrainCircuit, Mic, Figma, Lock, Sparkles } from 'lucide-react';

interface Tool {
  name: string;
  brand: string;
  icon: React.ReactNode;
  color: string;
}

interface Branch {
  id: string;
  title: string;
  tools: Tool[];
  accent: string;
}

const BRANCHES: Branch[] = [
  {
    id: 'synthesis',
    title: 'Phase 1: Synthesis',
    accent: '#ff6700',
    tools: [
      { name: 'NotebookLM', brand: 'Source Grounding', icon: <Database className="w-4 h-4" />, color: '#4285F4' },
      { name: 'ChatGPT', brand: 'Contextual Research', icon: <BrainCircuit className="w-4 h-4" />, color: '#10a37f' },
      { name: 'Otter.ai', brand: 'Live Capture', icon: <Mic className="w-4 h-4" />, color: '#FFFFFF' }
    ]
  },
  {
    id: 'build',
    title: 'Phase 4: Build Support',
    accent: '#ff6700',
    tools: [
      { name: 'Google AI Studio', brand: 'System Prompting', icon: <Terminal className="w-4 h-4" />, color: '#3a6ea5' },
      { name: 'Antigravity', brand: 'Strategic Flux', icon: <Hexagon className="w-4 h-4" />, color: '#ff6700' },
      { name: 'Figma AI', brand: 'UI Automations', icon: <Figma className="w-4 h-4" />, color: '#F24E1E' }
    ]
  },
  {
    id: 'automation',
    title: 'Phase 5: Test Automation',
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

const TorrentStack: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-[#ff6700]">TORRENT STACK</h3>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">AI INJECTION POINTS BY SPRINT PHASE</span>
      </div>

      <div className="relative w-full py-12 px-8 bg-black/20 rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6700]/5 blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-4 p-6 bg-[#ff6700]/5 border border-[#ff6700]/20 rounded-2xl">
            <Lock className="w-5 h-5 text-[#ff6700]" />
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">
              <span className="text-[#ff6700] font-bold">PHASE 2-3: NO AI INJECTION.</span> PROTECTED ZONE FOR MANUAL IDEATION, INCUBATION AND
              HUMAN DECISION.
            </p>
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
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/40">{branch.title}</h4>
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
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Governance First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 text-[#ff6700]" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Make.com Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Human Decision Core</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TorrentStack;
