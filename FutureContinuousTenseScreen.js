import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FutureContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FUTURE CONTINUOUS TENSE</Text>
      <Text style={styles.description}>
        S+will/shall+be+v1+ing+c;
        This tense is used to indicate an action that will be going on at a particular time (or) point in the future.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used when we want to describe an action that will be in progress at a specific time or point in the future.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>
        రేపు ఈ సమయానికి వర్షింపడుతూ ఉంటుంది - It will be raining tomorrow by this time.
      </Text>
      <Text style={styles.example}>
        రేపు ఈ సమయానికి మేము పరీక్ష రాస్తూ ఉంటాము - We will be writing an exam tomorrow by this time.
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

export default FutureContinuousTenseScreen;
