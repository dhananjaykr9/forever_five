import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import PhotoGrid from './components/PhotoGrid';
import WishCard from './components/WishCard';
import Footer from './components/Footer';
import LoveStory from './components/LoveStory';
import ImageCarousel from './components/ImageCarousel';
import FloatingHearts from './components/FloatingHearts';
import TimeCounter from './components/TimeCounter';
import ScrollProgress from './components/ScrollProgress';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onEnter={() => setShowWelcome(false)} />}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <ScrollProgress />
          <FloatingHearts />
          <Hero />
          <TimeCounter />
          <LoveStory />
          <Timeline />
          <ImageCarousel />
          <PhotoGrid />
          <WishCard />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
