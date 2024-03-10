/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from 'components/NavigationBar';
import React from 'react';
import { HomeScreen, MovieDetailScreen } from 'screens';

import type { AppNavigationParamList } from './types';

const Stack = createStackNavigator<AppNavigationParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerShown: true,
          header: () => <NavigationBar actionType="goBack" />,
        })}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={() => ({
          headerShown: true,
          header: () => <NavigationBar actionType="close" />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
