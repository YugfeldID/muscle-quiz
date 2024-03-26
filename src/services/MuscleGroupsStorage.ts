import { ImageSourcePropType } from 'react-native';
import { back } from '../data/muscles/back';
import { hip } from '../data/muscles/hip';
import { neck } from '../data/muscles/neck';
import { shin } from '../data/muscles/shin';
import { shoulder } from '../data/muscles/shoulder';
import { shoulderGridle } from '../data/muscles/shoulderGridle';
import { stomach } from '../data/muscles/stomach';
import { MuscleGroup } from '../models/MuscleGroup';

class MuscleGroupsStorage {
    musclesGroups: Map<string, MuscleGroup> = new Map<string, MuscleGroup>([
        [
            'Спина',
            {
                name: 'Спина',
                image: require('../data/images/muscle_groups/back-muscles.png') as ImageSourcePropType,
                muscles: back
            }
        ],
        [
            'Живот',
            {
                name: 'Живот',
                image: require('../data/images/muscle_groups/stomach-muscles.png') as ImageSourcePropType,
                muscles: stomach
            }
        ],
        [
            'Шея',
            {
                name: 'Шея',
                image: require('../data/images/muscle_groups/neck-muscles.png') as ImageSourcePropType,
                muscles: neck
            }
        ],
        [
            'Бедро',
            {
                name: 'Бедро',
                image: require('../data/images/muscle_groups/hip-muscles.png') as ImageSourcePropType,
                muscles: hip
            }
        ],
        [
            'Голень',
            {
                name: 'Голень',
                image: require('../data/images/muscle_groups/shin-muscles.png') as ImageSourcePropType,
                muscles: shin
            }
        ],
        [
            'Плечевой пояс',
            {
                name: 'Плечевой пояс',
                image: require('../data/images/muscle_groups/shoulder_girdle.png') as ImageSourcePropType,
                muscles: shoulderGridle
            }
        ],
        [
            'Плечо',
            {
                name: 'Плечо',
                image: require('../data/images/muscle_groups/shoulder-muscles.png') as ImageSourcePropType,
                muscles: shoulder
            }
        ]
    ]);
}

export const muscleGroupsStorage = new MuscleGroupsStorage();
