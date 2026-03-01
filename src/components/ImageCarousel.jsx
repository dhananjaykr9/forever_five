import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = Array.from({ length: 20 }, (_, i) => `/images/photo-${i + 1}.jpg`);

const CAPTIONS = [
    "A love written in the stars ✨",
    "Forever starts here 💑",
    "Two hearts, one journey ❤",
    "Moments frozen in time 🌸",
    "Beautiful days, beautiful ways ✦",
    "Together is a wonderful place 🌟",
    "Every picture tells our story 💛",
    "Memories made with love 🌺",
    "Side by side, always 🕊",
    "Pure joy, pure love 💞",
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        if (isPaused) return;
        setProgress(0);
        const duration = 4000;
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / duration) * 100, 100);
            setProgress(pct);
            if (pct < 100) {
                progressRef.current = requestAnimationFrame(tick);
            }
        };
        progressRef.current = requestAnimationFrame(tick);

        const timer = setTimeout(() => nextSlide(), duration);
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(progressRef.current);
        };
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
        enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 1.1 }),
        center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
        exit: (dir) => ({ zIndex: 0, x: dir < 0 ? '100%' : '-100%', opacity: 0, scale: 1 }),
    };

    const caption = CAPTIONS[currentIndex % CAPTIONS.length];

    return (
        <section className="section-padding" style={{
            padding: '5rem 1rem',
            background: 'linear-gradient(to bottom, #fffdf7, #f9f0e0)',
            color: 'var(--color-text)',
        }}>
            <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '2.5rem' }}
            >
                <h2 className="section-title carousel-title" style={{
                    fontSize: '3rem', color: 'var(--color-primary)',
                    fontFamily: 'var(--font-heading)',
                }}>
                    Captured Moments
                </h2>
                <span className="carousel-subtitle" style={{
                    fontSize: '1.8rem', fontFamily: 'var(--font-marathi)',
                    display: 'block', marginTop: '0.4rem', color: 'var(--color-secondary)',
                }}>सुंदर क्षण</span>
            </Motion.div>

            <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Progress bar */}
                <div style={{ width: '100%', height: '3px', background: 'rgba(197,160,89,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                        height: '100%', width: `${progress}%`,
                        background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))',
                        transition: 'width 0.1s linear', borderRadius: '2px',
                    }} />
                </div>

                {/* Main slide */}
                <div
                    style={{
                        position: 'relative', width: '100%',
                        height: '80vh', minHeight: '500px', maxHeight: '950px',
                        overflow: 'hidden', borderRadius: '20px',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                        border: '4px solid white', transform: 'translateZ(0)',
                    }}
                    onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <Motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            custom={direction} variants={variants}
                            initial="enter" animate="center" exit="exit"
                            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', willChange: 'transform, opacity' }}
                        />
                    </AnimatePresence>

                    {/* Controls & caption overlay */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        pointerEvents: 'none',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 25%, transparent 65%, rgba(0,0,0,0.55) 100%)',
                    }}>
                        {/* Prev button */}
                        <button onClick={prevSlide} style={{
                            pointerEvents: 'auto', position: 'absolute',
                            left: '20px', top: '50%', transform: 'translateY(-50%)',
                            background: 'rgba(197,160,89,0.25)', color: 'white',
                            border: '1px solid rgba(197,160,89,0.6)', borderRadius: '50%',
                            width: '52px', height: '52px', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backdropFilter: 'blur(6px)', transition: 'all 0.3s', touchAction: 'manipulation',
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(197,160,89,0.25)'; e.currentTarget.style.borderColor = 'rgba(197,160,89,0.6)'; }}
                        >
                            <ChevronLeft />
                        </button>

                        {/* Next button */}
                        <button onClick={nextSlide} style={{
                            pointerEvents: 'auto', position: 'absolute',
                            right: '20px', top: '50%', transform: 'translateY(-50%)',
                            background: 'rgba(197,160,89,0.25)', color: 'white',
                            border: '1px solid rgba(197,160,89,0.6)', borderRadius: '50%',
                            width: '52px', height: '52px', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backdropFilter: 'blur(6px)', transition: 'all 0.3s', touchAction: 'manipulation',
                        }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(197,160,89,0.25)'; e.currentTarget.style.borderColor = 'rgba(197,160,89,0.6)'; }}
                        >
                            <ChevronRight />
                        </button>

                        {/* Caption */}
                        <AnimatePresence mode="wait">
                            <Motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute', bottom: '20px', left: '50%',
                                    transform: 'translateX(-50%)',
                                    color: 'white', fontFamily: 'var(--font-subheading)',
                                    fontStyle: 'italic', fontSize: '1rem',
                                    textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                                    whiteSpace: 'nowrap', pointerEvents: 'none',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                {caption}
                            </Motion.div>
                        </AnimatePresence>

                        {/* Counter */}
                        <div style={{
                            position: 'absolute', bottom: '20px', right: '20px',
                            color: 'white', fontFamily: 'var(--font-accent)',
                            background: 'rgba(0,0,0,0.5)', padding: '4px 14px',
                            borderRadius: '20px', fontSize: '0.85rem',
                            pointerEvents: 'none',
                        }}>
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>

                {/* Film-strip thumbnails */}
                <div className="film-strip-thumb" style={{
                    display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0',
                    justifyContent: 'flex-start', scrollbarWidth: 'thin',
                    WebkitOverflowScrolling: 'touch',
                    borderTop: '3px solid #ddd',
                    borderBottom: '3px solid #ddd',
                    paddingTop: '6px', paddingBottom: '6px',
                }}>
                    {images.map((img, index) => (
                        <Motion.div
                            key={index}
                            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                            whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
                            style={{
                                position: 'relative', width: '80px', height: '60px',
                                borderRadius: '8px', overflow: 'hidden', cursor: 'pointer',
                                border: index === currentIndex
                                    ? '3px solid var(--color-primary)'
                                    : '2px solid rgba(197,160,89,0.2)',
                                opacity: index === currentIndex ? 1 : 0.55,
                                flexShrink: 0, transition: 'all 0.3s',
                                outline: index === currentIndex ? '1px solid rgba(197,160,89,0.4)' : 'none',
                                outlineOffset: '2px',
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