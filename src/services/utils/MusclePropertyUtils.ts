import { MusclePropertyValue } from '../../models/Muscle';
import { TestSettings } from '../TestSettings';

export function formatPropertyValueText(propertyValue: MusclePropertyValue): string {
    if (typeof propertyValue === 'string') {
        return  propertyValue as string;
    } else if (Array.isArray(propertyValue)) {
        return (propertyValue as []
        ).join(TestSettings.DEFAULT_ANSWERS_SEPARATOR)
    }
}
