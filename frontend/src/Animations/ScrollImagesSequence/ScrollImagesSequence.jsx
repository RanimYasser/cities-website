import React, { useState, useEffect, useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

export default function ScrollImagesSequence() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const theme = useTheme();
    const frameCount = 150;
    const images = useRef([]);
    const lastScrollRef = useRef(0);
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    // ✅ Preload Images
    useEffect(() => {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(4, '0'); // Format 0001 to 0150
            img.src = `/Media/Images/hero/${frameNumber}.png`;
            img.onload = () => (images.current[i - 1] = img);
            img.onerror = () => console.error('Failed to load:', img.src);
        }
    }, []);

    // ✅ Update Canvas Frame
    const updateImage = (index) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context || !images.current[index]) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images.current[index], 0, 0, canvas.width, canvas.height);
    };

    // ✅ Handle Scroll Event
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const adjustedScrollFraction = scrollFraction * 4; // Slow down effect
            const frameIndex = Math.min(frameCount - 1, Math.floor(adjustedScrollFraction * frameCount));

            requestAnimationFrame(() => updateImage(frameIndex));

            // Determine scroll direction
            setVisible(scrollTop > lastScrollRef.current);
            lastScrollRef.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ Handle Resize Event
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            canvas.width = Math.min(window.innerWidth, isMobile ? 400 : 800);
            canvas.height = isMobile ? 300 : 500;
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return (
        <div style={{ backgroundColor: 'black' }}>
            {/* ✅ Scroll Tracking Wrapper */}
            <div
                ref={containerRef}
                style={{
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* ✅ Canvas for Image Sequence */}
                <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />

                {/* ✅ Dark Gradient Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.main})`,
                    }}
                />

                {/* ✅ Left-Aligned Text Content */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '8%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        textAlign: 'left',
                        maxWidth: '30%',
                    }}
                >
                    <h1 style={{ fontSize: '2rem', lineHeight: '1.3' }}>
                        EXPLORE KAUST CITY <br /> FIRST DIGITAL TWIN <br /> USING GAMING ENGINES
                    </h1>

                    <p style={{ fontSize: '1rem', maxWidth: '80%', lineHeight: '1.6', opacity: 0.9 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* ✅ Styled Buttons */}
                    <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                        {/* Transparent Plus Button */}
                        <button
                            style={{
                                width: '173px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                gap: '8px',
                                transition: 'background 0.3s ease-in-out',
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>+</span> LEARN MORE
                        </button>

                        {/* Transparent Chevron Button */}
                        <button
                            style={{
                                width: '235px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                gap: '8px',
                                transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
                            }}
                        >
                            <ArrowForwardIcon style={{ fontSize: '20px' }} /> VIEW VIRTUAL MODEL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
