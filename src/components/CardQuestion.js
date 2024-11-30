import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const getDifficultyColor = level => {
  switch (level) {
    case 'facil':
      return '#4CAF50'; // Green
    case 'medio':
      return '#FFEB3B'; // Yellow
    case 'dificil':
      return '#F44336'; // Red
    default:
      return '#000'; // Default black
  }
};

export const CardQuestion = ({ handlePress, item, index, total }) => {
  return (
    <View
      style={[styles.fullScreenItemContainer, { backgroundColor: item.feito ? '#bbb' : '#fff' }]}>
      
      <View style={styles.header}>
        <View style={styles.progressBarContainer}>
          <FontAwesome
            name="tasks"
            size={16}
            color={item.feito && item.acertou == false ? 'red' : 'black'}
          />
          <Text style={styles.progressText}>
            {index + 1} | {total}
          </Text>
        </View>
        <View
          style={[styles.difficultyCircle, { backgroundColor: getDifficultyColor(item.nivel_dificuldade) }]}>
          <Text style={styles.difficultyText}>{item.nivel_dificuldade}</Text>
        </View>
      </View>
      
      <Text style={styles.highlightedQuestion}>{item.pergunta}</Text>
      
      {/* Verifique se a imagem local carrega com Image padrão */}
      {item.imagem && (
        <Image 
          source={item.imagem}  // Certifique-se de usar o require corretamente
          style={styles.image}
          resizeMode="contain"  // Ajuste para preservar a proporção
        />
      )}

      <Text style={styles.espaço}></Text>

      <View style={styles.optionsContainer}>
        {item.respostas.map((resposta, idx) => (
          <Pressable
            key={idx}
            onPress={() => handlePress(resposta, item)}
            style={styles.optionButton}>
            <Text style={styles.optionText}>{resposta.texto}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

// Estilos básicos para imagens
const styles = StyleSheet.create({
  fullScreenItemContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
  },
  difficultyCircle: {
    padding: 5,
    borderRadius: 50,
  },
  difficultyText: {
    fontSize: 12,
    color: '#fff',
  },
  highlightedQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,  // Ajuste a largura para ver se a imagem aparece
    height: 200, // Ajuste a altura conforme necessário
    marginBottom: 10,
    marginLeft: 6,
  },
  espaço: {
    height: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
  },
});

export default CardQuestion;
