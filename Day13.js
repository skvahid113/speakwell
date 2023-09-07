import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Day13 = () => {
  const navigation = useNavigation();

  const phrases = [

    {
      name: 'Shall',
      screen: 'Shall',
    },
    {
      name: 'Should',
      screen: 'Should',
    },

  ];

  const navigateToScreen = (screenName) => {
    // Use React Navigation's navigation to navigate to the desired screen
    navigation.navigate(screenName);
  };

  const renderPhraseButtons = () => {
    return phrases.map((phrase, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => navigateToScreen(phrase.screen)}
      >
        <Text style={styles.buttonText}>{phrase.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <LinearGradient
      colors={['#0093E1', '#80D0C7']}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Phrases</Text>
        {renderPhraseButtons()}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#f96d00',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Day13;
