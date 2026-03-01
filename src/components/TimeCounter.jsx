import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const TimeCounter = () => {
    const startDate = new Date('2021-03-02T00:00:00');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();
            let hours = now.getHours() - startDate.getHours();
            let minutes = now.getMinutes() - startDate.getMinutes();
            let seconds = now.getSeconds() - startDate.getSeconds();

            if (seconds < 0) { minutes--; seconds += 60; }
            if (minutes < 0) { hours--; minutes += 60; }
            if (hours < 0) { days--; hours += 24; }
            if (days < 0) {
                months--;
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) { years--; months += 12; }

            setTimeLeft({ years, months, days, hours, minutes, seconds });
        };
        const timer = setInterval(calculateTime, 1000);
        calculateTime();
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Years', value: timeLeft.years, marathi: 'वर्षे', accent: true },
        { label: 'Months', value: timeLeft.months, marathi: 'महिने' },
        { label: 'Days', value: timeLeft.days, marathi: 'दिवस' },
        { label: 'Hours', value: timeLeft.hours, marathi: 'तास' },
        { label: 'Minutes', value: timeLeft.minutes, marathi: 'मिनिटे' },
        { label: 'Seconds', value: timeLeft.seconds, marathi: 'सेकंद' },
    ];

    return (
        <section className="section-padding" style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, #8B0000, #C5A059, #d4af37, #C5A059, #8B0000)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                <h2 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
                    Growing Stronger Together
                </h2>
                <span style={{ display: 'block', textAlign: 'center', fontSize: '1.6rem', fontFamily: 'var(--font-marathi)', marginBottom: '3rem', opacity: 0.9 }}>अविरत सहवास</span>

                <div className="time-counter-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                    {timeUnits.map((unit, index) => (
                        <Motion.div
                            key={index} className="time-counter-item hover-scale"
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 200, damping: 15 }}
                            style={{
                                background: unit.accent ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(12px)', padding: unit.accent ? '2rem 1.5rem' : '1.5rem',
                                borderRadius: '20px', textAlign: 'center',
                                minWidth: unit.accent ? '150px' : '130px', flex: unit.accent ? '1 1 150px' : '1 1 130px',
                                border: unit.accent ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                position: 'relative', animation: unit.accent ? 'glow-pulse 2.5s ease-in-out infinite' : 'none',
                            }}
                        >
                            {unit.accent && <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', border: '2px solid rgba(255,255,255,0.4)', animation: 'ripple 2s ease-out infinite', pointerEvents: 'none' }} />}
                            <div style={{ fontSize: unit.accent ? '3.5rem' : '3rem', fontWeight: 'bold', fontFamily: 'var(--font-accent)', lineHeight: 1, color: unit.accent ? '#FFD700' : '#fff' }}>{unit.value || 0}</div>
                            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem', opacity: 0.9 }}>{unit.label}</div>
                            <div style={{ fontSize: '0.95rem', fontFamily: 'var(--font-marathi)', marginTop: '0.2rem', opacity: 0.8, color: '#FFFFF0' }}>{unit.marathi}</div>
                        </Motion.div>
                    ))}
                </div>

                <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,240,0.85)', fontFamily: 'var(--font-subheading)' }}>"Every second is a treasure"</p>
                    <p style={{ fontSize: '1rem', fontFamily: 'var(--font-marathi)', color: 'rgba(255,215,0,0.75)', marginTop: '0.5rem' }}>प्रत्येक क्षण अनमोल</p>
                </Motion.div>
            </div>
        </section>
    );
};

export default TimeCounter;
