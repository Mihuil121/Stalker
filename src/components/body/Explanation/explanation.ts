import photoStalker from '../../../img/S2_logo.webp'

export interface IExplPhoto{
    photo:string,
    alt:string
}
export interface ITextExpl{
    text:string
}

export const photoExpl:IExplPhoto[] = [
    {
        photo:photoStalker,
        alt:'photoStalker'
    }
]

export const textExpl:ITextExpl[] = [
    {
        text:'оформить предзаказ'
        
    },
    {
        text:'в желаемое!'
        
    },
]