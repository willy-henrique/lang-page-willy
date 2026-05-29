import { useRef, useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Music2, Play, Pause, SkipBack, SkipForward,
  Heart, Repeat, Shuffle, ChevronUp, ChevronDown,
  Volume2, VolumeX,
} from 'lucide-react'
import { audioStore } from '../stores/audioStore'

// ─── Tracks ──────────────────────────────────────────────────────────────────
const TRACKS = [
  {
    title:  'Noite Goiana',
    artist: 'Vinicius Cavalcante',
    file:   'Noite Goiana - Vinicius cavalcante (youtube).mp3',
    bpm:    100,
  },
  {
    title:  'Bigodin Finin',
    artist: 'DJ Tubas, MC Bruna Alves e MC Pânico',
    file:   'BIGODIN FININ - DJ TUBAS, MC BRUNA ALVES e MC PÂNICO ( Official Lyric Vídeo ) - DJ Tubas (youtube).mp3',
    bpm:    140,
  },
  {
    title:  'Na Relíquia do 2T',
    artist: 'MC Vine 7, MC Tuto e MC FR da Norte',
    file:   'NA RELÍQUIA DO 2T - MC Vine 7, MC Tuto, MC FR da Norte, MC Joãozinho VT, MC Dkzin (DJ Gu) - Sonar Produtora (youtube).mp3',
    bpm:    130,
  },
]

const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

