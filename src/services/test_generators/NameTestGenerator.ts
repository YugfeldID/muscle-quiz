import { Muscle, MuscleProperty } from '../../models/Muscle';
import { SimpleWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/SimpleWrongAnswersGenerationStrategy';
import { WrongAnswersGenerationStrategy } from '../wrong_answer_strategies/WrongAnswersGenerationStrategy';
import { TestGenerator } from './TestGenerator';

class NameTestGenerator extends TestGenerator<string> {
    wrongAnswersGenerators: WrongAnswersGenerationStrategy[] = [
        new SimpleWrongAnswersGenerationStrategy()
    ];

    getQuestion(muscle: Muscle): string {
        return `Как называется `;
    }

    getTestMuscleProperty(): MuscleProperty<string> {
        return MuscleProperty.engName;
    }
}

export const nameTestGenerator = new NameTestGenerator();
