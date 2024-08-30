import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { IExplPhoto, photoExpl, textExpl, ITextExpl } from './explanation.ts'
import './Expl.css'

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
                                <div className="button01">
                                    <button className='button0'>
                                        <p className='button0-text'>
                                        {text.text}
                                        </p>
                                       
                                    </button>
                                </div>
                            ) : (
                                <div className="button01">
                                    <button  className='button1'>
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