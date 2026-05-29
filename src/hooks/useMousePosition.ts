import { useState, useEffect, useCallback, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)
  const latestRef = useRef<MousePosition>({ x: 0, y: 0 })
  const isUpdating = useRef(false)

  const updatePosition = useCallback(() => {
    setPosition({ ...latestRef.current })
    isUpdating.current = false
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latestRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
      if (!isUpdating.current) {
        isUpdating.current = true
        rafRef.current = requestAnimationFrame(updatePosition)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        latestRef.current = {
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
        }
        if (!isUpdating.current) {
          isUpdating.current = true
          rafRef.current = requestAnimationFrame(updatePosition)
        }
      }
    }

    // Device orientation for mobile (optional)
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        latestRef.current = {
          x: Math.max(-1, Math.min(1, (e.gamma / 45))),
          y: Math.max(-1, Math.min(1, ((e.beta - 45) / 45))),
        }
        if (!isUpdating.current) {
          isUpdating.current = true
          rafRef.current = requestAnimationFrame(updatePosition)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('deviceorientation', handleOrientation, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('deviceorientation', handleOrientation)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updatePosition])

  return position
}
