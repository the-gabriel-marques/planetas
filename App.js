import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  // Correção: Uso de colchetes [] para o useState
  const [visible, setVisible] = useState(false);
  
  // Novo estado para guardar as informações do planeta clicado
  const [planetaSelecionado, setPlanetaSelecionado] = useState(null);

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

  // Função para lidar com o clique em um planeta
  const abrirModalDoPlaneta = (planeta) => {
    setPlanetaSelecionado(planeta); // Salva o planeta clicado no estado
    setVisible(true);               // Abre o modal
  };

  // Função para fechar o modal e limpar a seleção
  const fecharModal = () => {
    setVisible(false);
    setPlanetaSelecionado(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSecao}>Selecione um Planeta</Text>
      
      {/* ScrollView e map para listar todos os planetas na tela */}
      <ScrollView style={styles.lista}>
        {planetas.map((planeta, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.botaoLista}
            onPress={() => abrirModalDoPlaneta(planeta)}
          >
            <Text style={styles.textoBotao}>{planeta.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* O modal só tenta renderizar o conteúdo se 'planetaSelecionado' não for nulo */}
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          {planetaSelecionado && (
            <>
              <Text style={styles.tituloModal}>{planetaSelecionado.nome}</Text>
              <Image source={planetaSelecionado.imagem} style={styles.imagem} />
              <Text style={styles.dias}>{planetaSelecionado.dias}</Text>
              <Text style={styles.descricao}>{planetaSelecionado.texto}</Text>
              
              <View style={styles.botaoFecharContainer}>
                <Button title="Fechar" onPress={fecharModal} color="#FF3B30" />
              </View>
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
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lista: {
    width: '100%',
    paddingHorizontal: 20,
  },
  botaoLista: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  tituloModal: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  dias: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 15,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  botaoFecharContainer: {
    width: '50%',
  }
});