import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const [text, setText] = useState('');
  const texts = ['Quick Lingo', 'Learn quickly','Speak well']; // Add the new text here
  const colors = ['#f9d423', '#96c93d', '#33FF66']; // Corresponding colors for the texts
  const navigation = useNavigation();
  const cursorOpacity = new Animated.Value(0);
  const textIndex = useRef(0);

  const handleStartPress = () => {
    navigation.navigate('HomeScreen');
  };

  const startTypingAnimation = () => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= texts[textIndex.current].length) {
        setText(texts[textIndex.current].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText('');
          textIndex.current = (textIndex.current + 1) % texts.length;
          startTypingAnimation();
        }, 1000);
      }
    }, 150);

    Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(cursorOpacity, {
          toValue: 0,
          duration: 500,
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
      colors={['#870000', '#3533cd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.welcomeText}>
        <Text style={styles.welcomeText}>Welcome{'\n'}</Text>
        <Image
          source={require('./assets/lg1.gif')}
          style={styles.gif}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.splashScreen}>
        <Text style={[styles.header, { color: colors[textIndex.current] }]}>
          {text}
          <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>|</Animated.Text>
        </Text>
      </View>
      <TouchableOpacity onPress={handleStartPress}>
        <LinearGradient
          colors={colors} // Use the corresponding colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.startButton}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Start</Text>
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
  gif: {
    width: 200,
    height: 200,
    margin: 0,
    padding: 0,
  },
});

export default SplashScreen;
