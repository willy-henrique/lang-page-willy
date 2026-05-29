import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ count = 1200 }) => {
  const meshRef = useRef<THREE.Points>(null);

  const { geometry, positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count * 3);

    const cyan = new THREE.Color('#06b6d4');
    const purple = new THREE.Color('#8b5cf6');
    const white = new THREE.Color('#ffffff');
    const palette = [cyan, purple, white];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread across 25x25x15 space
      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      // Assign color from palette
      const color = palette[i % 3];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Slow drift speeds per axis (unique per particle)
      speeds[i3] = (Math.random() - 0.5) * 0.15;
      speeds[i3 + 1] = (Math.random() - 0.5) * 0.15;
      speeds[i3 + 2] = (Math.random() - 0.5) * 0.08;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return { geometry, positions, speeds };
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Smooth sinusoidal drift using per-particle speed offsets
      posArray[i3] = positions[i3] + Math.sin(t * speeds[i3] + i) * 1.5;
      posArray[i3 + 1] = positions[i3 + 1] + Math.cos(t * speeds[i3 + 1] + i * 0.5) * 1.5;
      posArray[i3 + 2] = positions[i3 + 2] + Math.sin(t * speeds[i3 + 2] + i * 0.3) * 0.8;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

export default React.memo(ParticleField);
