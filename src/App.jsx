
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

function App() {
  return (
    <div className="app-container">
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
    </div>
  );
}

export default App;
