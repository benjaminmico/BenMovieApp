import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
