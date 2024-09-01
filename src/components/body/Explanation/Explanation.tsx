import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { IExplPhoto, photoExpl, textExpl, ITextExpl } from './explanation.ts'
import './Expl.css'
import { linkDom, ILinl } from '../../Head/head.ts'
import photoSteam from '../../../img/400px-Steam-logo-1436366131.png'

const Explanation: React.FC = () => {
    return (
        <div>
            <div className="Expl-div">
                <div className="expl-content">

                    <div className="img-expl">
                        {photoExpl.map((Photo: IExplPhoto, index: number) => (
                            <img src={Photo.photo} alt={Photo.alt} />
                        ))}
                    </div>
                    <div className="button-expl">
                        {textExpl.map((text: ITextExpl, index: number) => (
                            (index === 0 ? (
                                <div className="button01" onClick={() => window.open(linkDom[0].link)}>
                                    <button className='button0'>
                                        <img src={photoSteam} alt='photoSteam' style={{width:'1.2rem'}}/>
                                        <p className='button0-text'>
                                            {text.text}
                                        </p>

                                    </button>
                                </div>
                            ) : (
                                <div className="button01">
                                    <button className='button1'>
                                        {text.text}
                                    </button>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explanation