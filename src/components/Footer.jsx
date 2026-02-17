import { Heart, ArrowUp, Instagram, Globe, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{
            background: 'linear-gradient(to bottom, var(--color-secondary), #4a0000)',
            color: 'var(--color-white)',
            padding: '5rem 1rem 2rem',
            textAlign: 'center',
            position: 'relative',
        }}>
            {/* Background Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.1,
                pointerEvents: 'none'
            }}></div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1 }}>

                {/* Brand & Message */}
                <div>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '3.5rem',
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(to right, #C5A059, #FFD700, #C5A059)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Avi & Sujata
                    </h3>
                    <p style={{ opacity: 0.9, fontFamily: 'var(--font-marathi)', fontSize: '1.2rem', letterSpacing: '1px' }}>प्रेम आणि विश्वासाचा हा प्रवास असाच सुरू राहो...</p>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                    {[
                        { href: "https://kshanikadigital.app", icon: Globe, label: "Website", delay: 0 },
                        { href: "https://instagram.com/kshanikadigital", icon: Instagram, label: "Instagram", delay: 0.1 },
                        { href: "mailto:kshanikadigital@gmail.com", icon: Mail, label: "Email", delay: 0.2 }
                    ].map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.label === 'Email' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            style={{
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.9rem',
                                opacity: 0.9,
                                textDecoration: 'none',
                                transition: 'transform 0.3s, opacity 0.3s'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.opacity = '0.9';
                            }}
                        >
                            <div style={{
                                background: 'rgba(255,255,255,0.1)',
                                padding: '12px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <link.icon size={24} color="#FFD700" />
                            </div>
                            <span style={{ fontFamily: 'var(--font-accent)', letterSpacing: '0.5px' }}>{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div style={{
                    width: '100px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)',
                    margin: '0.5rem 0'
                }}></div>

                {/* Copyright */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                        Crafted with <Heart size={16} fill="#FFD700" color="#FFD700" /> by <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Kshanika Digital</span>
                    </p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.5, fontFamily: 'monospace' }}>&copy; {new Date().getFullYear()} Avi & Sujata. All rights reserved.</p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--color-primary), #d4af37)',
                    border: '4px solid var(--color-bg)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    color: 'var(--color-secondary)',
                    transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1.1) rotate(360deg)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 160, 89, 0.5)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
                }}
            >
                <ArrowUp size={24} strokeWidth={3} />
            </button>
        </footer>
    );
};

export default Footer;
