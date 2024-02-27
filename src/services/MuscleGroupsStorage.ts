import { ImageSourcePropType } from 'react-native';
import back from '../data/muscles/back.json'
import hip from '../data/muscles/hip.json'
import neck from '../data/muscles/neck.json'
import shin from '../data/muscles/shin.json'
import shoulder from '../data/muscles/shoulder.json'
import shoulder_girdle from '../data/muscles/shoulder_girdle.json'
import stomach from '../data/muscles/stomach.json'
import { MuscleGroup } from '../models/MuscleGroup';
import { parseMuscles } from './MuscleParser';

class MuscleGroupsStorage {
    musclesGroups: Map<string, MuscleGroup> = new Map<string, MuscleGroup>([
        [
            'Спина',
            {
                name: 'Спина',
                image: require('../data/images/back-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(back.muscles)
            }
        ],
        [
            'Живот',
            {
                name: 'Живот',
                image: require('../data/images/stomach-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(stomach.muscles)
            }
        ],
        [
            'Шея',
            {
                name: 'Шея',
                image: require('../data/images/neck-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(neck.muscles)
            }
        ],
        [
            'Бедро',
            {
                name: 'Бедро',
                image: require('../data/images/hip-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(hip.muscles)
            }
        ],
        [
            'Голень',
            {
                name: 'Голень',
                image: require('../data/images/shin-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(shin.muscles)
            }
        ],
        [
            'Плечевой пояс',
            {
                name: 'Плечевой пояс',
                image: require('../data/images/shoulder_girdle.png') as ImageSourcePropType,
                muscles: parseMuscles(shoulder_girdle.muscles)
            }
        ],
        [
            'Плечо',
            {
                name: 'Плечо',
                image: require('../data/images/shoulder-muscles.png') as ImageSourcePropType,
                muscles: parseMuscles(shoulder.muscles)
            }
        ]
    ]);
}

export const muscleGroupsStorage = new MuscleGroupsStorage();
