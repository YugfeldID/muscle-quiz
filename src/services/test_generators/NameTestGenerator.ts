import { Muscle, MuscleProperty } from '../../models/Muscle';
import { SimpleWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/SimpleWrongAnswersGenerationStrategy';
import { WrongAnswersGenerationStrategy } from '../wrong_answer_strategies/WrongAnswersGenerationStrategy';
import { TestGenerator } from './TestGenerator';

class NameTestGenerator extends TestGenerator<string> {
    wrongAnswersGenerators: WrongAnswersGenerationStrategy[] = [
        new SimpleWrongAnswersGenerationStrategy()
    ];

    getQuestion(muscle: Muscle): string {
        return `Как назввается мышца ${muscle.getProperty(Muscle.rusName)}?`;
    }

    getTestMuscleProperty(): MuscleProperty<string> {
        return Muscle.engName;
    }
}

export const nameTestGenerator = new NameTestGenerator();
