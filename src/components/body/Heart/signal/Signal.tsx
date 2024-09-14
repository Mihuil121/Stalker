import React from 'react'
import { textSign, imgSign, textPodSign, IsingText, photoSabe } from './Signal.ts'
import './SignalStyle.css'

const Signal: React.FC = () => {
    return (
        <div className='signal-container'>
            <div className="signal-content">
                <div className="block">
                    {textSign.map((text: IsingText, index: number) => (
                        <div className="Signal-text" key={index}>
                            <p className={index === 0 ? 'TextSign' : 'TextSing1'}>
                                {text.text}
                            </p>
                            <img src={index === 0 ? imgSign : 'k'} className={index === 0 ? 'imgSign' : 'k'} alt="" />
                        </div>
                    ))}
                </div>
                <div className="input-enter">
                    <div className="input-back">
                        <div className="input-photo">
                            <input type="text" className='textInput' />
                            <div className="icon-text">
                                <img src={photoSabe} alt="photoSabe" className='imgSi' />
                                <p>
                                    {textPodSign[0].text}
                                </p>
                            </div>
                        </div>
                        <div className="textI">
                            {textPodSign.map((PodSign: IsingText, index: number) => (
                                index === 0 ? (
                                    <p key={index}></p>
                                ) : (
                                    <form key={index}>
                                        <label className="custom-checkbox">
                                            <input type="checkbox" name="agreement" value="Согласен" />
                                            <span className="square"></span>
                                            <p className='PodSign'>{PodSign.text}</p>
                                        </label><br />
                                    </form>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signal