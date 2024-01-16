import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Muscle } from '../models/Muscle';
import { RootStackParamList } from './Navigation';

export type MuscleScreenProps = NativeStackScreenProps<RootStackParamList, 'MuscleScreen'>;
export const MuscleScreen = (props: MuscleScreenProps) => {
    const { muscle } = props.route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.column}>Название</Text>
                <Text style={styles.column}>{muscle.getProperty(Muscle.rusName)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.column}>Название (англ.)</Text>
                <Text style={styles.column}>{muscle.getProperty(Muscle.engName)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.column}>Начало</Text>
                <Text style={styles.column}>{muscle.getProperty(Muscle.begin).map((value) =>
                    <Text>&#x2022; {value};</Text>)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.column}>Прикрепление</Text>
                <Text style={styles.column}>{muscle.getProperty(Muscle.end).map((value) =>
                    <Text>&#x2022; {value};</Text>)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.column}>Функции</Text>
                <Text style={styles.column}>{muscle.getProperty(Muscle.functions).map((value) =>
                    <Text>&#x2022; {value};</Text>)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
});
