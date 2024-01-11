export type MusclePropertyValue = string | string [] | undefined;

export class MuscleProperty<T extends MusclePropertyValue> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Muscle {
    static rusName = new MuscleProperty<string>('rusName');
    static engName = new MuscleProperty<string>('engName');
    static begin = new MuscleProperty<string[]>('begin');
    static end = new MuscleProperty<string[]>('end');
    static functions = new MuscleProperty<string[]>('functions');
    static picture = new MuscleProperty<string | undefined>('picture');

    static availableProperties: MuscleProperty<MusclePropertyValue>[] = [
        Muscle.rusName,
        Muscle.engName,
        Muscle.begin,
        Muscle.end,
        Muscle.functions,
        Muscle.picture
    ]
    private properties: Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>
        = new Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>();

    constructor(properties: Map<MuscleProperty<MusclePropertyValue>, MusclePropertyValue>) {
        this.properties = properties;
    }

    public getProperty<T extends MusclePropertyValue>(property: MuscleProperty<T>): T {
        return this.properties.get(property) as T;
    }
}
