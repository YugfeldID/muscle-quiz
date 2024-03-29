import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers/src/types';
import React from 'react';
import { HomeScreen } from './HomeScreen';
import { MuscleGroupScreen } from './MuscleGroupScreen';
import { MuscleGroupsScreen } from './MuscleGroupsScreen';
import { MuscleScreen } from './MuscleScreen';
import { TestScreen } from './TestScreen';

export interface RootStackParamList extends ParamListBase {
    HomeScreen: undefined,
    MuscleGroupsScreen: undefined,
    MuscleGroupScreen: {
        muscleGroupName: string,
    },
    MuscleScreen: {
        muscleName: string,
        muscleGroupName: string,
    },
    TestScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Muscle Quiz' }}/>
                <Stack.Screen name="MuscleGroupsScreen" component={MuscleGroupsScreen} options={{ title: 'Группы мышц' }}/>
                <Stack.Screen name="MuscleGroupScreen" component={MuscleGroupScreen} options={{ title: 'Мышцы' }}/>
                <Stack.Screen name="MuscleScreen" component={MuscleScreen} options={{ title: 'Мышца' }}/>
                <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Тесты' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
