import { getRandomElement, randomDigitFromRange } from '../../utils/ArrayUtils';
import { DigitReplaceStrategy } from './DigitReplaceStrategy';

export class VertebraReplaceStrategy extends DigitReplaceStrategy {
    //C[1-7] /T[1-12] /L[1-5] /S[1-5]
    private static VERTEBRA_REGEXP = /[C:T:L:S]\d+/;

    private static VERTEBRA_NAMES = ['C', 'T', 'L', 'S'];

    isApplicable(text: string): boolean {
        return (text.match(VertebraReplaceStrategy.VERTEBRA_REGEXP)?.length ?? 0
               ) > 0;
    }

    replaceRaw(text: string): string {
        const range = text.match(VertebraReplaceStrategy.VERTEBRA_REGEXP);
        if (!range?.length) {
            return text;
        }
        const vertebraNumberMatch = range[0].match(/\d+/);
        if (!vertebraNumberMatch?.length) {
            return text;
        }

        const vertebraNameForReplace = getRandomElement(VertebraReplaceStrategy.VERTEBRA_NAMES);
        const vertebraNumberForReplace = randomDigitFromRange(2, 8, [Number(vertebraNumberMatch[0])]);
        return text.replace(range[0], `${vertebraNameForReplace}${vertebraNumberForReplace}`);
    }
}
