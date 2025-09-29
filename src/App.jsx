import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
    <div className="min-h-screen bg-background text-foreground smooth-scroll">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <About language={language} />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Projects language={language} />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Skills language={language} />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact language={language} />
      </Suspense>
    </div>
  );
}

export default App;
