import { lazy, Suspense, useRef, useCallback, useMemo, memo, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const Robot = lazy(() => import('./Robot'))
const ParticleField = lazy(() => import('./ParticleField'))

interface Scene3DProps {
  mousePosition: { x: number; y: number }
}

const Scene3D = memo(({ mousePosition }: Scene3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cameraConfig = useMemo(() => ({
    position: [0, 0, 8] as [number, number, number],
    fov: isMobile ? 52 : 48,
  }), [isMobile])

  const robotScale = isMobile ? 0.62 : 1.32
  const robotPosition: [number, number, number] = isMobile
    ? [0, -0.5, 0]
    : [3.0, -0.5, 0]

  const dpr = isMobile ? [1, 1.5] as [number, number] : [1, 2] as [number, number]

  const handleCreated = useCallback((state: any) => {
    state.gl.setClearColor('#0b0f19', 0)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'pan-y' }}
    >
      <Canvas
        camera={cameraConfig}
        dpr={dpr}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        onCreated={handleCreated}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Lighting — tuned for white robot on dark background */}
          <ambientLight intensity={0.22} />
          <directionalLight position={[4, 8, 5]} intensity={1.1} color="#e8eef5" castShadow />
          <directionalLight position={[-4, 4, 3]} intensity={0.55} color="#c7d8f0" />
          <directionalLight position={[0, -3, 4]} intensity={0.18} color="#3b82f6" />
          <pointLight position={[0, 3, 5]} intensity={0.6} color="#06b6d4" distance={12} />
          <pointLight position={[-5, 2, 2]} intensity={0.3} color="#8b5cf6" distance={10} />

          <Environment preset="city" />

          {/* Robot */}
          <group position={robotPosition} scale={[robotScale, robotScale, robotScale]}>
            <Robot mousePosition={mousePosition} />
          </group>

          {/* Particles */}
          <ParticleField count={isMobile ? 600 : 1200} />
        </Suspense>
      </Canvas>
    </div>
  )
})

Scene3D.displayName = 'Scene3D'

export default Scene3D
