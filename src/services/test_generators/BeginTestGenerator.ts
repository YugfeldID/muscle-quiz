import { Muscle } from '../../models/Muscle';
import { TestModel } from '../../models/TestModel';
import { TestSettings } from '../TestSettings';
import { getRandomIndex, randomSort } from '../utils/ArrayUtils';
import { DigitsReplaceWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/DigitsReplaceWrongAnswersGenerationStrategy';
import { NotCompleteWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/NotCompleteWrongAnswersGenerationStrategy';
import { PatternReplaceWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/PatternReplaceWrongAnswersGenerationStrategy';
import { SimpleWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/SimpleWrongAnswersGenerationStrategy';
import { TestGenerator } from './TestGenerator';

class BeginTestGenerator extends TestGenerator {
    wrongAnswersGenerators = [
        new SimpleWrongAnswersGenerationStrategy(),
        new DigitsReplaceWrongAnswersGenerationStrategy(),
        new NotCompleteWrongAnswersGenerationStrategy(),
        new PatternReplaceWrongAnswersGenerationStrategy(),
    ];

    generateTest(muscles: Muscle[]): TestModel {
        const rightAnswerIndex = getRandomIndex(muscles)!
        const muscle = muscles[rightAnswerIndex];

        return {
            question: `Где начинается мышца ${muscle.getProperty(Muscle.rusName)}?`,
            answers: randomSort([
                ...this.getWrongAnswers(muscles, rightAnswerIndex, Muscle.begin),
                {
                    text: muscle.getProperty(Muscle.begin).join(TestSettings.DEFAULT_ANSWERS_SEPARATOR),
                    isRight: true,
                }
            ])
        }
    }
}

export const beginTestGenerator = new BeginTestGenerator();
