import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Day2_1 = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.title}>IF (ఆయితే)</Text>
      <Text style={styles.text}>
        if + s + v1 + (s/es) + c;
        {'\n\n'}
        he/she/it వచ్చినప్పుడు verb కి s/es add చేయాలి.
        {'\n\n'}
        eg : -
        {'\n'}
        నువ్వు తింటే - if you eat
        {'\n'}
        నువ్వు తినకపోతే - if you don't eat
        {'\n\n'}
        అతను తింటే - if he/she/it eats
        {'\n'}
        అతను తినకపోతే - if he/she/it doesn't eat
      </Text>

      <Text style={styles.title}>EVEN IF (అయినప్పటికీ)</Text>
      <Text style={styles.text}>
        even if + s + v1 + (s/es) + c;
        {'\n\n'}
        eg :-
        {'\n'}
        నువ్వు తిన్నప్పటికీ - even if you eat
        {'\n'}
        అతను తిన్నప్పటికీ - even if he/she/it eats
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, // Adjust the padding to add space between text and edges
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 24,
    color: 'white',
  },
});

export default Day2_1;
