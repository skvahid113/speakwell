import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FuturePerfectContinuousTenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FUTURE PERFECT CONTINUOUS TENSE</Text>
      <Text style={styles.description}>
        s+will have/shall have+been +v1+ing+c;
        This tense is used to indicate an action that will have been ongoing for a continuous period of time up to a point in the future.
      </Text>

      <Text style={styles.examplesTitle}>Example in Telugu:</Text>
      <Text style={styles.example}>
        నేను తినడ౦ మొదలు పెట్టి రేపటితో వారం అవుతు౦ది - I will have been eating for 1 week.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
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
  },
});

export default FuturePerfectContinuousTenseScreen;
