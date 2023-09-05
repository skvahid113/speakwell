import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FuturePerfectTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FUTURE PERFECT TENSE</Text>
      <Text style={styles.description}>
        S+will/shall+have+v3+c;
        This tense is used to indicate an action that will be completed at a particular time (or) point in the future.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used when we want to describe an action that will be finished or completed before a specific time or point in the future.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>
        నేను రేపు ఈ సమయానికి వెళ్ళి ఉంటాను - I will have gone tomorrow by this time.
      </Text>
      <Text style={styles.example}>
        అతను రేపు ఈ సమయానికి పరీక్షమొదలు పెట్టి ఉంటాడు - He will have started the exam tomorrow by this time.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  usageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  usage: {
    fontSize: 16,
    marginBottom: 10,
  },
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  example: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FuturePerfectTenseScreen;
