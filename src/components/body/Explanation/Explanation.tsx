import React, { useState,CSSProperties } from 'react'
import { ShoppingCart } from 'lucide-react';
import { IExplPhoto, photoExpl, textExpl, ITextExpl } from './explanation.ts'
import './Expl.css'
import { linkDom, ILinl } from '../../Head/head.ts'
import photoSteam from '../../../img/400px-Steam-logo-1436366131.png'
import useStore from '../../../Store.js';
import List from './list/list.tsx';
const Explanation: React.FC = () => {
    const [hoverElement, setHoverElement] = useState<JSX.Element | null>(null)
    const [isHovered, setIsHovered] = useState(false);
    const { newCount, newUrl, Toss } = useStore()

    const handleClick = (id: number) => {
        newCount(id);
        newUrl();
        Toss();
    }

    const handleHover = () => {
        setHoverElement(<List />);
        setIsHovered(true);
    }

    const handleHoverLeave = () => {
        setIsHovered(false);
        setTimeout(() => {
            if (!isHovered) {
                setHoverElement(null);
            }
        }, 300);
    };

    const hoverElementStyle: CSSProperties = {
        opacity: isHovered ? 1 : 0,
        visibility: isHovered ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1000
    };

    return (
        <div>
            <div className="Expl-div">
                <div className="expl-content">
                    <div className="img-expl">
                        {photoExpl.map((Photo: IExplPhoto, index: number) => (
                            <img key={index} src={Photo.photo} alt={Photo.alt} />
                        ))}
                    </div>
                    <div className="button-expl">
                        {textExpl.map((text: ITextExpl, index: number) => (
                            index === 0 ? (
                                <div key={index} className="button01" onClick={() => handleClick(0)}>
                                    <button className='button0'>
                                        <img src={photoSteam} alt='photoSteam' style={{ width: '1.2rem' }} />
                                        <p className='button0-text'>
                                            {text.text}
                                        </p>
                                    </button>
                                </div>
                            ) : (
                                <div key={index} className="button01" style={{ position: 'relative' }}>
                                    <button className='button1' onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                                        <p className='button1-text'>
                                            {text.text}
                                        </p>
                                    </button>
                                    <div 
                                        style={hoverElementStyle}
                                        onMouseEnter={handleHover} 
                                        onMouseLeave={handleHoverLeave}
                                    >
                                        {hoverElement}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explanation