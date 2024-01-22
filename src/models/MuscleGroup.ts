import { ImageRequireSource } from 'react-native/Libraries/Image/ImageSource';
import { Muscle } from './Muscle';

export type MuscleGroup = {
    name: string;
    image?: ImageRequireSource;
    muscles: Muscle[];
}
