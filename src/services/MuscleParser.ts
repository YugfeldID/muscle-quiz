import { Muscle, MuscleProperty, MusclePropertyValue } from '../models/Muscle';
import { MuscleDto } from '../models/MuscleDto';

export class MuscleParser {
    static parseMuscle(muscleDto: MuscleDto): Muscle {
        const properties = new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>();
        MuscleProperty.availableProperties.forEach((property) =>
            properties.set(property, muscleDto[property.name]));
        return new Muscle(properties);
    }

    static parseMuscles(muscle: MuscleDto[]): Map<string, Muscle> {
        let entries = muscle.map((muscle) => [muscle.rusName, this.parseMuscle(muscle)]);
        return new Map<string, Muscle>(entries);
    }
}

