import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';


const { width: screenWidth } = Dimensions.get('window');

const App = () => {
  const navigation = useNavigation();
  const imagens = [
    { uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223004056629547088/tiro-do-estudio-da-mulher-negra-bonita-com-o-saco-de-compras-branco-que-esta-sobre-o-fundo-amarelo-olhar-na-moda-primavera-na-moda_273443-10.png?ex=66184649&is=6605d149&hm=725652ae90f1bcbe20a18759fa46b40ce0ec29ea59ee3fa015fc96af69e013cd&' },
    { uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223005920628314192/baner3.jpg?ex=66184805&is=6605d305&hm=60a4d097d24710e792139b48638e3fe8014602d67e90a6ebe5e3c3a57a8f616c&' },
    { uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223310571022323732/SS24-banes-moda-tienda-de-ropa-zapateria-bolsos-y-complementos-ramallosa-nigran-2.png?ex=661963c0&is=6606eec0&hm=67442ad0776a9ed447cbbd247ef06f55282b2c8f6fa298fd814c8812f09427ee&' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerImagem}>
        <Image source={item} style={styles.imagem} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerCarousel}>
          <Text style={styles.titulo}>Bazzar</Text>
          <Carousel
            data={imagens}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={350}
            loop={true}
            loopClonesPerSide={imagens.length}
          />
        </View>

        <Text style={styles.textoProduto}>Roupas Femininas</Text>
        <View style={styles.conteudoInferior}>
          <View style={styles.bloco}>
            <TouchableOpacity onPress={() => navigation.navigate('roupafeminina')}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1224159055606452305/K59L-2PSI-C2.png?ex=661c79f6&is=660a04f6&hm=1fce3b1a60ce56b67768780f334740f66895e4b1aaee7bcb6bfa5cad849f940b&' }} style={styles.imagemBloco} />
              <Text style={styles.textoBloco}>Cardigan Feminino </Text>
              <Text style={styles.textoBloco}>R$ 159,99</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bloco}>
            <TouchableOpacity onPress={() => navigation.navigate('roupafeminina2')}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1224160828794601542/K5G5-EATSI-C1.png?ex=661c7b9d&is=660a069d&hm=fdbd052c54b273ed70e3ec43ab0c4b7296c18db7d7320ed889f1ff55927cde42&' }} style={styles.imagemBloco} />
              <Text style={styles.textoBloco}>Vestido Curto </Text>
              <Text style={styles.textoBloco}>R$ 239,99</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.textoProduto}>Roupas Masculinas</Text>
        <View style={styles.conteudoInferior}>
          <View style={styles.bloco}>
            <TouchableOpacity onPress={() => navigation.navigate('roupasmasculinas')}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1224163439514091620/4K4K-KTGEN-C1.png?ex=661c7e0b&is=660a090b&hm=54693667a62febb95bb401719e913c2a6af82cbe97fb0e7786e47d6639f89f88&' }} style={styles.imagemBloco} />
              <Text style={styles.textoBloco}>Camiseta Masculina</Text>
              <Text style={styles.textoBloco}>R$ 99,99</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bloco}>
            <TouchableOpacity onPress={() => navigation.navigate('roupasmasculinas2')}>
              <Image source={{ uri: 'https://media.discordapp.net/attachments/1144746486610014238/1224169687651188746/image.png?ex=661c83dd&is=660a0edd&hm=c56516cca47d2f0b89ebc95617ce6de812b07a4e90557f481002990a2e6a9f66&=&format=webp&quality=lossless' }} style={styles.imagemBloco} />
              <Text style={styles.textoBloco}>Calça Masculina</Text>
              <Text style={styles.textoBloco}>R$ 239,99</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.conteudoAdicional}>
          <Image source={{ uri: 'https://media.discordapp.net/attachments/1144746486610014238/1224155386370592799/canva-banner-para-site-de-moda-ou-loja-de-roupas-minimalista-e-elegante-azul-laranja-e-branco-hENCorlqrjs.png?ex=661c768b&is=660a018b&hm=20f7d8bc96ed5ffe26cbd17e57dc7f8f5c4cf1dd4d86184b42dc8de5748abedd&=&format=webp&quality=lossless&width=1440&height=540' }} style={styles.imagemAdicional} />
          <Text style={styles.textoAdicional}>Bem-vindo ao nosso aplicativo de bazar, onde a emoção da descoberta está sempre ao alcance dos seus dedos! Explore uma ampla variedade de tesouros e achados especiais sem sair de casa, tudo com apenas alguns toques na tela do seu dispositivo móvel.</Text>


        </View>

        <View style={styles.rodape}>

          <Text style={styles.textoRodape}>2024 Bazzar. Todos os direitos reservados a Bazzar </Text>
        </View>
        <View style={styles.rodape}>

          <Text style={styles.textoRodape}> Formas de pagamento </Text>
        </View>
        <View style={styles.containerImagensRodape}>
          <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223001315807072407/image.png?ex=661843bb&is=6605cebb&hm=9482f5ddc500f31a5cad33e4115b976d2a7784cc2b669cc9087a17c05278df02&' }} style={styles.imagemRodape} />
          <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223001042787241994/image.png?ex=6618437a&is=6605ce7a&hm=684aa8e10595af18b03e9ddbc99d4ca1bb57320037563b1a16664283914e404d&' }} style={styles.imagemRodape} />
          <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1144746486610014238/1223001681143529542/image.png?ex=66184413&is=6605cf13&hm=1537e193190e19f605a6c37eb045823a52c493fe0842f60ed47e844d42063500&' }} style={styles.imagemRodape} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  containerCarousel: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  containerImagem: {
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 120,
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textoProduto: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    color: 'black',
  },
  conteudoInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bloco: {
    alignItems: 'center',
  },
  imagemBloco: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 30,
  },
  textoBloco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  conteudoAdicional: {
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  textoAdicional: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  imagemAdicional: {
    width: 350,
    height: 160,
    borderRadius: 12,
  },
  rodape: {
    alignItems: 'center',
    marginTop: 20,
  },
  containerImagensRodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  imagemRodape: {
    marginTop: 20,
    width: 65,
    height: 45,
    borderRadius: 10,
  },
  textoRodape: {
    fontSize: 20,
    color: '#888',
  },
});

export default App;
