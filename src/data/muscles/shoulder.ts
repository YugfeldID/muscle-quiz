import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const shoulder: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Клювовидно-плечевая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Клювовидно-плечевая мышца'],
            [MuscleProperty.engName, 'Coracobrachialis'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder/Coracobrachialis.gif')]],
            [MuscleProperty.begin, ['Клювовидный отросток лопатки']],
            [MuscleProperty.end, ['Средняя треть медиальной поверхности плечевой кости']],
            [MuscleProperty.functions, ['Приводит плечо', 'Сгибает плечо']]
        ]))
    ],
    [
        'Двуглавая мышца плеча',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Двуглавая мышца плеча'],
            [MuscleProperty.engName, 'Biceps brachii'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder/BicepsBrachii.gif')]],
            [MuscleProperty.begin, ['Надсуставной бугорок лопатки', 'Клювовидный отросток лопатки']],
            [MuscleProperty.end, ['Бугристость лучевой кости']],
            [
                MuscleProperty.functions,
                [
                    'Сгибает предплечье',
                    'Супинирует предплечье',
                    'Сгибает руку в плечевом суставе',
                    'Отводит и вращает руку в внутрь'
                ]
            ]
        ]))
    ],
    [
        'Плечевая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Плечевая мышца'],
            [MuscleProperty.engName, 'Brachialis'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder/Brachialis.gif')]],
            [MuscleProperty.begin, ['Передняя поверхность плечевой кости']],
            [MuscleProperty.end, ['Бугристость локтевой кости']],
            [MuscleProperty.functions, ['Сгибает предплечье']]
        ]))
    ],
    [
        'Трёхглавая мышца плеча',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Трёхглавая мышца плеча'],
            [MuscleProperty.engName, 'Triceps brachii'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder/TricepsBrachii.gif')]],
            [
                MuscleProperty.begin,
                [
                    'Латеральная и медиальная головки: задняя поверхность плечевой кости',
                    'Длинная головка: подсуставной бугорок'
                ]
            ],
            [MuscleProperty.end, ['Отросток локтевой кости']],
            [
                MuscleProperty.functions,
                ['Разгибает предплечье', 'Длинная головка стабилизирует плечевой сустав', 'Разгибает и приводит плечо']
            ]
        ]))
    ],
    [
        'Локтевая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Локтевая мышца'],
            [MuscleProperty.engName, 'Anconeus'],
            [MuscleProperty.pictures, [require('../images/muscles/shoulder/Anconeus.gif')]],
            [MuscleProperty.begin, ['Латеральный надмыщелок плечевой кости']],
            [MuscleProperty.end, ['Отросток и задняя поверхность локтевой кости']],
            [MuscleProperty.functions, ['Разгибает предплечье', 'Стабилизирует локтевой сустав']]
        ]))
    ]
]);
