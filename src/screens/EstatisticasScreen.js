import { Text, View, Alert, Pressable } from 'react-native';
import styles from '../styles/styles';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PizzaChart } from '../components/PizzaChart';
import { PieChart } from 'react-native-gifted-charts';
import { ScrollView } from 'react-native-gesture-handler';

function EstatisticasScreen() {
  const { contadorAcertos, contadorFeitos, qtdeExercicios } =
    useContext(AuthContext);
  
  const data = [
    {
      text: `Acertos`,
      value: contadorAcertos,
      color: '#4caf50',
    },
    {
      text: `Erros`,
      value: contadorFeitos - contadorAcertos,
      color: '#f44336',
    },
    {
      text: `Restante`,
      value: qtdeExercicios - contadorFeitos,
      color: '#6a5acd',
    },
  ];

  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <Text style={styles.title}>Estatísticas de Exercícios</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}>
        <Pressable style={styles.statButton}>
          <Text style={styles.statText}>Feitos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
            {contadorFeitos}
          </Text>


          <Text style={styles.statText}>Corretos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
            {contadorAcertos}
          </Text>

          <Text style={styles.statText}>Errados</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#f44336' }]}>
            {contadorFeitos - contadorAcertos}
          </Text>

        </Pressable>
        
        
      </View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       
        <View style={{ padding:30,height: 300 }}>
          <PieChart
            data={data}
            radius={150}
            donut
            showValuesAsLabels
            showTextBackground
            textBackgroundColor="#333"
            textBackgroundRadius={22}
            textColor="white"
            textSize={16}
            fontWeight="bold"
            strokeWidth={10}
            strokeColor="#333"
            innerCircleBorderWidth={10}
            innerCircleBorderColor="#333"
            showGradient
          />
        </View>
        
      </ScrollView>
    </View>
  );
}

export default EstatisticasScreen;
