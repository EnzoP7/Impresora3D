import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui';

function FloatingShape({
  delay,
  duration,
  x,
  y,
  size,
  color,
  mouseX,
  mouseY,
}: {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
  color: 'primary' | 'accent';
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  const colorClasses = {
    primary: 'bg-primary/20 border-primary/30',
    accent: 'bg-accent/20 border-accent/30',
  };

  return (
    <motion.div
      className={`absolute ${colorClasses[color]} border rounded-2xl backdrop-blur-sm`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        x: moveX,
        y: moveY,
      }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Shapes */}
      <FloatingShape
        delay={0}
        duration={6}
        x="10%"
        y="20%"
        size={80}
        color="primary"
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <FloatingShape
        delay={1}
        duration={8}
        x="80%"
        y="15%"
        size={60}
        color="accent"
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <FloatingShape
        delay={2}
        duration={7}
        x="70%"
        y="70%"
        size={100}
        color="primary"
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <FloatingShape
        delay={0.5}
        duration={9}
        x="15%"
        y="65%"
        size={70}
        color="accent"
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <FloatingShape
        delay={1.5}
        duration={5}
        x="50%"
        y="80%"
        size={50}
        color="primary"
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/80">Tecnología de última generación</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Materializa tus</span>
            <br />
            <span className="gradient-text">Ideas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Servicio profesional de impresión 3D. Desde prototipos hasta producción,
            llevamos tus diseños del mundo digital al físico con precisión milimétrica.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Comenzar Proyecto
            </Button>
            <Button variant="secondary" size="lg">
              Ver Galería
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Proyectos' },
            { value: '50+', label: 'Clientes' },
            { value: '0.1mm', label: 'Precisión' },
            { value: '24h', label: 'Entrega Rápida' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
