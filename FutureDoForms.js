import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

const TypingText = ({ text, delay }) => {
  const [animatedText, setAnimatedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const lines = text.split('\n');
  const currentLine = lines[lineIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedText.length < currentLine.length) {
        setAnimatedText(currentLine.substring(0, animatedText.length + 1));
      } else {
        if (lineIndex < lines.length - 1) {
          setLineIndex(lineIndex + 1);
          setAnimatedText('');
        }
      }
    }, 50); // Adjust the typing speed

    return () => clearTimeout(timer);
  }, [animatedText, currentLine, lineIndex]);

  useEffect(() => {
    // Clear the animated text and reset when the component re-renders
    setAnimatedText('');
    setLineIndex(0);
  }, [text, delay]);

  return <Text style={styles.text}>{animatedText}</Text>;
};

const FutureDoForms = () => {
  const navigation = useNavigation();
  const navigate1 = () => {
    navigation.navigate('PastDoForms'); // Assuming 'Day2' is the name of the 'Day2' screen in your navigation stack
  };
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <Text style={styles.title}>Future ‘Do’ Forms:</Text>
      <View style={styles.content}>
        <TypingText text="నేను రేఫు తి౦టాను - I will eat tomorrow" delay={1000} />
        <TypingText text="నేను రేఫు తినను - I won't eat tomorrow" delay={3000} />
        <TypingText text="నువ్వు రేఫు తి౦టావా? - Will you eat tomorrow?" delay={5000} />
        <TypingText text="నువ్వు రేఫు తినవా? - Won't you eat tomorrow?" delay={7000} />
        <TypingText text="నువ్వు రేఫు ఎ౦దుకు తి౦టావు? - Why will you eat tomorrow?" delay={9000} />
        <TypingText text="నువ్వు రేఫు ఎ౦దుకు తినవు? - Why won't you eat tomorrow?" delay={11000} />
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={navigate1}>
          <FontAwesome5 name="arrow-left" size={36} color="orange" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  content: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 40,
    marginTop: 20,
    color: 'white',
  },
  backButtonContainer: {
    borderRadius: 50, // Make it a circle
    backgroundColor: 'black', // Semi-transparent white
    padding: 10, // Adjust the size as needed
  },
  backButton: {
    alignSelf: 'center', // Center the icon horizontally within the container
  },
});

export default FutureDoForms;