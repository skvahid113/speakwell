import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OughtToUsageComponent = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>చేయవలసిన భాద్యత ఉంది (Ought To Do)</Text>
        <Text style={styles.example}>s + ought to + v1 + c;</Text>
        <Text style={styles.note}>It is the same as "should".</Text>
        <Text style={styles.exampleText}>eg:-</Text>

        <View style={styles.exampleContainer}>
          <Text style={styles.exampleText}>We ought to love our country.</Text>
          <Text style={styles.exampleText}>We ought to help for the sake of the poor.</Text>
        </View>

        <Text style={styles.exampleText}>నాకు చేయవలసిన భాద్యత ఉంది - I ought to eat.</Text>
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
    marginLeft:20,
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
    marginLeft:20,
    marginRight:5,
    lineHeight:40,
  },
  example: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  noteText: {
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 5,
  },
  note: {
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 5,
  },
});

export default OughtToUsageComponent;
