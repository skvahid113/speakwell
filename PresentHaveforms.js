import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PresentHaveforms = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <View>
        <Text style={styles.title}>Present 'have' forms:</Text>
        <Text style={styles.text}>నా దగ్గర డబ్బులు ఉన్నాయి - I have money</Text>
        <Text style={styles.text}>నా దగ్గర డబ్బులు లేవు - I have no money</Text>
        <Text style={styles.text}>నీ దగ్గర డబ్బులు ఉన్నాయా? - Have you money?</Text>
        <Text style={styles.text}>నీ దగ్గర డబ్బులు లేవా? - Haven’t you money?</Text>
        <Text style={styles.text}>నీ దగ్గర ఎంత డబ్బు ఉంది? - How much money have you?</Text>
        <Text style={styles.text}>నీ దగ్గర డబ్బులు ఎందుకు లేవు? - Why haven’t you money?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
    lineHeight: 40,
    marginLeft: 20,

  },
});

export default PresentHaveforms;
