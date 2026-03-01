import { motion as Motion } from 'framer-motion';

const PETALS = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 14 + 8,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 6,
    symbol: ['🌸', '✿', '❋', '✦', '✾'][Math.floor(Math.random() * 5)],
}));

const WelcomeScreen = ({ onEnter }) => {
    return (
        <Motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
            style={{
                position: 'relative',
                minHeight: '100svh',
                width: '100%',
                background: 'linear-gradient(135deg, #1a0303, #5a0000, #800000, #4a0000)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                color: '#fff',
                textAlign: 'center',
                padding: 'clamp(2rem, 8vw, 5rem) clamp(1rem, 5vw, 3rem)',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            {/* Falling petals — decorative only */}
            {PETALS.map((p) => (
                <Motion.div
                    key={p.id}
                    initial={{ y: '-10vh', opacity: 0, rotate: 0 }}
                    animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: 360 }}
                    transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', left: `${p.left}%`,
                        fontSize: `${p.size}px`, pointerEvents: 'none', zIndex: 0,
                    }}
                >
                    {p.symbol}
                </Motion.div>
            ))}

            {/* Background glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '45%', height: '45%', background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '55%', height: '55%', background: 'radial-gradient(circle, rgba(255,215,0,0.10) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />

            {/* Main card */}
            <Motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                    zIndex: 1, position: 'relative',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '0',
                    width: '100%', maxWidth: '700px',
                }}
            >
                {/* Ornament */}
                <Motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                        filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.6))',
                    }}
                >
                    ✦ ❧ ✦
                </Motion.div>

                {/* Main title */}
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    color: '#FFD700',
                    marginBottom: 'clamp(0.3rem, 1.5vw, 0.5rem)',
                    lineHeight: '1.2',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,215,0,0.3)',
                }}>
                    A Special Surprise
                </h1>

                {/* Marathi subtitle */}
                <Motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(0.95rem, 3vw, 1.2rem)',
                        fontFamily: 'var(--font-marathi)',
                        color: 'rgba(255,215,0,0.75)',
                        marginBottom: 'clamp(0.3rem, 1vw, 0.5rem)',
                        letterSpacing: '2px',
                    }}
                >
                    एक खास आठवण
                </Motion.p>

                {/* Animated gold divider */}
                <Motion.div
                    initial={{ width: 0 }} animate={{ width: 'clamp(80px, 30vw, 160px)' }}
                    transition={{ duration: 1.2, delay: 1.0 }}
                    style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                        margin: 'clamp(0.8rem, 2vw, 1.2rem) auto clamp(1rem, 3vw, 2rem)',
                    }}
                />

                {/* Subtitle text */}
                <p style={{
                    fontSize: 'clamp(1rem, 3.5vw, 1.6rem)',
                    marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
                    fontFamily: 'var(--font-subheading)',
                    color: '#ddd',
                    maxWidth: '560px',
                    lineHeight: '1.7',
                    padding: '0 0.5rem',
                }}>
                    For the couple who makes love look timeless.
                    <br />
                    <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', color: '#FFD700', fontStyle: 'italic' }}>
                        Happy Wedding Anniversary! 💑
                    </span>
                </p>

                {/* CTA Button with pulsing ring */}
                <Motion.div style={{ position: 'relative', display: 'inline-block' }}>
                    <Motion.div
                        animate={{ scale: [1, 1.3, 1.6], opacity: [0.6, 0.3, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        style={{
                            position: 'absolute', inset: '-10px',
                            borderRadius: '50px',
                            background: 'rgba(255,215,0,0.3)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Motion.button
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.06, boxShadow: '0 0 35px rgba(255,215,0,0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        onClick={onEnter}
                        style={{
                            padding: 'clamp(0.9rem, 3vw, 1.2rem) clamp(2rem, 8vw, 4rem)',
                            fontSize: 'clamp(1rem, 4vw, 1.4rem)',
                            background: 'linear-gradient(45deg, #C5A059, #FFD700, #FDB931)',
                            border: 'none', color: '#4a0404',
                            borderRadius: '50px', cursor: 'pointer',
                            fontFamily: 'var(--font-heading)', fontWeight: 'bold',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                            letterSpacing: '1px', position: 'relative',
                            touchAction: 'manipulation',
                        }}
                    >
                        Open Surprise 🎁
                    </Motion.button>
                </Motion.div>
            </Motion.div>
        </Motion.div>
    );
};

export default WelcomeScreen;
