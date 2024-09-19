import photo from '../../../img/2212-02.jpg'
import photo2 from '../../../img/2212-x01.jpg'
import photo3 from '../../../img/2212-x03.jpg'
import photo4 from '../../../img/2311-02.jpg'
import photo5 from '../../../img/2311-04.jpg'
import photo6 from '../../../img/2404-01.jpg'
import photo7 from '../../../img/2404-03.jpg'
import photo8 from '../../../img/radiation-line.svg'

export interface IscreenPhoto{
    screen:string
}

export const screenPhoto:IscreenPhoto[] = [
    {
        screen: photo
    }, {
        screen: photo2
    }, {
        screen: photo3
    }, {
        screen: photo4
    }, {
        screen: photo5
    }, {
        screen: photo6
    }, {
        screen: photo7
    },
]

export interface ItextScreen{
    text:string, 
    img:string,
}

export const textScreen = {
  text:`Screenshots`,
  img:photo8
}