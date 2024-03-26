import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const neck: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Платизма',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Платизма'],
            [MuscleProperty.engName, 'Platysma'],
            [MuscleProperty.pictures, [require('../images/muscles/neck/Platysma.gif')]],
            [MuscleProperty.begin, ['Фасция надключичной области']],
            [MuscleProperty.end, ['Нижний край челюсти', 'Кожа нижней части лица']],
            [MuscleProperty.functions, ['Натягивает кожу шеи', 'Способствует опусканию нижней челюсти и уголка рта']]
        ]))
    ],
    [
        'Грудино-ключично-сосцевидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Грудино-ключично-сосцевидная мышца'],
            [MuscleProperty.engName, 'Sternocleidomastoid'],
            [MuscleProperty.pictures, [require('../images/muscles/neck/Sternocleidomastoid.gif')]],
            [MuscleProperty.begin, ['Грудина и ключица']],
            [MuscleProperty.end, ['Сосцевидный отросток височной кости']],
            [MuscleProperty.functions, ['Наклоняет голову', 'Поворачивает голову']]
        ]))
    ]
]);
