import {
    Box,
    Button,
    ButtonGroup,
    ButtonText,
    Center,
    CircleIcon,
    Radio,
    RadioGroup,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
    ScrollView,
    Text,
    VStack
} from '@gluestack-ui/themed';
import analytics from '@react-native-firebase/analytics';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MuscleProperty } from '../models/Muscle';
import { Answer, TestModel } from '../models/TestModel';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';
import { TestFinishScreen } from './TestFinishScreen';

export const TestScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [chosenAnswer, setChosenAnswer] = useState<Answer>();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>();

    const firstTest: TestModel | undefined = useMemo(() => testScenario.getTest(), []);
    const [test, setTest] = useState<TestModel | undefined>(firstTest);
    const isAnswerCommitted = isAnswerCorrect !== undefined;

    useEffect(() => {
        updateTestsCount();
    }, []);

    function onAnswerChoose(answerId: string) {
        const answers = test?.answers ?? [];
        const answer = answers.find((a) => a.id === answerId);
        if (isAnswerCorrect !== undefined || !answer) {
            return;
        }
        setChosenAnswer(answer);
    }

    async function onAnswerSubmit() {
        if (chosenAnswer) {
            const isCorrect = testScenario.commitAnswer(chosenAnswer);
            setIsAnswerCorrect(isCorrect);
            await analytics().logEvent("answer_submit__click", {"is_correct": isCorrect});
        }
    }

    function updateTestsCount() {
        const totalTestsCont = testScenario.getTotalTestsCount();
        const testCountInfo = `${totalTestsCont - testScenario.getLeftTestsCount()}/${totalTestsCont}`;
        navigation.setOptions({ headerRight: () => <Text pr="$8" size="lg">{testCountInfo}</Text> })
    }

    function onPressNext() {
        setTest(testScenario.getTest());
        setChosenAnswer(undefined);
        setIsAnswerCorrect(undefined);
        updateTestsCount();
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
                                <Text bold size="lg">
                                    {test.muscle.getProperty<string>(MuscleProperty.rusName).toLowerCase()}
                                </Text>
                                ?
                            </Text>
                            <RadioGroup onChange={onAnswerChoose}>

                                {test.answers.map((t) => (
                                    <Radio
                                        value={t.id}
                                        size="md"
                                        p="$2"
                                        isDisabled={isAnswerCommitted}
                                        key={t.id}>

                                        <RadioIndicator mr="$2">
                                            <RadioIcon as={CircleIcon}/>
                                        </RadioIndicator>
                                        <RadioLabel>{t.text}</RadioLabel>
                                    </Radio>
                                ))}
                            </RadioGroup>
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
                            <Button
                                size="lg"
                                isDisabled={!chosenAnswer || isAnswerCommitted}
                                onPress={onAnswerSubmit}>
                                <ButtonText>Подтвердить</ButtonText>
                            </Button>
                            <Button
                                size="lg"
                                isDisabled={!isAnswerCommitted}
                                onPress={onPressNext}>
                                <ButtonText>Дальше</ButtonText>
                            </Button>
                        </ButtonGroup>
                    </Center>
                </>
            )}
            {!test && (
                <TestFinishScreen/>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    testContainer: {
        flex: 1
    }
});
