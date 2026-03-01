import { Heart, ArrowUp, Instagram, Globe, Mail } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const containerVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

    return (
        <Motion.footer initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={containerVariants}
            style={{ background: 'linear-gradient(to bottom, #5a0000, var(--color-secondary), #3a0000)', color: 'var(--color-white)', padding: '5rem 1rem 2rem', textAlign: 'center', position: 'relative' }}>

            <div style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
                <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '50px' }} preserveAspectRatio="none">
                    <path d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,10 1440,20 L1440,0 L0,0 Z" fill="#f9f0e0" />
                </svg>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1 }}>
                <Motion.div variants={itemVariants} style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    ✦ — crafted as a digital gift — ✦
                </Motion.div>

                <Motion.div variants={itemVariants}>
                    <h3 className="golden-shimmer" style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', marginBottom: '0.5rem' }}>Avi &amp; Sujata</h3>
                    <p style={{ opacity: 0.85, fontFamily: 'var(--font-marathi)', fontSize: '1.2rem', letterSpacing: '1px' }}>प्रेम आणि विश्वासाचा हा प्रवास असाच सुरू राहो...</p>
                </Motion.div>

                <Motion.div variants={itemVariants} style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', margin: '0.5rem 0' }}>
                    {[{ href: 'https://kshanikadigital.app', icon: Globe, label: 'Website' }, { href: 'https://instagram.com/kshanikadigital', icon: Instagram, label: 'Instagram' }, { href: 'mailto:kshanikadigital@gmail.com', icon: Mail, label: 'Email' }].map((link, index) => (
                        <Motion.a key={index} href={link.href} target={link.label === 'Email' ? '_self' : '_blank'} rel="noopener noreferrer"
                            variants={itemVariants} whileHover={{ y: -5, scale: 1.08, filter: 'drop-shadow(0 0 12px rgba(255,215,0,0.55))' }}
                            style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '0.9rem', opacity: 0.9, textDecoration: 'none' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <link.icon size={24} color="#FFD700" />
                            </div>
                            <span style={{ fontFamily: 'var(--font-accent)', letterSpacing: '0.5px' }}>{link.label}</span>
                        </Motion.a>
                    ))}
                </Motion.div>

                <Motion.div variants={itemVariants} style={{ width: '120px', height: '1px', background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)', margin: '0.5rem 0' }} />

                <Motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                        Crafted with <Motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Heart size={16} fill="#FFD700" color="#FFD700" /></Motion.span> by <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Kshanika Digital</span>
                    </p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.45, fontFamily: 'monospace' }}>&copy; {new Date().getFullYear()} Avi &amp; Sujata. All rights reserved.</p>
                </Motion.div>
            </div>

            <Motion.button onClick={scrollToTop} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }} whileHover={{ scale: 1.15, boxShadow: '0 6px 24px rgba(197,160,89,0.9)' }} whileTap={{ scale: 0.9 }}
                className="animate-pulse-glow"
                style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: 'linear-gradient(135deg, var(--color-primary), #d4af37)', border: '3px solid rgba(255,255,255,0.6)', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', color: 'var(--color-secondary)', zIndex: 999 }}>
                <ArrowUp size={24} strokeWidth={3} />
            </Motion.button>
        </Motion.footer>
    );
};

export default Footer;
