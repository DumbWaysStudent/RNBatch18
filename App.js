import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FundamentalRN from './src/screens/FundamentalRN';
import FundamentalFlatList from './src/screens/FundamentalFlatList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="FundamentalRN" component={FundamentalRN} options={{
          title: "React Native Fundamental"
        }} />
        <Stack.Screen name="FundamentalFlatList" component={FundamentalFlatList} options={{
          title: "React Native FlatList"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}