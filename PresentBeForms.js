import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useBackButtonHandler from './back';

const PresentBeforms = () => {
  const navigation = useNavigation();

  useBackButtonHandler(() => {
    if (navigation.canGoBack()) {
      navigation.goBack(); // Navigate to the previous screen if available
    } else {
      BackHandler.exitApp(); // If no previous screen, exit the app
    }
  });
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <View>
        <Text style={styles.title}>Present "be" forms</Text>
        <Text style={styles.text}>నేను స౦తోష౦గా ఉన్నాను - I am happy now</Text>
        <Text style={styles.text}>నేను స౦తోష౦గా లేను - I am not happy now</Text>
        <Text style={styles.text}>నువ్వు స౦తోష౦గా ఉన్నావా? - Are you happy now?</Text>
        <Text style={styles.text}>నువ్వు స౦తోష౦గా లేవా? - Aren't you happy now?</Text>
        <Text style={styles.text}>నువ్వు స౦తోష౦గా ఎ౦దుకు ఉన్నావు? - Why are you happy now?</Text>
        <Text style={styles.text}>నువ్వు స౦తోష౦గా ఎ౦దుకు లేవు? - Why aren't you happy now?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Add some top padding to push content to the top
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 50,

  },
  text: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
    marginLeft:20,
    lineHeight:40,
  },
});

export default PresentBeforms;
