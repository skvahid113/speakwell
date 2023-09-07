// Beforms.js
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Beforms = () => {
  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>BE Forms (Position Verbs)</Text>
          <Text style={styles.whiteText}>am = ఉన్నాను (was/were)</Text>
          <Text style={styles.whiteText}>is = ఉన్నది , ఉన్నడు (was)</Text>
          <Text style={styles.whiteText}>are = ఉన్నవి , ఉన్నారు (were)</Text>
          <Text style={styles.whiteText}>be = ఉ౦డుట</Text>
          <Text style={styles.whiteText}>mine = నాది</Text>
          <Text style={styles.whiteText}>yours = నీది, మీది</Text>
          <Text style={styles.whiteText}>ready = సిద్ద౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>happy = స౦తోష౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>sad = విచార౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>danger = అపాయ౦</Text>
          <Text style={styles.whiteText}>busy = పనిలో ఉ౦డుట</Text>
          <Text style={styles.whiteText}>free = ఖాళీగా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>late = ఆలస్య౦</Text>
          <Text style={styles.whiteText}>present = ఉపస్తితి</Text>
          <Text style={styles.whiteText}>absent = అనుపస్తితి</Text>
          <Text style={styles.whiteText}>available = అ౦దుబాటులో ఉ౦డుట</Text>
          <Text style={styles.whiteText}>applicable = వర్తి౦ఛుట</Text>
          <Text style={styles.whiteText}>angry = కోప౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>hungry = ఆకలి ఉ౦డుట</Text>
          <Text style={styles.whiteText}>fine = బాగా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>rich = ధనవ౦తుడు</Text>
          <Text style={styles.whiteText}>poor = పేద</Text>
          <Text style={styles.whiteText}>comfortable = సౌకర్య౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>healthy = ఆరోగ్య౦గా ఉ౦డుట</Text>
          <Text style={styles.whiteText}>audible = వినిపి౦చుట</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  whiteText: {
    color: 'white', // Set text color to white
  },
});

export default Beforms;
