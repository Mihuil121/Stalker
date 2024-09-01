import { create } from "zustand";

const useStore = create((set, get) => ({
    URL: 'https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chornobyl/',
    Toss: () => { window.open(get().URL) }
}))

export default useStore;