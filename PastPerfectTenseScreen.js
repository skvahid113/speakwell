import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PastPerfectTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAST PERFECT TENSE (నిన్న జరిగినది)</Text>
      <Text style={styles.description}>
        s+had +v3+c; s+v2+c;
        This tense is used to indicate an action that took place before another action (ఒక పని జరిగేటప్పటికే ఇ౦కో పనిజరిగి౦ది).
        In this tense, the first action should be past perfect ('had+v3"), and the second action has to be in simple past (s+v2).
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used to describe an action that had already occurred before another action or point in the past.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>
        మేము రైల్వేస్టేషన్ కు వెళ్ళేసరికే రైలు వెళ్ళిపొయింది - the train had left before we reached the station.
      </Text>
      <Text style={styles.example}>
        మేము సినిమా ధియేటర్ కు వెళ్ళేటప్పటికే అతను వెళ్ళిపోయాడు - he had gone before we reached the theater.
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

export default PastPerfectTenseScreen;
