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
        <section id="gallery" style={{ padding: '4rem 1rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', color: 'var(--color-primary)' }}>Golden Memories</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {mediaItems.map((src, index) => {
                    const isVideo = src.endsWith('.mp4');
                    return (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            style={{ overflow: 'hidden', borderRadius: '10px', height: '300px' }}
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
                                <img
                                    src={src}
                                    alt={`Memory ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                        </Motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default PhotoGrid;
