import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TelaSimples = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1224159584512643142/K59L-2PSI-C5.png?ex=661c7a74&is=660a0574&hm=739b1941719db3ba526f4b5501751e14d470c6e51ec7c014f939e351498e8416&' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Cardigan feminino em tricô de viscose e poliamida. Seu decote em V profundo o torna perfeito para ser usado como sobreposição de blusas e camisas</Text>
      <Text style={styles.produto}>Cardigan Feminino Em Tricô - Off White R$ 159,99</Text>
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
