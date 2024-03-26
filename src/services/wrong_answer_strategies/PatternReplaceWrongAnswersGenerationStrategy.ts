import { v4 as uuidv4 } from 'uuid';
import patternMatches from '../../data/pattern_matches.json';
import { Muscle, MuscleProperty, MusclePropertyValue } from '../../models/Muscle';
import { Answer } from '../../models/TestModel';
import { getRandomElement } from '../utils/ArrayUtils';
import { formatPropertyValueText } from '../utils/MusclePropertyUtils';
import { WrongAnswersGenerationOptions, WrongAnswersGenerationStrategy } from './WrongAnswersGenerationStrategy';

interface ReplacementModel {
    matchedPartStartIndex: number | undefined;
    matchedPart: string;
    replacedPart: string;
    resultText: string;
}

export class PatternReplaceWrongAnswersGenerationStrategy implements WrongAnswersGenerationStrategy {
    patterns: string[][] = patternMatches.matches;

    getWrongAnswers<T extends MusclePropertyValue>(
        muscles: Muscle[],
        rightAnswerIndex: number,
        testProperty: MuscleProperty<T>,
        options: WrongAnswersGenerationOptions
    ): Answer[] {
        const result: Answer[] = [];

        const rightAnswers = muscles[rightAnswerIndex].getProperty(testProperty);
        const text = formatPropertyValueText(rightAnswers);

        const exclusions: ReplacementModel[] = [];
        for (let i = 0; i < options.answersCount; i++) {
            const replaced = this.replacePattern(text, exclusions);
            if (!replaced) {
                return result;
            }

            exclusions.push(replaced)
            result.push({
                id: uuidv4(),
                text: replaced.resultText,
                isRight: false
            })
        }

        return result;
    }

    isApplicable<T extends MusclePropertyValue>(muscle: Muscle, testProperty: MuscleProperty<T>): boolean {
        const property = muscle.getProperty(testProperty);
        if (typeof property === 'string') {
            return this.checkIfContainsPattern(property);
        }

        if (Array.isArray(property)) {
            return property.some((el) => typeof el === 'string'
                                         && this.checkIfContainsPattern(el));
        }

        return false;
    }

    private checkIfContainsPattern(property: string): boolean {
        return this.patterns.some((pattern) => {
            // eslint-disable-next-line
            const mergedPatterns = pattern.join('\s*|');
            return property.toLowerCase().match(mergedPatterns);
        });
    }

    private replacePattern(text: string, previousReplacement: ReplacementModel[]): ReplacementModel | null {
        for (const pattern of this.patterns) {
            const mergedPatterns = new RegExp(pattern.join('|'), 'g');
            let match: RegExpExecArray | null;
            while ((match = mergedPatterns.exec(text))) {
                const matchIndex = match.index;
                const samePrevMatch = previousReplacement.find((prev) => prev.matchedPartStartIndex === matchIndex);
                const exclusions = samePrevMatch ?
                    [pattern.indexOf(match[0]), pattern.indexOf(samePrevMatch.replacedPart)] :
                    [pattern.indexOf(match[0])];
                const replacement = getRandomElement(pattern, exclusions);
                if (replacement === null) {
                    continue;
                }

                return {
                    matchedPartStartIndex: match.index,
                    resultText: `${text.slice(0, matchIndex)}${replacement}${text.slice(matchIndex + match[0].length)}`,
                    matchedPart: match[0],
                    replacedPart: replacement
                }
            }
        }

        return null;
    }
}
