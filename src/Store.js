import { create } from "zustand";
import { links } from './store/LinckStoe/Linck.ts'
import video from './video/preview.webm'
import { videoy } from "./store/Video/video.ts";
import { screenPhoto } from "./components/body/Screene/Screen.ts";

const useStore = create((set, get) => ({
    URL: null,
    count: null,
    Toss: () => { window.open(get().URL) },
    newCount: (id) => set(() => ({ count: id })),
    newUrl: () => {
        const count = get().count;
        const link = links[count]?.link;
        set({ URL: link });
    }

}))

const useStore2 = create((set, get) => ({
    Video: null,
    setVideoRef: (ref) => set({ videoRef: ref }),
    useFullScreen: () => {
        const { videoRef } = get()
        if (videoRef) {
            if (videoRef.requestFullscreen) {
                videoRef.requestFullscreen()
            } else if (videoRef.mozRequestFullScreen) {
                videoRef.mozRequestFullScreen()
            } else if (videoRef.webkitRequestFullscreen) {
                videoRef.webkitRequestFullscreen()
            } else if (videoRef.msRequestFullscreen) {
                videoRef.msRequestFullscreen();
            }
        }
    },
    Video:video

}))

const useScreenAndVideo = create((set,get)=>({
    VideoOne: null,
    count: null,
    newCount: (id) => set(() => ({ count: id })),
    newVideo: () => {
        const count = get().count;
        const vid = videoy[count]?.videos;
        set({ VideoOne: vid });
    }
}))

const useImageStore = create((set, get) => ({
    imageRef: null, 
    fullScreenImage: null, 
    setImageRef: (ref) => set({ imageRef: ref }), 
    openFullScreen: (image) => {
        set({ fullScreenImage: image });
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'contain';
        imgElement.style.position = 'fixed'; 
        imgElement.style.top = '0';
        imgElement.style.left = '0';
        imgElement.style.zIndex = '1000'; 
        imgElement.onclick = () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            set({ fullScreenImage: null });
        };

        document.body.appendChild(imgElement); 

        const removeImage = () => {
            if (!document.fullscreenElement) {
                
                if (imgElement.parentNode) {
                    imgElement.parentNode.removeChild(imgElement);
                }
                document.removeEventListener('fullscreenchange', removeImage);
                set({ fullScreenImage: null });
            }
        };

        document.addEventListener('fullscreenchange', removeImage); 

        if (imgElement.requestFullscreen) {
            imgElement.requestFullscreen(); 
        } else if (imgElement.mozRequestFullScreen) {
            imgElement.mozRequestFullScreen(); 
        } else if (imgElement.webkitRequestFullscreen) {
            imgElement.webkitRequestFullscreen(); 
        } else if (imgElement.msRequestFullscreen) {
            imgElement.msRequestFullscreen(); 
        }
    },
}));

export { useStore, useStore2,useScreenAndVideo,useImageStore };
