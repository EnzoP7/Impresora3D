import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'primary' | 'accent' | 'none';
}

export function Card({ children, className = '', hover = true, glow = 'none' }: CardProps) {
  const glowStyles = {
    primary: 'hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]',
    accent: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        glass rounded-2xl p-6
        transition-all duration-300
        ${glowStyles[glow]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
