import { Box, ScrollView, Text } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';

import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
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
    const pictures = muscle?.getProperty(MuscleProperty.pictures);
    return (
        <SafeAreaView style={styles.mainContainer}>
            {muscle && (
                <ScrollView>
                    <Box p="$8">
                        {pictures && (
                            <Box pb="$8" style={styles.imagesWithAttributeContainer}>
                                <Box style={styles.imagesContainer}>
                                    {pictures.map((picture, index) =>
                                        <ImageBackground
                                            key={index}
                                            source={picture}
                                            style={styles.muscleImage}
                                            resizeMode="cover"
                                            imageStyle={{
                                                borderRadius: 6
                                            }}/>
                                    )}
                                </Box>
                                <Text size="2xs" pt="$2">
                                    BodyParts3D, © The Database Center for Life Science licensed under CC
                                    Attribution-Share Alike 2.1 Japan
                                </Text>
                            </Box>
                        )}
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
    },
    imagesWithAttributeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%'
    },
    muscleImage: {
        width: 150,
        height: 150
    }
});
