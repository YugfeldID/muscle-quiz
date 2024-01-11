import React, { useMemo } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Answer, TestModel } from './src/models/TestModel';
import { musclesStorage } from './src/services/MusclesStorage';
import { beginTestGenerator } from './src/services/test_generators/BeginTestGenerator';

export default function App() {
  let test: TestModel = useMemo(() => beginTestGenerator.generateTest(musclesStorage.muscles), []);

  function clickHandler(answer: Answer) {
    alert('is right: ' + answer.isRight);

  }

  return (
    <View style={styles.container}>
        <Text>{test.question}</Text>
        {test.answers.map((t) => <Button onPress={() => clickHandler(t)} title={t.text} key={t.text}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
