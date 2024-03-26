import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';

export const shin: Map<string, Muscle> = new Map<string, Muscle>([
    [
        'Икроножная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Икроножная мышца'],
            [MuscleProperty.engName, 'Gastrocnemius'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/Gastrocnemius.gif')]],
            [MuscleProperty.begin, ['Медиальный и латеральный мыщелки бедренной кости']],
            [MuscleProperty.end, ['Пяточная кость']],
            [MuscleProperty.functions, ['Сгибание стопы в голеностопном суставе', 'Содействие сгибанию колена']]
        ]))
    ],

    [
        'Передняя большеберцовая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Передняя большеберцовая мышца'],
            [MuscleProperty.engName, 'Tibialis anterior'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/TibialisAnterior.gif')]],
            [MuscleProperty.begin, ['Большеберцовая кость']],
            [MuscleProperty.end, ['Первая плюсневая кость и медальная клиновдная кость']],
            [MuscleProperty.functions, ['Подъем стопы', 'Супинация стопы']]
        ]))
    ],
    [
        'Длинный разгибатель пальцев',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Длинный разгибатель пальцев'],
            [MuscleProperty.engName, 'Extensor digitorum longus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/ExtensorDigitorumLongus.gif')]],
            [MuscleProperty.begin, ['Большеберцовая кость']],
            [MuscleProperty.end, ['Фаланги пальцев стопы']],
            [MuscleProperty.functions, ['Разгибание 2 - 5 пальцев стопы']]
        ]))
    ],
    [
        'Длинная малоберцовая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Длинная малоберцовая мышца'],
            [MuscleProperty.engName, 'Peroneus longus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/PeroneusLongus.gif')]],
            [MuscleProperty.begin, ['Головка и верхняя часть малоберцовой кости']],
            [MuscleProperty.end, ['Первая плюсневая кость и медальная клиновдная кость']],
            [MuscleProperty.functions, ['Подошвенное сгибание', 'Пронация стопы']]
        ]))
    ],
    [
        'Короткая малоберцовая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Короткая малоберцовая мышца'],
            [MuscleProperty.engName, 'Peroneus brevis'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/PeroneusBrevis.gif')]],
            [MuscleProperty.begin, ['Малоберцовая кость']],
            [MuscleProperty.end, ['5-ая плюсневая кость']],
            [MuscleProperty.functions, ['Подошвенное сгибание', 'Пронация стопы']]
        ]))
    ],
    [
        'Длинный разгибатель большого пальца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Длинный разгибатель большого пальца'],
            [MuscleProperty.engName, 'Extensor hallucis longus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/ExtensorHallucisLongus.gif')]],
            [MuscleProperty.begin, ['Малоберцовая кость']],
            [MuscleProperty.end, ['Дистальная фаланга большого пальца стопы']],
            [MuscleProperty.functions, ['Разгибает большой палец стопы']]
        ]))
    ],
    [
        'Длинный сгибатель большого пальца стопы',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Длинный сгибатель большого пальца стопы'],
            [MuscleProperty.engName, 'Flexor hallucis longus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/FlexorHallucisLongus.gif')]],
            [MuscleProperty.begin, ['Задняя поверхность малоберцовой кости']],
            [MuscleProperty.end, ['Дистальная фаланга большого пальца стопы']],
            [MuscleProperty.functions, ['Сгибает большой палец стопы', 'Поддерживает свод стопы']]
        ]))
    ],
    [
        'Задняя большеберцовая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Задняя большеберцовая мышца'],
            [MuscleProperty.engName, 'Tibialis posterior'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/TibialisPosterior.gif')]],
            [MuscleProperty.begin, ['Задняя поверхность малоберцовой и большеберцовой костей']],
            [MuscleProperty.end, ['Кости подошвы стопы']],
            [MuscleProperty.functions, ['Поддерживает свод стопы', 'Сгибает стопу']]
        ]))
    ],
    [
        'Камбаловидная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Камбаловидная мышца'],
            [MuscleProperty.engName, 'Soleus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/Soleus.gif')]],
            [MuscleProperty.begin, ['Малоберцовая и большеберцовая кости']],
            [MuscleProperty.end, ['Пяточная кость']],
            [MuscleProperty.functions, ['Сгибание стопы в голеностопном суставе']]
        ]))
    ],
    [
        'Подошвенная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Подошвенная мышца'],
            [MuscleProperty.engName, 'Plantaris'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/Plantaris.gif')]],
            [MuscleProperty.begin, ['Нижняя часть бедренной кости']],
            [MuscleProperty.end, ['Пяточная кость']],
            [MuscleProperty.functions, ['Помогает сгибать колено', 'Участвует в сгибании стопы']]
        ]))
    ],
    [
        'Подколенная мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Подколенная мышца'],
            [MuscleProperty.engName, 'Popliteus'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/Popliteus.gif')]],
            [MuscleProperty.begin, ['Бедренная кость']],
            [MuscleProperty.end, ['Большеберцовая кость']],
            [MuscleProperty.functions, ['Сгибает колено', 'Вращает голень']]
        ]))
    ],
    [
        'Третья малоберцовая мышца',
        new Muscle(new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>([
            [MuscleProperty.rusName, 'Третья малоберцовая мышца'],
            [MuscleProperty.engName, 'Peroneus tertius'],
            [MuscleProperty.pictures, [require('../images/muscles/shin/PeroneusTertius.gif')]],
            [MuscleProperty.begin, ['Нижняя часть передней поверхности малоберцовой кости']],
            [MuscleProperty.end, ['Основание 5-ой плюсневой кости']],
            [MuscleProperty.functions, ['Пронирует и сгибает стопу']]
        ]))
    ]
]);

