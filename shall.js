import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShallUsageComponent = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>చేస్తాను (Shall Do)</Text>
        <Text style={styles.example}>s + shall + v1 + c;</Text>
        <Text style={styles.note}>
          If the action is compulsory, we use 'shall' for he/she/it/you/they.
        </Text>
        <Text style={styles.note}>
          If the action is doubtful, we use 'shall' for I/we.
        </Text>
        <Text style={styles.example}>Eg:-</Text>

        <View style={styles.exampleContainer}>
          <Text style={styles.exampleText}>నేను తింటాను - I shall eat</Text>
          <Text style={styles.exampleText}>నేను తించా? - Shall I eat?</Text>
          <Text style={styles.exampleText}>అతను ఖచ్ఛితంగా తింటాడు - He shall eat</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center', // Center horizontally
    paddingTop: 20, // Add top padding for title
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  exampleContainer: {
    marginTop: 20, // Add margin between title and content
    justifyContent: 'center', // Center content vertically within the container
    alignItems: 'flex-start', // Align content to the left
  },
  exampleText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
  },
  example: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  note: {
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 5,
  },
});

export default ShallUsageComponent;
