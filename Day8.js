import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Day6 = ({ navigation }) => {
  const tenses = [
   
    {
      name: 'Future Simple Tense',
      screen: 'FutureSimpleTenseScreen', // Replace with the actual screen name
    },
    {
      name: 'Future Continuous Tense',
      screen: 'FutureContinuousTenseScreen', // Replace with the actual screen name
    },
    {
      name: 'Future Perfect Tense',
      screen: 'FuturePerfectTenseScreen', // Replace with the actual screen name
    },
    {
      name: 'Future Perfect Continuous Tense',
      screen: 'FuturePerfectContinuousTenseScreen', // Replace with the actual screen name
    },
  ];

  const renderTenseButtons = () => {
    return tenses.map((tense, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => navigation.navigate(tense.screen)}
      >
        <Text style={styles.buttonText}>{tense.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TENSES</Text>
      {renderTenseButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Day6;
