import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export function scaleOnPress(isPressed: boolean): ViewStyle {
    return {
        transform: [
            {
                scale: isPressed ? 0.96 : 1
            }
        ]
    };
}
