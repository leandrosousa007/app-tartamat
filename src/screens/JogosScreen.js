import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions } from "react-native";

// Palavras duplicadas para formar os pares
const palavras = [
  { id: 1, palavra: "coeficiente" },
  { id: 2, palavra: "inclinação" },
  { id: 3, palavra: "equação" },
  { id: 4, palavra: "variáveis" },
  { id: 5, palavra: "sistema" },
  { id: 6, palavra: "função" },
  { id: 7, palavra: "gráfico" },
  { id: 8, palavra: "coeficiente" },
  { id: 9, palavra: "inclinação" },
  { id: 10, palavra: "equação" },
  { id: 11, palavra: "variáveis" },
  { id: 12, palavra: "sistema" },
  { id: 13, palavra: "função" },
  { id: 14, palavra: "gráfico" }
];

export default function JogoMemoria() {
  const [cartas, setCartas] = useState(shuffle(palavras)); // Embaralha as palavras
  const [selecionadas, setSelecionadas] = useState([]); // Guarda os índices das cartas selecionadas
  const [acertos, setAcertos] = useState([]); // Guarda as palavras que foram acertadas
  const [tentativas, setTentativas] = useState(0); // Conta as tentativas feitas

  useEffect(() => {
    if (acertos.length === palavras.length / 2) {
      Alert.alert("Você venceu!", "Parabéns, você encontrou todos os pares!");
    }
  }, [acertos]);

  // Função para embaralhar as cartas
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Função chamada ao pressionar uma carta
  const handlePress = (index) => {
    if (selecionadas.length === 2 || selecionadas.includes(index) || acertos.includes(cartas[index].palavra)) {
      return;
    }

    // Adiciona o índice da carta selecionada
    setSelecionadas((prev) => [...prev, index]);

    // Quando duas cartas são selecionadas, fazemos a comparação
    if (selecionadas.length === 1) {
      const [primeiraCarta] = selecionadas;
      setTimeout(() => {
        if (cartas[primeiraCarta].palavra === cartas[index].palavra) {
          setAcertos((prev) => [...prev, cartas[primeiraCarta].palavra]); // Se acertou, adiciona a palavra aos acertos
        }
        setTentativas(tentativas + 1);
        setSelecionadas([]); // Reseta as cartas selecionadas
      }, 1000); // Espera 1 segundo para mostrar as cartas
    }
  };

  // Renderiza as cartas
  const renderCartas = () => {
    return cartas.map((item, index) => (
      <TouchableOpacity
        key={item.id}
        style={styles.card}
        onPress={() => handlePress(index)}
        disabled={acertos.includes(item.palavra)} // Desabilita a carta se já foi acertada
      >
        <Text style={styles.cardText}>
          {selecionadas.includes(index) || acertos.includes(item.palavra) ? item.palavra : "?"}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória - Função de 1º Grau</Text>
      <Text style={styles.attempts}>Tentativas: {tentativas}</Text>
      <View style={styles.grid}>
        {renderCartas()}
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");
const cardSize = (width - 140) / 3; // Calcula o tamanho das cartas baseado na largura da tela

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#006064",
    marginBottom: 20,
  },
  attempts: {
    fontSize: 18,
    marginBottom: 20,
    color: "#00796b",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  card: {
    width: cardSize, // Tamanho da carta ajustado automaticamente
    height: cardSize, // A altura também é igual à largura para manter o quadrado
    margin: 10,
    backgroundColor: "#32620e", // Cor verde desejada
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
