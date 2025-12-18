import { motion } from 'framer-motion';
import { Upload, Settings, Package } from 'lucide-react';
import { Section } from '../ui';

const steps = [
  {
    icon: Upload,
    title: 'Sube tu archivo',
    description:
      'Carga tu modelo 3D en formato STL, OBJ o 3MF. Aceptamos archivos de cualquier software de diseño.',
    color: 'primary',
  },
  {
    icon: Settings,
    title: 'Configura tu pedido',
    description:
      'Elige el material, color y calidad de impresión. Nuestro sistema te dará un presupuesto instantáneo.',
    color: 'accent',
  },
  {
    icon: Package,
    title: 'Recibe tu pieza',
    description:
      'Imprimimos y enviamos tu pieza. Entrega en 24-72 horas según urgencia y complejidad.',
    color: 'primary',
  },
];

export function HowItWorks() {
  return (
    <Section
      id="proceso"
      title="¿Cómo funciona?"
      subtitle="Proceso simple"
    >
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 h-full flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-glass-border text-sm font-bold text-white/60">
                {index + 1}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                  ${step.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}
                  group-hover:shadow-lg transition-all duration-300
                `}
              >
                <step.icon
                  className={`w-10 h-10 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-white/40 text-sm">
          ¿No tienes un modelo 3D?{' '}
          <a href="#contacto" className="text-accent hover:text-accent-light transition-colors">
            Contáctanos
          </a>{' '}
          y te ayudamos a crearlo.
        </p>
      </motion.div>
    </Section>
  );
}
