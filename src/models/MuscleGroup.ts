import { ImageSourcePropType } from 'react-native';
import { Muscle } from './Muscle';

export interface MuscleGroup {
    name: string;
    image?: ImageSourcePropType;
    muscles: Map<string, Muscle>;
}
