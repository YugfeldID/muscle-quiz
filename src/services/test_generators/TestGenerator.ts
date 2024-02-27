import { v4 as uuidv4 } from 'uuid';
import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer, TestModel } from '../../models/TestModel';
import { DEFAULT_ANSWERS_COUNT } from '../TestSettings';
import { getRandomIndex, randomSort } from '../utils/ArrayUtils';
import { formatPropertyValueText } from '../utils/MusclePropertyUtils';
import { WrongAnswersGenerationStrategy } from '../wrong_answer_strategies/WrongAnswersGenerationStrategy';
import 'react-native-get-random-values';

export abstract class TestGenerator<T extends MusclePropertyValue> {

    abstract wrongAnswersGenerators: WrongAnswersGenerationStrategy[];

    abstract getQuestion(muscle: Muscle): string;

    abstract getTestMuscleProperty(): MuscleProperty<T>;

    generateTest(muscles: Muscle[]): TestModel {
        const rightAnswerIndex = getRandomIndex(muscles) ?? 0;
        const muscle = muscles[rightAnswerIndex];

        return new TestModel({
            question: this.getQuestion(muscle),
            muscle: muscle,
            answers: randomSort([
                ...this.getWrongAnswers(muscles, rightAnswerIndex, this.getTestMuscleProperty()),
                {
                    id: uuidv4(),
                    text: formatPropertyValueText(muscle.getProperty(this.getTestMuscleProperty())),
                    isRight: true
                }
            ])
        });
    }

    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>
    ): Answer[] {
        const excludedIndexes = [];
        let attemptsCount = this.wrongAnswersGenerators.length;
        const wrongAnswersCount = DEFAULT_ANSWERS_COUNT - 1;
        const result: Answer[] = [];
        const rightAnswers = formatPropertyValueText(muscles[rightAnswerIndex].getProperty(testProperty));

        while (attemptsCount > 0 && result.length < wrongAnswersCount) {
            const generatorIndex = getRandomIndex(this.wrongAnswersGenerators, excludedIndexes);

            if (generatorIndex === null) {
                return result;
            }

            const generator = this.wrongAnswersGenerators[generatorIndex];
            if (generator.isApplicable(muscles[rightAnswerIndex], testProperty)) {
                generator.getWrongAnswers(
                    muscles,
                    rightAnswerIndex,
                    testProperty,
                    { answersCount: wrongAnswersCount }
                ).forEach(el => {
                    const formattedText = formatPropertyValueText(el.text);
                    if (formattedText !== rightAnswers &&
                        result.every((existed) => existed.text !== formattedText)
                    ) {
                        result.push({
                            id: uuidv4(),
                            text: formattedText,
                            isRight: el.isRight
                        });
                    }
                });
            }
            excludedIndexes.push(generatorIndex);
            attemptsCount--;
        }
        return result.slice(0, wrongAnswersCount);
    }
}
