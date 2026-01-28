
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Zap, ShieldCheck, Timer, MousePointer2 } from 'lucide-react';

const TorrentAnimation: React.FC = () => {
  const [stage, setStage] = useState<'manual' | 'torrent'>('manual');

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((s) => (s === 'manual' ? 'torrent' : 'manual'));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const manualLines = Array.from({ length: 4 });
  const torrentSteps = ['Synthesis', 'Map', 'Incubation', 'Build', 'Test'];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full aspect-[21/9] bg-[#0c1a2a] rounded-[3.5rem] overflow-hidden relative border border-white/10 shadow-3xl flex items-center justify-center font-sans isolate">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff6700_0%,_transparent_70%)] opacity-20" />
          <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <svg viewBox="0 0 1600 600" className="w-full h-full p-20 z-10 overflow-visible">
          <AnimatePresence>
            {stage === 'manual' ? (
              <motion.g
                key="manual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {manualLines.map((_, i) => (
                  <g key={i}>
                    <motion.path
                      d={`M 150 ${210 + i * 60} L 1450 ${210 + i * 60}`}
                      stroke="#ffffff"
                      strokeWidth="1"
                      strokeOpacity="0.08"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                    />
                    {[250, 550, 850, 1150, 1400].map((x, j) => (
                      <circle key={j} cx={x} cy={210 + i * 60} r="2.5" fill="#ffffff" fillOpacity="0.2" />
                    ))}
                    <motion.circle r="3" fill="#ffffff" fillOpacity="0.3">
                      <animateMotion path={`M 150 ${210 + i * 60} L 1450 ${210 + i * 60}`} dur={`${6 + i * 1}s`} repeatCount="indefinite" />
                    </motion.circle>
                  </g>
                ))}
                <text x="800" y="560" textAnchor="middle" className="text-[10px] font-mono tracking-[0.8em] fill-white/20 uppercase">
                  Manual Sprint: Distributed Effort / Linear Time
                </text>
              </motion.g>
            ) : (
              <motion.g
                key="torrent"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <g transform="translate(800, 80)">
                  <motion.circle
                    r="45"
                    fill="#ff6700"
                    fillOpacity="0.05"
                    stroke="#ff6700"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <User className="text-[#ff6700] w-7 h-7 -translate-x-3.5 -translate-y-3.5" />
                  <motion.text y="70" textAnchor="middle" className="text-[10px] fill-[#ff6700] font-mono font-bold uppercase tracking-[0.4em]">
                    Strategic Guidance / Human Lead
                  </motion.text>

                  {[250, 525, 800, 1075, 1350].map((x, i) => (
                    <motion.path
                      key={i}
                      d={`M 0 45 L ${x - 800} 220`}
                      stroke="#ff6700"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    />
                  ))}
                </g>

                <motion.path
                  d="M 150 300 L 1450 300"
                  stroke="#ff6700"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: 'circOut' }}
                />

                <motion.path
                  d="M 150 300 L 1450 300"
                  stroke="#ff6700"
                  strokeWidth="25"
                  strokeOpacity="0.03"
                  strokeLinecap="round"
                  animate={{ strokeWidth: [25, 40, 25], opacity: [0.03, 0.1, 0.03] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {torrentSteps.map((step, i) => {
                  const isIncubation = step === 'Incubation';
                  const isAiHeavy = i === 0 || i === 3;
                  const accentColor = isIncubation ? '#ffffff' : '#ff6700';

                  return (
                    <g key={i} transform={`translate(${250 + i * 275}, 300)`}>
                      {isAiHeavy && (
                        <motion.rect
                          x="-95"
                          y="-45"
                          width="190"
                          height="90"
                          rx="22"
                          fill={accentColor}
                          fillOpacity="0.06"
                          stroke={accentColor}
                          strokeWidth="1"
                          animate={{ opacity: [0.15, 0.5, 0.15] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        />
                      )}

                      <motion.rect
                        x="-85"
                        y="-35"
                        width="170"
                        height="70"
                        rx="18"
                        fill="#0c1a2a"
                        stroke={accentColor}
                        strokeWidth="1.5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                      />

                      {isIncubation && (
                        <motion.rect
                          x="-75"
                          y="-25"
                          width="150"
                          height="50"
                          rx="12"
                          fill={accentColor}
                          fillOpacity="0.12"
                          animate={{ opacity: [0.2, 0.6, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}

                      <motion.text
                        textAnchor="middle"
                        y="5"
                        className={`text-[11px] font-black uppercase tracking-[0.2em] ${isIncubation ? 'fill-white' : 'fill-white'}`}
                      >
                        {step}
                      </motion.text>

                      {isIncubation && (
                        <text y="22" textAnchor="middle" className="text-[7px] fill-white uppercase font-mono tracking-widest opacity-70">
                          AI Protected
                        </text>
                      )}
                    </g>
                  );
                })}

                <motion.circle r="6" fill="#ff6700" className="shadow-lg shadow-[#ff6700]/80">
                  <animateMotion path="M 150 300 L 1450 300" dur="2.5s" repeatCount="indefinite" />
                </motion.circle>

                <text x="800" y="580" textAnchor="middle" className="text-[10px] font-mono tracking-[0.8em] fill-[#ff6700] uppercase">
                  Torrent: Accelerated Methodology / Fluid Impact
                </text>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>

        <div className="absolute top-12 left-12 flex gap-8">
          <div
            className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500 ${
              stage === 'manual' ? 'border-white/20 bg-white/10 shadow-lg' : 'border-white/5 opacity-20'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Manual Sprint</span>
          </div>
          <div
            className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500 ${
              stage === 'torrent'
                ? 'border-[#ff6700]/40 bg-[#ff6700]/15 shadow-[0_0_20px_rgba(255,103,0,0.2)]'
                : 'border-white/5 opacity-20'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#ff6700]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff6700]">Torrent Flow</span>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 w-80 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-4 h-4 text-[#ff6700]" />
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white">Methodology Audit</h5>
          </div>
          <p className="text-[10px] font-mono leading-relaxed text-white/40 uppercase">
            {stage === 'manual'
              ? 'Disconnected workflows lead to resource fragmentation and fatigue.'
              : 'Torrent collapses multiple cycles into a single path directed by human strategy.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#ff6700]/30 transition-all duration-500">
          <h6 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
            <Timer className="w-3 h-3" /> Efficiency Gain
          </h6>
          <p className="text-4xl font-heading font-bold text-[#ff6700]">-60%</p>
          <p className="text-[9px] uppercase tracking-widest text-white/20 mt-2">Reduction in cycle redundancy</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#ff6700]/30 transition-all duration-500">
          <h6 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
            <MousePointer2 className="w-3 h-3" /> Human Lead
          </h6>
          <p className="text-4xl font-heading font-bold">Guided</p>
          <p className="text-[9px] uppercase tracking-widest text-white/20 mt-2">Decision-driven automation</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#ff6700]/30 transition-all duration-500">
          <h6 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3" /> Architecture
          </h6>
          <p className="text-4xl font-heading font-bold">Unified</p>
          <p className="text-[9px] uppercase tracking-widest text-white/20 mt-2">Single-path logic deployment</p>
        </div>
      </div>
    </div>
  );
};

export default TorrentAnimation;
