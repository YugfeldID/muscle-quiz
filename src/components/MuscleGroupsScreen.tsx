import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MuscleGroup } from '../models/MuscleGroup';
import { RootStackParamList } from './Navigation';

export type MuscleGroupsProps = NativeStackScreenProps<RootStackParamList, 'MuscleGroupsScreen'>;

export const MuscleGroupsScreen = (props: MuscleGroupsProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [dataSource, setDataSource] = useState<MuscleGroup[]>([]);

    // useEffect(() => {
    //     let items = Array.apply(null, Array(60)).map((v, i) => {
    //         return {
    //             id: i,
    //             src: 'https://unsplash.it/400/400?image=' + (i + 1)
    //         };
    //     });
    //     setDataSource(items);
    // }, []);

    useEffect(() => {
        setDataSource(props.route.params.muscleGroups);
    }, [props.route.params.muscleGroups]);

    function onMuscleGroupPress(muscleGroup: MuscleGroup) {
        navigation.navigate<'MuscleGroupScreen'>('MuscleGroupScreen', { muscleGroup });
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataSource}
                renderItem={({item}) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        {/*<Image*/}
                        {/*    style={styles.imageThumbnail}*/}
                        {/*    source={{uri: item.src}}*/}
                        {/*/>*/}
                        <View style={styles.imageThumbnail}>
                            <Text onPress={() => onMuscleGroupPress(item)}>{item.name}</Text>
                        </View>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
