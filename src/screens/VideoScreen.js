import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { getVideoAulas } from '../api/dados';

export default function VideoScreen({ navigation }) {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const videoAulas = getVideoAulas().filter((aula) => aula.id <= 2);
  const width = Dimensions.get('window').width - 50;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aulas</Text>
      {videoAulas.map((aula) => (
        <View key={aula.id} style={styles.card}>
          <Text style={styles.aulaTitle}>{aula.titulo}</Text>
          <View style={styles.videoWrapper}>
            <YoutubeIframe
              videoId={aula.videoId}
              height={200}
              width={width}
              onChangeState={(state) => console.log(`Status do vídeo: ${state}`)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Todos os Exercícios', { tipo: [aula.exercicio] })}
          >
            <Text style={styles.buttonText}>Fazer Exercícios</Text>
          </TouchableOpacity>
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#32620e',
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  aulaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32620e',
    marginBottom: 10,
    textAlign: 'center',
  },
  videoWrapper: {
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#32620e',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
