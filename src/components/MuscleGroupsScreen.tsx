import { Box, HStack, Pressable, ScrollView, Text } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { MuscleGroup } from '../models/MuscleGroup';
import { RootStackParamList } from './Navigation';

export type MuscleGroupsProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupsScreen'>;

export const MuscleGroupsScreen = (props: MuscleGroupsProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function onMuscleGroupPress(muscleGroup: MuscleGroup) {
        navigation.navigate<'MuscleGroupScreen'>('MuscleGroupScreen', { muscleGroup });
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <HStack space="md" p="$8" style={styles.groupsContainer}>
                    {props.route.params.muscleGroups.map((group) => (
                        <Pressable
                            key={group.name}
                            onPress={() => onMuscleGroupPress(group)}
                            $hover-bg="$primary400">

                            <Box h="$40" borderRadius="$md" pb="$4" styles={styles.groupContainer} w="$24">
                                {!group.image && (
                                    <Box bg="$blue100" style={styles.groupImage} borderRadius="$md"/>
                                )}
                                {group.image && (
                                    <ImageBackground source={group.image}
                                                     resizeMode="cover"
                                                     style={styles.groupImage}
                                                     imageStyle={{ opacity: 0.3, borderRadius: 6 }}/>
                                )}
                                <Text bg="$cyan700" style={styles.groupName} borderRadius="$md">
                                    {group.name}
                                </Text>
                            </Box>
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
        flex: 4
    },
    groupName: {
        flex: 1,
        textAlign: 'center',
        color: 'white'
    },
    groupsContainer: {
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    groupContainer: {
        width: 120
    }
});
