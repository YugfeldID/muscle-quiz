import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer } from '../../models/TestModel';

export type WrongAnswersGenerationOptions = {
    answersCount: number,
};

export abstract class WrongAnswersGenerationStrategy {
    abstract getWrongAnswers<T extends MusclePropertyValue>(muscles: Muscle[], rightAnswerIndex: number, testProperty: MuscleProperty<T>, options?: WrongAnswersGenerationOptions): Answer[];
    abstract isApplicable<T extends MusclePropertyValue>(muscle: Muscle, testProperty: MuscleProperty<T>): boolean;
}
