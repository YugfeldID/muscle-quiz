import { Box, Button, ButtonGroup, ButtonText, Center, Text } from '@gluestack-ui/themed';
import analytics from '@react-native-firebase/analytics';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { testRatingService } from '../services/TestRatingService';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export const TestFinishScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const ratingModel = useMemo(() => testRatingService.getRatingModel(testScenario.getScore()), []);

    useEffect(() => {
        navigation.setOptions({ headerRight: () => undefined });
    }, []);

    useEffect(() => {
        void (async () => {
            await analytics().logEvent("test_finished", {score: ratingModel.scoreLevel.toString()});
        })();
    }, [ratingModel]);

    async function onRepeatTests() {
        testScenario.repeat();
        navigation.dispatch(StackActions.push('TestScreen'));

        await analytics().logEvent("repeat_test__click");
    }

    function onReturnToMain() {
        navigation.navigate<'HomeScreen'>('HomeScreen');
    }

    return (
        <Center p="$8" style={styles.mainContainer}>
            <Box style={styles.mainContainer} justifyContent="center">
                <Text
                    pb="$4"
                    size="lg"
                    textAlign="center"
                    bold>
                    {ratingModel.mainText}
                </Text>
                <Text
                    pb="$4"
                    textAlign="center">
                    {ratingModel.descriptionText}
                </Text>
                {ratingModel.image && (
                    <ImageBackground source={ratingModel.image}
                                     resizeMode="cover"
                                     style={styles.image}
                                     imageStyle={{
                                         opacity: 0.7
                                     }}/>

                )}
            </Box>
            <ButtonGroup space="md" pt="$12">
                <Button size="lg" onPress={onRepeatTests}>
                    <ButtonText>Повторить</ButtonText>
                </Button>
                <Button size="lg" onPress={onReturnToMain} action="secondary">
                    <ButtonText>На главную</ButtonText>
                </Button>
            </ButtonGroup>
        </Center>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 330
    }
});
