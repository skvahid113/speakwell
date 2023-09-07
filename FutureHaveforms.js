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
      <View style={styles.textContainer}>
        <Text style={styles.text}>నాకు రేపు కొంచెం పనుంది - I will have some work tomorrow</Text>
        <Text style={styles.text}>నాకు రేపు ఏ పని లేదు - I won’t have any work tomorrow</Text>
        <Text style={styles.text}>నీకు రేపు ఏమైనా పనుందా? - Will you have any work tomorrow?</Text>
        <Text style={styles.text}>నీకు రేపు ఏ పని లేదా? - Won’t you have any work tomorrow?</Text>
        <Text style={styles.text}>నీకు రేపు ఏ సమయంలో పనుంది? - At what time will you have work tomorrow?</Text>
        <Text style={styles.text}>నీకు రేపు పనె౦దకు లేదు? - Why won’t you have work tomorrow?</Text>
      </View>
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
    textAlign: 'center',
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 40,
    color: 'white',
  },
});

export default FutureHaveForms;
