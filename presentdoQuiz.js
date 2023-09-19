import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const getRandomQuestions = (count) => {
  const questions = [
    {
      question: 'నేను ప్రతిరొజు తి౦టాను',
      options: ['I eat daily', 'I drink daily', 'I sleep daily'],
      correctOption: 0,
    },
    {
      question: 'నేను ప్రతిరొజు తినను',
      options: ['I eat daily', 'I don\'t eat daily', 'I drink daily'],
      correctOption: 1,
    },
    {
      question: 'నువ్వు ప్రతిరొజు తి౦టావా?',
      options: ['Do you eat daily?', 'Do you drink daily?', 'Do you sleep daily?'],
      correctOption: 0,
    },
    {
      question: 'నువ్వు ప్రతిరొజు తినవా?',
      options: ['Do you eat daily?', 'Don\'t you eat daily?', 'Do you drink daily?'],
      correctOption: 1,
    },
    {
      question: 'నువ్వు ప్రతిరొజు ఎ౦దుకు తి౦టావు?',
      options: ['Why do you eat daily?', 'Why do you sleep daily?', 'Why do you drink daily?'],
      correctOption: 0,
    },
    {
      question: 'నువ్వు ప్రతిరొజు ఎ౦దుకు తినవు?',
      options: ['Why do you eat daily?', 'Why don\'t you eat daily?', 'Why do you drink daily?'],
      correctOption: 1,
    },
    // Add more questions here
  ];

  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, count);
};

const QuizQuestion = ({ question, options, correctOption, onSelect, keySuffix }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Reset selected option when keySuffix changes (on retake)
    setSelectedOption(null);
  }, [keySuffix]);

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => {
            setSelectedOption(index);
            onSelect(index === correctOption);
          }}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const PresentdoQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Add a key for resetting questions

  useEffect(() => {
    const questions = getRandomQuestions(6);
    setQuizQuestions(questions);
  }, [resetKey]); // Listen for changes to the resetKey

  const handleOptionSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
      // If it's the last question, finish the quiz
      setQuizFinished(true);
      setShowResultsModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetQuiz = () => {
    setResetKey((prevKey) => prevKey + 1); // Increment the key to reset questions
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
    setShowResultsModal(false);
  };

  const calculatePercentage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    return Math.round(percentage);
  };

  return (
    <LinearGradient
      colors={['#283c86', '#283c86', '#283c86']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        {quizQuestions.map((q, index) => (
          <QuizQuestion
            key={`${index}-${resetKey}`} // Change the key to force re-render
            question={q.question}
            options={q.options}
            correctOption={q.correctOption}
            onSelect={handleOptionSelect}
            keySuffix={resetKey} // Pass keySuffix to QuizQuestion
          />
        ))}

        <Modal visible={showResultsModal} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {score === quizQuestions.length ? (
                <>
                  <Icon name="trophy" size={100} color="gold" />
                  <Text style={styles.resultsText}>Congratulations!</Text>
                  <Text style={styles.resultsText}>You Passed!</Text>
                </>
              ) : (
                <>
                  <Icon name="thumbs-down" size={100} color="red" />
                  <Text style={styles.resultsText}>Sorry, You Failed!</Text>
                  <Text style={styles.resultsText}>
                    Score: {score} out of {quizQuestions.length}
                  </Text>
                  <Text style={styles.resultsText}>
                    Percentage: {calculatePercentage()}%
                  </Text>
                </>
              )}
              <TouchableOpacity style={styles.retakeButton} onPress={resetQuiz}>
                <Text style={styles.retakeButtonText}>Retake Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:10,
  },
  questionContainer: {
    backgroundColor: '#ef3b36',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#159957',
  },
  optionText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  retakeButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  retakeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PresentdoQuiz;
