import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './pages/Splash';
import Categories from './pages/Categories';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Categories' component={Categories} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}