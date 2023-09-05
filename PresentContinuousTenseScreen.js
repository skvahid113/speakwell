import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PresentContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Present Continuous Tense (ఇప్పుడు జరుగుతూ ఉంది)</Text>
      <Text style={styles.description}>
        Present Continuous Tense is used to express an action that is happening at the time of speaking.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used to indicate an action which is going on ‘at the time of speaking’.
      </Text>

      <Text style={styles.examplesTitle}>Eg1:</Text>
      <Text style={styles.example}>నేను ఇప్పుడు తింటున్నాను - I am eating now</Text>
      <Text style={styles.example}>నేను ఇప్పుడు తిండని లేదు - I am not eating now</Text>
      <Text style={styles.example}>నువ్వు ఇప్పుడు తింటున్నావా? - Are you eating now?</Text>
      <Text style={styles.example}>నువ్వు ఇప్పుడు తిండని లేదా? - Aren't you eating now?</Text>
      <Text style={styles.example}>నువ్వు ఇప్పుడు ఎందుకు తింటున్నావు? - Why are you eating now?</Text>
      <Text style={styles.example}>నువ్వు ఇప్పుడు ఎందుకు తిండని లేదు? - Why aren't you eating now?</Text>


      <Text style={styles.example}>Eg2:</Text>
      <Text style={styles.example}>అతను ఇప్పుడు తింటున్నాడు - He is eating now</Text>
      <Text style={styles.example}>అతను ఇప్పుడు తిండని లేదు - He isn't eating now</Text>
      <Text style={styles.example}>అతను ఇప్పుడు తింటున్నాడా? - Is he eating now?</Text>
      <Text style={styles.example}>అతను ఇప్పుడు తిండని లేదా? - Isn't he eating now?</Text>
      <Text style={styles.example}>అతను ఇప్పుడు ఎందుకు తింటున్నాడు? - Why is he eating now?</Text>
      <Text style={styles.example}>అతను ఇప్పుడు ఎందుకు తింటని లేదు? - Why isn't he eating now?</Text>

      <Text style={styles.examplesTitle}>Additional Usage for Future Actions:</Text>
      <Text style={styles.usage}>
        This tense is also used to indicate well-planned future actions.
      </Text>
      <Text style={styles.example}>నేను సి.ఎ౦. ను కలవబోతున్నాను - I am going to meet C.M.</Text>
      <Text style={styles.example}>అతను అమెరికా వెళ్ళబోతున్నాడు - He is planning to go to U.S.A.</Text>
      {/* Add more examples as needed */}
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

export default PresentContinuousTenseScreen;
