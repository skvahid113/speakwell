import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NeedToUsageComponent = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>చేయ వలసిన అవసరం ఉంది (Need / Need To Do)</Text>
        <Text style={styles.example}>Eg:-</Text>

        <View style={styles.exampleContainer}>
          <Text style={styles.exampleText}>నాకు తినవలసిన అవసరం ఉంది – I need eat / I do need need to eat.</Text>
          <Text style={styles.exampleText}>నాకు తినవలసిన అవసరం లేదు – I needn’t eat / I don’t need to eat.</Text>
          <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఉందా? – Need you eat / Do you need to eat?</Text>
          <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం లేదా? – Needn’t you eat / Don’t you need to eat?</Text>
          <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఏమిటి? – What need you eat / What do you need to eat?</Text>
          <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఎందుకు లేదు? – Why needn’t you eat / Why doesn’t you need to eat?</Text>
        </View>

        <Text style={styles.example}>Eg:- 2</Text>
        <View style={styles.exampleContainer}>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఉంది – He need eat / He needs to eat</Text>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం లేదు – He needn’t eat / He doesn’t need to eat</Text>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఉందా? – Need he eat / Does he need to eat?</Text>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం లేదా? – Needn’t he eat / Doesn’t he need to eat?</Text>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఏమిటి? – What need he eat / What does he need to eat?</Text>
          <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఎందుకు లేదు? – Why needn’t he eat / Why doesn’t he need to eat?</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  example: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  exampleContainer: {
    marginTop: 20,
  },
  exampleText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
});

export default NeedToUsageComponent;
