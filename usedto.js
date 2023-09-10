import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const UsedToUsageComponent = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>ఒకప్పుడు చేసేదానిని/వాడిని (Used To Do)</Text>

        <Animatable.View animation="pulse" iterationCount="infinite">
          <Text style={styles.rounded}>S + used to + v1 + c;
            {'\n'}
            {'\n'}

            It is used to express "past habitual actions".
          </Text>
        </Animatable.View>
        <Text style={styles.exampleText}>eg:-</Text>

        <View style={styles.exampleContainer}>
          <Text style={styles.exampleText}>నేను ఒకప్పుడు తినేదానిని/వాడిని - I used to eat.</Text>
          <Text style={styles.exampleText}>ఆమె పెళ్ళికి ముందు నాట్యం చేసేది - She used to dance before her marriage.</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center', // Center horizontally
    paddingTop: 20, // Add top padding for title
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 20,
  },
  exampleContainer: {
    marginTop: 20, // Add margin between title and content
    justifyContent: 'center', // Center content vertically within the container
    alignItems: 'flex-start', // Align content to the left

  },
  exampleText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
    marginLeft: 20,
    lineHeight: 40,
  },
  example: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,

  },
  noteText: {
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 5,
  },
  note: {
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 5,
  },
  rounded: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'orange', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
  },
});

export default UsedToUsageComponent;
