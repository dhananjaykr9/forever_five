import { motion as Motion } from 'framer-motion';

const LoveStory = () => {
    return (
        <section id="lovestory" style={{
            padding: '6rem 1rem',
            background: 'var(--color-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(128, 0, 0, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }}></div>

            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 className="section-title" style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                    Love Story
                </h2>
                <span style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-marathi)',
                    display: 'block',
                    marginTop: '0.5rem',
                    color: 'var(--color-primary)',
                    letterSpacing: '1px'
                }}>
                    प्रेम कहाणी
                </span>
                <div style={{
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)',
                    margin: '1.5rem auto'
                }}></div>
            </Motion.div>

            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '3rem',
                        borderRadius: '20px 0 20px 0',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        borderLeft: '5px solid var(--color-primary)',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        fontSize: '6rem',
                        position: 'absolute',
                        top: '-2rem',
                        left: '1rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-primary)',
                        opacity: 0.2,
                        lineHeight: 1
                    }}>"</div>
                    <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.8', fontStyle: 'italic', zIndex: 1, position: 'relative' }}>
                        Five years ago, two souls embarked on a journey of togetherness. Through laughter and tears, they built a world filled with love. <strong>Avi</strong>, a dedicated Banker at SBI, has always been the pillar of strength for <strong>Sujata</strong>.
                    </p>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '3rem',
                        borderRadius: '0 20px 0 20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        borderRight: '5px solid var(--color-secondary)',
                        textAlign: 'right',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        fontSize: '6rem',
                        position: 'absolute',
                        bottom: '-3rem',
                        right: '1rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-secondary)',
                        opacity: 0.1,
                        lineHeight: 1,
                        transform: 'rotate(180deg)'
                    }}>"</div>
                    <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.8', fontStyle: 'italic', zIndex: 1, position: 'relative' }}>
                        From shared dreams to the joy of parenthood, every day has been a beautiful chapter in their fairy tale.
                    </p>
                </Motion.div>
            </div>
        </section>
    );
};

export default LoveStory;
