
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block isolate ${className}`}>
      {/* Dynamic Gradient Layer */}
      <motion.span
        className="absolute inset-0 z-10 block bg-gradient-to-r from-[#ff6700] via-[#ebebeb] via-[#3a6ea5] via-[#ff6700] bg-[length:200%_auto] bg-clip-text text-transparent"
        animate={{ backgroundPosition: ['0% center', '200% center'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        {text}
      </motion.span>
      
      {/* Structural Layer */}
      <span className="block text-transparent bg-clip-text bg-white opacity-40" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {text}
      </span>
      
      {/* Background Glow */}
      <span className="absolute inset-0 -z-10 block text-[#ff6700] blur-3xl opacity-20 pointer-events-none">
        {text}
      </span>
    </Component>
  );
};

export default GradientText;
