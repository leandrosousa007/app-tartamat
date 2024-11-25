import { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import styles from '../styles/styles';
import { getExercicios } from '../api/exerciciosApi';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen() {
  const { setContadorAcertos, setContadorFeitos, setQtdeExercicios } = useContext(AuthContext);
  const [exercicios, setExercicios] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feitos, setFeitos] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { contadorAcertos, contadorFeitos, qtdeExercicios } = useContext(AuthContext);

  useEffect(() => {
    const fetchedExercicios = getExercicios().map(exercicio => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);
    setQtdeExercicios(fetchedExercicios.length);  // Atualiza o total de exercícios no contexto
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      const timer = setInterval(() => {
        setTempo(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado ou o timer for desativado
    }
  }, [isTimerActive]);

  const handlePress = (resposta, item) => {
    setContadorFeitos(prev => prev + 1);
    setFeitos(prev => prev + 1);

    if (resposta.correta === true) {
      setContadorAcertos(prev => prev + 1);
      setAcertos(prev => prev + 1);
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: true, feito: true }
            : exercicio,
        ),
      );
    } else {
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id ? { ...exercicio, feito: true } : exercicio,
        ),
      );
    }

    // Avança para a próxima questão
    if (currentQuestionIndex < exercicios.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>

      {/* Corrigido o nome das variáveis para acertos e feitos */}
      <Pressable style={styles.statButton}>
        <Text style={styles.statText}>Tempo: </Text>
        <Text style={[styles.statNumber, { backgroundColor: '#180ee3' }]}>
        {formatTime(tempo)} {/* Alterado para tempo */}
        </Text>

        <Text style={styles.statText}>Acertos</Text>
        <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
          {acertos} {/* Alterado para acertos */}
        </Text>
        
        <Text style={styles.statText}>Feitos</Text>
        <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
          {feitos} {/* Alterado para feitos */}
        </Text>
        
        

      </Pressable>


      {/* Renderizando a questão atual */}
      {exercicios.length > 0 && (
        <CardQuestion
          handlePress={handlePress}
          item={exercicios[currentQuestionIndex]} // Passando a questão atual
          index={currentQuestionIndex + 1} // Exibindo o número da questão atual (1, 2, 3,...)
          total={qtdeExercicios} // Passando o total de exercícios corretamente
        />
      )}
    </View>
  );
}

// Função para formatar o tempo no formato 0:00
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
