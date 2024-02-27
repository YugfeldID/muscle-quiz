import { Box, Center, Fab, FabIcon, FavouriteIcon, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, ImageSourcePropType, SafeAreaView, StyleSheet } from 'react-native';
import { Muscle } from '../models/Muscle';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { testScenario } from '../services/TestScenario';
import { scaleOnPress } from '../services/utils/ScaleUtils';
import { DonateModal } from './DonateModal';
import { RootStackParamList } from './Navigation';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [isModalOpened, setIsModalOpened] = useState(false);

    function onPressMuscles() {
        navigation.navigate<'MuscleGroupsScreen'>('MuscleGroupsScreen');
    }

    function onPressTest() {
        const muscles = [...muscleGroupsStorage.musclesGroups.values()]
        .reduce((accumulator: Muscle[], muscleGroup) => {
            return accumulator.concat(...muscleGroup.muscles.values());
        }, []);
        testScenario.start(muscles)
        navigation.navigate<'TestScreen'>('TestScreen');
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground
                source={require('../data/images/muscles.png') as ImageSourcePropType}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ opacity: 0.3 }}>

                <Center>
                    <Box justifyContent="center">
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
            <Fab
                size="lg"
                bg="$red400"
                placement="bottom right"
                style={styles.donateButton}
                onPress={() => { setIsModalOpened(true); }}>
                <FabIcon as={FavouriteIcon}/>
            </Fab>
            <DonateModal
                isOpened={isModalOpened}
                setIsOpened={setIsModalOpened}
            />
        </SafeAreaView>
    );
};

interface HomeScreenButtonProps {
    onPress: () => void;
    color: string;
    pressedColor: string;
    text: string;
}
const HomeScreenButton = ({ onPress, color, pressedColor, text }: HomeScreenButtonProps) => {
    return (
        <Pressable
            onPress={onPress}>
            {({ pressed }: { pressed?: boolean | undefined }) => {
                return (
                    <Box w="$40" h="$16"
                         bg={pressed ? pressedColor : color}
                         borderRadius="$md"
                         style={[
                             scaleOnPress(pressed ?? false),
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
    },
    donateButton: {
        opacity: 1,
        margin: 10,
    }
});
