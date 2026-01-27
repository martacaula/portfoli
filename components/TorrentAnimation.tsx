
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Activity, ShieldAlert, Sparkles } from 'lucide-react';

const TorrentAnimation: React.FC = () => {
  const [stage, setStage] = useState<'classic' | 'scan' | 'torrent'>('classic');
  const [viewMode, setViewMode] = useState<'flow' | 'hours'>('flow');

  useEffect(() => {
    const sequence = async () => {
      setStage('classic');
      await new Promise(r => setTimeout(r, 10000));
      
      setStage('scan');
      await new Promise(r => setTimeout(r, 2000));
      
      setStage('torrent');
      await new Promise(r => setTimeout(r, 10000));
      
      sequence();
    };
    sequence();
  }, []);

  const classicData = [
    { day: "Day 1", hours: 8, tasks: ["Long-term Goal", "Sprint Questions", "Expert Interviews", "HMW Notes", "User Journey Map"] },
    { day: "Day 2", hours: 8, tasks: ["Lightning Demos", "Crazy 8s", "Solution Sketch", "Mind Mapping"] },
    { day: "Day 3", hours: 8, tasks: ["Heat Map Voting", "Supervote", "Decision Matrix", "Risk Mapping"] },
    { day: "Day 4", hours: 8, tasks: ["Final Storyboard", "Prototype Scope Cut", "Clickable Prototype", "Wizard of Oz Prototype"] },
    { day: "Day 5", hours: 8, tasks: ["Usability Testing", "Five-Act Interview", "Affinity Mapping", "Insights Synthesis"] },
  ];

  // Mirroring the classic 5-day layout but with AI-optimized labels
  const torrentData = [
    { day: "Day 1", hours: 4, tasks: ["Voice Capture", "Auto-Transcribe", "AI Insight Synthesis", "Topic Clustering", "Digital Mapping"] },
    { day: "Day 2", hours: 3, tasks: ["Algorithmic Demos", "Gen-AI Sketching", "Layout Scaffolding", "Flow Optimization"] },
    { day: "Day 3", hours: 2, tasks: ["Auto-Prioritization", "Supervote Assist", "Risk Vectoring", "Decision Logic"] },
    { day: "Day 4", hours: 4, tasks: ["Dynamic Storyboard", "Asset Generation", "Prototype Build", "Logic Validation"] },
    { day: "Day 5", hours: 4, tasks: ["Targeted Testing", "Automated Synthesis", "Insight Extraction", "Outcome Matrix"] },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* View Mode Selector */}
      <div className="flex justify-end items-center bg-black/40 backdrop-blur p-4 rounded-2xl border border-white/5 gap-4">
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('flow')}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${viewMode === 'flow' ? 'bg-[#00CED1] text-black' : 'bg-white/5 text-white/40'}`}
          >
            <Activity className="w-3 h-3" /> Process Flow
          </button>
          <button 
            onClick={() => setViewMode('hours')}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${viewMode === 'hours' ? 'bg-[#ff6700] text-white' : 'bg-white/5 text-white/40'}`}
          >
            <Clock className="w-3 h-3" /> Time Analysis
          </button>
        </div>
      </div>

      {/* Visualizer Frame */}
      <div className="w-full aspect-video bg-white rounded-3xl overflow-hidden relative border border-slate-200 shadow-xl flex items-center justify-center font-sans">
        <svg viewBox="0 0 1600 900" className="w-full h-full p-20">
          <line x1="100" y1="450" x2="1500" y2="450" stroke="#F1F5F9" strokeWidth="1" />
          
          <AnimatePresence mode="wait">
            {stage === 'classic' && (
              <motion.g key="classic-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.line x1="100" y1="450" x2="180" y2="450" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                <text x="100" y="430" className="text-[10px] font-bold fill-slate-300 uppercase tracking-[0.2em]">Start</text>

                {classicData.map((d, i) => (
                  <g key={`classic-day-${i}`}>
                    <motion.circle 
                      cx={250 + i * 260} cy={450} r="5" fill="#94A3B8"
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 1.5 }}
                    />
                    <motion.text 
                      x={250 + i * 260} y={485} textAnchor="middle" 
                      className="text-[12px] font-bold fill-slate-400 uppercase tracking-widest"
                    >
                      {viewMode === 'hours' ? `${d.hours}h` : d.day}
                    </motion.text>

                    {d.tasks.map((task, j) => (
                      <motion.g key={`task-${i}-${j}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 1.5 + j * 0.15 }}>
                        <path d={`M ${250 + i * 260} 450 Q ${280 + i * 260} ${450 + (j - 2) * 50} ${310 + i * 260} ${450 + (j - 2) * 70}`} stroke="#E2E8F0" strokeWidth="1" fill="none" />
                        
                        {/* Technique Highlighter: Specifically highlights the technique box as it's "selected" */}
                        <motion.rect 
                          x={310 + i * 260} y={439 + (j - 2) * 70} width="160" height="22" rx="11" 
                          fill="#fef9c3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ delay: i * 1.5 + j * 0.1, duration: 1 }}
                        />
                        
                        <rect x={310 + i * 260} y={439 + (j - 2) * 70} width="160" height="22" rx="11" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
                        <text x={325 + i * 260} y={454 + (j - 2) * 70} className="text-[9px] fill-slate-500 font-medium">{task}</text>
                      </motion.g>
                    ))}
                  </g>
                ))}
                <text x="800" y="850" textAnchor="middle" className="text-[11px] font-mono tracking-[0.4em] fill-slate-400 uppercase">Classic Sprint: Manual Technique Curation</text>
              </motion.g>
            )}

            {stage === 'torrent' && (
              <motion.g key="torrent-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                 <line x1="100" y1="450" x2="180" y2="450" stroke="#00CED1" strokeWidth="4" strokeLinecap="round" />
                 <text x="100" y="430" className="text-[10px] font-bold fill-slate-300 uppercase tracking-[0.2em]">Start</text>

                 <motion.path d="M 180 450 L 1450 450" stroke="#00CED1" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />

                 {torrentData.map((d, i) => (
                   <g key={`t-day-${i}`}>
                      <motion.circle cx={250 + i * 260} cy={450} r="8" fill="#00CED1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 1.2 }} />
                      <text x={250 + i * 260} y={485} textAnchor="middle" className="text-[14px] font-black fill-[#00CED1] uppercase tracking-widest">
                        {viewMode === 'hours' ? `${d.hours}h` : d.day}
                      </text>
                      
                      {d.tasks.map((task, j) => (
                        <motion.g key={`t-task-${i}-${j}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 1.2 + j * 0.15 }}>
                          <path d={`M ${250 + i * 260} 450 Q ${280 + i * 260} ${450 + (j - 2) * 50} ${310 + i * 260} ${450 + (j - 2) * 70}`} stroke="#99F6E4" strokeWidth="1" fill="none" />
                          
                          {/* AI Technique Highlighter */}
                          <motion.rect 
                            x={310 + i * 260} y={439 + (j - 2) * 70} width="160" height="28" rx="6" 
                            fill="#00CED1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ delay: i * 1.2 + j * 0.1, duration: 1 }}
                          />

                          <rect x={310 + i * 260} y={439 + (j - 2) * 70} width="160" height="28" rx="6" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="1" />
                          <text x={325 + i * 260} y={458 + (j - 2) * 70} className="text-[10px] fill-[#0F766E] font-bold uppercase tracking-tight">{task}</text>
                        </motion.g>
                      ))}
                   </g>
                 ))}

                 <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 6.5 }}>
                    <rect x="1460" y="400" width="120" height="100" rx="20" fill="#00CED1" />
                    <text x="1520" y="445" textAnchor="middle" className="text-[14px] font-black fill-white uppercase tracking-tighter">Outcome</text>
                    <motion.text animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} x="1520" y="475" textAnchor="middle" className="text-[20px] fill-white">★</motion.text>
                 </motion.g>

                 <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 7.5 }}>
                    <rect x="400" y="800" width="800" height="80" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="800" y="835" textAnchor="middle" className="text-[32px] font-black fill-slate-900 tracking-tighter uppercase">TORRENT Engine</text>
                    <text x="800" y="860" textAnchor="middle" className="text-[12px] font-bold fill-[#00CED1] uppercase tracking-[0.4em]">Optimized Cycle. Pure Algorithmic Velocity.</text>
                 </motion.g>
              </motion.g>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage === 'scan' && (
              <motion.rect x="0" y="0" width="120" height="900" fill="#00CED1" className="opacity-10" initial={{ x: -120 }} animate={{ x: 1720 }} transition={{ duration: 1.8, ease: "easeInOut" }} />
            )}
          </AnimatePresence>
        </svg>

        <div className="absolute top-8 right-8 flex items-center gap-3">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm">
             <Sparkles className="w-3 h-3 text-[#00CED1]" />
             <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Digital Synthesis</span>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
           <div className="bg-black/80 px-4 py-4 rounded-2xl border border-white/10 max-w-[280px] shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-2">
                 <ShieldAlert className="w-4 h-4 text-[#ff6700]" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">Expert Constraint</span>
              </div>
              <p className="text-[9px] text-white/50 leading-relaxed">
                This model demonstrates the method's logic. Real-world execution is mediated by a <strong>professional coach</strong> for market success.
              </p>
           </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-black/40 backdrop-blur px-6 py-4 rounded-2xl border border-white/5">
        <div className="flex gap-6">
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${stage === 'classic' ? 'bg-slate-400 animate-pulse' : 'bg-slate-800'}`} />
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Phase 01: Traditional Selection</span>
           </div>
           <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${stage === 'torrent' ? 'bg-[#00CED1] animate-pulse' : 'bg-slate-800'}`} />
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Phase 02: AI-Powered TORRENT</span>
           </div>
        </div>
        <div className="text-[10px] font-mono text-[#ff6700] uppercase tracking-widest animate-pulse">
           System Status: Ready
        </div>
      </div>
    </div>
  );
};

export default TorrentAnimation;
