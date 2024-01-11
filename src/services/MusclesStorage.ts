import { Muscle } from '../models/Muscle';
import data from './data/data.json'
import { MuscleParser } from './MuscleParser';

class MusclesStorage {
    muscles: Muscle[] = MuscleParser.parseMuscles(data.muscles);
}

export const musclesStorage = new MusclesStorage();
