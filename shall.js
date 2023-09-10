import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ShallUsageComponent = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>చేస్తాను (Shall Do)</Text>
        <Animatable.View animation="pulse" iterationCount="infinite">
          <Text style={styles.rounded}>s + shall + v1 + c;
            {'\n'}
            {'\n'}

            If the action is compulsory, we use 'shall' for he/she/it/you/they.
            {'\n'}
            {'\n'}
            If the action is doubtful, we use 'shall' for I/we.</Text>
        </Animatable.View>

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
  rounded: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'orange', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
  },
});

export default ShallUsageComponent;
