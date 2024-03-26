import { ImageSourcePropType } from 'react-native';

export type MusclePropertyValue = string | string [] | ImageSourcePropType[] | undefined;

// eslint-disable-next-line
export class MuscleProperty<T extends MusclePropertyValue> {
    static rusName = new MuscleProperty<string>('rusName');
    static engName = new MuscleProperty<string>('engName');
    static begin = new MuscleProperty<string[]>('begin');
    static end = new MuscleProperty<string[]>('end');
    static functions = new MuscleProperty<string[]>('functions');
    static pictures = new MuscleProperty<ImageSourcePropType[] | undefined>('picture');

    static availableProperties: MuscleProperty<MusclePropertyValue>[] = [
        MuscleProperty.rusName,
        MuscleProperty.engName,
        MuscleProperty.begin,
        MuscleProperty.end,
        MuscleProperty.functions,
        MuscleProperty.pictures
    ]
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Muscle {
    private properties: Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>
        = new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>();

    constructor(properties: Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>) {
        this.properties = properties;
    }

    public getProperty<T extends MusclePropertyValue>(property: MuscleProperty<T>): T {
        return this.properties.get(property) as T;
    }

    isEqual(muscle: Muscle) {
        return muscle.getProperty(MuscleProperty.rusName) === this.getProperty(MuscleProperty.rusName);
    }
}
