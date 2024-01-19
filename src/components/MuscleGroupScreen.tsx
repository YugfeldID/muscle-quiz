import {
    Box,
    Button,
    ButtonText,
    Center,
    Divider,
    FlatList,
    HStack,
    Icon,
    InfoIcon,
    Pressable,
    Text
} from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Muscle } from '../models/Muscle';
import { testScenario } from '../services/TestScenario';
import { RootStackParamList } from './Navigation';

export type MuscleGroupProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupScreen'>;
export const MuscleGroupScreen = (props: MuscleGroupProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [dataSource, setDataSource] = useState<Muscle[]>([]);

    useEffect(() => {
        setDataSource(props.route.params.muscleGroup.muscles);
    }, [props.route.params.muscleGroup]);

    function onPress(muscle: Muscle) {
        navigation.navigate<'MuscleScreen'>('MuscleScreen', { muscle });
    }

    function onStartTestPress() {
        testScenario.start(props.route.params.muscleGroup.muscles);
        navigation.navigate<'TestScreen'>('TestScreen');
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                data={dataSource}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() => onPress(item)}
                        $hover-bg="$primary400">

                        <Box p="$8" pb="0">
                            <HStack alignItems="baseline">
                                <Icon as={InfoIcon} m="$2" w="$5" h="$5"/>
                                <Box space="md" pb="$8">
                                    <Text>{item.getProperty(Muscle.rusName)}</Text>
                                </Box>
                            </HStack>
                            {index < dataSource.length - 1 && (
                                <Divider my="$0.5"/>
                            )}
                        </Box>
                    </Pressable>
                )}
                numColumns={1}
                keyExtractor={(item, index) => index}
            />
            <Center m="$8">
                <Button onPress={onStartTestPress}>
                    <ButtonText>Начать тест</ButtonText>
                </Button>
            </Center>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },
});
