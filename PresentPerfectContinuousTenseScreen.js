import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PresentPerfectContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Present Perfect Continuous Tense (Time + Continuous Tense)</Text>
      <Text style={styles.description}>
        Present Perfect Continuous Tense is used to indicate an action that started at a particular time in the past and is still continuously going on in the present.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used to describe actions that started at a specific time in the past and continue into the present.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>నేను గంట నుండి తింటున్నాను - I have been eating for one hour</Text>
      <Text style={styles.example}>నేను గంట నుండి తినడం లేదు - I haven't been eating for one hour</Text>
      <Text style={styles.example}>నువ్వు గంట నుండి తింటున్నావా? - Have you been eating for 1 hour?</Text>
      <Text style={styles.example}>నువ్వు గంట నుండి తినడం లేదా? - Haven't you been eating for 1 hour?</Text>
      <Text style={styles.example}>నువ్వు గంట నుండి ఎందుకు తింటున్నావు? - Why have you been eating for 1 hour?</Text>
      <Text style={styles.example}>నువ్వు గంట నుండి ఎందుకు తింటలేదా? - Why haven't you been eating for 1 hour?</Text>
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

export default PresentPerfectContinuousTenseScreen;
