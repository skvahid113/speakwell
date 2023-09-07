import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const FuturePerfectTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>FUTURE PERFECT TENSE</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              S+will/shall+have+v3+c;
              {'\n'}
              {'\n'}
              This tense is used to indicate an action that will be completed at a particular time (or) point in the future.
            </Text>
          </Animatable.View>

          <Text style={styles.usageTitle}>Usage:</Text>

          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded1}>
              This tense is used when we want to describe an action that will be finished or completed before a specific time or point in the future.
            </Text>
          </Animatable.View>


          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>
            నేను రేపు ఈ సమయానికి వెళ్ళి ఉంటాను - I will have gone tomorrow by this time.
          </Text>
          <Text style={styles.example}>
            అతను రేపు ఈ సమయానికి పరీక్షమొదలు పెట్టి ఉంటాడు - He will have started the exam tomorrow by this time.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 10,
    // backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white'
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
    color: 'white'
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
    color: 'white'
  },
  rounded: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'black', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
  },
  rounded1: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'orange', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
  },
});

export default FuturePerfectTenseScreen;
