import { useState } from 'react';
import { motion as Motion } from 'framer-motion';

const mediaItems = [
    '/images/photo-5.jpg',
    '/images/photo-6.jpg',
    '/images/photo-7.jpg',
    '/images/photo-18.jpg',
    '/images/photo-19.jpg',
    '/images/video-1.mp4',
    '/images/video-2.mp4',
    '/images/video-3.mp4',
];

// Vary heights for masonry-like feel
const itemHeights = [580, 520, 560, 540, 580, 520, 560, 540, 560];

const PhotoGrid = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="gallery" className="section-padding" style={{
            padding: '6rem 1rem',
            background: 'linear-gradient(180deg, #f9f0e0 0%, #fff 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Decorative orbs */}
            <div style={{
                position: 'absolute', top: '-50px', right: '-50px',
                width: '250px', height: '250px',
                background: 'radial-gradient(circle, rgba(197,160,89,0.18) 0%, transparent 70%)',
                borderRadius: '50%', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', bottom: '-50px', left: '-50px',
                width: '320px', height: '320px',
                background: 'radial-gradient(circle, rgba(128,0,0,0.08) 0%, transparent 70%)',
                borderRadius: '50%', zIndex: 0,
            }} />

            {/* Header */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '4rem' }}>
                <Motion.h2 className="section-title photo-grid-title"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-heading)', fontSize: '4rem',
                        color: 'var(--color-primary)', marginBottom: '0.5rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.08)',
                    }}
                >
                    Happy Wedding Anniversary
                </Motion.h2>
                <Motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontFamily: 'var(--font-subheading)', fontSize: '1.4rem',
                        color: 'var(--color-secondary)', fontStyle: 'italic',
                    }}
                >
                    Capturing moments of eternal love
                </Motion.p>
                <div style={{
                    width: '100px', height: '3px',
                    background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                    margin: '1.5rem auto 0',
                }} />
            </div>

            {/* Grid */}
            <div className="photo-grid-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem', maxWidth: '1200px',
                margin: '0 auto', padding: '0 1rem',
                position: 'relative', zIndex: 1,
            }}>
                {mediaItems.map((src, index) => {
                    const isVideo = src.endsWith('.mp4');
                    const isHovered = hovered === index;
                    const height = itemHeights[index] || 520;

                    return (
                        <Motion.div
                            key={index}
                            className="photo-grid-item hover-scale"
                            initial={{ opacity: 0, scale: 0.92, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 100 }}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            style={{
                                overflow: 'hidden', borderRadius: '16px',
                                height: `${height}px`,
                                boxShadow: isHovered
                                    ? '0 0 0 3px var(--color-primary), 0 20px 40px rgba(0,0,0,0.2)'
                                    : 'var(--shadow-sm)',
                                border: '4px solid #fff',
                                position: 'relative',
                                transition: 'box-shadow 0.35s ease',
                            }}
                        >
                            {isVideo ? (
                                <video
                                    src={src} autoPlay loop muted playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                    <Motion.img
                                        src={src} alt={`Memory ${index + 1}`}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            {/* Gold inner frame */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                border: '1px solid rgba(197,160,89,0.3)',
                                borderRadius: '12px', pointerEvents: 'none',
                            }} />

                            {/* Hover overlay — heart + label */}
                            <Motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute', inset: 0,
                                    background: 'rgba(0,0,0,0.38)',
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    gap: '8px', pointerEvents: 'none',
                                    borderRadius: '12px',
                                }}
                            >
                                <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(255,60,60,0.8))' }}>
                                    {isVideo ? '🎬' : '❤'}
                                </span>
                                <span style={{
                                    color: '#fff', fontFamily: 'var(--font-accent)',
                                    fontSize: '0.85rem', letterSpacing: '2px',
                                    textTransform: 'uppercase', opacity: 0.9,
                                    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                                }}>
                                    {isVideo ? 'Video Memory' : 'Memory'}
                                </span>
                            </Motion.div>

                            {/* Video badge */}
                            {isVideo && (
                                <div style={{
                                    position: 'absolute', bottom: '12px', left: '12px',
                                    background: 'rgba(0,0,0,0.6)',
                                    color: 'white', fontSize: '0.75rem', letterSpacing: '1px',
                                    padding: '4px 10px', borderRadius: '20px',
                                    fontFamily: 'var(--font-accent)',
                                    border: '1px solid rgba(197,160,89,0.4)',
                                }}>
                                    🎬 Video Memory
                                </div>
                            )}
                        </Motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default PhotoGrid;
