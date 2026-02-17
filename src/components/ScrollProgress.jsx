import { motion as Motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Motion.div
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                background: "var(--color-primary)",
                transformOrigin: "0%",
                zIndex: 9999,
                boxShadow: "0 0 10px var(--color-primary)"
            }}
        />
    );
};

export default ScrollProgress;
