import React, { useState, useEffect } from 'react'
import { photo, Photo, ILinl, linkDom } from './head.ts'
import { ShoppingCart } from 'lucide-react';
import './HeadStile.css'
import { useStore } from '../../Store.js';
import BorerOre from '../../img/orange-preorder.svg'

interface IHead {
    transform: string,
}
interface IBackground {
    background: string
}

const Head: React.FC = () => {
    const { Toss, newCount, count, newUrl } = useStore()
    const [background, setBackground] = useState<IBackground>({
        background: 'rgba(0, 0, 0, 0)'
    })
    const [mous, setMous] = useState<IHead>({
        transform: 'translateX(0)'
    })
    const hendelMous = () => {
        setMous({
            transform: 'translateX(+5px)'
        })
    }
    const hendelMousLeave = () => {
        setMous({
            transform: 'translateX(0)'
        })
    }

    useEffect(() => {
        const ColorBackground = () => {
            const scrollPosition: number = document.documentElement.scrollTop;
            scrollPosition < 2 ? setBackground({
                background: 'rgba(0, 0, 0, 0)'
            }) : setBackground({
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 90%)'
            })
        }
        window.addEventListener('scroll', ColorBackground)
        return () => {
            window.removeEventListener('scroll', ColorBackground);
        }

    }, [])

    const hendelClick = (id: number) => {
        newCount(id);
        newUrl();
        Toss();
    }

    return (
        <div>
            <div className='head' style={background}>
                <div className="head-left">
                    <div className="head-img" style={{ display: 'flex' }}>
                        {photo.map((Itext: Photo, index: number) => (
                            <div key={index} className='imgHead'>
                                <img src={Itext.img} alt={Itext.text} className={index === 0 ? `gsc` : `stalker`} />
                            </div>
                        ))}
                    </div>
                    <div className="scrol" style={{ color: 'white' }}>
                        <p className='text-head '>Пояснение</p>
                        <p className='text-head'> что это </p>
                        <p className='text-head'>Screenshots</p>
                        <p className='text-head'>Системные требования</p>

                    </div>
                </div>
                <div className='icon-head' onMouseEnter={hendelMous} onMouseLeave={hendelMousLeave} id='1' onClick={() => {
                    hendelClick(0);

                }}>
                    <div className="svg-1" style={{ display: "flex" }}>

                        <div className="svg" style={{ transform: mous.transform }}>
                            <ShoppingCart />
                        </div>
                    </div>
                    <p style={{ margin: '0.5rem', }}>оформить предзаказ  </p>

                </div>
            </div>

        </div>
    )
}

export default Head