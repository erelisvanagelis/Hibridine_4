/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CameraScreen from './src/screens/CameraScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import FoundProductScreen from './src/screens/FoundProductScreen';
import AllProductScreen from './src/screens/AllProductsScreen';
import UpdateProductScreen from './src/screens/UpdateProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="camera" component={CameraScreen} />
      <Stack.Screen name="add" component={AddProductScreen} />
      <Stack.Screen name="found" component={FoundProductScreen} />
      <Stack.Screen name="update" component={UpdateProductScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="stack" component={StackScreens} />
          <Tab.Screen name="all" component={AllProductScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};
export default App;
