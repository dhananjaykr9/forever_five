import { motion as Motion } from 'framer-motion';

const WishCard = () => {
    return (
        <section id="wishes" className="wish-section">
            <Motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="wish-card-content"
            >
                <h2 className="wish-title" style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>With Love</h2>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.8' }}>
                    "Five beautiful years down, forever to go. You make marriage look magical. Happy Anniversary, Avi Mama & Sujata Mami!"
                </p>
                <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-marathi)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', color: 'var(--color-secondary)' }}>
                    "प्रेमाची ५ वर्षे पूर्ण, साथ जन्मोची! तुमची जोडी अशीच बहरत राहो. अवि मामा आणि सुजाता मामींना लग्नाच्या वाढदिवसाच्या हार्दिक शुभेच्छा!"
                </p>
                <p style={{ fontWeight: 'bold', letterSpacing: '2px' }}>- DHANU</p>
            </Motion.div>
        </section>
    );
};

export default WishCard;
