import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Day2_1 = () => {
  const navigation = useNavigation();
  const navigateToDay2 = () => {
    navigation.navigate('Day2'); // Assuming 'Day2' is the name of the 'Day2' screen in your navigation stack
  };

  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.title}>IF (ఆయితే)</Text>
      <Text style={styles.text}>
        <Animatable.View animation="pulse" iterationCount="infinite">
          <Text style={styles.rounded}>
            he/she/it వచ్చినప్పుడు verb కి s/es add చేయాలి.
          </Text>
        </Animatable.View>
        {'\n'}
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
        eg :-
        {'\n'}
        నువ్వు తిన్నప్పటికీ - even if you eat
        {'\n'}
        అతను తిన్నప్పటికీ - even if he/she/it eats
      </Text>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={navigateToDay2}>
          <FontAwesome5 name="arrow-left" size={36} color="orange" />
        </TouchableOpacity>
      </View>
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
  rounded: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'blue', // Background color with transparency
    borderRadius: 20, // Border radius for rounded corners
    padding: 10, // Add some padding
  },
  backButtonContainer: {
    borderRadius: 50, // Make it a circle
    backgroundColor: 'black', // Semi-transparent white
    padding: 10, // Adjust the size as needed
  },
  backButton: {
    alignSelf: 'center', // Center the icon horizontally within the container
  },
});

export default Day2_1;
