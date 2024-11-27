import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { getVideoAulas } from '../api/dados';

export default function VideoScreen() {
  const [selectedVideoId, setSelectedVideoId] = useState(null); // Armazena o vídeo selecionado
  const videoAulas = getVideoAulas().filter((aula) => aula.id <= 3); // Filtra vídeos até o ID 3
  const width = Dimensions.get('window').width - 50; // Largura da janela para estilização

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aulas de Funções de 1 Grau</Text>

      {videoAulas.map((aula) => (
        <View key={aula.id} style={styles.aulaContainer}>
          <View style={styles.buttonBackground}>
            <Text style={styles.aulaTitle}>{aula.titulo}</Text>
          </View>

          {/* Exibir vídeo no YouTube */}
          <YoutubeIframe
            videoId={aula.videoId}
            height={200}
            width={width}
            onChangeState={(state) => console.log(`Status do vídeo: ${state}`)}
          />
          

          {/* Botão para fazer exercícios */}
          <View style={styles.buttonBackground}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Exercícios', 'Ir para os exercícios desta aula!')}
            >
              <Text style={styles.buttonText}>Fazer Exercícios</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  aulaContainer: {
    backgroundColor: '#32620e', // Cor verde personalizada
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  aulaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    
    
  },
  buttonBackground: {
    backgroundColor: '#f1f1f1', // Fundo branco/cinza
    borderRadius: 10,
    marginTop: 15, // Espaçamento entre o botão e o restante
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom:10,
  },
  button: {
    backgroundColor: '#32620e', // Fundo verde para o botão
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  YoutubeIframe: {
    borderRadius:10,

  },
});
