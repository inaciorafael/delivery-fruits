import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Container } from './styles';

const Tab = createBottomTabNavigator()

const Categories = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Categories;