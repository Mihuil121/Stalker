import React, { useEffect, useRef } from 'react'
import './HeartSryle.css'
import { heartText, IHeartText } from './Heart.ts'
import photo from '../../../img/radiation-line.svg'
import { useStore2 } from '../../../Store.js'

const Heart: React.FC = () => {

    const videoRef: any = useRef()
    const { setVideoRef, useFullScreen, Video } = useStore2();

    useEffect(() => {
        setVideoRef(videoRef.current)
    }, [setVideoRef])

    return (
        <div>
            <div className="Heart">
                <div className="mainH">
                    <h1 className='mainH-text'>
                        {heartText[0].text}
                    </h1>
                    <img src={photo} alt={photo} className='imgH' />
                </div>
                <div className="Heart-text-video">
                    <div className="textH">
                        {heartText.map((text: IHeartText, index: number) => (
                            index !== 0 ? (
                                <div className="text-heartText" key={index}>
                                    {
                                        index !== 1 ? (
                                            <div className="text-heartText-1" style={{ color: 'rgb(255, 190, 105)' }}>
                                                <ul>
                                                    <li>
                                                        <p>
                                                            {text.text}
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className="text-heartText-2" style={{ color: 'white' }}>
                                                <p>
                                                    {text.text}
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (<div key={index}></div>)
                        ))}

                    </div>
                    <video
                        ref={videoRef}
                        className='video'
                        autoPlay loop muted
                        onClick={useFullScreen}
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Heart;
