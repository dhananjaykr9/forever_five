import { motion as Motion } from 'framer-motion';

const WishCard = () => (
    <section id="wishes" className="wish-section section-padding">
        <div className="wish-overlay" />

        <Motion.div animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', border: '2px solid rgba(255,215,0,0.4)', zIndex: 1, pointerEvents: 'none' }} />
        <Motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ position: 'absolute', width: '540px', height: '540px', borderRadius: '50%', border: '1px solid rgba(255,215,0,0.2)', zIndex: 1, pointerEvents: 'none' }} />

        <Motion.div
            initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{ scale: { duration: 0.9 }, opacity: { duration: 0.9 }, filter: { duration: 0.9 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
            className="wish-card-content" style={{ position: 'relative', zIndex: 2 }}
        >
            <div className="wish-icon-wrapper">
                <div className="wish-icon-bg"><span style={{ fontSize: '2.5rem', display: 'block' }}>💛</span></div>
            </div>

            <h2 className="wish-title">With Love</h2>
            <div className="wish-divider" />

            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <span style={{ position: 'absolute', top: '-1.5rem', left: '-0.5rem', fontSize: '5rem', fontFamily: 'var(--font-heading)', color: 'rgba(255,215,0,0.18)', lineHeight: 1, userSelect: 'none' }}>❝</span>
                <p className="wish-text-english">
                    Five beautiful years down, <span className="wish-highlight">forever</span> to go. You make marriage look magical. Happy Anniversary, <span className="wish-highlight">Avi Mama &amp; Sujata Mami!</span>
                </p>
                <span style={{ position: 'absolute', bottom: '-2.5rem', right: '-0.5rem', fontSize: '5rem', fontFamily: 'var(--font-heading)', color: 'rgba(255,215,0,0.18)', lineHeight: 1, userSelect: 'none', transform: 'rotate(180deg)' }}>❝</span>
            </div>

            <p className="wish-text-marathi" style={{ marginTop: '2rem' }}>
                "प्रेमाची ५ वर्षे पूर्ण, साथ जन्मोची! तुमची जोडी अशीच बहरत राहो. अवि मामा आणि सुजाता मामींना लग्नाच्या वाढदिवसाच्या हार्दिक शुभेच्छा!"
            </p>

            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.6), transparent)', margin: '2rem auto' }} />

            <div className="wish-signature-wrapper">
                <span className="wish-signature-label">Made with ❤ by</span>
                <span className="wish-signature-name" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.2rem', background: 'linear-gradient(90deg, #C5A059, #FFD700, #C5A059)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>
                    Dhanu
                </span>
            </div>
        </Motion.div>
    </section>
);

export default WishCard;
