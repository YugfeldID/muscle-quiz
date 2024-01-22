import { Box, HStack, ScrollView, Text, Pressable } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';

import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { MuscleGroup } from '../models/MuscleGroup';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { scaleOnPress } from '../services/utils/ScaleUtils';
import { RootStackParamList } from './Navigation';

export type MuscleGroupsProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupsScreen'>;

export const MuscleGroupsScreen = (props: MuscleGroupsProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const muscleGroups = useMemo(() => muscleGroupsStorage.musclesGroups, []);

    function onMuscleGroupPress(muscleGroup: MuscleGroup) {
        navigation.navigate<'MuscleGroupScreen'>('MuscleGroupScreen', { muscleGroup });
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <HStack space="md" p="$8" style={styles.groupsContainer}>
                    {muscleGroups.map((group) => (
                        <Pressable
                            key={group.name}
                            onPress={() => onMuscleGroupPress(group)}>
                            {({ pressed }) => {
                                return (
                                    <Box
                                        borderRadius="$md"
                                        pb="$4"
                                        style={[
                                            scaleOnPress(pressed),
                                            styles.groupContainer
                                        ]}>
                                        {!group.image && (
                                            <Box bg="$blue100" style={styles.groupImage} borderRadius="$md"/>
                                        )}
                                        {group.image && (
                                            <ImageBackground source={group.image}
                                                             resizeMode="cover"
                                                             style={styles.groupImage}
                                                             imageStyle={{
                                                                 opacity: pressed ? 0.7 : 0.3,
                                                                 borderRadius: 6
                                                             }}/>
                                        )}
                                        <Box bg={pressed ? '$cyan900' : '$cyan700'} style={styles.groupNameContainer}
                                             borderRadius="$md">
                                            <Text size="xs" style={styles.groupName}>
                                                {group.name}
                                            </Text>
                                        </Box>
                                    </Box>
                                );
                            }}
                        </Pressable>
                    ))}
                </HStack>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    groupImage: {
        flex: 3
    },
    groupContainer: {
        width: 96,
        height: 160
    },
    groupNameContainer: {
        flex: 1,
        justifyContent: 'center',
        color: 'white'
    },
    groupName: {
        textAlign: 'center',
        color: 'white'
    },
    groupsContainer: {
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});
