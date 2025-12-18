import { motion } from 'framer-motion';
import { Layers, Droplets, Zap, Shield, Thermometer, Sparkles } from 'lucide-react';
import { Section } from '../ui';

const materials = [
  {
    name: 'PLA',
    description: 'Biodegradable y fácil de imprimir. Ideal para prototipos y piezas decorativas.',
    icon: Layers,
    properties: ['Ecológico', 'Alta precisión', 'Bajo costo'],
    color: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    name: 'Resina',
    description: 'Máximo detalle y acabado liso. Perfecta para joyería y miniaturas.',
    icon: Droplets,
    properties: ['Ultra detalle', 'Acabado liso', 'Varios colores'],
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    name: 'ABS',
    description: 'Alta resistencia mecánica y térmica. Para piezas funcionales.',
    icon: Shield,
    properties: ['Resistente', 'Duradero', 'Industrial'],
    color: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    name: 'PETG',
    description: 'Equilibrio entre resistencia y facilidad de impresión. Apto para alimentos.',
    icon: Zap,
    properties: ['Food-safe', 'Flexible', 'Transparente'],
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    name: 'TPU',
    description: 'Material flexible y elástico. Ideal para fundas, juntas y amortiguadores.',
    icon: Sparkles,
    properties: ['Flexible', 'Resistente', 'Elástico'],
    color: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    name: 'Nylon',
    description: 'Máxima resistencia mecánica. Para piezas industriales de alto rendimiento.',
    icon: Thermometer,
    properties: ['Industrial', 'Autorlubricante', 'Técnico'],
    color: 'from-slate-500 to-slate-700',
    iconBg: 'bg-slate-500/20',
    iconColor: 'text-slate-400',
  },
];

export function Materials() {
  return (
    <Section
      id="materiales"
      title="Materiales Disponibles"
      subtitle="Tecnología"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material, index) => (
          <motion.div
            key={material.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="glass rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 hover:border-white/20">
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-14 h-14 ${material.iconBg} rounded-xl flex items-center justify-center mb-4 relative z-10`}
              >
                <material.icon className={`w-7 h-7 ${material.iconColor}`} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {material.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {material.description}
                </p>

                {/* Properties Tags */}
                <div className="flex flex-wrap gap-2">
                  {material.properties.map((prop) => (
                    <span
                      key={prop}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12 glass rounded-2xl p-8"
      >
        <p className="text-white/60 mb-4">
          ¿No estás seguro qué material es el mejor para tu proyecto?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-accent hover:text-accent-light font-semibold transition-colors"
        >
          Agenda una consulta gratuita →
        </motion.button>
      </motion.div>
    </Section>
  );
}
