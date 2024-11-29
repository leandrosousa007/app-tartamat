export function CardQuestion({ item, index, total, handlePress, isDisabled }) {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.questionNumber}>Pergunta {index + 1} de {total}</Text>
      <Text style={styles.questionText}>{item.pergunta}</Text>

      {item.respostas.map((resposta) => (
        <Pressable
          key={resposta.id}
          style={[styles.answerButton, isDisabled && styles.disabledButton]} // Adiciona o estilo disabled
          onPress={() => !isDisabled && handlePress(resposta, item)} // Não permite resposta se desativado
          disabled={isDisabled} // Desabilita o botão
        >
          <Text style={styles.answerText}>{resposta.texto}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  answerButton: {
    // Estilo normal do botão de resposta
  },
  disabledButton: {
    backgroundColor: '#ccc', // Cor de fundo para indicar que o botão está desativado
  },
});
