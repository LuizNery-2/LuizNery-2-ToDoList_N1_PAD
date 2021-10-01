import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
     <StatusBar hidden={true}/>
     <Routes/>
  </NavigationContainer>
  </Provider>
  );
}


