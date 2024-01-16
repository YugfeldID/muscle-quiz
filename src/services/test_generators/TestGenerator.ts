import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer, TestModel } from '../../models/TestModel';
import { TestSettings } from '../TestSettings';
import { getRandomIndex } from '../utils/ArrayUtils';
import { WrongAnswersGenerationStrategy } from '../wrong_answer_strategies/WrongAnswersGenerationStrategy';

export abstract class TestGenerator {

    abstract wrongAnswersGenerators: WrongAnswersGenerationStrategy[];

    abstract generateTest(muscles: Muscle[]): TestModel;

    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>
    ): Answer[] {
        const excludedIndexes = [];
        let attemptsCount = this.wrongAnswersGenerators.length;
        const wrongAnswersCount = TestSettings.DEFAULT_ANSWERS_COUNT - 1;
        const result: Answer[] = [];

        while (attemptsCount > 0 && result.length < wrongAnswersCount) {
            const generatorIndex = getRandomIndex(this.wrongAnswersGenerators, excludedIndexes);

            if (generatorIndex === null) {
                return result;
            }

            let generator = this.wrongAnswersGenerators[generatorIndex];
            if (generator.isApplicable(muscles[rightAnswerIndex], testProperty)) {
                generator.getWrongAnswers(
                    muscles,
                    rightAnswerIndex,
                    testProperty,
                    { answersCount: wrongAnswersCount }
                ).forEach(el => {
                    if (result.every((existed) => existed.text !== el.text)) {
                        result.push(el);
                    }
                });
            }
            excludedIndexes.push(generatorIndex);
            attemptsCount--;
        }
        return result.slice(0, wrongAnswersCount);
    }
}
