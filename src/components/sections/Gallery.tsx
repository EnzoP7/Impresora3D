import { motion } from 'framer-motion';
import { Section } from '../ui';

const galleryItems = [
  {
    id: 1,
    title: 'Prototipo Industrial',
    category: 'Ingeniería',
    span: 'md:col-span-2 md:row-span-2',
    gradient: 'from-primary/40 to-violet-900/40',
  },
  {
    id: 2,
    title: 'Figura Coleccionable',
    category: 'Arte',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-accent/40 to-cyan-900/40',
  },
  {
    id: 3,
    title: 'Componente Mecánico',
    category: 'Repuestos',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-emerald-500/40 to-emerald-900/40',
  },
  {
    id: 4,
    title: 'Maqueta Arquitectónica',
    category: 'Arquitectura',
    span: 'md:col-span-1 md:row-span-2',
    gradient: 'from-amber-500/40 to-amber-900/40',
  },
  {
    id: 5,
    title: 'Joyería Personalizada',
    category: 'Moda',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-rose-500/40 to-rose-900/40',
  },
  {
    id: 6,
    title: 'Gadget Tecnológico',
    category: 'Tech',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-primary/40 to-accent/40',
  },
];

export function Gallery() {
  return (
    <Section
      id="galeria"
      title="Nuestros Trabajos"
      subtitle="Galería"
      className="bg-surface/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`
              relative rounded-2xl overflow-hidden cursor-pointer group
              ${item.span}
            `}
          >
            {/* Gradient Background (placeholder for images) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
            />

            {/* Animated Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '20px 20px',
              }}
            />

            {/* 3D Object Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 md:w-32 md:h-32 border-2 border-white/20 rounded-xl"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="text-white text-lg font-bold mt-1">{item.title}</h3>
            </div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl transition-all duration-300"
        >
          Ver más proyectos
        </motion.button>
      </motion.div>
    </Section>
  );
}
