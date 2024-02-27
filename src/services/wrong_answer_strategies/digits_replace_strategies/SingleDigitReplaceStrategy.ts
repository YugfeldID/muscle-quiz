import { randomDigitFromRange } from '../../utils/ArrayUtils';
import { DigitReplaceStrategy } from './DigitReplaceStrategy';

export class SingleDigitReplaceStrategy extends DigitReplaceStrategy {
    // digits greater than 1
    private static DIGIT_REGEXP = /(?!(?:1)$)\d+/;

    isApplicable(text: string): boolean {
        return (text.match(SingleDigitReplaceStrategy.DIGIT_REGEXP)?.length ?? 0
               ) > 0;
    }

    replaceRaw(text: string): string {
        const match = text.match(SingleDigitReplaceStrategy.DIGIT_REGEXP);
        if (!match?.length) {
            return text;
        }
        const digitForReplace = randomDigitFromRange(2, 8, [Number(match[0])]);
        return text.replace(match[0], digitForReplace.toString());
    }

}
