import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const muscleGroups = useMemo(() => muscleGroupsStorage.musclesGroups, []);

    function onPressMuscles() {
        navigation.navigate<'MuscleGroupsScreen'>('MuscleGroupsScreen', { muscleGroups });
    }

    function onPressTest() {
        let muscles = muscleGroupsStorage.musclesGroups.reduce((accumulator, muscleGroup) => {
            return accumulator.concat(muscleGroup.muscles);
        }, []);
        testScenario.start(muscles)
        navigation.navigate<'TestScreen'>('TestScreen');
    }

    return (
        <View style={styles.imageThumbnail}>
            <Button title={'Изучить мышцы'}
                    onPress={onPressMuscles}
            />

            <Button title={'Начать тест'}
                    onPress={onPressTest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
});
