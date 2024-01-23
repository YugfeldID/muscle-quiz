import { Muscle } from './Muscle';

export type MuscleGroup = {
    name: string;
    image?: unknown;
    muscles: Map<string, Muscle>;
}
