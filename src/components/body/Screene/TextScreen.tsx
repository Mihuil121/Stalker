import React from 'react'
import { screenPhoto, IscreenPhoto, textScreen, ItextScreen } from './Screen.ts'
import Screen from './Screen.tsx'
import './ScreenStyle.css'

type TTextScreen = ItextScreen

const TextScreen: React.FC<TTextScreen> = () => {
    return (
        <div className='bac'>
            <div className="screen-text">
                <p className='textS'>
                    {textScreen.text}
                </p>
                <img src={textScreen.img} alt={`${textScreen.img}`} />
            </div>
            <Screen />
        </div>
    )
}

export default TextScreen