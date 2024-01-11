import { Muscle } from '../../models/Muscle';
import { TestModel } from '../../models/TestModel';
import { getRandomIndex, randomSort } from '../utils/ArrayUtils';
import { SimpleWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/SimpleWrongAnswersGenerationStrategy';
import { WrongAnswersGenerationStrategy } from '../wrong_answer_strategies/WrongAnswersGenerationStrategy';
import { TestGenerator } from './TestGenerator';

class NameTestGenerator extends TestGenerator {
    wrongAnswersGenerators: WrongAnswersGenerationStrategy[] = [
        new SimpleWrongAnswersGenerationStrategy()
    ];

    generateTest(muscles: Muscle[]): TestModel {
        const rightAnswerIndex = getRandomIndex(muscles)!
        const muscle = muscles[rightAnswerIndex];

        return {
            question: `Как назввается мышца ${muscle.getProperty(Muscle.rusName)}?`,
            answers: randomSort([
                ...this.getWrongAnswers(muscles, rightAnswerIndex, Muscle.engName),
                {
                    text: muscle.getProperty(Muscle.engName),
                    isRight: true
                }
            ])
        }
    }
}

export const nameTestGenerator = new NameTestGenerator();
