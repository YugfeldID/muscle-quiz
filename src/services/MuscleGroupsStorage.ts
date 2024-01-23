import back from '../data/muscles/back.json'
import hip from '../data/muscles/hip.json'
import neck from '../data/muscles/neck.json'
import shin from '../data/muscles/shin.json'
import shoulder from '../data/muscles/shoulder.json'
import shoulder_girdle from '../data/muscles/shoulder_girdle.json'
import stomach from '../data/muscles/stomach.json'
import { MuscleGroup } from '../models/MuscleGroup';
import { MuscleParser } from './MuscleParser';

class MuscleGroupsStorage {
    musclesGroups: Map<string, MuscleGroup> = new Map<string, MuscleGroup>([
        [
            'Спина',
            {
                name: 'Спина',
                image: require('../data/images/back-muscles.png'),
                muscles: MuscleParser.parseMuscles(back.muscles)
            }
        ],
        [
            'Живот',
            {
                name: 'Живот',
                image: require('../data/images/stomach-muscles.png'),
                muscles: MuscleParser.parseMuscles(stomach.muscles)
            }
        ],
        [
            'Шея',
            {
                name: 'Шея',
                image: require('../data/images/neck-muscles.png'),
                muscles: MuscleParser.parseMuscles(neck.muscles)
            }
        ],
        [
            'Бедро',
            {
                name: 'Бедро',
                image: require('../data/images/hip-muscles.png'),
                muscles: MuscleParser.parseMuscles(hip.muscles)
            }
        ],
        [
            'Голень',
            {
                name: 'Голень',
                image: require('../data/images/shin-muscles.png'),
                muscles: MuscleParser.parseMuscles(shin.muscles)
            }
        ],
        [
            'Плечевой пояс',
            {
                name: 'Плечевой пояс',
                muscles: MuscleParser.parseMuscles(shoulder_girdle.muscles)
            }
        ],
        [
            'Плечо',
            {
                name: 'Плечо',
                image: require('../data/images/shoulder-muscles.png'),
                muscles: MuscleParser.parseMuscles(shoulder.muscles)
            }
        ]
    ]);
}

export const muscleGroupsStorage = new MuscleGroupsStorage();
