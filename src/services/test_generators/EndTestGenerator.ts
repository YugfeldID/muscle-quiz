import { Muscle, MuscleProperty } from '../../models/Muscle';
import {
    DigitsReplaceWrongAnswersGenerationStrategy
} from '../wrong_answer_strategies/DigitsReplaceWrongAnswersGenerationStrategy';
import {
    NotCompleteWrongAnswersGenerationStrategy
} from '../wrong_answer_strategies/NotCompleteWrongAnswersGenerationStrategy';
import {
    PatternReplaceWrongAnswersGenerationStrategy
} from '../wrong_answer_strategies/PatternReplaceWrongAnswersGenerationStrategy';
import { SimpleWrongAnswersGenerationStrategy } from '../wrong_answer_strategies/SimpleWrongAnswersGenerationStrategy';
import { TestGenerator } from './TestGenerator';

class EndTestGenerator extends TestGenerator<string []> {
    wrongAnswersGenerators = [
        new SimpleWrongAnswersGenerationStrategy(),
        new DigitsReplaceWrongAnswersGenerationStrategy(),
        new NotCompleteWrongAnswersGenerationStrategy(),
        new PatternReplaceWrongAnswersGenerationStrategy()
    ];

    getQuestion(muscle: Muscle): string {
        return `Назовите точки прикрепления мышцы ${muscle.getProperty(Muscle.rusName)}?`;
    }

    getTestMuscleProperty(): MuscleProperty<string[]> {
        return Muscle.end;
    }
}

export const endTestGenerator = new EndTestGenerator();
