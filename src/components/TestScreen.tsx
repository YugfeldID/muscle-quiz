import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';
import { Answer, TestModel } from '../models/TestModel';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export const TestScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [chosenAnswer, setChosenAnswer] = useState<Answer>();
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>();

    const firstTest: TestModel | undefined = useMemo(() => testScenario.getTest(), []);
    const [test, setTest] = useState<TestModel | undefined>(firstTest);

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

    function onRepeatTests() {
        testScenario.repeat();
        navigation.dispatch(StackActions.push('TestScreen'));
    }

    function onReturnToMain() {
        navigation.navigate<'HomeScreen'>('HomeScreen');
    }

    return (
        <View style={styles.container}>
            {test && (
                <>
                    <Text>{test.question}</Text>
                    {test.answers.map((t) => <Text onPress={() => onAnswerChoose(t)}
                                                   key={t.text}
                                                   disabled={isAnswerCorrect !== undefined}
                                                   style={chosenAnswer === t ? styles.selected :
                                                          undefined}>{t.text}</Text>)}
                    <View>
                        {isAnswerCorrect && (<Text>Верный ответ!</Text>
                        )}
                        {isAnswerCorrect === false &&
                         (<Text>Правильный ответ: {test.answers.find((a) => a.isRight)?.text}</Text>
                         )}
                        <Button title="Подтвердить" disabled={!chosenAnswer || isAnswerCorrect !== undefined}
                                onPress={onAnswerSubmit}/>
                        <Button title="Дальше" disabled={isAnswerCorrect === undefined} onPress={onPressNext}/>
                    </View>
                </>
            )}
            {!test && (
                <>
                    <Text>Правильных ответов</Text>
                    <Text>{testScenario.getScore().correctAnswersCount}/{testScenario.getScore().allAnswersCount}</Text>
                    <Button title="Повторить" onPress={onRepeatTests}/>
                    <Button title="На главную" onPress={onReturnToMain}/>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    selected: {
        borderWidth: 1,
        borderColor: 'green'
    }
});
