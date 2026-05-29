import { lazy, Suspense, useState, useEffect } from 'react'
import { Toaster } from 'sonner'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import IntroAnimation from './components/IntroAnimation'
import GalaxyBackground from './components/GalaxyBackground'
import MusicPlayer from './components/MusicPlayer'

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Contact = lazy(() => import('./sections/Contact'))

// Loading fallback
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
  </div>
)

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  // Force scroll to top on mount
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-white overflow-x-hidden">
      <GalaxyBackground />
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <MusicPlayer />
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            background: 'rgba(15, 15, 35, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            color: '#e2e8f0',
            backdropFilter: 'blur(12px)',
          },
        }}
      />
    </div>
  )
}
