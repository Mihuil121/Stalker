import React, { useState } from 'react';
import './WhatStyle.css';
import { textWhat, ItextWhat, photoVideo, IphotoVideo } from './what.ts';
import photo from '../../../img/radiation-line.svg';
import { useScreenAndVideo } from '../../../Store.js';

type TWhat = ItextWhat & IphotoVideo;

const What: React.FC<TWhat> = () => {
    const { VideoOne, newCount, newVideo } = useScreenAndVideo();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        newCount(index);  
        newVideo();       
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); 
    };

    return (
        <div>
            <div className="bacgraundW">
                <div className="what-content">
                    <div className="textWat">
                        <p className="textWhat">{textWhat[0].text}</p>
                        <img src={photo} alt="photo" className="PhotoW" />
                    </div>
                    <div className="contentWhat">
                        <div className="img-video">
                            {photoVideo.length > 0 && (
                                <div className="photo-container">
                                    {photoVideo.slice(0, 2).map((videoPhoto: IphotoVideo, index: number) => (
                                        <div
                                            className="photo"
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIndex === index ? (
                                                <video
                                                    src={VideoOne}  
                                                     className='videoWhat'
                                                     
                                                    autoPlay
                                                    loop
                                                    muted
                                                />
                                            ) : (
                                                <img src={videoPhoto.photo} alt="videoPhoto" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {photoVideo.length > 2 && (
                                <div className="additional-photos">
                                    <div className="photo-container">
                                        {photoVideo.slice(2, 4).map((videoPhoto: IphotoVideo, index: number) => (
                                            <div
                                                className="photo"
                                                key={index + 2}  
                                                onMouseEnter={() => handleMouseEnter(index + 2)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {hoveredIndex === index + 2 ? (
                                                    <video
                                                        src={VideoOne}
                                                         className='videoWhat'
                                                         
                                                        autoPlay
                                                        loop
                                                        muted
                                                    />
                                                ) : (
                                                    <img src={videoPhoto.photo} alt="videoPhoto" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    {photoVideo.length > 4 && (
                                        <div
                                            className="photo"
                                            key={4}
                                            onMouseEnter={() => handleMouseEnter(4)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIndex === 4 ? (
                                                <video
                                                    src={VideoOne}
                                                     className='videoWhat'
                                                     
                                                    autoPlay
                                                    loop
                                                    muted
                                                />
                                            ) : (
                                                <img src={photoVideo[4].photo} alt="videoPhoto" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="text-What">
                            {textWhat.map((text: ItextWhat, index: number) => (
                                index === 0 ? null : (
                                    <div className="divpop" key={index}>
                                        {text.text}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default What;
