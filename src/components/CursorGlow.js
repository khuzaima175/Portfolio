import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
                glowRef.current.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (glowRef.current) glowRef.current.style.opacity = '0';
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full opacity-0"
            style={{
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 60%)',
                willChange: 'transform',
            }}
        />
    );
};

export default CursorGlow;
