import { motion as Motion } from 'framer-motion';
import { Heart, Star, Calendar, Baby, Sparkles } from 'lucide-react';

const timelineData = [
    { year: '2021', title: 'The Vows', marathiTitle: 'लग्नसोहळा', desc: 'Where it all began. March 2nd — a day written in gold.', marathiDesc: 'जिथे सर्व काही सुरू झाले. २ मार्च — सुवर्ण दिवस.', icon: <Heart size={22} />, emoji: '💍' },
    { year: '2021', title: "Adhiraj's Arrival", marathiTitle: 'अधिराजचे आगमन', desc: 'Welcome to the world, Adhiraj. Dec 21st — pure joy.', marathiDesc: 'चिमुकल्या अधिराजचे स्वागत. २१ डिसेंबर.', icon: <Baby size={22} />, emoji: '👶' },
    { year: '2023', title: 'Growing Together', marathiTitle: 'एकत्रित वाढ', desc: 'Building foundations and creating memories that last forever.', marathiDesc: 'पायाभरणी आणि आठवणींची निर्मिती.', icon: <Calendar size={22} />, emoji: '🌱' },
    { year: '2025', title: 'Golden 5', marathiTitle: 'सुवर्ण ५ वर्षे', desc: 'Celebrating a milestone of love, trust, and togetherness.', marathiDesc: 'प्रेम आणि विश्वासाच्या एका सुंदर टप्प्याचा उत्सव', icon: <Star size={22} />, emoji: '🌟' },
    { year: '∞', title: 'Forever Begins', marathiTitle: 'अनंत प्रवास', desc: '5 years of love, and a lifetime together still ahead.', marathiDesc: 'प्रेमाची ५ वर्षे, आणि पुढे अनंतकाळ.', icon: <Sparkles size={22} />, emoji: '✨' },
];

const Timeline = () => (
    <section id="timeline" className="section-padding" style={{ padding: '6rem 1rem', background: 'linear-gradient(to bottom, #fffdf7, #fff5e0, #fffdf7)', position: 'relative', overflow: 'hidden' }}>
        <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>Journey</h2>
            <span style={{ fontSize: '1.8rem', fontFamily: 'var(--font-marathi)', display: 'block', marginTop: '0.3rem', color: 'var(--color-secondary)' }}>प्रवास</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '1.5rem' }}>
                <Motion.div initial={{ width: 0 }} whileInView={{ width: '60px' }} transition={{ duration: 0.9, delay: 0.2 }} style={{ height: '2px', background: 'var(--color-primary)', borderRadius: '2px' }} />
                <span style={{ color: 'var(--color-primary)', fontSize: '1.1rem' }}>✦</span>
                <Motion.div initial={{ width: 0 }} whileInView={{ width: '60px' }} transition={{ duration: 0.9, delay: 0.2 }} style={{ height: '2px', background: 'var(--color-primary)', borderRadius: '2px' }} />
            </div>
        </Motion.div>

        <div className="timeline-wrapper" style={{ width: '100%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, transparent, var(--color-primary), var(--color-secondary), var(--color-primary), transparent)', transform: 'translateX(-50%)', borderRadius: '4px', boxShadow: '0 0 12px rgba(197,160,89,0.4)' }} />

            {timelineData.map((item, index) => (
                <div key={index} className="timeline-item" style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', paddingBottom: '4rem', position: 'relative', width: '100%' }}>
                    <Motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="timeline-dot"
                        animate={{ boxShadow: ['0 0 8px rgba(197,160,89,0.6)', '0 0 20px rgba(197,160,89,1)', '0 0 8px rgba(197,160,89,0.6)'] }}
                        style={{ position: 'absolute', left: '50%', top: 0, width: '28px', height: '28px', background: 'radial-gradient(circle, #FFD700, var(--color-secondary))', borderRadius: '50%', transform: 'translateX(-50%)', zIndex: 2, border: '4px solid var(--color-white)' }} />

                    <Motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="timeline-content" style={{ width: '45%', textAlign: index % 2 === 0 ? 'right' : 'left', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <div style={{ color: 'white', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}>{item.icon}</div>
                        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', position: 'relative', width: '100%', background: 'linear-gradient(135deg, #fff9f0, #fff)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '0.3rem' }}>
                                <span style={{ fontSize: '1.2rem' }}>{item.emoji}</span>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-secondary)', lineHeight: 1 }}>{item.year}</h3>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', margin: '0.4rem 0', fontFamily: 'var(--font-subheading)', fontWeight: 'bold', color: '#333' }}>{item.title}</h4>
                            <span style={{ fontFamily: 'var(--font-marathi)', fontSize: '1rem', display: 'block', color: 'var(--color-primary)', marginBottom: '0.8rem' }}>{item.marathiTitle}</span>
                            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
                            <p style={{ color: '#888', fontFamily: 'var(--font-marathi)', fontSize: '0.9rem', marginTop: '0.5rem', borderTop: '1px solid rgba(197,160,89,0.2)', paddingTop: '0.5rem' }}>{item.marathiDesc}</p>
                        </div>
                    </Motion.div>
                </div>
            ))}
        </div>
    </section>
);

export default Timeline;
