import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function MoedaScreen({ navigation }) {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const TaxaRealParaDolar = 0.19;
  const TaxaDolarParaReal = 5.25;
  const TaxaRealParaEuro = 0.16;
  const TaxaEuroParaReal = 6.15;
  const TaxaDolarParaEuro = 0.85;
  const TaxaEuroParaDolar = 1.18;

  const converterRealParaDolar = () => {
    const real = parseFloat(valor);
    const resultado = real * TaxaRealParaDolar;
    setResultado(`Resultado: ${resultado.toFixed(2)} USD`);
  };

  const converterDolarParaReal = () => {
    const dolar = parseFloat(valor);
    const resultado = dolar * TaxaDolarParaReal;
    setResultado(`Resultado: ${resultado.toFixed(2)} BRL`);
  };

  const converterRealParaEuro = () => {
    const real = parseFloat(valor);
    const resultado = real * TaxaRealParaEuro;
    setResultado(`Resultado: ${resultado.toFixed(2)} EUR`);
  };

  const converterEuroParaReal = () => {
    const euro = parseFloat(valor);
    const resultado = euro * TaxaEuroParaReal;
    setResultado(`Resultado: ${resultado.toFixed(2)} BRL`);
  };

  const converterDolarParaEuro = () => {
    const dolar = parseFloat(valor);
    const resultado = dolar * TaxaDolarParaEuro;
    setResultado(`Resultado: ${resultado.toFixed(2)} EUR`);
  };

  const converterEuroParaDolar = () => {
    const euro = parseFloat(valor);
    const resultado = euro * TaxaEuroParaDolar;
    setResultado(`Resultado: ${resultado.toFixed(2)} USD`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas!</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TouchableOpacity style={styles.button} onPress={converterRealParaDolar}>
        <Text style={styles.buttonText}>Converter R$ para USD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterDolarParaReal}>
        <Text style={styles.buttonText}>Converter USD para R$</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterRealParaEuro}>
        <Text style={styles.buttonText}>Converter R$ para EUR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterEuroParaReal}>
        <Text style={styles.buttonText}>Converter EUR para R$</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterDolarParaEuro}>
        <Text style={styles.buttonText}>Converter USD para EUR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={converterEuroParaDolar}>
        <Text style={styles.buttonText}>Converter EUR para USD</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});