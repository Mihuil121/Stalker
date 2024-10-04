import React, { useState, useEffect } from 'react';
import { photo, Photo } from './head.ts';
import { ShoppingCart } from 'lucide-react';
import './HeadStile.css';
import { useStore } from '../../Store.js';
import Snowfall from 'react-snowfall';

interface IHead {
    transform: string;
}

interface IBackground {
    background: string;
}

interface HeadProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    explanationRef: React.RefObject<HTMLElement>;
    heartRef: React.RefObject<HTMLElement>;
    whatRef: React.RefObject<HTMLElement>;
    systemRequirementsRef: React.RefObject<HTMLElement>;
}

const Head: React.FC<HeadProps> = ({
    scrollToSection,
    explanationRef,
    heartRef,
    whatRef,
    systemRequirementsRef,
}) => {
    const { Toss, newCount, newUrl } = useStore();
    const [background, setBackground] = useState<IBackground>({
        background: 'rgba(0, 0, 0, 0)',
    });
    const [mous, setMous] = useState<IHead>({
        transform: 'translateX(0)',
    });

    const handleMouseEnter = () => {
        setMous({
            transform: 'translateX(+5px)',
        });
    };

    const handleMouseLeave = () => {
        setMous({
            transform: 'translateX(0)',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition: number = document.documentElement.scrollTop;
            setBackground({
                background: scrollPosition < 2
                    ? 'rgba(0, 0, 0, 0)'
                    : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 90%)',
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClick = (id: number) => {
        newCount(id);
        newUrl();
        Toss();
    };

    return (
        <div>
            <Snowfall snowflakeCount={3} />
            <div className='head' style={background}>
                <div className="head-left">
                    <div className="head-img" style={{ display: 'flex' }}>
                        {photo.map((Itext: Photo, index: number) => (
                            <div key={index} className='imgHead'>
                                <img src={Itext.img} alt={Itext.text} className={index === 0 ? `gsc` : `stalker`} />
                            </div>
                        ))}
                    </div>
                    <div className="scrol" style={{ color: 'white', cursor: 'pointer' }}>
                        <p className='text-head' onClick={() => scrollToSection(explanationRef)}>О Зоне</p>
                        <p className='text-head' onClick={() => scrollToSection(heartRef)}>Суть игры</p>
                        <p className='text-head' onClick={() => scrollToSection(whatRef)}>Взгляд изнутри</p>
                        <p className='text-head' onClick={() => scrollToSection(systemRequirementsRef)}>Системные требования</p>
                    </div>
                </div>
                <div className='icon-head' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='1' onClick={() => handleClick(0)}>
                    <div className="svg-1" style={{ display: "flex" }}>
                        <div className="svg" style={{ transform: mous.transform }}>
                            <ShoppingCart />
                        </div>
                    </div>
                    <p style={{ margin: '0.5rem' }}>оформить предзаказ</p>
                </div>
            </div>
        </div>
    );
};

export default Head;
