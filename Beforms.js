// Beforms.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Beforms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BE Forms (Position Verbs)</Text>
      <Text>am = ఉన్నాను (was/were)</Text>
      <Text>is = ఉన్నది , ఉన్నడు (was)</Text>
      <Text>are = ఉన్నవి , ఉన్నారు (were)</Text>
      <Text>be = ఉ౦డుట</Text>
      <Text>mine = నాది</Text>
      <Text>yours = నీది, మీది</Text>
      <Text>ready = సిద్ద౦గా ఉ౦డుట</Text>
      <Text>happy = స౦తోష౦గా ఉ౦డుట</Text>
      <Text>sad = విచార౦గా ఉ౦డుట</Text>
      <Text>danger = అపాయ౦</Text>
      <Text>busy = పనిలో ఉ౦డుట</Text>
      <Text>free = ఖాళీగా ఉ౦డుట</Text>
      <Text>late = ఆలస్య౦</Text>
      <Text>present = ఉపస్తితి</Text>
      <Text>absent = అనుపస్తితి</Text>
      <Text>available = అ౦దుబాటులో ఉ౦డుట</Text>
      <Text>applicable = వర్తి౦ఛుట</Text>
      <Text>angry = కోప౦గా ఉ౦డుట</Text>
      <Text>hungry = ఆకలి ఉ౦డుట</Text>
      <Text>fine = బాగా ఉ౦డుట</Text>
      <Text>rich = ధనవ౦తుడు</Text>
      <Text>poor = పేద</Text>
      <Text>comfortable = సౌకర్య౦గా ఉ౦డుట</Text>
      <Text>healthy = ఆరోగ్య౦గా ఉ౦డుట</Text>
      <Text>audible = వినిపి౦చుట</Text>
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

export default Beforms;
