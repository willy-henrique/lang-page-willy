import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)

  const ringX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 })
  const ringY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 })

  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Detect touch device
  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    setIsTouch(isTouchDevice)
  }, [])

  // Mouse tracking with rAF
  useEffect(() => {
    if (isTouch) return

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    const updateCursor = () => {
      const { x, y } = mouseRef.current
      dotX.set(x)
      dotY.set(y)
      ringX.set(x)
      ringY.set(y)
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isTouch, isVisible, dotX, dotY, ringX, ringY])

  // Hover detection on interactive elements
  useEffect(() => {
    if (isTouch) return

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      ) {
        setIsHovering(true)
      }
    }

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener('pointerover', onPointerOver, { passive: true })
    document.addEventListener('pointerout', onPointerOut, { passive: true })

    return () => {
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
    }
  }, [isTouch])

  // Don't render on touch devices
  if (isTouch) return null

  const dotSize = isHovering ? 14 : 8
  const ringSize = isHovering ? 56 : 40

  return (
    <>
      {/* Small cyan dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          backgroundColor: '#06b6d4',
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        }}
      />

      {/* Larger following ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          borderColor: isHovering ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.2)',
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.06)' : 'transparent',
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          transition:
            'width 0.3s ease, height 0.3s ease, opacity 0.2s ease, border-color 0.3s ease, background-color 0.3s ease',
        }}
      />
    </>
  )
}
