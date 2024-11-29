import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Importe suas imagens de desenvolvedores e apoiadores aqui
import developerImage1 from '../../assets/leandro.jpg';
import developerImage2 from '../../assets/ana.png';
import developerImage3 from '../../assets/lucas.png';
import developerImage4 from '../../assets/sofia.png';
import developerImage5 from '../../assets/victor.png';
import supporterImage1 from '../../assets/eleide.png';
import supporterImage2 from '../../assets/edson.png';

const SobreScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>
        Somos um time apaixonado por tecnologia e inovação. Cada membro da nossa equipe traz habilidades únicas para construir
        soluções incríveis. Nosso objetivo é sempre oferecer as melhores experiências aos nossos usuários.
      </Text>

      <Text style={styles.subtitle}>Desenvolvedores</Text>
      <View style={styles.membersContainer}>
        {[{ image: developerImage1, name: 'Leandro' },
          { image: developerImage2, name: 'Ana Luiza' },
          { image: developerImage3, name: 'Lucas' },
          { image: developerImage4, name: 'Sofia' },
          { image: developerImage5, name: 'Victor Hugo' }].map((dev, index) => (
          <View key={index} style={styles.member}>
            <Image source={dev.image} style={styles.image} />
            <Text style={styles.memberName}>{dev.name}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subtitle}>Professores Orientadores</Text>
      <View style={styles.supportersRow}>
        {[{ image: supporterImage1, name: 'Eleide Leile' },
          { image: supporterImage2, name: 'Edson Angoti' }].map((supporter, index) => (
          <View key={index} style={styles.supporter}>
            <Image source={supporter.image} style={styles.image} />
            <Text style={styles.supporterName}>{supporter.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  membersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  supportersRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  member: {
    alignItems: 'center',
    margin: 10,
  },
  supporter: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  memberName: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  supporterName: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default SobreScreen;
