import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const PresentPerfectContinuousTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Present Perfect Continuous Tense (Time + Continuous Tense)</Text>



          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded2}>
              Present Perfect Continuous Tense is used to indicate an action that started at a particular time in the past and is still continuously going on in the present.
            </Text>
          </Animatable.View>

          <Text style={styles.usageTitle}>Usage:</Text>
          

          
          <Animatable.View animation="pulse" iterationCount="infinite">
          <Text style={styles.rounded1}>
            This tense is used to describe actions that started at a specific time in the past and continue into the present.
          </Text>
          </Animatable.View>

          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>నేను గంట నుండి తింటున్నాను - I have been eating for one hour</Text>
          <Text style={styles.example}>నేను గంట నుండి తినడం లేదు - I haven't been eating for one hour</Text>
          <Text style={styles.example}>నువ్వు గంట నుండి తింటున్నావా? - Have you been eating for 1 hour?</Text>
          <Text style={styles.example}>నువ్వు గంట నుండి తినడం లేదా? - Haven't you been eating for 1 hour?</Text>
          <Text style={styles.example}>నువ్వు గంట నుండి ఎందుకు తింటున్నావు? - Why have you been eating for 1 hour?</Text>
          <Text style={styles.example}>నువ్వు గంట నుండి ఎందుకు తింటలేదా? - Why haven't you been eating for 1 hour?</Text>
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
  rounded2: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'blue', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
},
});

export default PresentPerfectContinuousTenseScreen;
