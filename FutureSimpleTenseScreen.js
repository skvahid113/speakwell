import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FutureSimpleTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIMPLE FUTURE TENSE (రేఫు)</Text>
      <Text style={styles.description}>
        s+will/shall+v1+c;
        This tense is used to indicate an action that will happen in the future.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        This tense is used when we want to describe an action that is going to happen in the future.
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>
        నేను ఖచ్చితంగా తింటాను - I will eat.
      </Text>
      <Text style={styles.example}>
        నేను ఖచ్చితంగా తినను - I won't eat.
      </Text>
      <Text style={styles.example}>
        నువ్వు ఖచ్చితంగా తింటావా? - Will you eat tomorrow?
      </Text>
      <Text style={styles.example}>
        నువ్వు తిననువా? - Won't you eat tomorrow?
      </Text>
      <Text style={styles.example}>
        నువ్వు ఎందుకు తింటావు? - Why will you eat tomorrow?
      </Text>
      <Text style={styles.example}>
        నువ్వు ఎందుకు తినను? - Why won't you eat tomorrow?
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

export default FutureSimpleTenseScreen;
