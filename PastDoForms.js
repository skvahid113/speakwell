import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

const PastDoForms = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <Text style={styles.title}>Past ‘Do’ Forms:</Text>
      <View style={styles.content}>
        <TypingText text="నేను నిన్న తిన్నాను - I ate yesterday" delay={1000} />
        <TypingText text="నేను నిన్న తినలేదు - I didn't eat yesterday" delay={3000} />
        <TypingText text="నువ్వు నిన్న తిన్నావా? - did you eat yesterday?" delay={5000} />
        <TypingText text="నువ్వు నిన్న తినలేదా? - didn't you eat yesterday?" delay={7000} />
        <TypingText text="నువ్వు నిన్న ఎ౦దుకు తిన్నావు? - why did you eat yesterday?" delay={9000} />
        <TypingText text="నువ్వు నిన్న ఎ౦దుకు తినలేదు? - why didn't you eat yesterday?" delay={11000} />
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
});

export default PastDoForms;
