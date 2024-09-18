import photo1 from '../../../img/zone-1.jpg'
import photo2 from '../../../img/zone-2.jpg'
import photo3 from '../../../img/zone-3.jpg'
import photo4 from '../../../img/zone-4.jpg'
import video from '../../../video/01.mp4'
import video2 from '../../../video/02.mp4'
import video3 from '../../../video/03.mp4'
import video4 from '../../../video/04.mp4'

export interface IphotoVideo {
    photo: string,
    video: string
}

export interface ItextWhat{
    text:string
}

export const photoVideo: IphotoVideo[] = [
    {
        photo: photo1,
        video: video
    }, {
        photo: photo2,
        video: video2
    }, {
        photo: photo3,
        video: video3
    }, {
        photo: photo4,
        video: video4
    },
]

export const textWhat: ItextWhat[] = [
    {
      text: `THE HEART OF CHORNOBYL`
    },
    {
      text: `Сердце Чернобыля никогда не билось так громко, как сейчас. Зона зовет сталкеров, готовых погрузиться в нелинейное путешествие по зловещему открытому миру в восточноевропейском постапокалиптическом сеттинге.`
    },
    {
      text: `S.T.A.L.K.E.R. 2: Сердце Чернобыля использует весь потенциал Unreal Engine 5, а также технологии захвата движения и фотограмметрии, чтобы обеспечить вам графику, устанавливающую новые стандарты, и полное погружение в игровой мир. Продвинутая система искусственного интеллекта заставит сталкера использовать тактический подход против многочисленных врагов, бросая вызов даже самым закаленным игрокам и удерживая их интерес. Система симуляции жизни A-Life 2.0 создает целостную живую среду, где действия игрока влияют на мир Зоны.`
    },
    {
      text: `Опасные мутанты и смертельные аномалии будут не единственными препятствиями на вашем пути. Вы почувствуете все тяготы новой сталкерской жизни в поисках и потреблении редких и ценных припасов — еды, напитков, медикаментов, алкоголя и т.д. Иммерсивные механики выживания обогатят игровой процесс на пути через разветвленный сюжет.`
    }
  ];