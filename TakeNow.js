import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';// Import LinearGradient for the gradient background
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const TakeNow = ({ navigation }) => {
  const handleStartQuiz = () => {
    // Redirect to the "PresentDoQuiz" screen
    navigation.navigate('presentdoQuiz');
  };

  return (
    <LinearGradient
      colors={['#870000', '#3533cd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <FontAwesome name="question-circle" size={100} color="white" />
      <Text style={styles.cluesText}>Clues for the Quiz:</Text>
      <View style={styles.cluesContainer}>
        {/* Group A */}
        <View style={styles.cluesGroup}>
          <Text style={styles.cluesGroupTitle}>Group A (Do/Don't - I/We/You/They):</Text>
          <Text style={styles.cluesText}>1. Do something.</Text>
          <Text style={styles.cluesText}>2. Don't do something.</Text>
          {/* Add more clues as needed */}
        </View>
        {/* Group B */}
        <View style={styles.cluesGroup}>
          <Text style={styles.cluesGroupTitle}>Group B (Doesn't/Doesn't - He/She/It):</Text>
          <Text style={styles.cluesText}>1. Doesn't do something.</Text>
          <Text style={styles.cluesText}>2. Doesn't do something.</Text>
          {/* Add more clues as needed */}
        </View>
        {/* Group C */}
        <View style={styles.cluesGroup}>
          <Text style={styles.cluesGroupTitle}>Group C (Why/How - Do and Don't):</Text>
          <Text style={styles.cluesText}>1. Why do something?</Text>
          <Text style={styles.cluesText}>2. How to do something?</Text>
          {/* Add more clues as needed */}
        </View>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cluesText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  cluesContainer: {
    width: '80%',
  },
  cluesGroup: {
    marginBottom: 20,
  },
  cluesGroupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  startButton: {
    backgroundColor: '#3c3b3f',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TakeNow;
