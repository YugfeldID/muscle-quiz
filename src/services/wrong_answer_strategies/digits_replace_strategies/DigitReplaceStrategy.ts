import { MusclePropertyValue } from '../../../models/Muscle';

export abstract class DigitReplaceStrategy {
    abstract replaceRaw(text: string): string;

    replace(text: string, excluded: string[]): string {
        const result = this.replaceRaw(text);
        if (excluded.includes(result)) {
            return this.replaceRaw(text);
        }
        return result;
    }

    abstract isApplicable<T extends MusclePropertyValue>(text: string): boolean;
}
