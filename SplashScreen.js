import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const [text, setText] = useState('');
  const fullText = 'Speakwell';
  const navigation = useNavigation(); // Get navigation object

  const cursorOpacity = new Animated.Value(0); // Initialize opacity value


  const handleStartPress = () => {
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen
  };

  const startTypingAnimation = () => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText(fullText);
          setTimeout(() => {
            setText(''); // Clear text after a delay
            setTimeout(() => {
              startTypingAnimation(); // Restart typing animation
            }, 1000); // Adjust the delay before restarting (1 second in this example)
          }, 1000); // Adjust the delay before clearing (1 second in this example)
        }, 1000); // Adjust the delay before showing the full text (1 second in this example)
      }
    }, 150); // Adjust the typing speed (in milliseconds) as needed

    // Start cursor animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, {
          toValue: 1,
          duration: 500, // Blinking duration (500 milliseconds)
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(cursorOpacity, {
          toValue: 0,
          duration: 500, // Blinking duration (500 milliseconds)
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };



  useEffect(() => {
    startTypingAnimation();
  }, []);

  return (
    <LinearGradient
      colors={['#000', '#333']} // Define your gradient colors here
      style={styles.container}
    >
      <View style={styles.welcomeText}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.splashScreen}>
        <Text style={styles.header}>
          {text}
          <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>|</Animated.Text>
        </Text>
        {/* Rounded button with gradient background */}

      </View>
      <TouchableOpacity onPress={handleStartPress}>
        <LinearGradient
          colors={['#ff6600', '#ff3366']} // Define your button gradient colors here
          start={{ x: 0, y: 0 }} // Gradient start point (optional)
          end={{ x: 1, y: 1 }} // Gradient end point (optional)
          style={styles.startButton}
        >
          <Text style={{ color: 'white' }}>Start</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 48,
    color: 'white',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  header: {
    fontSize: 52,
    overflow: 'hidden',
    color: 'red',
  },
  cursor: {
    fontSize: 52,
    color: 'white',
  },
  startButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});

export default SplashScreen;
