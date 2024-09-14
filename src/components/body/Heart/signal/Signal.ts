import photo from '../../../../img/orange-line.svg'
import photoSab from '../../../../img/poh.svg'

export interface IsingText {
    text: string
};

export const textSign: IsingText[] = [
    {
        text: `НЕ УПУСТИТЕ СИГНАЛ`
    },
    {
        text: `Подпишитесь на рассылку S.T.A.L.K.E.R. и получайте оповещения о заданиях, свежие новости и эксклюзивные рекламные акции прямо на свой КПК по электронной почте.`
    }
];
export const imgSign: string = photo;
export const textPodSign:IsingText[] = [
    {
        text: `Подписаться`
    },
    {
        text: `Я даю согласие на получение новостей
         и рекламных материалов по электронной почте
        от GSC Game World и подтверждаю свой возраст старше 16 лет. `
    },
    {
        text: `Я прочитал и принял Условия и положения
         и Политика конфиденциальности `
    }
]
export const photoSabe:string = photoSab;