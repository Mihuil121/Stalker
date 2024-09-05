import { create } from "zustand";
import {links} from './store/LinckStoe/Linck.ts'

const useStore = create((set, get) => ({
    URL: null,
    count: null,
    Toss: () => { window.open(get().URL) },
    newCount: (id) => set(()=>({ count: id })),
    newUrl: () => {
        const count = get().count; 
        const link = links[count]?.link;
        set({ URL: link }); 
    }
    
}))

export default useStore;