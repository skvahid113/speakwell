import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const FuturePerfectContinuousTenseScreen = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>FUTURE PERFECT CONTINUOUS TENSE</Text>

          <Animatable.View animation="pulse" iterationCount="infinite">
            <Text style={styles.rounded}>
              s+will have/shall have+been +v1+ing+c;
              {'\n'}
              {'\n'}
              This tense is used to indicate an action that will have been ongoing for a continuous period of time up to a point in the future.
            </Text>
          </Animatable.View>


          <Text style={styles.examplesTitle}>Example in Telugu:</Text>
          <Text style={styles.example}>
            నేను తినడ౦ మొదలు పెట్టి రేపటితో వారం అవుతు౦ది - I will have been eating for 1 week.
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

export default FuturePerfectContinuousTenseScreen;
