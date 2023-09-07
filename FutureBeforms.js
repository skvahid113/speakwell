import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FutureBeforms = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <View>
        <Text style={styles.title}>Future "be" forms</Text>
        <Text style={styles.text}>నేను రేపు సంతోషంగా ఉంటాను - I will be happy tomorrow</Text>
        <Text style={styles.text}>నేను రేపు సంతోషంగా ఉండను - I won't be happy tomorrow</Text>
        <Text style={styles.text}>నువ్వు రేపు సంతోషంగా ఉంటావా? - Will you be happy tomorrow?</Text>
        <Text style={styles.text}>నువ్వు రేపు సంతోషంగా ఉండవా? - Won't you be happy tomorrow?</Text>
        <Text style={styles.text}>నువ్వు రేపు సంతోషంగా ఎందుకు ఉంటావు? - Why will you be happy tomorrow?</Text>
        <Text style={styles.text}>నువ్వు రేపు సంతోషంగా ఎందుకు ఉండవు? - Why won't you be happy tomorrow?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginTop: 30,
    
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
    lineHeight: 40, // Add line height
    marginLeft: 20,
    
  },
});

export default FutureBeforms;
