import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Spawn rate: slower on mobile
        const intervalTime = isMobile ? 1500 : 800;

        const interval = setInterval(() => {
            const id = Math.random();
            const newHeart = {
                id,
                left: Math.random() * 100,
                // Smaller hearts on mobile
                scale: Math.random() * (isMobile ? 0.3 : 0.5) + (isMobile ? 0.3 : 0.5),
                // Faster animation on mobile to clear screen
                duration: Math.random() * 5 + (isMobile ? 4 : 5)
            };

            setHearts((prev) => {
                // Limit total hearts to prevent DOM overload
                const maxHearts = isMobile ? 10 : 20;
                const updated = [...prev, newHeart];
                if (updated.length > maxHearts) {
                    return updated.slice(updated.length - maxHearts);
                }
                return updated;
            });

            // Cleanup
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== id));
            }, newHeart.duration * 1000);

        }, intervalTime);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {hearts.map((heart) => (
                <Motion.div
                    key={heart.id}
                    initial={{ y: '100vh', opacity: 0 }}
                    animate={{ y: '-10vh', opacity: [0, 0.8, 0] }}
                    transition={{ duration: heart.duration, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                        fontSize: `${heart.scale * 2}rem`,
                        color: 'rgba(197, 160, 89, 0.2)', // Gold tint
                        willChange: 'transform, opacity' // Hardware acceleration hint
                    }}
                >
                    ♥
                </Motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
