import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FutureHaveForms = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <Text style={styles.title}>Future ‘Have’ Forms:</Text>
      <Text style={styles.text}>
        నాకు రేపు కొంచెం పనుంది - I will have some work tomorrow
        {'\n'}
        నాకు రేపు ఏ పని లేదు - I won’t have any work tomorrow
        {'\n'}
        నీకు రేపు ఏమైనా పనుందా? - Will you have any work tomorrow?
        {'\n'}
        నీకు రేపు ఏ పని లేదా? - Won’t you have any work tomorrow?
        {'\n'}
        నీకు రేపు ఏ సమయంలో పనుంది? - At what time will you have work tomorrow?
        {'\n'}
        నీకు రేపు పనె౦దకు లేదు? - Why won’t you have work tomorrow?
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
  },
});

export default FutureHaveForms;
