import {
    Box,
    Button,
    ButtonText,
    Center,
    ChevronRightIcon,
    Divider,
    FlatList,
    HStack,
    Icon,
    Pressable,
    Text
} from '@gluestack-ui/themed';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useMemo, useState } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Muscle, MuscleProperty } from '../models/Muscle';
import { muscleGroupsStorage } from '../services/MuscleGroupsStorage';
import { testScenario } from '../services/TestScenario';
import { scaleOnPress } from '../services/utils/ScaleUtils';
import { RootStackParamList } from './Navigation';

export type MuscleGroupProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupScreen'>;
export const MuscleGroupScreen = (props: MuscleGroupProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [dataSource, setDataSource] = useState<Muscle[]>([]);
    const { muscleGroupName } = props.route.params;

    const muscleGroup = useMemo(() => muscleGroupsStorage.musclesGroups.get(muscleGroupName), []);

    useEffect(() => {
        setDataSource([
            ...muscleGroupsStorage.musclesGroups.get(muscleGroupName)?.muscles.values()
        ]);
    }, [muscleGroupName]);

    function onPress(muscle: Muscle) {
        navigation.navigate<'MuscleScreen'>(
            'MuscleScreen',
            { muscleName: muscle.getProperty(MuscleProperty.rusName), muscleGroupName }
        );
    }

    function onStartTestPress() {
        testScenario.start([...muscleGroup?.muscles.values()]);
        navigation.navigate<'TestScreen'>('TestScreen');
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                data={dataSource}
                renderItem={({ item, index }) => (
                    <Pressable
                        key={item.getProperty(MuscleProperty.rusName)}
                        onPress={() => onPress(item)}>
                        {({ pressed }) => {
                            return (
                                <Box pt="$8" pl="$8" pr="$8">
                                    <HStack style={[
                                        scaleOnPress(pressed),
                                        styles.muscleRow
                                    ]}>
                                        <Box space="md" pb="$8">
                                            <Text>{item.getProperty(MuscleProperty.rusName)}</Text>
                                        </Box>
                                        <Icon as={ChevronRightIcon} mr="$2" w="$5" h="$5" style={styles.iconContainer}/>
                                    </HStack>
                                    {index < dataSource.length - 1 && (
                                        <Divider my="$0.5"/>
                                    )}
                                </Box>
                            );
                        }}
                    </Pressable>
                )}
                numColumns={1}
                keyExtractor={(item, index) => index}
            />
            <Center m="$8">
                <Button size="lg" onPress={onStartTestPress}>
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
    muscleRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    iconContainer: {
        marginTop: 1
    }
});
