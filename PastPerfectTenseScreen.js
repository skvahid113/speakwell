import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

const PastPerfectTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>PAST PERFECT TENSE (నిన్న జరిగినది)</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              s+had +v3+c; s+v2+c;
              {'\n'}
              {'\n'}
              This tense is used to indicate an action that took place before another action (ఒక పని జరిగేటప్పటికే ఇ౦కో పనిజరిగి౦ది).
              In this tense, the first action should be past perfect ('had+v3"), and the second action has to be in simple past (s+v2).
            </Text>
          </Animatable.View>

          <Text style={styles.usageTitle}>Usage:</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded1}>
              This tense is used to describe an action that had already occurred before another action or point in the past.
            </Text>
          </Animatable.View>

          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>
            మేము రైల్వేస్టేషన్ కు వెళ్ళేసరికే రైలు వెళ్ళిపొయింది - the train had left before we reached the station.
          </Text>
          <Text style={styles.example}>
            మేము సినిమా ధియేటర్ కు వెళ్ళేటప్పటికే అతను వెళ్ళిపోయాడు - he had gone before we reached the theater.
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

export default PastPerfectTenseScreen;
