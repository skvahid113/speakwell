import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useBackButtonHandler from './back';

const Day5 = ({ navigation }) => {


  useBackButtonHandler(() => {
    if (navigation.canGoBack()) {
      navigation.goBack(); // Navigate to the previous screen if available
    } else {
      BackHandler.exitApp(); // If no previous screen, exit the app
    }
  });
  const forms = [
    { name: 'Be Forms', screen: 'Beforms' },
    { name: 'Present Be Forms', screen: 'PresentBeforms' },
    { name: 'Past Be Forms', screen: 'PastBeforms' },
    { name: 'Future Be Forms', screen: 'FutureBeforms' },
    { name: 'Present Have Forms', screen: 'PresentHaveforms' },
    { name: 'Past Have Forms', screen: 'PastHaveforms' },
    { name: 'Future Have Forms', screen: 'FutureHaveforms' },
  ];

  const renderButtons = () => {
    const rows = [];
    for (let i = 0; i < forms.length; i += 3) {
      const rowButtons = forms.slice(i, i + 3);
      rows.push(
        <View style={styles.buttonRow} key={`row_${i}`}>
          {rowButtons.map((form, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(form.screen)}
            >
              <Text style={styles.buttonText}>{form.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <LinearGradient
    colors={['#0093E9', '#80D0C7']} 
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Day 5</Text>
        <Text style={styles.subtitle}>Select a form:</Text>
        {renderButtons()}
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Day5;
