import { randomDigitFromRange } from '../../utils/ArrayUtils';
import { DigitReplaceStrategy } from './DigitReplaceStrategy';

export class DigitsRangeReplaceStrategy extends DigitReplaceStrategy {
    private static DIGIT_RANGE_REGEXP = /\d+ - \d+/;

    isApplicable(text: string): boolean {
        return (text.match(DigitsRangeReplaceStrategy.DIGIT_RANGE_REGEXP)?.length ?? 0
               ) > 0;
    }

    replaceRaw(text: string): string {
        const range = text.match(DigitsRangeReplaceStrategy.DIGIT_RANGE_REGEXP);
        if (!range?.length) {
            return text;
        }
        const digits = range[0].split(' - ');
        const firstDigit = Number(digits[0]);
        const secondDigit = Number(digits[1]);
        const firstDigitForReplace = randomDigitFromRange(2, Math.max(secondDigit, 9), [firstDigit]);
        const secondDigitForReplace = randomDigitFromRange(firstDigitForReplace + 1, Math.max(secondDigit, 9) + 1, [secondDigit]);
        return text.replace(range[0], `${firstDigitForReplace} - ${secondDigitForReplace}`);
    }
}
