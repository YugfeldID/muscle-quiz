import { Muscle, MuscleProperty, MusclePropertyValue } from '../models/Muscle';
import { MuscleDto } from '../models/MuscleDto';

export class MuscleParser {
    static parseMuscle(muscleDto: MuscleDto): Muscle {
        const properties = new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>();
        // @ts-ignore
        Muscle.availableProperties.forEach((property) => properties.set(property, muscleDto[property.name]));
        return new Muscle(properties);
    }

    static parseMuscles(muscle: MuscleDto[]): Muscle[] {
        return muscle.map((muscle) => this.parseMuscle(muscle));
    }
}

