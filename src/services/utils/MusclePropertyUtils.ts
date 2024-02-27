import { MusclePropertyValue } from '../../models/Muscle';
import { DEFAULT_ANSWERS_SEPARATOR } from '../TestSettings';

export function formatPropertyValueText(propertyValue: MusclePropertyValue): string {
    if (typeof propertyValue === 'string') {
        return firstLetterToLowerCase(propertyValue);
    } else if (Array.isArray(propertyValue)) {
        return propertyValue.map(el => firstLetterToLowerCase(el)).join(`${DEFAULT_ANSWERS_SEPARATOR}\n`);
    }

    return "";
}

function firstLetterToLowerCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.substring(1);
}
