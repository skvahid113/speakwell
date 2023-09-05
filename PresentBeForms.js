// presentBeforms.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PresentBeforms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Present "be" forms</Text>
      <Text>నేను స౦తోష౦గా ఉన్నాను - i am happy now</Text>
      <Text>నేను స౦తోష౦గా లేను - i am not happy now</Text>
      <Text>నువ్వు స౦తోష౦గా ఉన్నావా? - are you happy now?</Text>
      <Text>నువ్వు స౦తోష౦గా లేవా? - aren't you happy now?</Text>
      <Text>నువ్వు స౦తోష౦గా ఎ౦దుకు ఉన్నావు? - why are you happy now?</Text>
      <Text>నువ్వు స౦తోష౦గా ఎ౦దుకు లేవు? - why aren't you happy now?</Text>
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

export default PresentBeforms;
