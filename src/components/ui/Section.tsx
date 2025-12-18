import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ children, id, className = '', title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
