import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
        }}>
            {/* Parallax Background */}
            <Motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '120%', // Taller to allow for parallax movement
                backgroundImage: 'url("/images/hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                y: y, // Apply parallax effect
                zIndex: -2
            }} />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(128,0,0,0.3) 100%)',
                zIndex: -1
            }}></div>

            <Motion.div
                style={{ position: 'relative', zIndex: 1, opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                    <Motion.img
                        src="/images/logo.png"
                        alt="Forever Five Logo"
                        style={{
                            maxWidth: '180px',
                            display: 'block',
                            filter: 'drop-shadow(0 0 20px rgba(197, 160, 89, 0.5))'
                        }}
                        animate={{
                            y: [-10, 10, -10],
                            filter: [
                                'drop-shadow(0 0 20px rgba(197, 160, 89, 0.5))',
                                'drop-shadow(0 0 30px rgba(197, 160, 89, 0.8))',
                                'drop-shadow(0 0 20px rgba(197, 160, 89, 0.5))'
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <Motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        marginBottom: '0.5rem',
                        textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                    }}
                >
                    5 Years of Bliss
                </Motion.h1>

                <Motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    style={{
                        fontSize: '3.5rem',
                        fontFamily: 'var(--font-marathi)',
                        marginBottom: '1.5rem',
                        fontWeight: 700,
                        color: '#FFD700',
                        textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)'
                    }}
                >
                    ५ वर्षांचा आनंद
                </Motion.h2>

                <div style={{
                    width: '80px',
                    height: '2px',
                    background: '#FFD700',
                    margin: '0 auto 2rem',
                    boxShadow: '0 0 10px #FFD700'
                }}></div>

                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        fontSize: '1.8rem',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '0.5rem',
                        color: 'var(--color-white)',
                        letterSpacing: '2px'
                    }}
                >
                    Avi & Sujata
                </Motion.p>

                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    style={{
                        fontSize: '1.4rem',
                        fontFamily: 'var(--font-marathi)',
                        marginBottom: '2rem',
                        color: 'rgba(255,255,255,0.9)'
                    }}
                >
                    अवी आणि सुजाता
                </Motion.p>

                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    style={{
                        fontSize: '1.2rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#FFD700',
                        fontWeight: 'bold',
                        opacity: 1,
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}
                >
                    02.03.2021 &bull; Forever
                </Motion.p>
            </Motion.div>

            <Motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    color: 'var(--color-white)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 10
                }}
                onClick={() => document.getElementById('lovestory').scrollIntoView({ behavior: 'smooth' })}
            >
                Start The Journey ↓
            </Motion.div>
        </section>
    );
};

export default Hero;
