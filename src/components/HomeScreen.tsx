import { Box, Center, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
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
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground
                source={require('../data/images/muscles.png')}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ opacity: 0.3 }}>

                <Center>
                    <Box h="$60" justifyContent="center">
                        <VStack space="md">
                            <HomeScreenButton
                                onPress={onPressMuscles}
                                color="$cyan700"
                                text="Изучить мышцы"
                            />

                            <HomeScreenButton
                                onPress={onPressTest}
                                color="$blue400"
                                text="Начать тест"
                            />
                        </VStack>
                    </Box>
                </Center>
            </ImageBackground>
        </SafeAreaView>
    );
};

type HomeScreenButtonProps = {
    onPress: () => void;
    color: string;
    text: string;
}
const HomeScreenButton = ({ onPress, color, text }: HomeScreenButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            $hover-bg="$primary400">
            <Box w="$40" h="$16" bg={color} borderRadius="$md" style={styles.textContainer}>
                <Text size="md" color="white">{text}</Text>
            </Box>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
});
