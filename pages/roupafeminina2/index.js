import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TelaSimples = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://media.discordapp.net/attachments/1144746486610014238/1224161672067940372/K5G5-EATSI-C4.png?ex=661c7c66&is=660a0766&hm=f9d17d8b230663f0d16faa18d1a2ea759b61935d11403e5efd50af4f29cdd32a&=&format=webp&quality=lossless&width=436&height=617' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Vestido curto elaborado em tecido de viscose, linho e fibras naturais, oferecendo um acabamento refinado. Com uma silhueta godê, este vestido oferece elegância e conforto em cada movimento.</Text>
      <Text style={styles.produto}>Vestido Curto Com Linho - Menta - R$ 239,99</Text>
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
    fontSize: 16,
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
