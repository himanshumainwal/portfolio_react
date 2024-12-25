import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/Particle';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7, // Adjust for slower transitions
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.7, // Same duration for exit
      ease: 'easeInOut',
    },
  },
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<AnimatedPage><Hero /></AnimatedPage>}
          />
          <Route
            path="/about"
            element={<AnimatedPage><About /></AnimatedPage>}
          />
          <Route
            path="/projects"
            element={<AnimatedPage><Projects /></AnimatedPage>}
          />
          <Route
            path="/contact"
            element={<AnimatedPage><Contact /></AnimatedPage>}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
