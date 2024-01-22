import { MusclePropertyValue } from '../../models/Muscle';
import { TestSettings } from '../TestSettings';

export function formatPropertyValueText(propertyValue: MusclePropertyValue): string {
    if (typeof propertyValue === 'string') {
        return  propertyValue.toLowerCase();
    } else if (Array.isArray(propertyValue)) {
        return propertyValue.map(el => el.toLowerCase()).join(`${TestSettings.DEFAULT_ANSWERS_SEPARATOR}\n`);
    }
}
