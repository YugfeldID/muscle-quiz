import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Muscle } from '../models/Muscle';
import { MuscleGroup } from '../models/MuscleGroup';
import { HomeScreen } from './HomeScreen';
import { MuscleGroupScreen } from './MuscleGroupScreen';
import { MuscleGroupsScreen } from './MuscleGroupsScreen';
import { MuscleScreen } from './MuscleScreen';
import { TestScreen } from './TestScreen';

export type RootStackParamList = {
    HomeScreen: undefined,
    MuscleGroupsScreen: {
        muscleGroups: MuscleGroup[],
    },
    MuscleGroupScreen: {
        muscleGroup: MuscleGroup,
    },
    MuscleScreen: {
        muscle: Muscle,
    },
    TestScreen: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="MuscleGroupsScreen" component={MuscleGroupsScreen}/>
                <Stack.Screen name="MuscleGroupScreen" component={MuscleGroupScreen}/>
                <Stack.Screen name="MuscleScreen" component={MuscleScreen}/>
                <Stack.Screen name="TestScreen" component={TestScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
