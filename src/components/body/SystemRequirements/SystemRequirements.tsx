import React from 'react'
import photo from '../../../img/radiation-line.svg'
import './system.css'
import Informath from '../../informath/Informath.tsx'

export const SystemRequirements: React.FC = () => {
    return (
        <div className='bac2'>
            <div className="SystemRequirements">
                <h2 className="textS">
                    SYSTEM REQUIREMENTS
                </h2>
                <img className='PhotoW' src={photo} alt="photo" />
            </div>
            <div style={{marginTop:'2rem'}}>
                <Informath />
            </div>
        </div>
    )
}
