import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const hip: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Портняжная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Портняжная мышца'],
            [MuscleProperty.engName, 'Sartorius'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/Sartorius.gif')]],
            [MuscleProperty.begin, ['Верхняя передняя подвздошная ость']],
            [MuscleProperty.end, ['Внутренняя поверхность верхней части большеберцовой кости']],
            [MuscleProperty.functions, ['Сгибает бедро', 'Вращает бедро наружу', 'Сгибает колено']]
        ]))
    ],
    [
        'Четырёхглавая мышца бедра',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Четырёхглавая мышца бедра'],
            [MuscleProperty.engName, 'Quadriceps femoris'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/QuadricepsFemoris.gif')]],
            [
                MuscleProperty.begin,
                [
                    'Прямая мышца: передняя нижняя подвздошная ость',
                    'Медиальная широкая мышца: внутренняя поверхность бедренной кости',
                    'Латеральная широкая мышца: передняя и боковая поверхность бедренной кости',
                    'Промежуточная широкая мышца: передняя поверхность бедренной кости'
                ]
            ],
            [MuscleProperty.end, ['Надколенник', 'Бугристость большеберцовой кости']],
            [MuscleProperty.functions, ['Разгибает колено', 'Прямая мышца участвует в сгибании бедра']]
        ]))
    ],
    [
        'Тонкая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Тонкая мышца'],
            [MuscleProperty.engName, 'Gracilis'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/Gracilis.gif')]],
            [MuscleProperty.begin, ['Нижняя часть лобковой кости']],
            [MuscleProperty.end, ['Верхняя часть внутренней поверхности большеберцовой кости']],
            [MuscleProperty.functions, ['Приводит бедро', 'Сгибает голень', 'Вращает голень внутрь']]
        ]))
    ],
    [
        'Длинная приводящая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Длинная приводящая мышца'],
            [MuscleProperty.engName, 'Adductor longus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/AdductorLongus.gif')]],
            [MuscleProperty.begin, ['Лобковая кость']],
            [MuscleProperty.end, ['Средняя часть бедренной кости']],
            [MuscleProperty.functions, ['Приводит бедро', 'Принимает участе в сгибании бедра в тазобедренном суставе']]
        ]))
    ],
    [
        'Короткая приводящая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Короткая приводящая мышца'],
            [MuscleProperty.engName, 'Adductor brevis'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/AdductorBrevis.gif')]],
            [MuscleProperty.begin, ['Лобковая кость']],
            [MuscleProperty.end, ['Шероховатая линия бедра']],
            [MuscleProperty.functions, ['Приводит бедро', 'Принимает участе в сгибании бедра в тазобедренном суставе']]
        ]))
    ],
    [
        'Большая приводящая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Большая приводящая мышца'],
            [MuscleProperty.engName, 'Adductor magnus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/AdductorMagnus.gif')]],
            [MuscleProperty.begin, ['Лобковая и седалищная кости']],
            [MuscleProperty.end, ['Бедренная кость']],
            [
                MuscleProperty.functions,
                [
                    'Приводит бедро',
                    'Немного вращает бедро внутрь в тазобедренном суставе',
                    'Некоторые волокна помогают сгибать бедро'
                ]
            ]
        ]))
    ],
    [
        'Гребенчатая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Гребенчатая мышца'],
            [MuscleProperty.engName, 'Pectineus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/Pectineus.gif')]],
            [MuscleProperty.begin, ['Лобковая кость']],
            [MuscleProperty.end, ['Проксимальная часть бедренной кости']],
            [
                MuscleProperty.functions,
                ['Приводит бедро', 'Cлегка сгибает бедро в тазобедренном суставе', 'Вращает бедро наружу']
            ]
        ]))
    ],
    [
        'Большая ягодичная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Большая ягодичная мышца'],
            [MuscleProperty.engName, 'Gluteus maximus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/GluteusMaximus.gif')]],
            [MuscleProperty.begin, ['Задняя поверхность подвздошной кости', 'Крестцово-бугорная связка', 'Крестец', 'Копчик']],
            [MuscleProperty.end, ['Ягодичная бугристость бедренной кости', 'Широкая фасция бедра']],
            [
                MuscleProperty.functions,
                ['Разгибает бедро', 'Супинирует бедро', 'Стабилизирует тазобедренный сустав', 'Верхние волокна отводят бедро, нижние приводят']
            ]
        ]))
    ],
    [
        'Двуглавая мышца бедра',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Двуглавая мышца бедра'],
            [MuscleProperty.engName, 'Biceps femoris'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/BicepsFemoris.gif')]],
            [MuscleProperty.begin, ['Седалищный бугор', 'Нижняя часть шероховатой линии бедра и латеральная межмышечная перегородка']],
            [MuscleProperty.end, ['Головка малоберцовой кости', 'Латеральный мыщелок большеберцовой кости']],
            [
                MuscleProperty.functions,
                ['Разгибает бедро', 'Сгибает и супинирует голень']
            ]
        ]))
    ],
    [
        'Полуперепончатая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Полуперепончатая мышца'],
            [MuscleProperty.engName, 'Semimembranosus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/Semimembranosus.gif')]],
            [MuscleProperty.begin, ['Седалищный бугор' ]],
            [MuscleProperty.end, ['Медиальный мыщелок большеберцовой кости']],
            [
                MuscleProperty.functions,
                ['Разгибает бедро', 'Сгибает голень в коленном суставе и немного вращает внутрь']
            ]
        ]))
    ],
    [
        'Полусухожильная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Полусухожильная мышца'],
            [MuscleProperty.engName, 'Semitendinosus'],
            [MuscleProperty.pictures, [require('../images/muscles/hip/Semitendinosus.gif')]],
            [MuscleProperty.begin, ['Седалищный бугор' ]],
            [MuscleProperty.end, ['Бугристость большеберцовой кости']],
            [
                MuscleProperty.functions,
                ['Разгибает бедро', 'Сгибает голень в коленном суставе и немного вращает внутрь']
            ]
        ]))
    ]
]);

