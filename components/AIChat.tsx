
import React, { useState } from 'react';
import { MessageCircle, X, Instagram, Linkedin, Github, Send, Mail, Briefcase, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/martacaula', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/martacaula', name: 'Instagram' },
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/martacaula', name: 'GitHub' },
  ];

  const contactOptions = [
    { label: 'Contactar via Email', icon: <Mail className="w-4 h-4" />, action: () => window.location.href = 'mailto:hola@martacaula.com' },
    { label: 'Veure Projectes', icon: <Briefcase className="w-4 h-4" />, action: () => { setIsOpen(false); window.dispatchEvent(new CustomEvent('navigate-lineup')); } },
    { label: 'Say Hello!', icon: <Sparkles className="w-4 h-4" />, action: () => alert('Sending signals to Marta...') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[90vw] md:w-80 bg-[#1a2a3a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-[#ff6700]/20"
          >
            {/* Header with Social Links */}
            <div className="bg-gradient-to-r from-[#ff6700]/20 to-[#3a6ea5]/20 p-6 border-b border-white/5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="bebas-neue-regular text-2xl tracking-widest text-white uppercase">Contact Hub</h3>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-around items-center">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#ff6700' }}
                    className="text-white/60 transition-colors p-2"
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Chat Body / Options */}
            <div className="p-6 space-y-6 bg-black/20">
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <p className="text-sm text-[#ebebeb] leading-relaxed">
                    Hola! Sóc la <span className="text-[#ff6700] font-bold">Marta</span>. Què t'agradaria fer?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {contactOptions.map((opt, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    onClick={opt.action}
                    className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#ff6700]">{opt.icon}</span>
                      <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{opt.label}</span>
                    </div>
                    <Send className="w-3 h-3 text-white/20 group-hover:text-[#ff6700] transition-colors" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer Tag */}
            <div className="p-4 bg-black/40 border-t border-white/5 text-center">
               <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">Ready for iteration v2.5</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ff6700] to-[#3a6ea5] flex items-center justify-center shadow-xl shadow-[#ff6700]/30 border border-white/10 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
              <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIChat;
