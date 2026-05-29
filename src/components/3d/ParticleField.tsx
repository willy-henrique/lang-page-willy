import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  size?: number;
  color?: string;
  spread?: number;
  speed?: number;
}

export default function ParticleField({
  count = 2000,
  size = 0.015,
  color = '#3b82f6',
  spread = 30,
  speed = 0.3,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    const baseColor = new THREE.Color(color);
    const purpleColor = new THREE.Color('#8b5cf6');
    const whiteColor = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * spread;
      positions[i3 + 1] = (Math.random() - 0.5) * spread;
      positions[i3 + 2] = (Math.random() - 0.5) * spread;

      // Color variety
      const rand = Math.random();
      let c: THREE.Color;
      if (rand < 0.5) c = baseColor;
      else if (rand < 0.8) c = purpleColor;
      else c = whiteColor;

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      sizes[i] = Math.random() * size + size * 0.5;
      speeds[i] = Math.random() * speed + speed * 0.2;
    }

    return { positions, colors, sizes, speeds };
  }, [count, size, color, spread, speed]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(t * particles.speeds[i] + i) * 0.002;
      positions[i3] += Math.cos(t * particles.speeds[i] * 0.5 + i) * 0.001;

      // Reset particles that drift too far
      if (Math.abs(positions[i3 + 1]) > spread / 2) {
        positions[i3 + 1] = -spread / 2;
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
