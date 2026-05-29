import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Robot({ scale = 1, position = [0, 0, 0] as [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const antennaRef = useRef<THREE.Group>(null);
  const chestLightRef = useRef<THREE.Mesh>(null);

  // Materials
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a2e',
    metalness: 0.9,
    roughness: 0.15,
    envMapIntensity: 1.5,
  }), []);

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#3b82f6',
    metalness: 0.8,
    roughness: 0.2,
    emissive: '#3b82f6',
    emissiveIntensity: 0.3,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#60a5fa',
    emissive: '#3b82f6',
    emissiveIntensity: 2,
    metalness: 0.5,
    roughness: 0.1,
  }), []);

  const eyeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    emissive: '#60a5fa',
    emissiveIntensity: 3,
    metalness: 0,
    roughness: 0,
  }), []);

  const purpleAccent = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#8b5cf6',
    metalness: 0.8,
    roughness: 0.2,
    emissive: '#8b5cf6',
    emissiveIntensity: 0.4,
  }), []);

  const darkMetal = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0f0f23',
    metalness: 0.95,
    roughness: 0.1,
  }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rastreamento suave do mouse usando lerp sênior
    // state.pointer.x/y variam de -1 a 1 representando a tela
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Alvos de rotação para a cabeça (limitar para manter naturalidade física do robô)
    const targetHeadRotY = mouseX * 0.6; // ~35 graus de alcance horizontal
    const targetHeadRotX = -mouseY * 0.4; // ~23 graus de alcance vertical

    // Alvos para o torso (inclinação sutil do corpo para mais presença)
    const targetTorsoRotY = mouseX * 0.12;
    const targetTorsoRotX = -mouseY * 0.06;

    if (groupRef.current) {
      // Flutuação vertical suave
      const floatY = position[1] + Math.sin(t * 0.8) * 0.15;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, floatY, 0.08);

      // Rotação Y do corpo: combina o mouse com uma leve oscilação natural
      const floatRotY = Math.sin(t * 0.3) * 0.05;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetTorsoRotY + floatRotY,
        0.08
      );

      // Rotação X do corpo (inclinação baseada no mouse + micro-oscilação)
      const floatRotX = Math.sin(t * 0.4) * 0.02;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetTorsoRotX + floatRotX,
        0.08
      );
    }

    if (headRef.current) {
      // Movimento da cabeça: mouse tracking + ruído orgânico sutil de respiração
      const headNoiseY = Math.sin(t * 0.5) * 0.03;
      const headNoiseX = Math.cos(t * 0.7) * 0.02;

      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetHeadRotY + headNoiseY,
        0.1 // Ligeiramente mais rápido que o torso para simular o olhar
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetHeadRotX + headNoiseX,
        0.1
      );
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 0.6) * 0.3;
      leftArmRef.current.rotation.z = 0.2 + Math.sin(t * 0.4) * 0.1;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 0.6 + Math.PI) * 0.3;
      rightArmRef.current.rotation.z = -0.2 - Math.sin(t * 0.4) * 0.1;
    }

    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 2) * 0.15;
    }

    // Eye pulsing
    if (leftEyeRef.current && rightEyeRef.current) {
      const pulse = 1 + Math.sin(t * 3) * 0.3;
      (leftEyeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse * 3;
      (rightEyeRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse * 3;
    }

    // Chest light pulsing
    if (chestLightRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.5;
      (chestLightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse * 2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* === TORSO === */}
      <group>
        {/* Main torso body */}
        <mesh material={bodyMaterial} castShadow>
          <boxGeometry args={[1.2, 1.4, 0.8]} />
        </mesh>

        {/* Torso front panel */}
        <mesh position={[0, 0, 0.41]} material={darkMetal}>
          <boxGeometry args={[1.0, 1.2, 0.02]} />
        </mesh>

        {/* Chest light / arc reactor */}
        <mesh ref={chestLightRef} position={[0, 0.15, 0.43]} material={glowMaterial}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.15, 0.03, 16, 32]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1} />
          </mesh>
        </mesh>

        {/* Chest detail lines */}
        {[-0.2, -0.35, -0.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0.42]} material={accentMaterial}>
            <boxGeometry args={[0.8, 0.02, 0.01]} />
          </mesh>
        ))}

        {/* Side panels */}
        <mesh position={[0.61, 0, 0]} material={accentMaterial}>
          <boxGeometry args={[0.02, 1.2, 0.6]} />
        </mesh>
        <mesh position={[-0.61, 0, 0]} material={accentMaterial}>
          <boxGeometry args={[0.02, 1.2, 0.6]} />
        </mesh>
      </group>

      {/* === HEAD === */}
      <group ref={headRef} position={[0, 1.15, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.3, 0]} material={darkMetal}>
          <cylinderGeometry args={[0.15, 0.2, 0.2, 16]} />
        </mesh>

        {/* Main head */}
        <mesh material={bodyMaterial} castShadow>
          <boxGeometry args={[0.9, 0.8, 0.7]} />
        </mesh>

        {/* Head top panel */}
        <mesh position={[0, 0.41, 0]} material={darkMetal}>
          <boxGeometry args={[0.7, 0.02, 0.5]} />
        </mesh>

        {/* Visor / face plate */}
        <mesh position={[0, 0.05, 0.36]}>
          <boxGeometry args={[0.75, 0.35, 0.02]} />
          <meshStandardMaterial
            color="#0a0a1a"
            metalness={0.9}
            roughness={0.05}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Eyes */}
        <mesh ref={leftEyeRef} position={[-0.18, 0.05, 0.38]} material={eyeMaterial.clone()}>
          <boxGeometry args={[0.18, 0.08, 0.02]} />
        </mesh>
        <mesh ref={rightEyeRef} position={[0.18, 0.05, 0.38]} material={eyeMaterial.clone()}>
          <boxGeometry args={[0.18, 0.08, 0.02]} />
        </mesh>

        {/* Mouth / speaker grille */}
        {[-0.15, -0.08, -0.01, 0.06, 0.13].map((x, i) => (
          <mesh key={i} position={[x, -0.15, 0.37]} material={accentMaterial}>
            <boxGeometry args={[0.04, 0.06, 0.01]} />
          </mesh>
        ))}

        {/* Ear panels */}
        <mesh position={[0.46, 0, 0]} material={purpleAccent}>
          <boxGeometry args={[0.04, 0.4, 0.3]} />
        </mesh>
        <mesh position={[-0.46, 0, 0]} material={purpleAccent}>
          <boxGeometry args={[0.04, 0.4, 0.3]} />
        </mesh>

        {/* Antenna */}
        <group ref={antennaRef} position={[0, 0.5, 0]}>
          <mesh material={darkMetal}>
            <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
          </mesh>
          <mesh position={[0, 0.2, 0]} material={glowMaterial}>
            <sphereGeometry args={[0.06, 16, 16]} />
          </mesh>
          {/* Antenna glow */}
          <pointLight position={[0, 0.2, 0]} color="#3b82f6" intensity={2} distance={2} />
        </group>
      </group>

      {/* === LEFT ARM === */}
      <group ref={leftArmRef} position={[-0.85, 0.3, 0]}>
        {/* Shoulder joint */}
        <mesh material={purpleAccent}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>

        {/* Upper arm */}
        <mesh position={[0, -0.35, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.3, 0.5, 0.3]} />
        </mesh>

        {/* Elbow joint */}
        <mesh position={[0, -0.65, 0]} material={accentMaterial}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>

        {/* Forearm */}
        <mesh position={[0, -0.95, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.25, 0.4, 0.25]} />
        </mesh>

        {/* Hand */}
        <mesh position={[0, -1.2, 0]} material={darkMetal}>
          <boxGeometry args={[0.2, 0.15, 0.2]} />
        </mesh>

        {/* Finger details */}
        {[-0.06, 0, 0.06].map((x, i) => (
          <mesh key={i} position={[x, -1.35, 0]} material={accentMaterial}>
            <boxGeometry args={[0.04, 0.12, 0.04]} />
          </mesh>
        ))}
      </group>

      {/* === RIGHT ARM === */}
      <group ref={rightArmRef} position={[0.85, 0.3, 0]}>
        {/* Shoulder joint */}
        <mesh material={purpleAccent}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>

        {/* Upper arm */}
        <mesh position={[0, -0.35, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.3, 0.5, 0.3]} />
        </mesh>

        {/* Elbow joint */}
        <mesh position={[0, -0.65, 0]} material={accentMaterial}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>

        {/* Forearm */}
        <mesh position={[0, -0.95, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.25, 0.4, 0.25]} />
        </mesh>

        {/* Hand */}
        <mesh position={[0, -1.2, 0]} material={darkMetal}>
          <boxGeometry args={[0.2, 0.15, 0.2]} />
        </mesh>

        {/* Finger details */}
        {[-0.06, 0, 0.06].map((x, i) => (
          <mesh key={i} position={[x, -1.35, 0]} material={accentMaterial}>
            <boxGeometry args={[0.04, 0.12, 0.04]} />
          </mesh>
        ))}
      </group>

      {/* === LOWER BODY / WAIST === */}
      <group position={[0, -0.9, 0]}>
        {/* Waist */}
        <mesh material={darkMetal}>
          <boxGeometry args={[0.9, 0.3, 0.6]} />
        </mesh>

        {/* Waist accent */}
        <mesh position={[0, 0, 0.31]} material={purpleAccent}>
          <boxGeometry args={[0.7, 0.1, 0.02]} />
        </mesh>
      </group>

      {/* === LEFT LEG === */}
      <group position={[-0.3, -1.3, 0]}>
        {/* Hip joint */}
        <mesh material={accentMaterial}>
          <sphereGeometry args={[0.15, 16, 16]} />
        </mesh>

        {/* Upper leg */}
        <mesh position={[0, -0.35, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.3, 0.5, 0.3]} />
        </mesh>

        {/* Knee joint */}
        <mesh position={[0, -0.65, 0]} material={purpleAccent}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>

        {/* Lower leg */}
        <mesh position={[0, -0.95, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.28, 0.45, 0.28]} />
        </mesh>

        {/* Foot */}
        <mesh position={[0, -1.25, 0.08]} material={darkMetal}>
          <boxGeometry args={[0.3, 0.12, 0.4]} />
        </mesh>

        {/* Foot light */}
        <mesh position={[0, -1.2, 0.28]} material={glowMaterial}>
          <boxGeometry args={[0.2, 0.04, 0.02]} />
        </mesh>
      </group>

      {/* === RIGHT LEG === */}
      <group position={[0.3, -1.3, 0]}>
        {/* Hip joint */}
        <mesh material={accentMaterial}>
          <sphereGeometry args={[0.15, 16, 16]} />
        </mesh>

        {/* Upper leg */}
        <mesh position={[0, -0.35, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.3, 0.5, 0.3]} />
        </mesh>

        {/* Knee joint */}
        <mesh position={[0, -0.65, 0]} material={purpleAccent}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>

        {/* Lower leg */}
        <mesh position={[0, -0.95, 0]} material={bodyMaterial} castShadow>
          <boxGeometry args={[0.28, 0.45, 0.28]} />
        </mesh>

        {/* Foot */}
        <mesh position={[0, -1.25, 0.08]} material={darkMetal}>
          <boxGeometry args={[0.3, 0.12, 0.4]} />
        </mesh>

        {/* Foot light */}
        <mesh position={[0, -1.2, 0.28]} material={glowMaterial}>
          <boxGeometry args={[0.2, 0.04, 0.02]} />
        </mesh>
      </group>

      {/* === JETPACK / BACK DETAIL === */}
      <group position={[0, 0, -0.5]}>
        <mesh material={darkMetal}>
          <boxGeometry args={[0.8, 1.0, 0.3]} />
        </mesh>
        {/* Thrusters */}
        <mesh position={[-0.2, -0.4, -0.1]} material={purpleAccent}>
          <cylinderGeometry args={[0.1, 0.12, 0.2, 16]} />
        </mesh>
        <mesh position={[0.2, -0.4, -0.1]} material={purpleAccent}>
          <cylinderGeometry args={[0.1, 0.12, 0.2, 16]} />
        </mesh>
        {/* Thruster glow */}
        <pointLight position={[-0.2, -0.5, -0.1]} color="#8b5cf6" intensity={1} distance={1.5} />
        <pointLight position={[0.2, -0.5, -0.1]} color="#8b5cf6" intensity={1} distance={1.5} />
      </group>

      {/* === OVERALL LIGHTING FOR ROBOT === */}
      <pointLight position={[0, 0.15, 1]} color="#3b82f6" intensity={1} distance={3} />
    </group>
  );
}
