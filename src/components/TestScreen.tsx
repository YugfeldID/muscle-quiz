import { Box, Button, ButtonGroup, ButtonText, Center, HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MuscleProperty } from '../models/Muscle';
import { Answer, TestModel } from '../models/TestModel';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export const TestScreen = () => {
    const [chosenAnswer, setChosenAnswer] = useState<Answer>();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>();

    const firstTest: TestModel | undefined = useMemo(() => testScenario.getTest(), []);
    const [test, setTest] = useState<TestModel | undefined>(firstTest);

    const isAnswerCommitted = isAnswerCorrect !== undefined;

    function onAnswerChoose(answer: Answer) {
        if (isAnswerCorrect !== undefined) {
            return;
        }
        setChosenAnswer(answer);
    }

    function onAnswerSubmit() {
        if (chosenAnswer) {
            setIsAnswerCorrect(testScenario.commitAnswer(chosenAnswer));
        }
    }

    function onPressNext() {
        setTest(testScenario.getTest());
        setChosenAnswer(undefined);
        setIsAnswerCorrect(undefined);
    }

    function getBorderColor(answer: Answer) {
        const isSelected = chosenAnswer === answer;
        if (!isSelected) {
            return undefined;
        }

        if (isAnswerCorrect === undefined) {
            return '$borderLight500';
        }

        return isAnswerCorrect ? '$success500' : '$error500';
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {test && (
                <>
                    <ScrollView>
                        <VStack
                            style={styles.testContainer}
                            p="$8">

                            <Text pb="$6" size="lg">
                                {test.question}
                                <Text bold="true" size="lg">
                                    {test.muscle.getProperty<string>(MuscleProperty.rusName).toLowerCase()}
                                </Text>
                                ?
                            </Text>
                            {test.answers.map((t) => (
                                <HStack
                                    key={t.text}
                                    p="$2"
                                    borderRadius="$md"
                                    borderWidth={getBorderColor(t) ? 1 : undefined}
                                    borderColor={getBorderColor(t)}>
                                    <Text>&#x2022;</Text>
                                    <Text
                                        style={{flex: 1, paddingLeft: 5}}
                                        onPress={() => onAnswerChoose(t)}
                                        key={t.text}
                                        isDisabled={isAnswerCommitted}>
                                        {t.text}
                                    </Text>
                                </HStack>
                            ))}
                            {isAnswerCommitted && (
                                <Box>
                                    {isAnswerCorrect && (
                                        <Text color="$success500" pt="$6">
                                            Верный ответ!
                                        </Text>
                                    )}
                                    {!isAnswerCorrect && (
                                        <Text color="$error500" pt="$6">
                                            Правильный ответ: {test.answers.find((a) => a.isRight)?.text}
                                        </Text>
                                    )}
                                </Box>
                            )}
                        </VStack>
                    </ScrollView>
                    <Center m="$8">
                        <ButtonGroup space="md" pt="$8">
                            <Button isDisabled={!chosenAnswer || isAnswerCommitted}
                                    onPress={onAnswerSubmit}>
                                <ButtonText>Подтвердить</ButtonText>
                            </Button>
                            <Button isDisabled={!isAnswerCommitted} onPress={onPressNext}>
                                <ButtonText>Дальше</ButtonText>
                            </Button>
                        </ButtonGroup>
                    </Center>
                </>
            )}
            {!test && (
                <TestFinishedScreen/>
            )}
        </SafeAreaView>
    );
};

const TestFinishedScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function onRepeatTests() {
        testScenario.repeat();
        navigation.dispatch(StackActions.push('TestScreen'));
    }

    function onReturnToMain() {
        navigation.navigate<'HomeScreen'>('HomeScreen');
    }

    return (
        <Center p="$8" style={styles.mainContainer}>
            <Box style={styles.mainContainer} justifyContent="center">
                <Text size="lg">Правильных ответов:</Text>
                <Text
                    textAlign="center"
                    bold="true">
                    {testScenario.getScore().correctAnswersCount}/{testScenario.getScore().allAnswersCount}
                </Text>
            </Box>
            <ButtonGroup space="md" pt="$12">
                <Button onPress={onRepeatTests}>
                    <ButtonText>Повторить</ButtonText>
                </Button>
                <Button onPress={onReturnToMain} action="secondary">
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
    testContainer: {
        flex: 1
    }
});
