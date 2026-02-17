import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const TimeCounter = () => {
    const startDate = new Date('2021-03-02T00:00:00');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ years, months, days, hours, minutes, seconds });
        };

        const timer = setInterval(calculateTime, 1000);
        calculateTime(); // Initial call

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Years', value: timeLeft.years, marathi: 'वर्षे' },
        { label: 'Months', value: timeLeft.months, marathi: 'महिने' },
        { label: 'Days', value: timeLeft.days, marathi: 'दिवस' },
        { label: 'Hours', value: timeLeft.hours, marathi: 'तास' },
        { label: 'Minutes', value: timeLeft.minutes, marathi: 'मिनिटे' },
        { label: 'Seconds', value: timeLeft.seconds, marathi: 'सेकंद' }
    ];

    return (
        <section style={{
            padding: '5rem 1rem',
            background: 'linear-gradient(135deg, var(--color-primary), #d4af37)',
            color: 'var(--color-white)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 20%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 20%)',
                opacity: 0.6,
                pointerEvents: 'none'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    marginBottom: '3rem',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>
                    Growing Stronger Together
                    <span style={{
                        display: 'block',
                        fontSize: '1.8rem',
                        fontFamily: 'var(--font-marathi)',
                        marginTop: '0.5rem',
                        opacity: 0.9
                    }}>अविरत सहवास</span>
                </h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    {timeUnits.map((unit, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(10px)',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                minWidth: '130px',
                                flex: '1 1 130px',
                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-accent)',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                lineHeight: 1
                            }}>
                                {unit.value || 0}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginTop: '0.5rem',
                                opacity: 0.9
                            }}>
                                {unit.label}
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                fontFamily: 'var(--font-marathi)',
                                marginTop: '0.2rem',
                                opacity: 0.8,
                                color: '#FFFFF0'
                            }}>
                                {unit.marathi}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimeCounter;
