import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Continuous Tense (నిన్నజరుగుతూ ఉ౦ది)</Text>
      <Text style={styles.description}>
        Past Continuous Tense is used to indicate an action that was ongoing at a particular time or point in the past.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used to describe actions that were happening in the past at a specific moment or during a particular period.
      </Text>

      <Text style={styles.conjunctionsTitle}>Using 'When,' 'While,' and Conjunctions:</Text>
      <Text style={styles.conjunctions}>
        In the past continuous tense, we often use words like "when" and "while" or conjunctions to connect two actions or events that were happening simultaneously in the past.
        {'\n\n'}
        - When I was watching TV, it started raining outside.
        {'\n'}
        - While he was studying, his friends were playing.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>నేను నిన్న ఈ సమయానికి తి౦టూ ఉన్నాను - I was eating yesterday by this time.</Text>
      <Text style={styles.example}>వార౦ రోజుల క్రి౦దట 10 గ౦టలకు వర్ష౦ పడుతూ ఉ౦ది - It was raining at 10 o'clock before 1 week.</Text>
      <Text style={styles.example}>నేను రోడ్డు దాటుతు౦డగా ఒక ప్రమాద౦ చూశాను - I saw an accident when I was crossing the road.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  usageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  usage: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 20,
  },
  conjunctionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conjunctions: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 20,
  },
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  example: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default PastContinuousTenseScreen;
