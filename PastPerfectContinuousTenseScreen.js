import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const PastPerfectContinuousTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>PAST PERFECT CONTINUOUS TENSE (నిన్న జరిగినది)</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              S+had+been+v1+ing+c;
              {'\n'}
              {'\n'}
              This tense is used to express an action that started in the past and continued up to some time in the past.
              In this tense, we commonly use 'since' and 'for' to indicate the duration of time.
            </Text>
          </Animatable.View>

          <Text style={styles.usageTitle}>Usage:</Text>


          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded1}>
              This tense is used when we want to describe an action that began in the past and continued up until a certain point in the past.
            </Text>
          </Animatable.View>

          <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
          <Text style={styles.example}>
            ఆమె వచ్చేటప్పటికే సార్ గ౦ట ను౦డి క్లాస్ చెబుతూ ఉన్నారు - sir had been teaching the class for 1 hour before she came.
          </Text>
          <Text style={styles.example}>
            నేను ఇ౦టికి వెళ్ళేటప్పటికే  గ౦ట ను౦డి  మ్యాచ్ వస్తూఉ౦ది - the match had been going on for 1 hour before I went home.
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

export default PastPerfectContinuousTenseScreen;
