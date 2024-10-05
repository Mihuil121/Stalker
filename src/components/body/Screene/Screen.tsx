// Screen.tsx
import React, { useEffect, useRef } from 'react';
import { screenPhoto, IscreenPhoto } from './Screen.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ScreenStyle.css';
import { useImageStore } from '../../../Store.js'; 

type TScreen = IscreenPhoto;

const Screen: React.FC<TScreen> = () => {
    const { setImageRef, openFullScreen } = useImageStore();
    const imageRef = useRef(null); 

    useEffect(() => {
        setImageRef(imageRef.current); 
    }, [setImageRef]);

    const handleClick = (image: string) => {
        openFullScreen(image);
    };

    return (
        <div className='bac-Screen'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={2.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="Screen-content">
                    {screenPhoto.map((photo: IscreenPhoto, index: number) => (
                        <SwiperSlide key={index}>
                            <img
                                ref={imageRef} 
                                src={photo.screen}
                                alt=""
                                onClick={() => handleClick(photo.screen)}
                                className='photo131' 
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Screen;
