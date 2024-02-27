import { Muscle, MuscleProperty, MusclePropertyValue } from '../models/Muscle';
import { MuscleDto } from '../models/MuscleDto';

export function parseMuscle(muscleDto: MuscleDto): Muscle {
    const properties = new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>();
    MuscleProperty.availableProperties.forEach((property) =>
    // @ts-expect-error eslint-disable-next-line
        properties.set(property, muscleDto[property.name] as MusclePropertyValue));
    return new Muscle(properties);
}

export function parseMuscles(muscle: MuscleDto[]): Map<string, Muscle> {
    const entries: [string, Muscle][] = muscle.map((muscle) => [muscle.rusName, parseMuscle(muscle)]);
    return new Map<string, Muscle>(entries);
}

