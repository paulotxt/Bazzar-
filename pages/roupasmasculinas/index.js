import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TelaSimples = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Image
        source={{ uri: 'https://media.discordapp.net/attachments/1144746486610014238/1224168272795271198/4K4K-KTGEN-C4.png?ex=661c828c&is=660a0d8c&hm=18f0cd2d0ecac1e50a048f112dcf6ae999ac756a386c2ae6ea95f7e3fb25030f&=&format=webp&quality=lossless&width=436&height=617' }} 
        style={styles.imagem}
      />
      <Text style={styles.texto}> camiseta masculina em malha flamê. e um bolso localizado no peito para praticidade e estilo. Ideal para um visual casual e moderno em qualquer ocasião.</Text>
      <Text style={styles.produto}>Camiseta Masculina  Com Bolso - Rosa R$ 99,99</Text>

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
