import photo from '../../img/Untitled.svg'
import photo1 from '../../img/controller.svg'
import photo2 from '../../img/multiplayer.svg'

export interface IInformation {
    text: string,
    podText?: string
}
export interface IGameplay {
    text: string,
    img?: string
}
export interface ILocalization {
    text: string,
    podtext?: {
        languageEN: string,
        languageUK: string,
        languageDE?: string,
        languageFR?: string,
        languageES?: string,
        languageIT?: string,
        languagePL?: string,
        languageCS?: string,
        languageTR?: string,
        languageSR?: string,
        languagePT?: string,
        languageES_LATAM?: string,
        languageRU?: string,
        languageAR?: string,
        languageZH_S?: string,
        languageZH_T?: string,
        languageJA?: string,
        languageKO?: string,

    }
}


export const minimum: IInformation[] = [
    {
        text: `Минимальные`
    }, {
        text: `Версия ОС:`,
        podText: `Windows 10 / Windows 11`
    }, {
        text: `Процессор:`,
        podText: `AMD Ryzen 5 1600X / Intel Core i5-7600K`
    }, {
        text: `Оперативная память:`,
        podText: `8 GB`
    }, {
        text: `Видеокарта:`,
        podText: `    AMD Radeon RX 580 8GB / NVIDIA GeForce GTX 1060 6GB`
    }, {
        text: `Диск:`,
        podText: `150 GB SSD`
    },

]

export const Recommended: IInformation[] = [
    {
        text: `Рекомендуемые:`
    }, {
        text: `Версия ОС:`,
        podText: `Windows 10 / Windows 11`
    }, {
        text: `Процессор:`,
        podText: `AMD Ryzen 7 3700X / Intel Core i7-9700K`
    }, {
        text: `Оперативная память:`,
        podText: `16 GB`
    }, {
        text: `Видеокарта:`,
        podText: `AMD Radeon RX 5700 XT 8GB / NVIDIA GeForce RTX 2070 SUPER 8GB / NVIDIA GeForce GTX 1080 Ti 11GB`
    }, {
        text: `Диск:`,
        podText: `150 GB SSD`
    },
]

export const Gameplay: IGameplay[] = [
    {
        text: `Геймплей:`
    }, {
        img: photo,
        text: 'Одиночная игра '
    }, {
        img: photo1,
        text: 'Контроллер (полная поддержка)'
    }, {
        img: photo2,
        text: 'Многопользовательский режим (будет добавлен в виде бесплатного обновления)'
    },
]

export const Localization: ILocalization[] = [
    {
        text: 'Локализация:'
    }, {
        text: 'Озвучка и субтитры:',
        podtext: {
            languageEN: 'Английский ',
            languageUK: 'Украинский'
        }
    }, {
        text: 'Только субтитры:',
        podtext: {
            languageDE: 'Немецкий',
            languageFR: 'Французский',
            languageES: 'Испанский',
            languageIT: 'Итальянский',
            languagePL: 'Польский',
            languageCS: 'Чешский',
            languageTR: 'Турецкий',
            languageSR: 'Сербский',
            languagePT: 'Португальский (BR)',
            languageES_LATAM: 'Испанский (LATAM)',
            languageRU: 'Русский',
            languageAR: 'Арабский',
            languageZH_S: 'Китайский (Упрощенный)',
            languageZH_T: 'Китайский (Традиционный)',
            languageJA: 'Японский',
            languageKO: 'Корейский',
            languageEN: 'Английский',
            languageUK: 'Украинский'
        }

    }
]