import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TypingText from 'react-native-typing-animation'; // Import the typing animation component

const ModalAuxiliaries = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    // Delay the start of the typing animation
    setTimeout(() => {
      setShowTyping(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>MODAL AUXILIARIES (13)</Text>
        {showTyping ? (
          <TypingText
            text="In the English language, there are 13 modal auxiliaries, and each modal auxiliary has its own importance:"
            textStyle={styles.text}
          />
        ) : null}
        <Text style={styles.staticText}>
          {/* Include your other static text components here */}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  staticText: {
    color: 'white',
    // Include styles for other static text components here
  },
});

export default ModalAuxiliaries;
