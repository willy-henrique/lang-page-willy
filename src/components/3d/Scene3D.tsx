import { Canvas } from '@react-three/fiber';
import { Environment, Float, AdaptiveDpr } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import Robot from './Robot';
import ParticleField from './ParticleField';
import FloatingGeometries from './FloatingGeometries';

interface SceneProps {
  showRobot?: boolean;
  robotScale?: number;
  robotPosition?: [number, number, number];
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

export default function Scene3D({
  showRobot = true,
  robotScale = 1,
  robotPosition = [0, 0, 0],
  className = '',
  particleCount = 1500,
}: SceneProps) {
  // Ajuste sênior de responsividade para dispositivos móveis
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isLarge: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isLarge: width >= 1024,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Escala dinâmica calculada para se ajustar de forma ideal
  const responsiveScale = screenSize.isMobile
    ? robotScale * 0.65 // Reduz o tamanho no celular
    : screenSize.isTablet
    ? robotScale * 0.85
    : robotScale;

  // Posição dinâmica para centralizar no mobile e ficar ao lado no desktop
  const responsivePosition: [number, number, number] = screenSize.isMobile
    ? [0, -0.6, 0] // Centralizado no mobile
    : screenSize.isTablet
    ? [1.5, -0.5, 0] // Deslocado de forma moderada no tablet
    : robotPosition; // Original no desktop grande

  // Otimização sênior: reduzir contagem de partículas em telas menores
  const responsiveParticleCount = screenSize.isMobile
    ? Math.min(particleCount, 500)
    : screenSize.isTablet
    ? Math.min(particleCount, 1000)
    : particleCount;

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, screenSize.isMobile ? 1.2 : 1.5]} // Limita DPR no mobile para performance fluida 60 FPS
        gl={{
          antialias: !screenSize.isMobile, // Desativa antialias no celular para máxima fluidez
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated /> {/* Rebaixa DPR dinamicamente durante movimentação se necessário */}

          {/* Lighting */}
          <ambientLight intensity={0.15} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
          <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#8b5cf6" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#3b82f6" />

          {/* Environment for reflections */}
          <Environment preset="night" />

          {/* Particles */}
          <ParticleField count={responsiveParticleCount} />

          {/* Floating geometric shapes (apenas em telas maiores para evitar clutter no mobile) */}
          {!screenSize.isMobile && <FloatingGeometries />}

          {/* Robot */}
          {showRobot && (
            <Float speed={screenSize.isMobile ? 1.0 : 1.5} rotationIntensity={0.1} floatIntensity={0.3}>
              <Robot scale={responsiveScale} position={responsivePosition} />
            </Float>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
