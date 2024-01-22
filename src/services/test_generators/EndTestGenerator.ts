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
        return `Куда крепится `;
    }

    getTestMuscleProperty(): MuscleProperty<string[]> {
        return MuscleProperty.end;
    }
}

export const endTestGenerator = new EndTestGenerator();
