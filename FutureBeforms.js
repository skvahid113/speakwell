import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FutureBeforms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Future "be" forms</Text>
      <Text>నేను రేపు సంతోషంగా ఉంటాను - i will be happy tomorrow</Text>
      <Text>నేను రేపు సంతోషంగా ఉండను - i won't be happy tomorrow</Text>
      <Text>నువ్వు రేపు సంతోషంగా ఉంటావా? - will you be happy tomorrow?</Text>
      <Text>నువ్వు రేపు సంతోషంగా ఉండవా? - won't you be happy tomorrow?</Text>
      <Text>నువ్వు రేపు సంతోషంగా ఎందుకు ఉంటావు? - why will you be happy tomorrow?</Text>
      <Text>నువ్వు రేపు సంతోషంగా ఎందుకు ఉండవు? - why won't you be happy tomorrow?</Text>
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

export default FutureBeforms;
