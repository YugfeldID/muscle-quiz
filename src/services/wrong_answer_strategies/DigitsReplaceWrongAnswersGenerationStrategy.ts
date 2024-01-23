import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer } from '../../models/TestModel';
import { formatPropertyValueText } from '../utils/MusclePropertyUtils';
import { DigitsRangeReplaceStrategy } from './digits_replace_strategies/DigitsRangeReplaceStrategy';
import { SingleDigitReplaceStrategy } from './digits_replace_strategies/SingleDigitReplaceStrategy';
import { VertebraRangeReplaceStrategy } from './digits_replace_strategies/VertebraRangeReplaceStrategy';
import { VertebraReplaceStrategy } from './digits_replace_strategies/VertebraReplaceStrategy';
import { WrongAnswersGenerationOptions, WrongAnswersGenerationStrategy } from './WrongAnswersGenerationStrategy';

export class DigitsReplaceWrongAnswersGenerationStrategy implements WrongAnswersGenerationStrategy {
    // digits greater than 1
    private static DIGIT_REGEXP = /(?!(?:1)$)\d+/;

    private replaceStrategies = [
        new VertebraRangeReplaceStrategy(),
        new VertebraReplaceStrategy(),
        new DigitsRangeReplaceStrategy(),
        new SingleDigitReplaceStrategy()
    ]

    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>,
        options: WrongAnswersGenerationOptions
    ): Answer[] {
        const result: Answer[] = [];

        const rightAnswers = muscles[rightAnswerIndex].getProperty(testProperty);
        let text = formatPropertyValueText(rightAnswers);
        const exclusions: string[] = [];

        const replaceStrategy = this.replaceStrategies.find((strategy) => strategy.isApplicable(text));

        if (!replaceStrategy) {
            return result;
        }

        for (let i = 0; i < options.answersCount; i++) {
            let replacedText = replaceStrategy.replace(text, exclusions);
            exclusions.push(replacedText);
            result.push({
                text: replacedText,
                isRight: false
            })
        }
        return result;
    }

    isApplicable<T extends MusclePropertyValue>(muscle: Muscle, testProperty: MuscleProperty<T>): boolean {
        const property = muscle.getProperty(testProperty);
        if (typeof property === 'string') {
            return this.checkIfContainsDigit(property);
        }

        if (Array.isArray(property)) {
            return property.some((el) => this.checkIfContainsDigit(el));
        }

        return false;
    }

    private checkIfContainsDigit(property: String): boolean {
        return (property.match(DigitsReplaceWrongAnswersGenerationStrategy.DIGIT_REGEXP)?.length ?? 0
               ) > 0;
    };
}
