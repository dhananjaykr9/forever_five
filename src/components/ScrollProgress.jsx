import { useScroll, motion as Motion } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    return (
        <Motion.div
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary), #FFD700)',
                scaleX: scrollYProgress, transformOrigin: '0%', zIndex: 9998,
            }}
        />
    );
};

export default ScrollProgress;
