import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default function Exercicio({ navigation }) {
 
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Exercícios de Funções de 1 Grau</Text>

     
      <ScrollView>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Todos os Exercícios', { tipo: 1 })}
        >
          <Text style={styles.buttonText}>Exercícios Básicos sobre Funções</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Todos os Exercícios', { tipo: 2 })}
        >
          <Text style={styles.buttonText}>Exercícios Sobre Gráficos</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Todos os Exercícios', { tipo: 3 })}
        >
          <Text style={styles.buttonText}>Todos os Exercícios</Text>
        </TouchableOpacity>
        
      </ScrollView>


    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  nivelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  nivelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  nivelButtonSelected: {
    backgroundColor: '#32620e', // Verde quando selecionado
  },
  nivelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#32620e', // Verde para os botões de exercício
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
