import { Box, ScrollView, Text } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Muscle } from '../models/Muscle';
import { RootStackParamList } from './Navigation';

export type MuscleScreenProps = NativeStackScreenProps<RootStackParamList, 'MuscleScreen'>;
export const MuscleScreen = (props: MuscleScreenProps) => {
    const { muscle } = props.route.params;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <Box p="$8">
                    <Box style={styles.row} pb="$4">
                        <Text style={styles.column} bold="true">Название</Text>
                        <Text style={styles.column}>{muscle.getProperty(Muscle.rusName)}</Text>
                    </Box>
                    <Box style={styles.row} pb="$4">
                        <Text style={styles.column} bold="true">Название (англ.)</Text>
                        <Text style={styles.column}>{muscle.getProperty(Muscle.engName)}</Text>
                    </Box>
                    <Box style={styles.row} pb="$4">
                        <Text style={styles.column} bold="true">Начало</Text>
                        <Text style={styles.column}>{muscle.getProperty(Muscle.begin).map((value) =>
                            <Text>&#x2022; {value};</Text>)}</Text>
                    </Box>
                    <Box style={styles.row} pb="$4">
                        <Text style={styles.column} bold="true">Прикрепление</Text>
                        <Text style={styles.column}>{muscle.getProperty(Muscle.end).map((value) =>
                            <Text>&#x2022; {value};</Text>)}</Text>
                    </Box>
                    <Box style={styles.row} pb="$4">
                        <Text style={styles.column} bold="true">Функции</Text>
                        <Text style={styles.column}>{muscle.getProperty(Muscle.functions).map((value) =>
                            <Text>&#x2022; {value};</Text>)}</Text>
                    </Box>
                </Box>
            </ScrollView>
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
        flex: 1,
        flexDirection: 'column',
        display: 'flex'
    }
});
