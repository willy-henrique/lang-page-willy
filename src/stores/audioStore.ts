/**
 * Mutable singleton — read directly in useFrame (no React re-renders).
 * Updated by MusicPlayer at ~60fps via requestAnimationFrame.
 */
export const audioStore = {
  isPlaying: false,
  bass:     0,   // 0-1  low-frequency energy
  mid:      0,   // 0-1  mid-frequency energy
  treble:   0,   // 0-1  high-frequency energy
  energy:   0,   // 0-1  overall loudness
  beat:     0,   // 0-1  impulse on beat (decays to 0 between beats)
  trackIdx: 0,   // 0-2  which track is playing (determines dance style)
}
