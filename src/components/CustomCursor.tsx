import { useMousePosition } from '../hooks/useMousePosition';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-blue-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: x - 10, y: y - 10 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-500/50 pointer-events-none z-[9998] hidden md:block"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
