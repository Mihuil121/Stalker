import React from 'react';
import { minimum, Recommended, Gameplay, Localization, IInformation, IGameplay, ILocalization } from './Informath.ts';
import './Informath.css';

const Informath: React.FC = () => {
    return (
        <div className="divflex-in">
            <div className="grid-container">
                <div className="leftInfomath">
                    <div className="card">
                        <h2 className='INFORMH2'>Минимальные системные требования</h2>
                        {minimum.map((item: IInformation, index: number) => (
                            <div key={index} className='flexim'>
                                <strong>{item.text}</strong>
                                {item.podText && <p>{item.podText}</p>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="leftInfomath">
                    <div className="card">
                        <h2 className='INFORMH2'>Рекомендуемые системные требования</h2>
                        {Recommended.map((item: IInformation, index: number) => (
                            <div key={index} className='flexim'>
                                <strong>{item.text}</strong>
                                {item.podText && <p>{item.podText}</p>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="leftInfomath">
                    <div className="card">
                        <h2 className='INFORMH2'>Геймплей</h2>
                        {Gameplay.map((item: IGameplay, index: number) => (
                            <div key={index} className='flexim'>
                                {item.img && <img src={item.img} alt={item.text} className='itemImage' />}
                                <strong>{item.text}</strong>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="leftInfomath">
                    <div className="card">
                        <h2 className='INFORMH2'>Локализация</h2>
                        {Localization.map((item: ILocalization, index: number) => (
                            <div key={index} >
                                <strong>{item.text}</strong>
                                {item.podtext && (
                                    <ul className='podtext'>
                                        {Object.entries(item.podtext).map(([lang, langName]) => (
                                            <li style={{ marginLeft: '1rem' }} key={lang}>{langName}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informath;
