import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

const NAME = 'Willy Henrique'

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [visible, setVisible] = useState(true)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    // Scroll to top immediately when animation starts
    window.scrollTo(0, 0)
    
    const exitTimer = setTimeout(() => setVisible(false), 3600)
    const doneTimer = setTimeout(handleComplete, 4400)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [handleComplete])

  // Lock scroll during intro
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#070a12]"
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '52px 52px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          {/* Center glow blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[360px] h-[200px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-[55%] -translate-y-1/2 w-[200px] h-[200px] bg-purple-600/8 blur-[80px] rounded-full pointer-events-none" />

          {/* Corner brackets */}
          {[
            'top-5 left-5 border-l-2 border-t-2',
            'top-5 right-5 border-r-2 border-t-2',
            'bottom-5 left-5 border-l-2 border-b-2',
            'bottom-5 right-5 border-r-2 border-b-2',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
              className={`absolute w-7 h-7 border-cyan-500/40 ${cls}`}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">

            {/* Top label */}
            <motion.p
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="font-mono text-xs tracking-[0.45em] uppercase text-cyan-400/80 mb-10"
            >
              Portfolio · 2026
            </motion.p>

            {/* Name letter-by-letter with 3-D flip */}
            <div
              className="flex flex-wrap justify-center mb-5 leading-none"
              style={{ perspective: '900px' }}
            >
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, rotateX: -80, y: 36 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{
                    delay: 0.42 + i * 0.048,
                    duration: 0.52,
                    ease: [0.22, 0.9, 0.36, 1],
                  }}
                  style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
                  className={`
                    text-[clamp(2.6rem,9vw,5.5rem)] font-bold tracking-tight
                    bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500
                    bg-clip-text text-transparent
                    ${char === ' ' ? 'w-[0.35em]' : ''}
                  `}
                >
                  {char === ' ' ? ' ' : char}
                </motion.span>
              ))}
            </div>

            {/* Role */}
            <div className="overflow-hidden mb-10">
              <motion.p
                initial={{ y: 42, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.35, duration: 0.6, ease: 'easeOut' }}
                className="text-[clamp(1rem,3vw,1.5rem)] font-medium text-gray-300 tracking-wide"
              >
                Full Stack Developer
              </motion.p>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.75, duration: 0.9, ease: 'easeInOut' }}
              className="w-52 sm:w-72 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-10"
            />

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="w-44 sm:w-60"
            >
              <div className="h-[2px] w-full rounded-full bg-white/[0.07] overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.65, duration: 1.85, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 1.9 }}
                className="mt-2.5 text-center font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500"
              >
                Carregando
              </motion.p>
            </motion.div>
          </div>

          {/* Scan line sweep */}
          <motion.div
            initial={{ top: '-2%' }}
            animate={{ top: '102%' }}
            transition={{ delay: 0.6, duration: 2.2, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none"
            style={{ position: 'absolute' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
