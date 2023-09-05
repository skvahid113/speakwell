import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PastHaveForms = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <Text style={styles.title}>Past ‘Have’ Forms:</Text>
      <Text style={styles.text}>
        నాకు నిన్న క్లాస్ ఉ౦ది - I had class yesterday
        {'\n'}
        నాకు నిన్న క్లాస్ లేదు - I had no class yesterday
        {'\n'}
        నీకు నిన్న క్లాస్ ఉ౦దా? - Had you class yesterday?
        {'\n'}
        నీకు నిన్న క్లాస్ లేదా? - Hadn't you class yesterday?
        {'\n'}
        నీకు నిన్న క్లాస్ ఏ సమయంలో ఉ౦ది? - At what time had you class yesterday?
        {'\n'}
        నీకు నిన్న క్లాస్ ఎ౦దుకు లేదు? - Why hadn't you class yesterday?
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
  },
});

export default PastHaveForms;
