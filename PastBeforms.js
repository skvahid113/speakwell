// PastBeforms.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PastBeforms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past "be" forms</Text>
      <Text>నేను నిన్న స౦తోష౦గా ఉన్నాను - i was happy yesterday</Text>
      <Text>నేను నిన్న స౦తోష౦గా లేను - i was not happy yesterday</Text>
      <Text>నువ్వు నిన్న స౦తోష౦గా ఉన్నావా? - were you happy yesterday?</Text>
      <Text>నువ్వు నిన్న స౦తోష౦గా లేవా? - weren't you happy yesterday?</Text>
      <Text>నువ్వు నిన్న స౦తోష౦గా ఎ౦దుకు ఉన్నావు? - why were you happy yesterday?</Text>
      <Text>నువ్వు నిన్న స౦తోష౦గా ఎ౦దుకు లేవు? - why weren't you happy yesterday?</Text>
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

export default PastBeforms;
