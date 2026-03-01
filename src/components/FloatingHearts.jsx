import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SYMBOLS = ['♥', '✦', '✿', '❋', '✾', '♡'];
const GOLD_COLORS = ['rgba(197,160,89,0.25)', 'rgba(220,180,100,0.2)', 'rgba(255,215,0,0.18)'];
const RED_COLORS = ['rgba(180,30,30,0.15)', 'rgba(200,50,50,0.12)'];

const FloatingHearts = () => {
    const [symbols, setSymbols] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        const intervalTime = isMobile ? 1400 : 750;

        const interval = setInterval(() => {
            const id = Math.random();
            const scale = Math.random() * (isMobile ? 0.35 : 0.55) + (isMobile ? 0.25 : 0.45);
            const duration = Math.random() * 6 + (isMobile ? 5 : 6);
            const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            const useRed = Math.random() < 0.25;
            const colorArr = useRed ? RED_COLORS : GOLD_COLORS;
            const color = colorArr[Math.floor(Math.random() * colorArr.length)];
            const drift = (Math.random() - 0.5) * 80;
            const newSymbol = { id, left: Math.random() * 100, scale, duration, symbol, color, drift };

            setSymbols((prev) => {
                const maxItems = isMobile ? 10 : 22;
                const updated = [...prev, newSymbol];
                return updated.length > maxItems ? updated.slice(updated.length - maxItems) : updated;
            });
            setTimeout(() => setSymbols((prev) => prev.filter((s) => s.id !== id)), duration * 1000);
        }, intervalTime);

        return () => { clearInterval(interval); window.removeEventListener('resize', checkMobile); };
    }, [isMobile]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {symbols.map((item) => (
                <Motion.div
                    key={item.id}
                    initial={{ y: '100vh', opacity: 0, x: 0 }}
                    animate={{ y: '-10vh', opacity: [0, 0.85, 0.85, 0], x: [0, item.drift * 0.4, item.drift, item.drift * 0.6, 0] }}
                    transition={{ duration: item.duration, ease: 'linear' }}
                    style={{ position: 'absolute', left: `${item.left}%`, fontSize: `${item.scale * 2.2}rem`, color: item.color, willChange: 'transform, opacity' }}
                >
                    {item.symbol}
                </Motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
