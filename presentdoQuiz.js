import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizQuestion = ({ question, answer }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      <Text style={styles.answerText}>{answer}</Text>
    </View>
  );
};

const presentdoQuiz = () => {
  const quizQuestions = [
    {
      question: 'నేను ప్రతిరొజు తి౦టాను',
      answer: 'I eat daily',
    },
    // Add more quiz questions and answers here
  ];

  return (
    <View style={styles.container}>
      {quizQuestions.map((q, index) => (
        <QuizQuestion key={index} question={q.question} answer={q.answer} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
  },
});

export default presentdoQuiz;
