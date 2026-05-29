import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null);

  const geometries = useMemo(() => {
    const items = [];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const type = Math.floor(Math.random() * 4); // 0=box, 1=oct, 2=torus, 3=ico
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5,
      ];
      const scale = Math.random() * 0.3 + 0.1;
      const speed = Math.random() * 0.5 + 0.2;
      const rotSpeed = Math.random() * 0.5 + 0.1;
      const color = Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6';

      items.push({ type, position, scale, speed, rotSpeed, color, id: i });
    }

    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, i) => {
      const geo = geometries[i];
      if (!geo) return;
      child.position.y = geo.position[1] + Math.sin(t * geo.speed + i) * 0.5;
      child.rotation.x = t * geo.rotSpeed;
      child.rotation.z = t * geo.rotSpeed * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo) => (
        <mesh key={geo.id} position={geo.position} scale={geo.scale}>
          {geo.type === 0 && <boxGeometry args={[1, 1, 1]} />}
          {geo.type === 1 && <octahedronGeometry args={[1]} />}
          {geo.type === 2 && <torusGeometry args={[1, 0.3, 16, 32]} />}
          {geo.type === 3 && <icosahedronGeometry args={[1]} />}
          <meshStandardMaterial
            color={geo.color}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}
