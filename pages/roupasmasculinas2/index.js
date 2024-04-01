import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TelaSimples = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Image
        source={{ uri: 'https://hering.vtexassets.com/arquivos/ids/881697-800-auto/KGTZ-HLESI-C2.jpg?v=638472313286730000' }} 
        style={styles.imagem}
      />
      <Text style={styles.texto}>Calça masculina reta em rami, Esta peça tem o estilo de alfaiataria mas é feita em tecido de rami, uma fibra natural de textura leve maior resistência e mantém o corpo fresco em climas quentes.</Text>
      <Text style={styles.produto}>Calça Masculina Reta Em Rami - Fendi R$ 239,99</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: -200,
  },
  imagem: {
    borderRadius: 10,
    width: 370,
    height: 350,
    marginBottom: 2,
  },
  texto: {
    fontSize:16,
    marginBottom: 10,
    color: 'black',
  },
  produto: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: 20,
    color: 'black', 
  },
  botao: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 130, 
    borderRadius: 10,
    marginTop: 10, 
  },
  textoBotao: {
    fontSize: 18,
  },
});

export default TelaSimples;
