import { motion as Motion } from 'framer-motion';

const LoveStory = () => {
    return (
        <section id="lovestory" className="section-padding" style={{ padding: '6rem 1rem', background: 'linear-gradient(160deg, #fffdf7 0%, #fff5e0 50%, #fffdf7 100%)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(197,160,89,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />

            <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <h2 className="section-title" style={{ fontSize: '4rem', marginBottom: '0.5rem', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>Love Story</h2>
                <span style={{ fontSize: '2rem', fontFamily: 'var(--font-marathi)', display: 'block', marginTop: '0.3rem', color: 'var(--color-primary)' }}>प्रेम कहाणी</span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '1.5rem' }}>
                    <Motion.div initial={{ width: 0 }} whileInView={{ width: '60px' }} transition={{ duration: 1, delay: 0.3 }} style={{ height: '2px', background: 'var(--color-primary)', borderRadius: '2px' }} />
                    <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>❤</span>
                    <Motion.div initial={{ width: 0 }} whileInView={{ width: '60px' }} transition={{ duration: 1, delay: 0.3 }} style={{ height: '2px', background: 'var(--color-primary)', borderRadius: '2px' }} />
                </div>
            </Motion.div>

            <div className="love-story-container" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
                <Motion.div className="love-story-card glass-card" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ padding: '3rem', borderRadius: '20px 0 20px 0', borderLeft: '5px solid var(--color-primary)', position: 'relative' }}>
                    <div style={{ fontSize: '6rem', position: 'absolute', top: '-2rem', left: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', opacity: 0.15, lineHeight: 1 }}>"</div>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.9', fontStyle: 'italic', position: 'relative', zIndex: 1, color: '#333' }}>
                        Five years ago, two souls embarked on a journey of togetherness. Through laughter and tears, they built a world filled with love. <strong>Avi</strong>, a dedicated Banker at SBI, has always been the pillar of strength for <strong>Sujata</strong>.
                    </p>
                </Motion.div>

                <Motion.div className="love-story-card glass-card" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} style={{ padding: '3rem', borderRadius: '0 20px 0 20px', borderRight: '5px solid var(--color-secondary)', textAlign: 'right', position: 'relative' }}>
                    <div style={{ fontSize: '6rem', position: 'absolute', bottom: '-3rem', right: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)', opacity: 0.1, lineHeight: 1, transform: 'rotate(180deg)' }}>"</div>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.9', fontStyle: 'italic', position: 'relative', zIndex: 1, color: '#333' }}>
                        From shared dreams to the joy of parenthood, every day has been a beautiful chapter in their fairy tale. Together they are stronger, kinder, and more in love than ever.
                    </p>
                </Motion.div>

                <Motion.div className="love-story-card glass-card" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ padding: '3rem', borderRadius: '20px 0 20px 0', borderLeft: '5px solid var(--color-primary)', position: 'relative' }}>
                    <div style={{ fontSize: '6rem', position: 'absolute', top: '-2rem', left: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', opacity: 0.15, lineHeight: 1 }}>"</div>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.9', fontStyle: 'italic', position: 'relative', zIndex: 1, color: '#333' }}>
                        And now, every morning begins with little <strong>Adhiraj's</strong> smile — a tiny miracle wrapped in pure joy, reminding them that the best chapters of this love story are still being written. ✨
                    </p>
                </Motion.div>
            </div>
        </section>
    );
};

export default LoveStory;
