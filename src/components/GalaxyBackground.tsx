import { useEffect, useRef, memo } from 'react'

const GalaxyBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const w = window.innerWidth
      // Cover at least 4x viewport height to span whole page
      const h = Math.max(document.documentElement.scrollHeight, window.innerHeight * 4)
      canvas.width = w
      canvas.height = h

      ctx.clearRect(0, 0, w, h)

      // --- Stars ---
      const count = Math.min(3000, Math.floor((w * h) / 2200))
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        const r = Math.random() * 1.1 + 0.1
        const alpha = Math.random() * 0.75 + 0.12

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        // ~20 % of stars get a cool blue tint
        ctx.fillStyle =
          Math.random() < 0.2
            ? `rgba(160,210,255,${alpha})`
            : `rgba(255,255,255,${alpha})`
        ctx.fill()
      }

      // --- Bright hero stars with subtle glow ---
      for (let i = 0; i < 55; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        const r = Math.random() * 0.9 + 1.1

        // Core
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.4 + 0.6})`
        ctx.fill()

        // Glow halo
        const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 5)
        grd.addColorStop(0, 'rgba(200,225,255,0.12)')
        grd.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(x, y, r * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      }

      // --- Milky Way band (subtle diagonal haze) ---
      const band = ctx.createLinearGradient(0, h * 0.1, w, h * 0.9)
      band.addColorStop(0, 'transparent')
      band.addColorStop(0.3, 'rgba(120,150,255,0.018)')
      band.addColorStop(0.5, 'rgba(160,180,255,0.028)')
      band.addColorStop(0.7, 'rgba(120,150,255,0.018)')
      band.addColorStop(1, 'transparent')
      ctx.fillStyle = band
      ctx.fillRect(0, 0, w, h)
    }

    draw()

    const handleResize = () => draw()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Static star canvas — drawn once, no RAF loop */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute top-0 left-0 w-full pointer-events-none select-none"
        style={{ zIndex: 0, display: 'block' }}
      />

      {/* Nebula / galaxy glow blobs — pure CSS, zero JS cost */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        {/* Blue nebula — upper right */}
        <div className="absolute top-[8%] right-[18%] w-[580px] h-[380px] rounded-full bg-blue-500/[0.05] blur-[160px]" />
        {/* Purple nebula — mid left */}
        <div className="absolute top-[42%] left-[6%] w-[500px] h-[420px] rounded-full bg-purple-600/[0.045] blur-[140px]" />
        {/* Cyan nebula — lower right */}
        <div className="absolute bottom-[10%] right-[25%] w-[420px] h-[340px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
        {/* Indigo nebula — center deep */}
        <div className="absolute top-[60%] left-[45%] w-[360px] h-[280px] rounded-full bg-indigo-500/[0.035] blur-[110px]" />
      </div>
    </>
  )
})

GalaxyBackground.displayName = 'GalaxyBackground'
export default GalaxyBackground
