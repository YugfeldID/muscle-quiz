import { getRandomElement, randomDigitFromRange } from '../../utils/ArrayUtils';
import { DigitReplaceStrategy } from './DigitReplaceStrategy';

export class VertebraRangeReplaceStrategy extends DigitReplaceStrategy {
    //C[0-7] - C[0-7] /T[1-12] - T[1-12] /L[1-5] - L[1-5]/ S[1-5] - S[1-5]
    // or C[0-7] - T[1-12] ....
    private static VERTEBRA_RANGE_REGEXP = /[C:T:L:S]\d+ - [C:T:L:S]\d+/;

    private static VERTEBRA_NAMES = ['C', 'T', 'L', 'S'];

    isApplicable(text: string): boolean {
        return (text.match(VertebraRangeReplaceStrategy.VERTEBRA_RANGE_REGEXP)?.length ?? 0
               ) > 0;
    }

    replaceRaw(text: string): string {
        const range = text.match(VertebraRangeReplaceStrategy.VERTEBRA_RANGE_REGEXP);
        if (!range?.length) {
            return text;
        }

        const vertebras = range[0].split(' - ');
        if (!vertebras.length) {
            return text;
        }
        const firstDigit = vertebras[0].match(/\d+/);
        const secondDigit = vertebras[0].match(/\d+/);
        if (!firstDigit?.length || !secondDigit?.length) {
            return text;
        }

        const firstDigitForReplace = randomDigitFromRange(2, 8, [Number(firstDigit[0])]);
        const secondDigitForReplace = randomDigitFromRange(2, 8, [Number(secondDigit[0])]);
        const firstVertebraNameForReplace = getRandomElement(VertebraRangeReplaceStrategy.VERTEBRA_NAMES);
        const secondVertebraNameForReplace = getRandomElement(VertebraRangeReplaceStrategy.VERTEBRA_NAMES);

        return text.replace(
            range[0],
            `${firstVertebraNameForReplace}${firstDigitForReplace} - ${secondVertebraNameForReplace}${secondDigitForReplace}`
        );
    }
}
