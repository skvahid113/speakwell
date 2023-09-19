import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const questions = [
  {
    question: 'నేను ప్రతిరొజు తి౦టాను',
    options: ['I eat daily'],
  },
  {
    question: 'నేను ప్రతిరొజు తి౨నను',
    options: ["I don't eat daily"],
  },
  {
    question: 'నువ్వు ప్రతిరొజు తి౦టావా?',
    options: ['Do you eat daily?'],
  },
  {
    question: 'నువ్వు ప్రతిరొజు తి౦టావా?',
    options: ["Don't you eat daily?"],
  },
  {
    question: 'నువ్వు ప్రతిరొజు ఎ౦దుకు తి౦టావు?',
    options: ['Why do you eat daily?'],
  },
  {
    question: 'నువ్వు ప్రతిరొజు ఎ౦దుకు తి౦టావు?',
    options: ["Why don't you eat daily?"],
  },
];

const PresentdoQuiz = () => {
  const [data, setData] = useState(questions);

  const renderItem = ({ item, drag }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      <DraggableFlatList
        data={item.options}
        renderItem={({ item: option, drag }) => (
          <View style={styles.optionContainer} onLongPress={drag}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        )}
        keyExtractor={(option) => option}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.question}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default PresentdoQuiz;