// ─── Component ───────────────────────────────────────────────────────────────
const MusicPlayer = memo(() => {
  const [trackIdx, setTrackIdx] = useState(0)
  const [playing,  setPlaying]  = useState(false)
  const [expanded, setExpanded] = useState(false) // <--- Começa contraído (formato pílula)
  const [liked,    setLiked]    = useState(false)
  const [shuffle,  setShuffle]  = useState(false)
  const [repeat,   setRepeat]   = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume,   setVolume]   = useState(0.85)
  const [muted,    setMuted]    = useState(false)

  // Native audio element — zero Web Audio API
  const audioRef   = useRef<HTMLAudioElement | null>(null)

  // Imperative UI refs (updated at 60 fps — no setState overhead)
  const vizRef      = useRef<HTMLCanvasElement>(null)
  const noteRef     = useRef<HTMLDivElement>(null)
  const fillRef     = useRef<HTMLDivElement>(null)
  const thumbRef    = useRef<HTMLDivElement>(null)
  const timeRef     = useRef<HTMLSpanElement>(null)
  const rafRef      = useRef<number>(0)

  // ── Create audio element once ─────────────────────────────────────────────
  useEffect(() => {
    const audio   = new Audio()
    audio.volume  = 0.85
    audio.preload = 'metadata'
    audioRef.current = audio

    const onEnded = () => {
      if (audio._repeat) {
        audio.currentTime = 0
        audio.play().catch(() => {})
      } else {
        setTrackIdx(i => (i + 1) % TRACKS.length)
      }
    }
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.pause()
      audio.removeEventListener('ended', onEnded)
      audioRef.current = null
    }
  }, [])

  // ── Load track whenever index changes ────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audioStore.trackIdx = trackIdx
    // Browser codifica automaticamente — mais confiável que encodeURIComponent
    const url = encodeURI(`/music/${TRACKS[trackIdx].file}`)
    audio.src = url
    audio.load()
    setDuration(0)
    if (fillRef.current)  fillRef.current.style.width = '0%'
    if (thumbRef.current) thumbRef.current.style.left  = '0%'
    if (timeRef.current)  timeRef.current.textContent  = '0:00'

    const onMeta  = () => setDuration(audio.duration || 0)
    const onError = () => console.warn('Audio load error:', audio.error?.message, url)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('error', onError)

    // Se já estava tocando, auto-inicia a próxima faixa
    if (playing) audio.play().catch(() => {})

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('error', onError)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIdx])

  // Sincroniza repeat no elemento
  useEffect(() => {
    if (audioRef.current) (audioRef.current as any)._repeat = repeat
  }, [repeat])

  // Sincroniza volume/mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume
    }
  }, [volume, muted])

  // ── BPM beat simulation + visualizer RAF ─────────────────────────────────
  useEffect(() => {
    if (!playing) {
      audioStore.isPlaying = false
      audioStore.beat      = 0
      audioStore.bass      = 0
      audioStore.energy    = 0
      cancelAnimationFrame(rafRef.current)
      return
    }

    audioStore.isPlaying = true
    const bpm          = TRACKS[trackIdx].bpm
    const beatInterval = 60 / bpm          // segundos entre beats
    let   lastBeat     = 0

    const loop = (now: number) => {
      const t = now / 1000
      const secSinceBeat = t - lastBeat

      // Dispara beat no intervalo do BPM
      if (secSinceBeat >= beatInterval) {
        audioStore.beat = 1.0
        lastBeat        = t - (secSinceBeat % beatInterval)
      } else {
        audioStore.beat = Math.max(0, audioStore.beat - 0.055)
      }

      // Simula bass/energy com ondas de diferentes frequências (Otimizado)
      audioStore.bass   = 0.45 + Math.sin(t * (bpm / 15)) * 0.35
      audioStore.energy = audioStore.bass

      // ── Note icon pulse ────────────────────────────────────────────
      if (noteRef.current) {
        const s = 1 + audioStore.beat * 0.4 + audioStore.bass * 0.15
        noteRef.current.style.transform = `scale(${s})`
      }

      // ── Progress bar ───────────────────────────────────────────────
      const audio = audioRef.current
      if (audio && audio.duration) {
        // Reduz chamadas no DOM limitando as atualizações (60fps -> ~30fps visual update)
        if (Math.floor(now) % 2 === 0) {
          const pct = (audio.currentTime / audio.duration) * 100
          if (fillRef.current)  fillRef.current.style.width = `${pct}%`
          if (thumbRef.current) thumbRef.current.style.left = `${pct}%`
          if (timeRef.current)  timeRef.current.textContent = fmt(audio.currentTime)
        }
      }

      // ── Visualizer bars (animated fake EQ) ────────────────────────
      const canvas = vizRef.current
      if (canvas && Math.floor(now) % 2 === 0) { // Otimiza redraw do canvas (roda a 30fps no visual)
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          const bars = 52
          const bw   = canvas.width / bars - 0.8
          for (let i = 0; i < bars; i++) {
            // Cada barra oscila em frequência ligeiramente diferente
            const phase = i * 0.38
            const spd   = 1.8 + (i / bars) * 4
            const raw   = Math.sin(t * spd + phase) * 0.35 + audioStore.bass * 0.65
            const v     = Math.max(0.05, Math.min(1, raw))
            const bh    = Math.max(2, v * canvas.height)
            const hue   = 180 + (i / bars) * 100
            ctx.fillStyle = `hsla(${hue},80%,65%,${0.3 + v * 0.7})`
            ctx.fillRect(i * (bw + 0.8), canvas.height - bh, bw, bh)
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(rafRef.current)
      audioStore.isPlaying = false
      audioStore.beat      = 0
      if (noteRef.current) noteRef.current.style.transform = 'scale(1)'
    }
  }, [playing, trackIdx])

  // ── Controls ──────────────────────────────────────────────────────────────
  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      await audio.play()
      setPlaying(true)
    } catch (e) {
      console.warn('play() failed:', e)
    }
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setPlaying(false)
  }, [])

  const toggle = useCallback(() => (playing ? pause() : play()), [playing, play, pause])

  const prev = useCallback(() => setTrackIdx(i => (i - 1 + TRACKS.length) % TRACKS.length), [])
  const next = useCallback(() => {
    if (shuffle) {
      let n = Math.floor(Math.random() * TRACKS.length)
      while (n === trackIdx) n = Math.floor(Math.random() * TRACKS.length)
      setTrackIdx(n)
    } else {
      setTrackIdx(i => (i + 1) % TRACKS.length)
    }
  }, [shuffle, trackIdx])

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio?.duration) return
    const rect  = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audio.currentTime = ratio * audio.duration
  }, [])

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const track = TRACKS[trackIdx]

  return (
    <div className="fixed z-[200] select-none right-4 bottom-4 md:bottom-auto md:top-20 md:right-6">
      <AnimatePresence mode="wait">
        {/* ══════════════ EXPANDED PLAYER ══════════════ */}
        {expanded ? (
          <motion.div
            key="player"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{   opacity: 0, y: 20,  scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="w-[calc(100vw-32px)] sm:w-80 rounded-2xl overflow-hidden origin-bottom md:origin-top-right"
            style={{
              background:     'rgba(7,9,18,0.93)',
              backdropFilter: 'blur(24px)',
              border:         '1px solid rgba(255,255,255,0.07)',
              boxShadow: playing
                ? '0 0 50px rgba(6,182,212,0.14), 0 24px 64px rgba(0,0,0,0.55)'
                : '0 24px 64px rgba(0,0,0,0.55)',
            }}
          >
            {/* Visualizer */}
            <div className="px-4 pt-4">
              <canvas ref={vizRef} width={272} height={36} className="w-full rounded-lg"
                style={{ background: 'rgba(255,255,255,0.02)', touchAction: 'none' }} />
            </div>

            {/* Track info */}
            <div className="flex items-start justify-between px-5 pt-4 pb-1">
              <div className="flex-1 min-w-0 pr-3">
                <p className="text-white font-bold text-[15px] truncate leading-tight">{track.title}</p>
                <p className="text-gray-500 text-[12px] truncate mt-0.5">{track.artist}</p>
              </div>
              <button onClick={() => setLiked(l => !l)}
                className="mt-0.5 shrink-0 transition-all duration-200 hover:scale-110 active:scale-95">
                <Heart size={18}
                  className={liked ? 'text-red-500' : 'text-gray-600 hover:text-gray-400'}
                  fill={liked ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="px-5 pt-2 pb-1">
              <div className="relative h-[3px] bg-white/10 rounded-full cursor-pointer group" onClick={seek}>
                <div ref={fillRef} className="absolute left-0 top-0 h-full rounded-full pointer-events-none"
                  style={{ width: '0%', background: 'linear-gradient(90deg,#06b6d4,#3b82f6)' }} />
                <div ref={thumbRef}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-white shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: '0%' }} />
              </div>
              <div className="flex justify-between mt-1.5">
                <span ref={timeRef} className="text-[10px] text-gray-500 font-mono">0:00</span>
                <span className="text-[10px] text-gray-500 font-mono">{fmt(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-6 pt-1 pb-4">
              <button onClick={() => setShuffle(s => !s)}
                className={`transition-colors ${shuffle ? 'text-cyan-400' : 'text-gray-600 hover:text-gray-300'}`}>
                <Shuffle size={16} />
              </button>

              <button onClick={prev}
                className="text-gray-400 hover:text-white transition-colors active:scale-90">
                <SkipBack size={22} fill="currentColor" />
              </button>

              {/* Play / Pause — big */}
              <button onClick={toggle}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background: playing ? 'linear-gradient(135deg,#06b6d4,#3b82f6)' : '#ffffff',
                  boxShadow:  playing ? '0 0 24px rgba(6,182,212,0.45)' : '0 4px 16px rgba(0,0,0,0.4)',
                }}>
                {playing
                  ? <Pause size={20} className="text-white" />
                  : <Play  size={20} className="text-gray-900 ml-0.5" />}
              </button>

              <button onClick={next}
                className="text-gray-400 hover:text-white transition-colors active:scale-90">
                <SkipForward size={22} fill="currentColor" />
              </button>

              <button onClick={() => setRepeat(r => !r)}
                className={`transition-colors ${repeat ? 'text-cyan-400' : 'text-gray-600 hover:text-gray-300'}`}>
                <Repeat size={16} />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 px-5 pb-2">
              <button
                onClick={() => setMuted(m => !m)}
                className="text-gray-500 hover:text-white transition-colors shrink-0"
              >
                {muted || volume === 0
                  ? <VolumeX size={15} />
                  : <Volume2 size={15} />}
              </button>
              <input
                type="range" min={0} max={1} step={0.02}
                value={muted ? 0 : volume}
                onChange={e => { setMuted(false); setVolume(Number(e.target.value)) }}
                className="w-full h-1 appearance-none rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #06b6d4 ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) ${(muted ? 0 : volume) * 100}%)`,
                  accentColor: '#06b6d4',
                }}
              />
            </div>

            {/* Track dots + collapse */}
            <div className="flex items-center justify-between px-5 pb-3">
              <div className="flex gap-1.5">
                {TRACKS.map((_, i) => (
                  <button key={i} onClick={() => setTrackIdx(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width:  i === trackIdx ? 18 : 6,
                      height: 6,
                      background: i === trackIdx
                        ? 'linear-gradient(90deg,#06b6d4,#3b82f6)'
                        : 'rgba(255,255,255,0.15)',
                    }} />
                ))}
              </div>
              <button onClick={() => setExpanded(false)}
                className="text-gray-600 hover:text-gray-300 transition-colors">
                <ChevronDown size={16} />
              </button>
            </div>
          </motion.div>

        ) : (
          /* ══════════════ COLLAPSED PILL ══════════════ */
          <motion.button
            key="pill"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.85,  y: 10 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            onClick={() => setExpanded(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{
              background:     'rgba(7,9,18,0.93)',
              backdropFilter: 'blur(20px)',
              border: playing
                ? '1px solid rgba(6,182,212,0.35)'
                : '1px solid rgba(255,255,255,0.08)',
              boxShadow: playing ? '0 0 20px rgba(6,182,212,0.18)' : '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div ref={noteRef} className="will-change-transform">
              <Music2 size={14} className={playing ? 'text-cyan-400' : 'text-gray-400'} />
            </div>
            <span className="text-[13px] text-gray-200 font-medium max-w-[130px] truncate">
              {playing ? track.title : 'Músicas'}
            </span>
            {playing ? (
              <div className="flex items-end gap-[2px] h-3.5">
                {[0.6, 1.0, 0.4].map((d, i) => (
                  <motion.span key={i} className="w-[3px] rounded-full bg-cyan-400"
                    animate={{ scaleY: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.55 + d * 0.2, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                    style={{ height: 12, transformOrigin: 'bottom' }} />
                ))}
              </div>
            ) : (
              <ChevronUp size={13} className="text-gray-500" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
})

MusicPlayer.displayName = 'MusicPlayer'
export default MusicPlayer
