import React, { useState } from 'react'
import { photo, Photo, ILinl, linkDom } from './head.ts'
import { ShoppingCart } from 'lucide-react';
import './HeadStile.css'

interface IHead {
    transform: string,
}

const Head: React.FC = () => {
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
    return (
        <div>
            <div className='head'>
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
                <div className='icon-head' onMouseEnter={hendelMous} onMouseLeave={hendelMousLeave} onClick={() => window.open(linkDom[0].link)}>
                    <div className="svg-1">
                        <div className="svg" style={{ transform: mous.transform }}>
                            <ShoppingCart />
                        </div>
                    </div>
                    <p style={{ margin: '0.5rem', }}>оформить предзаказ </p>
                </div>
            </div>

        </div>
    )
}

export default Head