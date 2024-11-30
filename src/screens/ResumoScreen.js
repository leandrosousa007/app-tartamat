import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function ResumosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo sobre Função de 1º Grau</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.sectionTitle}>O que é uma Função de 1º Grau?</Text>
        <Text style={styles.paragraph}>
          A Função de 1º Grau é uma função matemática da forma <Text style={styles.bold}>f(x) = ax + b</Text>, onde "a" e "b" são números reais e "x" é a variável. A função é chamada de 1º grau porque a variável "x" aparece com expoente igual a 1. Seu gráfico é sempre uma reta.
        </Text><Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Coeficiente Angular (a)</Text>
        <Text style={styles.paragraph}>
          O coeficiente angular, representado por <Text style={styles.bold}>a</Text>, indica a inclinação da reta no gráfico. Se "a" for positivo, a reta será crescente. Se "a" for negativo, a reta será decrescente. Se "a" for igual a zero, a função será constante, ou seja, será uma linha horizontal.
        </Text>
        <Image source={require('../../assets/coefa.png')} style={styles.image1} /><Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Coeficiente Linear (b)</Text>
        <Text style={styles.paragraph}>
          O coeficiente linear, representado por <Text style={styles.bold}>b</Text>, indica o ponto de interseção da reta com o eixo y. Ou seja, quando <Text style={styles.bold}>x = 0</Text>, o valor de f(x) será igual a <Text style={styles.bold}>b</Text>.
        </Text>
        <Image source={require('../../assets/coefb.png')} style={styles.image} /><Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Gráfico da Função de 1º Grau</Text>
        <Text style={styles.paragraph}>
          O gráfico de uma função do 1º grau é sempre uma reta. O valor de <Text style={styles.bold}>a</Text> determina a inclinação da reta, e o valor de <Text style={styles.bold}>b</Text> determina o ponto de interseção da reta com o eixo y.
        </Text>

        
        <Image source={require('../../assets/grafico.png')} style={styles.image} />
        <Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Exemplo</Text>
        <Text style={styles.paragraph}>
          Vamos analisar a função <Text style={styles.bold}>f(x) = 2x + 3</Text>. Aqui, o coeficiente angular <Text style={styles.bold}>a = 2</Text> significa que a reta será crescente. O coeficiente linear <Text style={styles.bold}>b = 3</Text> indica que a reta intercepta o eixo y no ponto (0, 3).
        </Text><Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Propriedades Importantes</Text>
        <Text style={styles.paragraph}>
          1. A função de 1º grau é uma função afim, ou seja, sua representação gráfica é sempre uma reta.
        </Text><Text style={styles.espaço1}></Text>


        <Text style={styles.paragraph}>
          2. Quando <Text style={styles.bold}>a = 0</Text>, a função se torna uma função constante, e o gráfico é uma linha horizontal, pois a inclinação da reta é zero.
        </Text>
        <Text style={styles.espaço1}></Text>

        <Text style={styles.paragraph}>
          3. Quando <Text style={styles.bold}>b = 0</Text>, a reta passa pela origem do gráfico.
        </Text>
        <Text style={styles.espaço1}></Text>

        <Text style={styles.paragraph}>
          4. A função de 1º grau é crescente quando <Text style={styles.bold}>a Maior que 0</Text> e decrescente quando <Text style={styles.bold}>a Menor que 0</Text>.
        </Text>
        <Text style={styles.espaço}></Text>

        <Text style={styles.sectionTitle}>Comportamento do Gráfico</Text>
        <Text style={styles.paragraph}>
          A reta será:
        </Text>
        <Text style={styles.paragraph}>
        <Text style={styles.bold}>- Crescente</Text> se o coeficiente angular <Text style={styles.bold}>a</Text> for positivo.
        </Text>
        <Image source={require('../../assets/graficocr.png')} style={styles.imagec} />
        <Text style={styles.espaço}></Text>

        <Text style={styles.paragraph}>
        <Text style={styles.bold}>- Decrescente</Text> se o coeficiente angular <Text style={styles.bold}>a</Text> for negativo.
        </Text>
        <Image source={require('../../assets/graficode.png')} style={styles.imagec1} />
        <Text style={styles.espaço}></Text>


        <Text style={styles.paragraph}>
        <Text style={styles.bold}>- Constante</Text> se o coeficiente angular <Text style={styles.bold}>a</Text> for igual a zero, o gráfico será uma linha horizontal.
        </Text>
        <Image source={require('../../assets/graficoc.png')} style={styles.imagec2} />
        <Text style={styles.espaço}></Text>


        <Text style={styles.sectionTitle}>Exemplo 2</Text>
        <Text style={styles.paragraph}>
          Considere a função <Text style={styles.bold}>f(x) = -x + 5</Text>. O coeficiente angular <Text style={styles.bold}>a = -1</Text> indica que o gráfico será decrescente. O coeficiente linear <Text style={styles.bold}>b = 5</Text> mostra que a reta intercepta o eixo y no ponto (0, 5).
        </Text>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32620e',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32620e',
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 15,
    borderRadius: 10,
  },
  image1: {
    width: '100%',
    height: 100,
    marginTop: 15,
    borderRadius: 10,
  },
  imagec: {
    width: '100%',
    height: 190,
    marginTop: 15,
    borderRadius: 10,
  },
  imagec1: {
    width: '100%',
    height: 180,
    marginTop: 15,
    borderRadius: 10,
  },
  imagec2: {
    width: '100%',
    height: 230,
    marginTop: 15,
    borderRadius: 10,
  },
  espaço:{
    padding:35,


  }
});
