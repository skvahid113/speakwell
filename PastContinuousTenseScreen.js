import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const PastContinuousTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Past Continuous Tense (నిన్నజరుగుతూ ఉ౦ది)</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              Past Continuous Tense is used to indicate an action that was ongoing at a particular time or point in the past.
            </Text>
          </Animatable.View>

          <Text style={styles.usageTitle}>Usage:</Text>
          

          <Animatable.View animation="pulse" iterationCount="infinite">
          <Text style={styles.rounded1}>
            This tense is used to describe actions that were happening in the past at a specific moment or during a particular period.
          </Text>
          </Animatable.View>

          <Text style={styles.conjunctionsTitle}>Using 'When,' 'While,' and Conjunctions:</Text>
          <Text style={styles.conjunctions}>
            In the past continuous tense, we often use words like "when" and "while" or conjunctions to connect two actions or events that were happening simultaneously in the past.
            {'\n\n'}
            - When I was watching TV, it started raining outside.
            {'\n'}
            - While he was studying, his friends were playing.
          </Text>

          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>నేను నిన్న ఈ సమయానికి తి౦టూ ఉన్నాను - I was eating yesterday by this time.</Text>
          <Text style={styles.example}>వార౦ రోజుల క్రి౦దట 10 గ౦టలకు వర్ష౦ పడుతూ ఉ౦ది - It was raining at 10 o'clock before 1 week.</Text>
          <Text style={styles.example}>నేను రోడ్డు దాటుతు౦డగా ఒక ప్రమాద౦ చూశాను - I saw an accident when I was crossing the road.</Text>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white'
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
    color: 'white'
  },
  conjunctionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conjunctions: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 20,
    color: 'white'
  },
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  example: {
    fontSize: 18,
    marginLeft: 10,
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

export default PastContinuousTenseScreen;
