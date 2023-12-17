import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useBackButtonHandler from './back';

const PastBeforms = () => {
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
        <Text style={styles.title}>Past "be" forms</Text>
        <Text style={styles.text}>నేను నిన్న స౦తోష౦గా ఉన్నాను - I was happy yesterday</Text>
        <Text style={styles.text}>నేను నిన్న స౦తోష౦గా లేను - I was not happy yesterday</Text>
        <Text style={styles.text}>నువ్వు నిన్న స౦తోష౦గా ఉన్నావా? - Were you happy yesterday?</Text>
        <Text style={styles.text}>నువ్వు నిన్న స౦తోష౦గా లేవా? - Weren't you happy yesterday?</Text>
        <Text style={styles.text}>నువ్వు నిన్న స౦తోష౦గా ఎ౦దుకు ఉన్నావు? - Why were you happy yesterday?</Text>
        <Text style={styles.text}>నువ్వు నిన్న స౦తోష౦గా ఎ౦దుకు లేవు? - Why weren't you happy yesterday?</Text>
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
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
    marginLeft: 20,
    lineHeight: 40,
  },
});

export default PastBeforms;
