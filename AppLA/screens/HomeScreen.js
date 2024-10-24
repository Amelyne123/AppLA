import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>T E L A   I N I C I A L</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Índice de massa corporal')}>
        <Text style={HomeStyles.buttonText}>                        Calcular IMC                        </Text>

      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Conversor de moedas')}>
        <Text style={HomeStyles.buttonText}>                Conversor de moedas                 </Text>


      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Conversor de medidas')}>
        <Text style={HomeStyles.buttonText}>                Conversor de medidas                </Text>
      </TouchableOpacity>
    
    </View>
  );
}