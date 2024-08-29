import photo1 from '../../img/gsc_logo_white.svg'
import photo2 from '../../img/S2_logo.webp'

export interface Photo {
    img: string,
    text: string
}

export interface ILinl {
    link: string
}

export const photo: Photo[] = [
    {
        img: photo1,
        text: 'photo1'
    }, {
        img: photo2,
        text: 'photo2'
    },
]

export const linkDom: ILinl[] = [
    {
        link: 'https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chornobyl/'
    }

]