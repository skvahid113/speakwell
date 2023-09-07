import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const PastSimpleTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Simple Past Tense (నిన్న)</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              Simple Past Tense is used to indicate an action that took place at a particular time or during a specific period in the past.
            </Text>
          </Animatable.View>


          <Text style={styles.usageTitle}>Usage:</Text>
          <Text style={styles.usage}>
            This tense is used to describe actions that were completed in the past.
          </Text>

          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>నేను నిన్న తిన్నాను - I ate yesterday</Text>
          <Text style={styles.example}>నేను నిన్న తినలేదు - I didn't eat yesterday</Text>
          <Text style={styles.example}>నువ్వు నిన్న తిన్నావా? - Did you eat yesterday?</Text>
          <Text style={styles.example}>నువ్వు నిన్న తినలేదా? - Didn't you eat yesterday?</Text>
          <Text style={styles.example}>నువ్వు నిన్న ఎందుకు తిన్నావు? - Why did you eat yesterday?</Text>
          <Text style={styles.example}>నువ్వు నిన్న ఎందుకు తినలేదు? - Why didn't you eat yesterday?</Text>
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
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  example: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
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

export default PastSimpleTenseScreen;
