import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Muscle } from '../models/Muscle';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export type MuscleGroupProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupScreen'>;
export const MuscleGroupScreen = (props: MuscleGroupProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [dataSource, setDataSource] = useState<Muscle[]>([]);

    useEffect(() => {
        setDataSource(props.route.params.muscleGroup.muscles);
    }, [props.route.params.muscleGroup]);

    function onPress(muscle: Muscle) {
        navigation.navigate<'MuscleScreen'>('MuscleScreen', { muscle });
    }

    function onStartTestPress() {
        testScenario.start(props.route.params.muscleGroup.muscles);
        navigation.navigate<'TestScreen'>('TestScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Начать тест" onPress={onStartTestPress}/>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <View style={styles.imageThumbnail}>
                            <Text onPress={() => onPress(item)}>{item.getProperty(Muscle.rusName)}</Text>
                        </View>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
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
