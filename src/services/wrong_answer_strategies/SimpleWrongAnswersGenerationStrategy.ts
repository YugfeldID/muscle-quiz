import { v4 as uuidv4 } from 'uuid';
import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer } from '../../models/TestModel';
import { getRandomIndex } from '../utils/ArrayUtils';
import { formatPropertyValueText } from '../utils/MusclePropertyUtils';
import { WrongAnswersGenerationOptions, WrongAnswersGenerationStrategy } from './WrongAnswersGenerationStrategy';

export class SimpleWrongAnswersGenerationStrategy implements WrongAnswersGenerationStrategy {
    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>,
        options: WrongAnswersGenerationOptions
    ): Answer[] {
        const excludedIndexes = [rightAnswerIndex];
        const result: Answer[] = [];
        for (let i = 0; i < options.answersCount; i++) {
            const wrongAnswerIndex = getRandomIndex(muscles, excludedIndexes);

            if (wrongAnswerIndex === null) {
                return result;
            }

            excludedIndexes.push(wrongAnswerIndex);
            const propertyValue = muscles[wrongAnswerIndex].getProperty(testProperty);
            const text = formatPropertyValueText(propertyValue);

            result.push({
                id: uuidv4(),
                text: text,
                isRight: false
            });
        }
        return result;
    }

    isApplicable(): boolean {
        return true;
    }
}
