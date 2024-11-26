import React, { useContext} from 'react';
import { Button, Text, View, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout,contadorFeitos,porcentagem } = useContext(AuthContext);

  return (

    <ScrollView style={styles.container}>

      
      {/* Seção do Usuário */}
      <View style={styles.userSection}>
        <Image
          source={{ uri: user?.data?.user?.photo || 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>Olá, {user?.data?.user?.name || 'SeuNome'}</Text>
          <Text style={styles.userDetails}>Questões Feitas: {contadorFeitos}</Text>
          <Text style={styles.userDetails}>Porcentagem de Acertos: {porcentagem}%</Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>Home</Text>

      {/* Barra de Busca */}
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchInput}
        />
      </View>

      {/* Vídeo ou Imagem */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400x200' }}
        style={styles.videoImage}
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Video Aulas')}
        >
          <Text style={styles.buttonText}>Assitir</Text>
    
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Exercícios')}
        >
          <Text style={styles.buttonText}>Praticar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      style={styles.logoutButton}
      onPress={async () => {
        try {
          await logout();
        } catch (e) {
          console.error(e);
        }
      }}
    >
      <Text style={styles.logoutButtonText}>Sair</Text>
    </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#32620e',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderColor: '#32620e',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  videoImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#32620e',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:22,
  },
  logoutButton: {
  backgroundColor: '#32620e', // Vermelho para indicar logout
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  width: '100%',
  marginTop: 10,
},
logoutButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

  
});
