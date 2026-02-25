import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{ x: x - 10, y: y - 10 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor-dot hidden md:block"
        animate={{ x: x - 2, y: y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
}
