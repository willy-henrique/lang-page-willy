import { useState, useEffect, useMemo, lazy, Suspense, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

// Loading component - optimized to prevent flashing
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center py-20 min-h-[200px]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

// Home Page Component - memoized to prevent unnecessary re-renders
const HomePage = memo(({ language }) => {
  return (
    <>
      <Hero language={language} />
      
      <Suspense fallback={null}>
        <About language={language} />
      </Suspense>
      
      <Suspense fallback={null}>
        <Projects language={language} />
      </Suspense>
      
      <Suspense fallback={null}>
        <Skills language={language} />
      </Suspense>
      
      <Suspense fallback={null}>
        <Contact language={language} />
      </Suspense>
    </>
  );
});

function App() {
  const [language, setLanguage] = useState('pt-BR');

  // Optimized language preference handling
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && (savedLanguage === 'pt-BR' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Debounced language save
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('portfolio-language', language);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [language]);

  // Memoized language context
  const languageContext = useMemo(() => ({
    language,
    setLanguage
  }), [language]);

  return (
    <div className="min-h-screen bg-background text-foreground prevent-jump">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/project/:projectId" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectDetail language={language} />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
