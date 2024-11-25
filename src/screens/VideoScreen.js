import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function VideoScreen() {
  const aulas = [
    {
      id: 1,
      titulo: 'Gráficos 1 grau',
      descricao: 'Exercícios sobre',
      imagem: 'https://via.placeholder.com/300', // Imagem de teste
    },
    {
      id: 2,
      titulo: 'Número 1 grau',
      descricao: 'Exercícios sobre',
      imagem: 'https://via.placeholder.com/300', // Imagem de teste
    },
    {
      id: 3,
      titulo: 'Funções Lineares',
      descricao: 'Exercícios sobre',
      imagem: 'https://via.placeholder.com/300', // Imagem de teste
    },
    {
      id: 4,
      titulo: 'Equações do 1º Grau',
      descricao: 'Exercícios sobre',
      imagem: 'https://via.placeholder.com/300', // Imagem de teste
    },
    {
      id: 5,
      titulo: 'Sistema de Equações',
      descricao: 'Exercícios sobre',
      imagem: 'https://via.placeholder.com/300', // Imagem de teste
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aulas de Funções de 1 Grau</Text>

      {aulas.map((aula) => (
        <View key={aula.id} style={styles.aulaContainer}>
          <Text style={styles.aulaTitle}>{aula.titulo}</Text>
          <Image source={{ uri: aula.imagem }} style={styles.image} />
          
          <Text style={styles.aulaDescription}>{aula.descricao}</Text>

          {/* Fundo branco com a mesma largura e altura um pouco maior */}
          <View style={styles.buttonBackground}>
            <TouchableOpacity style={styles.button} onPress={() => alert('Ir para os exercícios')}>
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
    paddingTop:10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10, // Espaçamento entre a imagem e o texto
  },
  aulaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  aulaDescription: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  buttonBackground: {
    backgroundColor: '#f1f1f1', // Cor de fundo branco/cinza
    borderRadius: 10,
    marginTop: 20, // Espaçamento adicional entre a descrição e o botão
    width: '100%', // Largura igual à do contêiner verde
    paddingVertical: 15, // Aumenta a altura do fundo
    alignItems: 'center', // Centraliza o botão dentro da View
  },
  button: {
    backgroundColor: '#32620e', // Cor de fundo diferente para o botão
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
