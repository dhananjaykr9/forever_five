import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i, size: Math.random() * 4 + 2, left: Math.random() * 100,
    duration: Math.random() * 10 + 10, delay: Math.random() * 5,
}));

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } }
    };

    return (
        <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', width: '100%' }}>
            <Motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', backgroundImage: 'url("/images/hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', y, zIndex: -3 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(30,0,0,0.65) 50%, rgba(128,0,0,0.55) 100%)', zIndex: -2 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
                {particles.map(p => (
                    <Motion.div key={p.id}
                        initial={{ y: '100vh', opacity: 0 }}
                        animate={{ y: ['100vh', '-10vh'], opacity: [0, 0.8, 0], x: [0, Math.random() * 50 - 25, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                        style={{ position: 'absolute', left: `${p.left}%`, width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%', background: 'rgba(255, 215, 0, 0.5)', boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}
                    />
                ))}
            </div>

            {/* Ornamental arch */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(600px, 90vw)', height: 'min(520px, 85vh)', border: '1px solid rgba(197,160,89,0.25)', borderRadius: '50% 50% 0 0 / 30% 30% 0 0', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(560px, 86vw)', height: 'min(490px, 81vh)', border: '1px solid rgba(255,215,0,0.12)', borderRadius: '50% 50% 0 0 / 30% 30% 0 0', pointerEvents: 'none', zIndex: 0 }} />

            <Motion.div style={{ position: 'relative', zIndex: 1, opacity }} variants={containerVariants} initial="hidden" animate="visible">
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                    <Motion.img src="/images/logo.png" alt="Forever Five Logo" variants={itemVariants} className="animate-heartbeat"
                        style={{ maxWidth: '180px', display: 'block', filter: 'drop-shadow(0 0 20px rgba(197, 160, 89, 0.6))' }} />
                </div>

                <Motion.h1 className="hero-title glow-text" variants={itemVariants} style={{ marginBottom: '0.5rem', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                    5 Years of Bliss
                </Motion.h1>
                <Motion.h2 className="glow-text" variants={itemVariants} style={{ fontSize: '3.5rem', fontFamily: 'var(--font-marathi)', marginBottom: '1.5rem', fontWeight: 700, color: '#FFD700', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                    ५ वर्षांचा आनंद
                </Motion.h2>
                <Motion.div variants={itemVariants} style={{ width: '80px', height: '2px', background: '#FFD700', margin: '0 auto 2rem', boxShadow: '0 0 15px #FFD700' }} />

                <Motion.p className="hero-names" variants={itemVariants} style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '0.3rem', color: 'var(--color-white)', letterSpacing: '2px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    Avi &amp; Sujata
                </Motion.p>
                <Motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '0.5rem auto' }}>
                    <div style={{ width: '50px', height: '1px', background: 'rgba(197,160,89,0.6)' }} />
                    <span style={{ color: '#FFD700', fontSize: '1rem' }}>❤</span>
                    <div style={{ width: '50px', height: '1px', background: 'rgba(197,160,89,0.6)' }} />
                </Motion.div>
                <Motion.p className="hero-names-marathi" variants={itemVariants} style={{ fontSize: '1.4rem', fontFamily: 'var(--font-marathi)', marginBottom: '2rem', color: 'rgba(255,255,255,0.85)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    अवी आणि सुजाता
                </Motion.p>
                <Motion.p variants={itemVariants} style={{ fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#FFD700', fontWeight: 'bold', opacity: 0.9, textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}>
                    02.03.2021 &bull; Forever
                </Motion.p>
            </Motion.div>

            <Motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0)'] }}
                transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '3rem', color: 'var(--color-white)', fontSize: '0.85rem', cursor: 'pointer', zIndex: 10, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8 }}
                className="hover-scale"
                onClick={() => document.getElementById('lovestory').scrollIntoView({ behavior: 'smooth' })}
            >
                Start The Journey ↓
            </Motion.div>
        </section>
    );
};

export default Hero;
