import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const shoulderGridle: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Надостная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Надостная мышца'],
            [MuscleProperty.engName, 'Supraspinatus'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/Supraspinatus.gif')]],
            [MuscleProperty.begin, ['Надостная ямка лопатки']],
            [MuscleProperty.end, ['Большой бугорок плечевой кости']],
            [MuscleProperty.functions, ['Отводит плечо', 'Стабилизирует плечевой сустав']]
        ]))
    ],
    [
        'Подостная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Подостная мышца'],
            [MuscleProperty.engName, 'Infraspinatus'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/Infraspinatus.gif')]],
            [MuscleProperty.begin, ['Подостная ямка лопатки']],
            [MuscleProperty.end, ['Большой бугорок плечевой кости']],
            [MuscleProperty.functions, ['Вращает плечо наружу', 'Стабилизирует плечевой сустав']]
        ]))
    ],
    [
        'Малая круглая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Малая круглая мышца'],
            [MuscleProperty.engName, 'Teres minor'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/TeresMinor.gif')]],
            [MuscleProperty.begin, ['Латеральный край лопатки']],
            [MuscleProperty.end, ['Большой бугорок плечевой кости']],
            [MuscleProperty.functions, ['Вращает плечо наружу', 'Стабилизирует плечевой сустав']]
        ]))
    ],
    [
        'Большая круглая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Большая круглая мышца'],
            [MuscleProperty.engName, 'Teres major'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/TeresMajor.gif')]],
            [MuscleProperty.begin, ['Нижний угол лопатки']],
            [MuscleProperty.end, ['Гребень малого бугорка плечевой кости']],
            [MuscleProperty.functions, ['Приводит плечо', 'Вращает плечо внутрь']]
        ]))
    ],
    [
        'Подлопаточная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Подлопаточная мышца'],
            [MuscleProperty.engName, 'Subscapularis'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/Subscapularis.gif')]],
            [MuscleProperty.begin, ['Подлопаточная ямка лопатки']],
            [MuscleProperty.end, ['Малый бугорок плечевой кости']],
            [MuscleProperty.functions, ['Вращает плечо внутрь', 'Стабилизирует плечевой сустав']]
        ]))
    ],
    [
        'Дельтовидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Дельтовидная мышца'],
            [MuscleProperty.engName, 'Deltoid'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder_gridle/Deltoid.gif')]],
            [MuscleProperty.begin, ['Латеральная треть ключицы', 'Акромион', 'Ость лопатки']],
            [MuscleProperty.end, ['Дельтовидная бугристость плечевой кости']],
            [
                MuscleProperty.functions,
                [
                    'Отводит плечо',
                    'Участвует в разгибании плеча',
                    'Участвует в сгибании плеча',
                    'Участвует в вращении плеча'
                ]
            ]
        ]))
    ]
]);
