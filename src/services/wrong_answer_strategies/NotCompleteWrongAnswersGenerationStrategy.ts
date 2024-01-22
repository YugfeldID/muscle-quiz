import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer } from '../../models/TestModel';
import { TestSettings } from '../TestSettings';
import { getRandomIndex } from '../utils/ArrayUtils';
import { getAllCombinationsForArray } from '../utils/CombinationsUtils';
import { formatPropertyValueText } from '../utils/MusclePropertyUtils';
import { WrongAnswersGenerationOptions, WrongAnswersGenerationStrategy } from './WrongAnswersGenerationStrategy';

export class NotCompleteWrongAnswersGenerationStrategy implements WrongAnswersGenerationStrategy {
    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>,
        options: WrongAnswersGenerationOptions
    ): Answer[] {
        const excludedIndexes = [rightAnswerIndex];
        const result: Answer[] = [];
        const rightAnswers = muscles[rightAnswerIndex].getProperty(testProperty) as string[];

        const combinations = [
            ...getAllCombinationsForArray<string>(
                rightAnswers,
                Math.pow(2, rightAnswers.length)
            )
        ].filter((item) => item.length > 0 && item.length !== rightAnswers.length);

        for (let i = 0; i < options.answersCount; i++) {
            const wrongAnswerIndex = getRandomIndex(combinations, excludedIndexes);

            if (wrongAnswerIndex === null) {
                return result;
            }

            excludedIndexes.push(wrongAnswerIndex);
            const text = formatPropertyValueText(combinations[wrongAnswerIndex]);

            result.push({
                text: text,
                isRight: false
            });
        }
        return result;
    }

    isApplicable<T extends MusclePropertyValue>(muscle: Muscle, testProperty: MuscleProperty<T>): boolean {
        const property = muscle.getProperty(testProperty);
        return Array.isArray(property) && property.length > 1;
    }
}
