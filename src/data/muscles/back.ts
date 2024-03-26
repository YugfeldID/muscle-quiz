import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const back: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Широчайшая мышца спины',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Широчайшая мышца спины'],
            [MuscleProperty.engName, 'Latissimus dorsi'],
            [MuscleProperty.pictures, [require('../images/muscles/back/LatissimusDorsi.gif')]],
            [
                MuscleProperty.begin,
                [
                    'Остистые отростки T7 - T12',
                    'Пояснично-грудная фасция L1 - L5',
                    '9 - 12 ребра',
                    'Нижний угол лопатки',
                    'Подвздошный гребень'
                ]
            ],
            [MuscleProperty.end, ['Гребень малого бугорка плечевой кости']],
            [MuscleProperty.functions, ['Приводит плечо', 'Разгибает плечо', 'Опускает плечо', 'Вращает плечо внутрь']]
        ]))
    ],
    [
        'Трапециевидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Трапециевидная мышца'],
            [MuscleProperty.engName, 'Trapezius'],
            [MuscleProperty.pictures,
                [
                    require('../images/muscles/back/TrapeziusAsceding.gif'),
                    require('../images/muscles/back/TrapeziusDesceding.gif')
                ]
            ],
            [
                MuscleProperty.begin,
                [
                    'Верхняя выйная линия',
                    'Наружный затылочный выступ',
                    'Выйная связка',
                    'Остистые отростки С7 - T12 позвонков'
                ]
            ],
            [MuscleProperty.end, ['Латеральная треть ключицы', 'Акромион и ость лопатки']],
            [
                MuscleProperty.functions,
                ['Поднимает лопатку', 'Опускает лопатку', 'Приводит лопатки к позвоночнику', 'Разгибает голову']
            ]
        ]))
    ],
    [
        'Большая ромбовидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Большая ромбовидная мышца'],
            [MuscleProperty.engName, 'Rhomboid major'],
            [MuscleProperty.pictures, [require('../images/muscles/back/RhomboidMajor.gif')]],
            [MuscleProperty.begin, ['Остистые отростки T2 - T5 позвонков']],
            [MuscleProperty.end, ['Медиальный край лопатки']],
            [MuscleProperty.functions, ['Приближает лопатку к позвоночнику', 'Поднимает лопатку']]
        ]))
    ],
    [
        'Малая ромбовидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Малая ромбовидная мышца'],
            [MuscleProperty.engName, 'Rhomboid minor'],
            [MuscleProperty.pictures, [require('../images/muscles/back/RhomboidMinor.gif')]],
            [MuscleProperty.begin, ['Остистые отростки С7 - T1 позвонков']],
            [MuscleProperty.end, ['Медиальный край лопатки']],
            [MuscleProperty.functions, ['Приближает лопатку к позвоночнику', 'Поднимает лопатку']]
        ]))
    ],
    [
        'Верхняя задняя зубчатая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Верхняя задняя зубчатая мышца'],
            [MuscleProperty.engName, 'Serratus posterior superior'],
            [MuscleProperty.pictures, [require('../images/muscles/back/SerratusPosteriorSuperior.gif')]],
            [MuscleProperty.begin, ['Остистые отростки C6 - C7']],
            [MuscleProperty.end, ['2 - 5 ребра']],
            [MuscleProperty.functions, ['Поднимает ребра на вдохе']]
        ]))
    ],
    [
        'Нижняя задняя зубчатая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Нижняя задняя зубчатая мышца'],
            [MuscleProperty.engName, 'Serratus posterior inferior'],
            [MuscleProperty.pictures, [require('../images/muscles/back/SerratusPosteriorInferior.gif')]],
            [MuscleProperty.begin, ['Остистые отростки T11 - L2']],
            [MuscleProperty.end, ['9 - 12 ребра']],
            [MuscleProperty.functions, ['Опускает ребра на выдохе']]
        ]))
    ],
    [
        'Квадратная мышца поясницы',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Квадратная мышца поясницы'],
            [MuscleProperty.engName, 'Quadratus lumborum'],
            [MuscleProperty.pictures, [require('../images/muscles/back/QuadratusLumborum.gif')]],
            [MuscleProperty.begin, ['Гребень подвздошной кости']],
            [MuscleProperty.end, ['12 ребро', 'Поперечные отростки L1 - L4']],
            [MuscleProperty.functions, ['Наклоняет тело в сторону', 'Поддерживает позвоночник']]
        ]))
    ]
]);
