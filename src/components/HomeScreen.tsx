import { Box, Center, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { testScenario } from '../services/TestScenario';
import { scaleOnPress } from '../services/utils/ScaleUtils';
import { RootStackParamList } from './Navigation';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function onPressMuscles() {
        navigation.navigate<'MuscleGroupsScreen'>('MuscleGroupsScreen');
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
                                pressedColor="$cyan900"
                                text="Изучить мышцы"
                            />

                            <HomeScreenButton
                                onPress={onPressTest}
                                color="$blue400"
                                pressedColor="$blue600"
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
    pressedColor: string;
    text: string;
}
const HomeScreenButton = ({ onPress, color, pressedColor, text }: HomeScreenButtonProps) => {
    return (
        <Pressable
            onPress={onPress}>
            {({ pressed }) => {
                return (
                    <Box w="$40" h="$16"
                         bg={pressed ? pressedColor : color}
                         borderRadius="$md"
                         style={[
                             scaleOnPress(pressed),
                             styles.textContainer
                         ]}>
                        <Text size="md" color="white">{text}</Text>
                    </Box>
                );
            }}
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
