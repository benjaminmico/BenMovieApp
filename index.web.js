import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path according to your file structure
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Register the app component
AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});