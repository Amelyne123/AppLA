import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; 
    if (!pesoNum || !alturaNum) {
      setResultado('Por favor, insira valores válidos para peso e altura.');
      return;
    }
    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(`Seu IMC é: ${imc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
      <Text>Menos de 16 - Baixo peso (grau 1)</Text>
      <Text> </Text>
      <Text >Entre 16 e 16,99 - Baixo peso (grau 2)</Text>
      <Text> </Text>
      <Text >Entre 17 a 18,49 - Baixo peso (grau 3)</Text>
      <Text> </Text>
      <Text >Entre 18,50 a 24,99 - Peso adequado</Text>
      <Text> </Text>
      <Text >Entre 25 a 29,99 - Sobrepeso</Text>
      <Text> </Text>
      <Text >Entre 30 e 34,99 - Obesidade (grau 1)</Text>
      <Text> </Text>
      <Text >Entre 35 e 39,99 - Obesidade (grau 2)</Text>
      <Text> </Text>
      <Text >A partir de 40 - Obesidade (grau 3)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 10,
    width: '20%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#031F14',
    padding: 10,
    borderRadius: 100,
    marginBottom: 10,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
});