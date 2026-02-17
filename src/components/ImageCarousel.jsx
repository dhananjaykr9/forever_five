import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/images/photo-1.jpg',
    '/images/photo-2.jpg',
    '/images/photo-3.jpg',
    '/images/photo-4.jpg',
    '/images/photo-5.jpg',
    '/images/photo-6.jpg',
    '/images/photo-7.jpg',
    '/images/photo-8.jpg',
    '/images/photo-9.jpg',
    '/images/photo-10.jpg',
    '/images/photo-11.jpg',
    '/images/photo-12.jpg',
    '/images/photo-13.jpg',
    '/images/photo-14.jpg'
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [isPaused, currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.2
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1
        })
    };

    return (
        <section style={{ padding: '4rem 1rem', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                Captured Moments <span style={{ fontSize: '2rem', fontFamily: 'var(--font-marathi)', display: 'block', marginTop: '0.5rem' }}>सुंदर क्षण</span>
            </h2>

            <div
                style={{
                    position: 'relative',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
            >
                {/* Main Slide */}
                <div
                    className="carousel-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <Motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover', position: 'absolute',
                                willChange: 'transform, opacity'
                            }}
                        />
                    </AnimatePresence>

                    {/* Controls Overlay */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        pointerEvents: 'none',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)'
                    }}>
                        <button
                            onClick={prevSlide}
                            style={{
                                pointerEvents: 'auto',
                                position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '50%',
                                width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backdropFilter: 'blur(5px)', transition: 'all 0.3s',
                                touchAction: 'manipulation'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={nextSlide}
                            style={{
                                pointerEvents: 'auto',
                                position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '50%',
                                width: '50px', height: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backdropFilter: 'blur(5px)', transition: 'all 0.3s',
                                touchAction: 'manipulation'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                        >
                            <ChevronRight />
                        </button>

                        <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'white', fontFamily: 'var(--font-accent)', background: 'rgba(0,0,0,0.5)', padding: '5px 15px', borderRadius: '20px' }}>
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>

                {/* Thumbnails */}
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    overflowX: 'auto',
                    padding: '10px 0',
                    justifyContent: 'flex-start',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}>
                    {images.map((img, index) => (
                        <Motion.div
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                position: 'relative',
                                width: '100px',
                                height: '100px',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: index === currentIndex ? '3px solid var(--color-primary)' : '2px solid transparent',
                                opacity: index === currentIndex ? 1 : 0.6,
                                flexShrink: 0,
                                transition: 'all 0.3s'
                            }}
                        >
                            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;