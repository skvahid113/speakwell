import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const [text, setText] = useState('');
  const texts = ['Quick Lingo', 'Learn quickly', 'Speak well'];
  const colors = ['#f9d423', '#96c93d', '#33FF66'];
  const navigation = useNavigation();
  const cursorOpacity = new Animated.Value(0);
  const textIndex = useRef(0);

  const [showButtons, setShowButtons] = useState(true);

  const handleSignUpPress = () => {
    // Replace with your sign-up navigation logic
    navigation.navigate('signup');
  };

  const handleLoginPress = () => {
    // Replace with your login navigation logic
    navigation.navigate('LoginScreen');
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

//   background-color: #F4D03F;
// background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);

  return (
    <LinearGradient
      colors={['#16A085', '#16A085']}
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
          <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>
            |
          </Animated.Text>
        </Text>
      </View>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={handleSignUpPress}>
              <LinearGradient
                colors={['#f9d423', '#96c93d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sign in</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  buttonGroup: {
    flexDirection: 'row', // Arrange buttons horizontally
  },
  button: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10, // Add spacing between buttons
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginTop: 75,
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  gif: {
    width: 200,
    height: 200,
    margin: 0,
    padding: 0,
  },
});

export default SplashScreen;
