import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastSimpleTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Past Tense (నిన్న)</Text>
      <Text style={styles.description}>
        Simple Past Tense is used to indicate an action that took place at a particular time or during a specific period in the past.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used to describe actions that were completed in the past.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>నేను నిన్న తిన్నాను - I ate yesterday</Text>
      <Text style={styles.example}>నేను నిన్న తినలేదు - I didn't eat yesterday</Text>
      <Text style={styles.example}>నువ్వు నిన్న తిన్నావా? - Did you eat yesterday?</Text>
      <Text style={styles.example}>నువ్వు నిన్న తినలేదా? - Didn't you eat yesterday?</Text>
      <Text style={styles.example}>నువ్వు నిన్న ఎందుకు తిన్నావు? - Why did you eat yesterday?</Text>
      <Text style={styles.example}>నువ్వు నిన్న ఎందుకు తినలేదు? - Why didn't you eat yesterday?</Text>
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
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  example: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default PastSimpleTenseScreen;
