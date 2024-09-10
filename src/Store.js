import { create } from "zustand";
import { links } from './store/LinckStoe/Linck.ts'
import video from './video/preview.webm'

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

export { useStore, useStore2 };
