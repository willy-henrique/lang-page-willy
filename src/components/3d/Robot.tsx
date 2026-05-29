import { useRef, useMemo, memo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { audioStore } from '../../stores/audioStore'

interface RobotProps {
  mousePosition: { x: number; y: number }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const lerp = THREE.MathUtils.lerp

// ─── Dance 0 — FUNK PUMP (Bigodin Finin) ──────────────────────────────────────
// Funk pesado: braços bombeando, joelhos flexionando, cabeça nodando no beat
function danceGravito(
  t: number, B: number, beat: number,
  g: THREE.Group, tr: THREE.Group, h: THREE.Group,
  la: THREE.Group, ra: THREE.Group, ll: THREE.Group, rl: THREE.Group,
) {
  const sp = 7.6
  // Corpo bounce + impulso no beat (simula batida de funk)
  g.position.y  = Math.sin(t * sp) * (0.07 + B * 0.18) + beat * 0.25
  g.rotation.y  = Math.sin(t * 2.8) * (0.06 + B * 0.1)

  // Torso — "pumping chest"
  tr.rotation.z = Math.sin(t * 3.8) * (0.13 + B * 0.22)
  tr.rotation.x = Math.sin(t * sp)  * (0.05 + B * 0.08)
  tr.position.y = 0

  // Cabeça — nod agressivo para frente no beat
  h.rotation.x  = Math.sin(t * sp + 0.4) * (0.18 + B * 0.22) + beat * -0.15
  h.rotation.z  = Math.sin(t * 3.8) * (0.08 + B * 0.11)
  h.rotation.y  = lerp(h.rotation.y, Math.sin(t * 2.2) * (0.1 + B * 0.12), 0.06)

  // Braço esquerdo — "pump it up" alternado
  la.rotation.x = Math.sin(t * sp)           * (0.35 + B * 0.6) - 0.2
  la.rotation.z = Math.cos(t * 5)            * (0.2  + B * 0.35) + 0.1 + beat * 0.35
  la.rotation.y = Math.sin(t * 3.5)          * (0.08 + B * 0.16)

  // Braço direito — espelho com 1/2 beat de atraso
  ra.rotation.x = Math.sin(t * sp + Math.PI * 0.6) * (0.35 + B * 0.6) - 0.2
  ra.rotation.z = -(Math.cos(t * 5 + Math.PI * 0.6) * (0.2 + B * 0.35) + 0.1 + beat * 0.35)
  ra.rotation.y = Math.sin(t * 3.5 + Math.PI)      * (0.08 + B * 0.16)

  // Pernas — alternância rápida "step"
  ll.rotation.x = Math.sin(t * sp)            * (0.12 + B * 0.25)
  ll.position.y = Math.max(0, Math.sin(t * sp)) * (0.04 + B * 0.07)
  rl.rotation.x = Math.sin(t * sp + Math.PI) * (0.12 + B * 0.25)
  rl.position.y = Math.max(0, Math.sin(t * sp + Math.PI)) * (0.04 + B * 0.07)
}

// ─── Dance 1 — WAVE FLOW (Na Relíquia do 2T) ──────────────────────────────────
// Onda progressiva: corpo serpenteia, braço esquerdo leva a onda, direito segue
function danceWave(
  t: number, B: number, beat: number,
  g: THREE.Group, tr: THREE.Group, h: THREE.Group,
  la: THREE.Group, ra: THREE.Group, ll: THREE.Group, rl: THREE.Group,
) {
  // Bounce + balanço lateral suave
  g.position.y  = Math.sin(t * 5.2) * (0.06 + B * 0.15) + beat * 0.18
  g.rotation.y  = Math.sin(t * 1.8) * (0.14 + B * 0.2)

  // Torso — serpenteia (sway + tilt)
  tr.rotation.z = Math.sin(t * 2.2) * (0.24 + B * 0.36)
  tr.rotation.y = Math.sin(t * 1.8) * (0.12 + B * 0.16)
  tr.rotation.x = Math.sin(t * 5.2) * (0.03 + B * 0.04)
  tr.position.y = 0

  // Cabeça — inclina lado a lado como a onda
  h.rotation.z  = Math.sin(t * 2.2) * (0.16 + B * 0.2)
  h.rotation.x  = Math.sin(t * 4)   * (0.08 + B * 0.1)
  h.rotation.y  = lerp(h.rotation.y, Math.sin(t * 1.8) * 0.2, 0.07)

  // Braço esquerdo — inicia a onda, sobe alto
  la.rotation.x = Math.sin(t * 3.8)       * (0.28 + B * 0.5) - 0.15
  la.rotation.z = Math.sin(t * 2.2)       * (0.5  + B * 0.6) + 0.22
  la.rotation.y = Math.cos(t * 1.8)       * (0.2  + B * 0.3)

  // Braço direito — segue com delay de ~0.9s (onda viaja pelo corpo)
  ra.rotation.x = Math.sin(t * 3.8 + 1.1) * (0.28 + B * 0.5) - 0.15
  ra.rotation.z = -(Math.sin(t * 2.2 + 1.1) * (0.5 + B * 0.6) + 0.22)
  ra.rotation.y = Math.cos(t * 1.8 + 1.1) * (0.2  + B * 0.3)

  // Pernas — step mais lento, encaixa na onda
  ll.rotation.x = Math.sin(t * 5.2)            * (0.1 + B * 0.2)
  ll.position.y = Math.sin(t * 5.2)            * (0.02 + B * 0.04)
  rl.rotation.x = Math.sin(t * 5.2 + Math.PI) * (0.1 + B * 0.2)
  rl.position.y = Math.sin(t * 5.2 + Math.PI) * (0.02 + B * 0.04)
}

// ─── Dance 2 — GOIÁS GROOVE (Noite Goiana) ────────────────────────────────────
// Forró goiano: giro de quadril suave, braços convidando, passo de forró 2/4
function danceGroove(
  t: number, B: number, beat: number,
  g: THREE.Group, tr: THREE.Group, h: THREE.Group,
  la: THREE.Group, ra: THREE.Group, ll: THREE.Group, rl: THREE.Group,
) {
  // Movimento mais calmo, circular
  g.position.y  = Math.sin(t * 3.2) * (0.08 + B * 0.13) + beat * 0.12
  g.rotation.y  = Math.sin(t * 1.3) * (0.16 + B * 0.24) // giro lento do corpo

  // Quadril / torso — "rebolado" suave de forró
  tr.rotation.z = Math.sin(t * 3.2) * (0.1  + B * 0.17)
  tr.rotation.y = Math.sin(t * 1.3) * (0.14 + B * 0.2)  // quadril
  tr.rotation.x = Math.sin(t * 3.2) * (0.03 + B * 0.04)
  tr.position.y = 0

  // Cabeça — aceno suave, sorridão goiano
  h.rotation.x  = Math.sin(t * 3.2) * (0.1  + B * 0.12)
  h.rotation.z  = Math.sin(t * 1.3) * (0.06 + B * 0.09)
  h.rotation.y  = lerp(h.rotation.y, Math.sin(t * 1.3) * (0.15 + B * 0.18), 0.05)

  // Braço esquerdo — aberto convidando para dançar, arco largo
  la.rotation.x = Math.sin(t * 2.2)       * (0.2  + B * 0.42) - 0.1
  la.rotation.z = Math.sin(t * 1.6)       * (0.42 + B * 0.55) + 0.32 // bem aberto
  la.rotation.y = Math.sin(t * 1.3)       * (0.26 + B * 0.38) // arco circular

  // Braço direito — espelho com pequena defasagem
  ra.rotation.x = Math.sin(t * 2.2 + 0.6) * (0.2  + B * 0.42) - 0.1
  ra.rotation.z = -(Math.sin(t * 1.6 + 0.6) * (0.42 + B * 0.55) + 0.32)
  ra.rotation.y = Math.sin(t * 1.3 + 0.6) * (0.26 + B * 0.38)

  // Pernas — passo básico de forró 1-2 (levanta pé alternado)
  ll.rotation.x = Math.sin(t * 3.2)            * (0.15 + B * 0.24)
  ll.position.y = Math.max(0, Math.sin(t * 3.2)) * (0.04 + B * 0.07)
  rl.rotation.x = Math.sin(t * 3.2 + Math.PI) * (0.15 + B * 0.24)
  rl.position.y = Math.max(0, Math.sin(t * 3.2 + Math.PI)) * (0.04 + B * 0.07)
}

// ─── Component ───────────────────────────────────────────────────────────────
const Robot = memo(({ mousePosition }: RobotProps) => {
  const groupRef    = useRef<THREE.Group>(null!)
  const headRef     = useRef<THREE.Group>(null!)
  const torsoRef    = useRef<THREE.Group>(null!)
  const leftArmRef  = useRef<THREE.Group>(null!)
  const rightArmRef = useRef<THREE.Group>(null!)
  const leftLegRef  = useRef<THREE.Group>(null!)
  const rightLegRef = useRef<THREE.Group>(null!)

  const mat = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({ color: '#dde4ec', metalness: 0.45, roughness: 0.18 }),
    visor: new THREE.MeshStandardMaterial({ color: '#08080f', metalness: 0.98, roughness: 0.04 }),
    joint: new THREE.MeshStandardMaterial({ color: '#7a8490', metalness: 0.92, roughness: 0.22 }),
    dark: new THREE.MeshStandardMaterial({ color: '#1c1f2e', metalness: 0.75, roughness: 0.35 }),
    glow: new THREE.MeshStandardMaterial({
      color: '#3b82f6', emissive: new THREE.Color('#3b82f6'),
      emissiveIntensity: 2.2, metalness: 0, roughness: 0.1,
    }),
    hand: new THREE.MeshStandardMaterial({ color: '#141820', metalness: 0.97, roughness: 0.08 }),
  }), [])

  useFrame((state) => {
    const t    = state.clock.elapsedTime
    const g    = groupRef.current
    const h    = headRef.current
    const tr   = torsoRef.current
    const la   = leftArmRef.current
    const ra   = rightArmRef.current
    const ll   = leftLegRef.current
    const rl   = rightLegRef.current

    if (!g || !h || !tr || !la || !ra || !ll || !rl) return

    if (audioStore.isPlaying) {
      // ── DANCE MODE ────────────────────────────────────────────────────
      const B    = audioStore.bass
      const beat = audioStore.beat

      // Olhos pulsam no beat
      mat.glow.emissiveIntensity = 2.2 + beat * 6 + B * 3.5

      // Escolhe dança baseada na faixa atual
      switch (audioStore.trackIdx) {
        case 0: danceGravito(t, B, beat, g, tr, h, la, ra, ll, rl); break
        case 1: danceWave(t, B, beat, g, tr, h, la, ra, ll, rl);    break
        default: danceGroove(t, B, beat, g, tr, h, la, ra, ll, rl);  break
      }

    } else {
      // ── IDLE MODE ────────────────────────────────────────────────────
      mat.glow.emissiveIntensity = 2.2

      h.rotation.y  = lerp(h.rotation.y, mousePosition.x * 0.65, 0.08)
      h.rotation.x  = lerp(h.rotation.x, -mousePosition.y * 0.38, 0.08)
      h.rotation.z  = lerp(h.rotation.z, 0, 0.05)

      tr.rotation.y = lerp(tr.rotation.y, mousePosition.x * 0.14, 0.05)
      tr.rotation.x = lerp(tr.rotation.x, -mousePosition.y * 0.07, 0.05)
      tr.rotation.z = lerp(tr.rotation.z, 0, 0.05)
      tr.position.y = Math.sin(t * 2.4) * 0.014

      g.position.y  = Math.sin(t * 1.3) * 0.09
      g.rotation.y  = lerp(g.rotation.y, 0, 0.03)

      la.rotation.x = lerp(la.rotation.x, Math.sin(t * 1.6) * 0.14 - 0.28, 0.05)
      la.rotation.z = lerp(la.rotation.z, Math.sin(t * 2.1) * 0.045 + 0.18, 0.05)
      la.rotation.y = lerp(la.rotation.y, 0, 0.05)

      ra.rotation.x = lerp(ra.rotation.x, Math.sin(t * 1.6 + Math.PI) * 0.14 - 0.28, 0.05)
      ra.rotation.z = lerp(ra.rotation.z, -(Math.sin(t * 2.1 + Math.PI) * 0.045 + 0.18), 0.05)
      ra.rotation.y = lerp(ra.rotation.y, 0, 0.05)

      ll.rotation.x = lerp(ll.rotation.x, 0, 0.05)
      ll.position.y = lerp(ll.position.y, 0, 0.05)
      rl.rotation.x = lerp(rl.rotation.x, 0, 0.05)
      rl.position.y = lerp(rl.position.y, 0, 0.05)
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.4, 0]}>
      <group ref={torsoRef}>

        {/* ── TORSO ── */}
        <mesh material={mat.body} castShadow><boxGeometry args={[0.96, 1.15, 0.6]} /></mesh>
        <mesh position={[0, 0.08, 0.31]} material={mat.dark}><boxGeometry args={[0.46, 0.58, 0.025]} /></mesh>
        <mesh position={[0, 0.32, 0.325]} material={mat.glow}><boxGeometry args={[0.28, 0.038, 0.02]} /></mesh>
        <mesh position={[-0.58, 0.38, 0]} material={mat.body}><boxGeometry args={[0.2, 0.22, 0.55]} /></mesh>
        <mesh position={[ 0.58, 0.38, 0]} material={mat.body}><boxGeometry args={[0.2, 0.22, 0.55]} /></mesh>
        <mesh position={[0, -0.75, 0]} material={mat.body}><boxGeometry args={[0.82, 0.28, 0.52]} /></mesh>
        <mesh position={[0, -0.6,  0]} material={mat.joint}><sphereGeometry args={[0.21, 16, 16]} /></mesh>
        <mesh position={[0,  0.68, 0]} material={mat.joint}><cylinderGeometry args={[0.11, 0.14, 0.2, 16]} /></mesh>

        {/* ── HEAD ── */}
        <group ref={headRef} position={[0, 1.12, 0]}>
          <mesh material={mat.body} castShadow><boxGeometry args={[0.7, 0.62, 0.68]} /></mesh>
          <mesh position={[0, 0.38, 0]} material={mat.body}><sphereGeometry args={[0.35, 20, 20]} /></mesh>
          <mesh position={[-0.32, 0.06, 0.1]} material={mat.body}><boxGeometry args={[0.1, 0.42, 0.46]} /></mesh>
          <mesh position={[ 0.32, 0.06, 0.1]} material={mat.body}><boxGeometry args={[0.1, 0.42, 0.46]} /></mesh>
          <mesh position={[0, 0.07, 0.34]} material={mat.visor}><boxGeometry args={[0.6, 0.2, 0.07]} /></mesh>
          <mesh position={[0, -0.05, 0.34]} material={mat.dark}><boxGeometry args={[0.58, 0.04, 0.06]} /></mesh>
          <mesh position={[-0.13, 0.08, 0.375]} material={mat.glow}><sphereGeometry args={[0.045, 8, 8]} /></mesh>
          <mesh position={[ 0.13, 0.08, 0.375]} material={mat.glow}><sphereGeometry args={[0.045, 8, 8]} /></mesh>
          <pointLight position={[-0.13, 0.08, 0.5]} color="#3b82f6" intensity={1.0} distance={1.8} />
          <pointLight position={[ 0.13, 0.08, 0.5]} color="#3b82f6" intensity={1.0} distance={1.8} />
        </group>

        {/* ── LEFT ARM ── */}
        <group ref={leftArmRef} position={[-0.66, 0.32, 0]}>
          <mesh material={mat.joint}><sphereGeometry args={[0.19, 16, 16]} /></mesh>
          <mesh position={[0, -0.35, 0]} material={mat.body}><cylinderGeometry args={[0.12, 0.1, 0.56, 16]} /></mesh>
          <mesh position={[0, -0.67, 0]} material={mat.joint}><sphereGeometry args={[0.13, 12, 12]} /></mesh>
          <mesh position={[0, -1.02, 0]} material={mat.body}><cylinderGeometry args={[0.095, 0.085, 0.58, 16]} /></mesh>
          <mesh position={[0, -1.33, 0]} material={mat.joint}><sphereGeometry args={[0.1, 12, 12]} /></mesh>
          <mesh position={[0, -1.55, 0]} material={mat.hand}><sphereGeometry args={[0.155, 12, 12]} /></mesh>
        </group>

        {/* ── RIGHT ARM ── */}
        <group ref={rightArmRef} position={[0.66, 0.32, 0]}>
          <mesh material={mat.joint}><sphereGeometry args={[0.19, 16, 16]} /></mesh>
          <mesh position={[0, -0.35, 0]} material={mat.body}><cylinderGeometry args={[0.12, 0.1, 0.56, 16]} /></mesh>
          <mesh position={[0, -0.67, 0]} material={mat.joint}><sphereGeometry args={[0.13, 12, 12]} /></mesh>
          <mesh position={[0, -1.02, 0]} material={mat.body}><cylinderGeometry args={[0.095, 0.085, 0.58, 16]} /></mesh>
          <mesh position={[0, -1.33, 0]} material={mat.joint}><sphereGeometry args={[0.1, 12, 12]} /></mesh>
          <mesh position={[0, -1.55, 0]} material={mat.hand}><sphereGeometry args={[0.155, 12, 12]} /></mesh>
        </group>

        {/* ── LEFT LEG ── */}
        <group ref={leftLegRef} position={[-0.25, -1.02, 0]}>
          <mesh material={mat.joint}><sphereGeometry args={[0.17, 12, 12]} /></mesh>
          <mesh position={[0, -0.48, 0]} material={mat.body}><cylinderGeometry args={[0.155, 0.125, 0.78, 16]} /></mesh>
          <mesh position={[0, -0.92, 0]} material={mat.joint}><sphereGeometry args={[0.155, 12, 12]} /></mesh>
          <mesh position={[0, -1.4,  0]} material={mat.body}><cylinderGeometry args={[0.105, 0.125, 0.85, 16]} /></mesh>
          <mesh position={[0, -1.86, 0]} material={mat.joint}><sphereGeometry args={[0.125, 12, 12]} /></mesh>
          <mesh position={[0.02, -2.1, 0.09]} material={mat.body}><boxGeometry args={[0.27, 0.13, 0.5]} /></mesh>
          <mesh position={[0.02, -2.17, 0.09]} material={mat.dark}><boxGeometry args={[0.24, 0.03, 0.46]} /></mesh>
        </group>

        {/* ── RIGHT LEG ── */}
        <group ref={rightLegRef} position={[0.25, -1.02, 0]}>
          <mesh material={mat.joint}><sphereGeometry args={[0.17, 12, 12]} /></mesh>
          <mesh position={[0, -0.48, 0]} material={mat.body}><cylinderGeometry args={[0.155, 0.125, 0.78, 16]} /></mesh>
          <mesh position={[0, -0.92, 0]} material={mat.joint}><sphereGeometry args={[0.155, 12, 12]} /></mesh>
          <mesh position={[0, -1.4,  0]} material={mat.body}><cylinderGeometry args={[0.105, 0.125, 0.85, 16]} /></mesh>
          <mesh position={[0, -1.86, 0]} material={mat.joint}><sphereGeometry args={[0.125, 12, 12]} /></mesh>
          <mesh position={[0.02, -2.1, 0.09]} material={mat.body}><boxGeometry args={[0.27, 0.13, 0.5]} /></mesh>
          <mesh position={[0.02, -2.17, 0.09]} material={mat.dark}><boxGeometry args={[0.24, 0.03, 0.46]} /></mesh>
        </group>

      </group>
    </group>
  )
})

Robot.displayName = 'Robot'
export default Robot
