import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MultilangWork } from '../types';

interface ProjectDetailViewProps {
    work: MultilangWork;
    lang: 'en' | 'es' | 'ca';
    onBack: () => void;
    onNext: () => void;
    nextWorkName?: string;
    t: (key: string) => string;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ work, lang, onBack, onNext, nextWorkName, t }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
                    <img src={work.image} className="w-full h-full object-cover grayscale opacity-30" alt={work.name} />
                </div>
                <div className="relative z-20 text-center max-w-6xl px-6">
                    <button onClick={onBack} className="mb-8 inline-flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-[0.4em] hover:text-[#ff6700] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> {t('lineupFeed')}
                    </button>
                    <h1 className="text-5xl md:text-[9rem] font-heading font-bold text-white leading-[0.8] mb-6 tracking-tighter uppercase">{work.name}</h1>
                    <p className="text-lg md:text-2xl text-[#ff6700] font-mono tracking-widest max-w-3xl mx-auto uppercase">
                        {work.subtitle?.[lang] || work.description}
                    </p>
                </div>
                {/* Narrative can go here if short, or in the main grid */}
            </section>

            {/* Main Content Grid */}
            <section className="py-24 md:py-48 px-6 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Narrative & Main Flow */}
                    <div className="lg:col-span-8 space-y-32">

                        {/* Narrative */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white/20">{t('narrative')}</h2>
                            <p className="text-xl md:text-3xl text-white/80 leading-relaxed font-light">
                                {work.longDescription[lang]}
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/10" />

                        {/* Main Flow: Problem / Persona / Solution */}
                        <div className="space-y-24">
                            {/* Problem/Insight */}
                            <div className="group">
                                <h3 className="text-[#ff6700] font-mono text-xs uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#ff6700]" /> {t('problemAnalysis')}
                                </h3>
                                <p className="text-2xl md:text-4xl font-heading font-bold text-white uppercase leading-tight">
                                    {work.problem?.[lang] || '—'}
                                </p>
                            </div>

                            {/* User Persona */}
                            <div className="group pl-12 border-l border-white/10">
                                <h3 className="text-[#3a6ea5] font-mono text-xs uppercase tracking-[0.5em] mb-6">
                                    {t('personaTitle')}
                                </h3>
                                <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                                    {work.persona?.[lang] || '—'}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="group">
                                <h3 className="text-white font-mono text-xs uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-white" /> {t('solutionTitle')}
                                </h3>
                                <p className="text-2xl md:text-4xl font-heading font-bold text-white uppercase leading-tight">
                                    {work.solution?.[lang] || '—'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Side Card (Sticky) */}
                    <aside className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-40">
                        {/* Executive Summary Card */}
                        <div className="p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-xl rounded-[2rem] space-y-10 hover:border-[#ff6700]/30 transition-colors duration-500">
                            <div>
                                <h5 className="text-[#ff6700] font-mono text-[10px] uppercase tracking-[0.4em] mb-4">{t('challenge')}</h5>
                                <p className="text-white text-lg font-bold leading-tight uppercase tracking-wide">
                                    {work.challenge[lang]}
                                </p>
                            </div>

                            <div className="h-px bg-white/10" />

                            <div>
                                <h5 className="text-[#3a6ea5] font-mono text-[10px] uppercase tracking-[0.4em] mb-4">{t('outcome')}</h5>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {work.outcome[lang]}
                                </p>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-4 bg-white text-black font-mono uppercase tracking-widest text-xs font-bold hover:bg-[#ff6700] hover:text-white transition-colors duration-300">
                                View Prototype
                            </button>
                        </div>
                    </aside>
                </div>

                {/* Interaction Section */}
                <section className="mt-40 mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="bg-[#0a0a0a] p-12 md:p-24 hover:bg-[#111] transition-colors duration-500 group">
                        <h3 className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] mb-8">{t('taskTitle')}</h3>
                        <p className="text-3xl md:text-5xl font-heading font-bold text-white uppercase leading-none group-hover:text-[#ff6700] transition-colors">
                            {work.task?.[lang] || 'Define the Future'}
                        </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-12 md:p-24 hover:bg-[#111] transition-colors duration-500 group">
                        <h3 className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] mb-8">{t('takeOnTitle')}</h3>
                        <p className="text-2xl md:text-3xl text-white/60 leading-relaxed font-light">
                            {work.takeOn?.[lang] || 'What is your perspective on this approach?'}
                        </p>
                    </div>
                </section>

                {/* Closing / Metrics */}
                <footer className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end border-t border-white/5 pt-20">
                    <div className="space-y-8">
                        <h4 className="text-[#3a6ea5] font-mono text-xs uppercase tracking-[0.4em]">{t('metricsTitle')}</h4>
                        <div className="text-4xl md:text-5xl font-heading font-bold text-white uppercase opacity-50">
                            {work.metrics?.[lang] || 'N/A'}
                        </div>
                    </div>

                    {nextWorkName && (
                        <div className="justify-self-start lg:justify-self-end w-full lg:w-auto">
                            <div className="p-10 border border-white/5 rounded-[2.5rem] hover:bg-white/5 transition-colors cursor-pointer" onClick={onNext}>
                                <h5 className="text-white/20 mb-6 text-[10px] font-mono uppercase tracking-widest">{t('nextWork')}</h5>
                                <div className="group flex items-center justify-between gap-12 w-full text-left">
                                    <span className="text-3xl font-black uppercase group-hover:text-[#ff6700] transition-colors leading-none tracking-tighter">
                                        {nextWorkName}
                                    </span>
                                    <ArrowRight className="w-8 h-8 text-[#ff6700] group-hover:translate-x-3 transition-transform" />
                                </div>
                            </div>
                        </div>
                    )}
                </footer>

            </section>
        </motion.div>
    );
};

export default ProjectDetailView;
