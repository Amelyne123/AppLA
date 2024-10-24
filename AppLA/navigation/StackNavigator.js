import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImcScreen from '../screens/ImcScreen';
import ConverMedScreen from '../screens/ConverMedScreen';
import ConverMoeScreen from '../screens/ConverMoeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Índice de massa corporal" component={ImcScreen} />
      <Stack.Screen name="Conversor de moedas" component={ConverMoeScreen} />
      <Stack.Screen name="Conversor de medidas" component={ConverMedScreen} />
    </Stack.Navigator>
  );
}