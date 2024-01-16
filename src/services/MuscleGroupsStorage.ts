import back from '../data/muscles/back.json'
import stomach from '../data/muscles/stomach.json'
import shin from '../data/muscles/shin.json'
import hip from '../data/muscles/hip.json'
import neck from '../data/muscles/neck.json'
import shoulder_girdle from '../data/muscles/shoulder_girdle.json'
import shoulder from '../data/muscles/shoulder.json'
import { MuscleGroup } from '../models/MuscleGroup';
import { MuscleParser } from './MuscleParser';

class MuscleGroupsStorage {
    musclesGroups: MuscleGroup[] = [
        {
            name: "Мышцы туловища: задние",
            muscles: MuscleParser.parseMuscles(back.muscles)
        },
        {
            name: "Мышцы туловища: передние",
            muscles: MuscleParser.parseMuscles(stomach.muscles)
        },
        {
            name: "Мышцы шеи",
            muscles: MuscleParser.parseMuscles(neck.muscles)
        },
        {
            name: "Мышцы бедра",
            muscles: MuscleParser.parseMuscles(hip.muscles)
        },
        {
            name: "Мышцы голени",
            muscles: MuscleParser.parseMuscles(shin.muscles)
        },
        {
            name: "Мышцы плечевого пояса",
            muscles: MuscleParser.parseMuscles(shoulder_girdle.muscles)
        },
        {
            name: "Мышцы плеча",
            muscles: MuscleParser.parseMuscles(shoulder.muscles)
        }
    ];
}

export const muscleGroupsStorage = new MuscleGroupsStorage();
