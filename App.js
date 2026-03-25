import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planetas = [
    {
      nome: "Mercúrio",
      dias: "88 dias para a volta no sol",
      imagem: require('./assets/mercurio.jpg'),
      texto: "O menor planeta do Sistema Solar e o mais próximo do Sol. É um mundo rochoso e denso, com superfície coberta por crateras, similar à Lua. Possui temperaturas extremas, variando de 450°C de dia a -180°C à noite, sem satélites naturais.",
    },
    {
      nome: "Vênus",
      dias: "255 dias para a volta no sol",
      imagem: require('./assets/venus.jpg'),
      texto: "O segundo planeta a partir do Sol e o mais quente do Sistema Solar, com temperaturas superficiais que superam devido a um intenso efeito estufa.",
    },
    {
      nome: "Terra",
      dias: "365 dias para a volta no sol",
      imagem: require('./assets/terra.jpg'),
      texto: "O terceiro planeta a partir do Sol e o único conhecido a abrigar vida, com cerca de 4,5 bilhões de anos. É um planeta rochoso (telúrico), com 70% da superfície coberta por água, o que lhe dá a alcunha de 'Planeta Azul'.",
    },
    {
      nome: "Marte",
      dias: "687 dias para a volta no sol",
      imagem: require('./assets/marte.jpg'),
      texto: "O 'Planeta Vermelho', é o quarto planeta a partir do Sol e vizinho da Terra, caracterizado por uma atmosfera rarefeita (principalmente), superfície seca, rochosa e fria com óxido de ferro que lhe dá a cor avermelhada. Possui dias de 24h 37m, estações do ano, vulcões inativos e duas luas pequenas (Fobos e Deimos).",
    },
    {
      nome: "Júpiter",
      dias: "4333 dias para a volta no sol",
      imagem: require('./assets/jupiter.jpg'),
      texto: "O maior planeta do Sistema Solar, um gigante gasoso composto principalmente de hidrogênio e hélio, com massa duas vezes e meia superior à de todos os outros planetas combinados.",
    },
    {
      nome: "Saturno",
      dias: "10.579 dias para a volta no sol",
      imagem: require('./assets/saturno.jpg'),
      texto: "O sexto planeta a partir do Sol e o segundo maior do Sistema Solar, conhecido por seu impressionante sistema de anéis formados por gelo e rocha.",
    },
    {
      nome: "Urano",
      dias: "30.687 dias para a volta no sol",
      imagem: require('./assets/urano.jpg'),
      texto: "O sétimo planeta a partir do Sol e o primeiro a ser descoberto por um telescópio. Conhecido como 'gigante de gelo', é um mundo frio, com atmosfera rica em metano, hélio e hidrogênio, o que lhe dá uma cor azul-esverdeada.",
    },
    {
      nome: "Netuno",
      dias: "60.190 dias para a volta no sol",
      imagem: require('./assets/netuno.jpg'),
      texto: "O oitavo e mais distante planeta do Sistema Solar, classificado como um gigante de gelo. Com uma cor azul intensa devido ao metano atmosférico, é extremamente frio, ventoso e possui 14 luas conhecidas. Descoberto em 1846 por cálculos matemáticos",
    },
  ];

  const openModal = (planet) => {
    setSelectedPlanet(planet);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPlanet(null);
    setModalVisible(false);
  };

  const renderPlanetItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => openModal(item)}>
      <Image source={item.imagem} style={styles.cardIcon} />
      <Text style={styles.cardLabel}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Selecione o planeta:</Text>

      <FlatList
        data={planetas}
        renderItem={renderPlanetItem}
        keyExtractor={(item) => item.nome}
        numColumns={2} 
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalViewContainer}>
          {selectedPlanet && (
            <>
              <Image source={selectedPlanet.imagem} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedPlanet.nome}</Text>
              <Text style={styles.modalDays}>{selectedPlanet.dias}</Text>
              <ScrollView style={styles.modalTextScroll} showsVerticalScrollIndicator={false}>
                <Text style={styles.modalText}>{selectedPlanet.texto}</Text>
              </ScrollView>
              <Button title="Fechar" onPress={closeModal} color="#6C63FF" />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingTop: 50,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    aspectRatio: 1,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6C63FF',
    textAlign: 'center',
  },
  modalViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
  },
  modalDays: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  modalTextScroll: {
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 28,
  },
});