import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function ObjectCarousel({ items, withArrows = true, withDots = false }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', textAlign: 'center' }}>
            {/* ✅ Object Wrapper (Image or Component) */}
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${items.length * 100}%`,
                }}
            >
                {items.map((item, index) => (
                    <div key={index} style={{ width: '10%', flexShrink: 0 }}>
                        {typeof item === 'string' ? <img src={item} alt="" style={{ width: '100%', height: 'auto' }} /> : item}
                    </div>
                ))}
            </div>

            {/* ✅ Custom Navigation Arrows (Matches Image Style) */}
            {withArrows && (
                <>
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '20px',
                            transform: 'translateY(-50%)',
                            background: '#002D1F', // Dark Green Background
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '15px',
                            borderRadius: '50%',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50px',
                            height: '50px',
                            transition: 'transform 0.3s ease-in-out',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        }}
                    >
                        <span style={{ marginRight: '6px', fontSize: '12px' }}>••••</span>
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '20px',
                            transform: 'translateY(-50%)',
                            background: '#002D1F', // Dark Green Background
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '15px',
                            borderRadius: '50%',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50px',
                            height: '50px',
                            transition: 'transform 0.3s ease-in-out',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        }}
                    >
                        <FaArrowRight />
                        <span style={{ marginLeft: '6px', fontSize: '12px' }}>••••</span>
                    </button>
                </>
            )}

            {/* ✅ Dots Navigation */}
            {withDots && (
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: currentIndex === index ? 'white' : 'gray',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// ✅ PropTypes
ObjectCarousel.propTypes = {
    items: PropTypes.array.isRequired, // Accepts either image URLs or React components
    withArrows: PropTypes.bool,
    withDots: PropTypes.bool,
};
