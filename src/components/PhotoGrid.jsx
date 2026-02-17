import { motion as Motion } from 'framer-motion';

const mediaItems = [
    '/images/photo-1.jpg',
    '/images/photo-2.jpg',
    '/images/photo-3.jpg',
    '/images/photo-4.jpg',
    '/images/photo-5.jpg',
    '/images/photo-6.jpg',
    '/images/video-2.mp4',
    '/images/video-3.mp4',
    '/images/video-4.mp4'
];

const PhotoGrid = () => {
    return (
        <section id="gallery" style={{
            padding: '6rem 1rem',
            background: 'linear-gradient(to bottom, #fff, #f9f9f9)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-50px',
                left: '-50px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(128, 0, 0, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '4rem' }}>
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '4rem',
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    Happy Wedding Anniversary
                </Motion.h2>
                <Motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontFamily: 'var(--font-subheading)',
                        fontSize: '1.5rem',
                        color: 'var(--color-secondary)',
                        fontStyle: 'italic'
                    }}
                >
                    Capturing moments of eternal love
                </Motion.p>
                <div style={{
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                    margin: '1.5rem auto 0'
                }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 1rem'
            }}>
                {mediaItems.map((src, index) => {
                    const isVideo = src.endsWith('.mp4');
                    return (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                overflow: 'hidden',
                                borderRadius: '15px',
                                height: '350px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                border: '4px solid #fff',
                                position: 'relative'
                            }}
                        >
                            {isVideo ? (
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                    <Motion.img
                                        src={src}
                                        alt={`Memory ${index + 1}`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            {/* Gold Frame Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                border: '1px solid rgba(197, 160, 89, 0.3)',
                                borderRadius: '11px',
                                pointerEvents: 'none'
                            }}></div>
                        </Motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default PhotoGrid;
