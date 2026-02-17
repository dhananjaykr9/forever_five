import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = ({ onEnter }) => {
    return (
        <Motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(135deg, #2c0505, #800000)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                color: '#fff',
                textAlign: 'center',
                padding: '2rem',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Background Circles */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <Motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ zIndex: 1 }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '5rem',
                    color: '#FFD700',
                    marginBottom: '1rem',
                    lineHeight: '1.2',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}>
                    A Special Surprise
                </h1>

                <Motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '150px' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                        margin: '0 auto 2rem'
                    }}
                />

                <p style={{
                    fontSize: '1.8rem',
                    marginBottom: '3rem',
                    fontFamily: 'var(--font-subheading)',
                    color: '#e0e0e0',
                    maxWidth: '700px',
                    lineHeight: '1.6'
                }}>
                    For the couple who makes love look timeless.
                    <br />
                    <span style={{ fontSize: '1.4rem', color: '#FFD700', fontStyle: 'italic' }}>
                        Happy Wedding Anniversary!
                    </span>
                </p>

                <Motion.button
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    onClick={onEnter}
                    style={{
                        padding: '1.2rem 4rem',
                        fontSize: '1.4rem',
                        background: 'linear-gradient(45deg, #FFD700, #FDB931)',
                        border: 'none',
                        color: '#4a0404',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    Open Surprise 🎁
                </Motion.button>
            </Motion.div>
        </Motion.div>
    );
};

export default WelcomeScreen;
