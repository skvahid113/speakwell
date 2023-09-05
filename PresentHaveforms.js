import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PresentHaveforms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Present 'have' forms:</Text>
      <Text>నా దగ్గర డబ్బులు ఉన్నాయి - i have money</Text>
      <Text>నా దగ్గర డబ్బులు లేవు - i have no money</Text>
      <Text>నీ దగ్గర డబ్బులు ఉన్నాయా? - have you money?</Text>
      <Text>నీ దగ్గర డబ్బులు లేవా? - haven’t you money?</Text>
      <Text>నీ దగ్గర ఎంత డబ్బు ఉంది? - how much money have you?</Text>
      <Text>నీ దగ్గర డబ్బులు ఎందుకు లేవు? - why haven’t you money?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PresentHaveforms;
