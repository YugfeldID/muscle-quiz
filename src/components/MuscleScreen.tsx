import { Box, ScrollView, Text } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { MuscleProperty } from '../models/Muscle';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { RootStackParamList } from './Navigation';

export type MuscleScreenProps = NativeStackScreenProps<RootStackParamList, 'MuscleScreen'>;
export const MuscleScreen = (props: MuscleScreenProps) => {
    const { muscleName, muscleGroupName } = props.route.params;

    const muscle = useMemo(
        () => muscleGroupsStorage.musclesGroups.get(muscleGroupName)?.muscles.get(muscleName),
        [muscleName, muscleGroupName]
    );
    return (
        <SafeAreaView style={styles.mainContainer}>
            {muscle && (
                <ScrollView>
                    <Box p="$8">
                        <Box style={styles.row} pb="$4">
                            <Text style={styles.column} bold>Название</Text>
                            <Text style={styles.column}>{muscle.getProperty(MuscleProperty.rusName)}</Text>
                        </Box>
                        <Box style={styles.row} pb="$4">
                            <Text style={styles.column} bold>Название (англ.)</Text>
                            <Text style={styles.column}>{muscle.getProperty(MuscleProperty.engName)}</Text>
                        </Box>
                        <Box style={styles.row} pb="$4">
                            <Text style={styles.column} bold>Начало</Text>
                            <Box style={styles.column}>{muscle.getProperty(MuscleProperty.begin).map((value) =>
                                <Text key={value}>&#x2022; {value};</Text>)}
                            </Box>
                        </Box>
                        <Box style={styles.row} pb="$4">
                            <Text style={styles.column} bold>Прикрепление</Text>
                            <Box style={styles.column}>{muscle.getProperty(MuscleProperty.end).map((value) =>
                                <Text key={value}>&#x2022; {value};</Text>)}
                            </Box>
                        </Box>
                        <Box style={styles.row} pb="$4">
                            <Text style={styles.column} bold>Функции</Text>
                            <Box style={styles.column}>{muscle.getProperty(MuscleProperty.functions).map((value) =>
                                <Text key={value}>&#x2022; {value};</Text>)}
                            </Box>
                        </Box>
                    </Box>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    }
});
