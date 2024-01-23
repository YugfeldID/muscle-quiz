import { MusclePropertyValue } from '../../models/Muscle';
import { TestSettings } from '../TestSettings';

export function formatPropertyValueText(propertyValue: MusclePropertyValue): string {
    if (typeof propertyValue === 'string') {
        return firstLetterToLowerCase(propertyValue);
    } else if (Array.isArray(propertyValue)) {
        return propertyValue.map(el => firstLetterToLowerCase(el)).join(`${TestSettings.DEFAULT_ANSWERS_SEPARATOR}\n`);
    }
}

function firstLetterToLowerCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.substring(1);
}
