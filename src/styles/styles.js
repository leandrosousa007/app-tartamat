import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
  flex: 1, // Preenche toda a tela
  backgroundColor: '#f0f8ff', // Cor de fundo
  padding: 8, // Espaçamento interno
  justifyContent: 'center', // Alinha o conteúdo verticalmente no centro
  alignItems: 'center', // Alinha o conteúdo horizontalmente no centro
  alignContent: 'center', // Alinha múltiplos itens em um espaço maior
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  item: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#32620e', // Alterado para o verde #32620e
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  fullScreenItemContainer: {
    width: Dimensions.get('window').width - 40, // Ajuste para evitar extrapolação
    height: Dimensions.get('window').height - 240, // Ajuste para evitar extrapolação
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  highlightedQuestion: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#e0e0e0', // Cor amarela suavizada para combinar
    padding: 10,
    borderRadius: 10,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  statText: {
    fontSize: 12,
    color: '#fff',
    paddingVertical: 4,
    paddingLeft: 10,
  },
  statNumber: {
    fontSize: 12,
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 10,
  },
  statButton: {
    backgroundColor: '#24292e',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 8,
    marginRight: 8,
    width:'80%',
     // Alinhando acertos e feitos ao lado
    paddingHorizontal: 10, // Ajuste de espaçamento
    alignItems: 'center',
    alignContent:'center',
    
  },
  progressIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b0082',
  },
  difficultyCircle: {
    width: 40,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  progressBar: {
    width: 100,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  timeText: {
    fontSize: 24, // Aumentado o tamanho da fonte
    fontWeight: 'bold', // Negrito
    color: '#333', // Cor escura para contraste
    marginTop: 20,
    textAlign: 'center',
  },
});
