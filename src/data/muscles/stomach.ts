import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const stomach: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Прямая мышца живота',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Прямая мышца живота'],
            [MuscleProperty.engName, 'Rectus abdominis'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/RectusAbdominis.gif')]],
            [MuscleProperty.begin, ['Лобковая кость']],
            [MuscleProperty.end, ['Грудина и хрящи 5 - 7 ребер']],
            [MuscleProperty.functions, ['Сгибает позвоночник', 'Содействует дыханию', 'Удерживает внутренние органы']]
        ]))
    ],
    [
        'Поперечная мышца живота',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Поперечная мышца живота'],
            [MuscleProperty.engName, 'Transversus abdominis'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/TransversusAbdominis.gif')]],
            [MuscleProperty.begin, ['Хрящи 7 - 12 ребер', 'Пояснично-грудная фасция', 'Подвздошная кость']],
            [MuscleProperty.end, ['Белая линия живота', 'Лобковая кость']],
            [MuscleProperty.functions, ['Стабилизирует туловище и позвоночник', 'Участвует в поворачивании туловща']]
        ]))
    ],
    [
        'Наружная косая мышца живота',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Наружная косая мышца живота'],
            [MuscleProperty.engName, 'External oblique'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/ExternalOblique.gif')]],
            [MuscleProperty.begin, ['5 - 12 ребра']],
            [MuscleProperty.end, ['Белая линия живота', 'Лобковая кость']],
            [MuscleProperty.functions, ['Участвует в сгибании и вращении туловища', 'Удерживает внутренние органы']]
        ]))
    ],
    [
        'Внутренняя косая мышца живота',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Внутренняя косая мышца живота'],
            [MuscleProperty.engName, 'Internal oblique'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/InternalOblique.gif')]],
            [MuscleProperty.begin, ['Подвздошная кость', 'Пояснично-грудная фасция']],
            [MuscleProperty.end, ['10 -12 ребра', 'Белая линия живота']],
            [MuscleProperty.functions, ['Участвует в сгибании и вращении туловища', 'Удерживает внутренние органы']]
        ]))
    ],
    [
        'Большая грудная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Большая грудная мышца'],
            [MuscleProperty.engName, 'Pectoralis major'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/PectoralisMajor.gif')]],
            [MuscleProperty.begin, ['Грудина', 'Хрящи 2 - 6 ребер', 'Ключица']],
            [MuscleProperty.end, ['Гребень большого бугорка плечевой кости']],
            [MuscleProperty.functions, ['Сгибает и приводит плечо', 'Вращает плечо внутрь']]
        ]))
    ],
    [
        'Малая грудная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Малая грудная мышца'],
            [MuscleProperty.engName, 'Pectoralis minor'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/PectoralisMinor.gif')]],
            [MuscleProperty.begin, ['3 - 5 ребра']],
            [MuscleProperty.end, ['Клювовидный отровсток']],
            [
                MuscleProperty.functions,
                [
                    'Тянет клювовидный отросток лопатки вперёд и вниз',
                    'Поднимает ребра при фиксированной лопатке'
                ]
            ]
        ]))
    ],
    [
        'Наружная межрёберная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Наружная межрёберная мышца'],
            [MuscleProperty.engName, 'External intercostal muscle'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/ExternalIntercostalMuscle.gif')]],
            [MuscleProperty.begin, ['Нижний край ребра']],
            [MuscleProperty.end, ['Верхний край следующего ребра снизу']],
            [MuscleProperty.functions, ['Поднимает ребра во время вдоха', 'Участвует в дыхательном процессе']]
        ]))
    ],
    [
        'Внутренняя межрёберная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Внутренняя межрёберная мышца'],
            [MuscleProperty.engName, 'Internal intercostal muscle'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/InternalIntercostalMuscle.gif')]],
            [MuscleProperty.begin, ['Верхний край ребра']],
            [MuscleProperty.end, ['Нижний край предыдущего ребра сверху']],
            [MuscleProperty.functions, ['Опускает ребра во время выдоха', 'Участвует в дыхательном процессе']]
        ]))
    ],
    [
        'Диафрагма',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Диафрагма'],
            [MuscleProperty.engName, 'Diaphragm'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/Diaphragm.gif')]],
            [MuscleProperty.begin, ['7 - 12 ребра', 'Тела позвонков L2 - L4', 'Реберные отростки L1 - L2', 'Грудина']],
            [MuscleProperty.end, ['Центральное сухожилие диафрагмы']],
            [MuscleProperty.functions, ['Основная мышца дыхания', 'Расширяет грудную клетку']]
        ]))
    ],
    [
        'Передняя зубчатая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Передняя зубчатая мышца'],
            [MuscleProperty.engName, 'Serratus anterior'],
            [MuscleProperty.pictures, [require('../images/muscles/stomach/SerratusAnterior.gif')]],
            [MuscleProperty.begin, ['1 - 9 ребра']],
            [MuscleProperty.end, ['Лопатка']],
            [
                MuscleProperty.functions,
                ['Оттягивает лопатку вперед', 'Вращает лопатку', 'Поднимает руку выше горизонтали']
            ]
        ]))
    ]
]);
