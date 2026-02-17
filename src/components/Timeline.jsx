import { motion as Motion } from 'framer-motion';
import { Heart, Star, Calendar, Baby } from 'lucide-react';

const timelineData = [
    { year: '2021', title: 'The Vows', marathiTitle: 'लग्नसोहळा', desc: 'Where it all began. March 2nd.', marathiDesc: 'जिथे सर्व काही सुरू झाले. २ मार्च.', icon: <Heart size={24} /> },
    { year: '2021', title: "Adhiraj's Arrival", marathiTitle: 'अधिराजचे आगमन', desc: 'Welcome to the world, Adhiraj. Dec 21st.', marathiDesc: 'चिमुकल्या अधिराजचे स्वागत. २१ डिसेंबर.', icon: <Baby size={24} /> },
    { year: '2023', title: 'Growing Together', marathiTitle: 'एकत्रित वाढ', desc: 'Building foundations and creating memories.', marathiDesc: 'पायाभरणी आणि आठवणींची निर्मिती.', icon: <Calendar size={24} /> },
    { year: '2026', title: 'Golden 5', marathiTitle: 'सुवर्ण ५ वर्षे', desc: 'Celebrating a milestone of love and trust.', marathiDesc: 'प्रेम आणि विश्वासाच्या एका सुंदर टप्प्याचा उत्सव', icon: <Star size={24} /> }
];

const Timeline = () => {
    return (
        <section id="timeline" style={{
            padding: '6rem 1rem',
            background: 'linear-gradient(to bottom, var(--color-bg), #fff0e0)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 className="section-title" style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '2px 2px 5px rgba(0,0,0,0.1)'
                }}>
                    Journey
                </h2>
                <span style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-marathi)',
                    display: 'block',
                    marginTop: '0.5rem',
                    color: 'var(--color-secondary)',
                    letterSpacing: '1px'
                }}>
                    प्रवास
                </span>
            </Motion.div>

            <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div className="timeline-line" style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(to bottom, transparent, var(--color-primary), var(--color-secondary), transparent)',
                    transform: 'translateX(-50%)',
                    borderRadius: '4px'
                }}></div>

                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="timeline-item"
                        style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            paddingBottom: '4rem',
                            position: 'relative',
                            width: '100%'
                        }}
                    >
                        {/* Dot */}
                        <Motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            className="timeline-dot"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                width: '24px',
                                height: '24px',
                                background: 'radial-gradient(circle, var(--color-primary), var(--color-secondary))',
                                borderRadius: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 2,
                                border: '4px solid var(--color-white)',
                                boxShadow: '0 0 15px rgba(197, 160, 89, 0.6)'
                            }}
                        ></Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="timeline-content"
                            style={{
                                width: '45%',
                                textAlign: index % 2 === 0 ? 'right' : 'left',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start'
                            }}
                        >
                            <div className="timeline-icon-wrapper" style={{
                                color: 'var(--color-white)',
                                marginBottom: '1rem',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}>
                                {item.icon}
                            </div>

                            <div style={{
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                padding: '2rem',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                position: 'relative',
                                width: '100%'
                            }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '2.5rem',
                                    color: 'var(--color-secondary)',
                                    marginBottom: '0.5rem',
                                    lineHeight: 1
                                }}>{item.year}</h3>

                                <h4 style={{
                                    fontSize: '1.4rem',
                                    margin: '0.5rem 0',
                                    fontFamily: 'var(--font-subheading)',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}>
                                    {item.title}
                                </h4>
                                <span style={{
                                    fontFamily: 'var(--font-marathi)',
                                    fontSize: '1.1rem',
                                    display: 'block',
                                    color: 'var(--color-primary)',
                                    marginBottom: '1rem'
                                }}>{item.marathiTitle}</span>

                                <p style={{ color: '#555', lineHeight: '1.6' }}>{item.desc}</p>
                                <p style={{
                                    color: '#777',
                                    fontFamily: 'var(--font-marathi)',
                                    fontSize: '1rem',
                                    marginTop: '0.5rem',
                                    borderTop: '1px solid #eee',
                                    paddingTop: '0.5rem'
                                }}>{item.marathiDesc}</p>
                            </div>
                        </Motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
