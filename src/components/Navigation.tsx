import analytics from '@react-native-firebase/analytics';
import { NavigationContainerRef } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/routers/src/types';
import React, { useRef } from 'react';
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
    const routeNameRef =
        useRef<string>();
    const navigationRef = useRef<NavigationContainerRef<RootStackParamList>>(null);

    function updateRouteName() {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    }

    async function trackRouteChange() {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName
            });
        }
        routeNameRef.current = currentRouteName;
    }

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={updateRouteName}
            onStateChange={trackRouteChange}>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Muscle Quiz' }}/>
                <Stack.Screen name="MuscleGroupsScreen" component={MuscleGroupsScreen}
                              options={{ title: 'Группы мышц' }}/>
                <Stack.Screen name="MuscleGroupScreen" component={MuscleGroupScreen} options={{ title: 'Мышцы' }}/>
                <Stack.Screen name="MuscleScreen" component={MuscleScreen} options={{ title: 'Мышца' }}/>
                <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Тесты' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
