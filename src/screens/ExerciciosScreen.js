import { useState, useEffect, useContext, } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../styles/styles';
import { getExercicios, getExerciciosFacil, getExerciciosMedio } from '../api/dados';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen({ route }) {
  const { tipo } = route.params;
  
  const { setContadorAcertos, setContadorFeitos, setQtdeExercicios } = useContext(AuthContext);
  const [exercicios, setExercicios] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feitos, setFeitos] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const { contadorAcertos, contadorFeitos, qtdeExercicios } = useContext(AuthContext);
  const [mudouTipo, setMudouTipo] = useState(false);
  const [isFinished, setIsFinished] = useState(false); // Para verificar se o usuário terminou todos os exercícios

  useEffect(() => {
    if (tipo == 1) {
      const fetchedExercicios = getExerciciosFacil();
      setExercicios(fetchedExercicios);
      setQtdeExercicios(fetchedExercicios.length);
    } else if (tipo == 2) {
      const fetchedExercicios = getExerciciosMedio();
      setExercicios(fetchedExercicios);
      setQtdeExercicios(fetchedExercicios.length);
    } else {
      const fetchedExercicios = getExercicios();
      setExercicios(fetchedExercicios);
      setQtdeExercicios(fetchedExercicios.length);
    }
  }, [tipo]);

  useEffect(() => {
    if (isTimerActive) {
      const timer = setInterval(() => {
        setTempo(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado ou o timer for desativado
    }
  }, [isTimerActive]);

  const handlePress = (resposta, item) => {
    if (isFinished) return; // Não permite responder após terminar

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
    } else {
      setIsFinished(true); // Marca como terminado quando chega à última questão
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
          index={currentQuestionIndex} // Exibindo o número da questão atual (1, 2, 3,...)
          total={qtdeExercicios} // Passando o total de exercícios corretamente
          isDisabled={isFinished} // Desativa as opções de resposta quando terminar
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
