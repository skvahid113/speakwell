import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PresentSimpleTenseScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Simple Present Tense</Text>

      <Text style={styles.description}>
        Simple Present Tense is used to express daily activities, habitual actions, universal truths, likes, dislikes, love, hate, proverbs, quotations, ads, captions, headlines, stories, idioms, and phrases.
      </Text>

      <Text style={styles.usageTitle}>Usage:</Text>
      <Text style={styles.usage}>
        In this tense, we use some regular words like “daily, generally, always, habitually, now and then, off and on, sometimes, often, frequently, once in a year, once in a month, etc."
      </Text>

      <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
      <Text style={styles.example}>నేను ప్రతిరోజు తింటాను - I eat daily</Text>
      <Text style={styles.example}>నేను ప్రతిరోజు తినను - I don't eat daily</Text>
      <Text style={styles.example}>నువ్వు ప్రతిరోజు తింటావా? - Do you eat daily?</Text>
      <Text style={styles.example}>నువ్వు ప్రతిరోజు తినను - Don't you eat daily?</Text>
      <Text style={styles.example}>నువ్వు ప్రతిరోజు ఎందుకు తింటావు? - Why do you eat daily?</Text>
      <Text style={styles.example}>నువ్వు ప్రతిరోజు ఎందుకు తినను? - Why don't you eat daily?</Text>
      {/* Add more examples as needed */}
    </ScrollView>
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

export default PresentSimpleTenseScreen;
