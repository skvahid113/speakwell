import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastPerfectContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAST PERFECT CONTINUOUS TENSE (నిన్న జరిగినది)</Text>
      <Text style={styles.description}>
        S+had+been+v1+ing+c;
        This tense is used to express an action that started in the past and continued up to some time in the past.
        In this tense, we commonly use 'since' and 'for' to indicate the duration of time.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used when we want to describe an action that began in the past and continued up until a certain point in the past.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>
        ఆమె వచ్చేటప్పటికే సార్ గ౦ట ను౦డి క్లాస్ చెబుతూ ఉన్నారు - sir had been teaching the class for 1 hour before she came.
      </Text>
      <Text style={styles.example}>
        నేను ఇ౦టికి వెళ్ళేటప్పటికే  గ౦ట ను౦డి  మ్యాచ్ వస్తూఉ౦ది - the match had been going on for 1 hour before I went home.
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

export default PastPerfectContinuousTenseScreen;
