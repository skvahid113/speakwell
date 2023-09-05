import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TypingText = ({ text, delay }) => {
  const [animatedText, setAnimatedText] = React.useState('');
  const [lineIndex, setLineIndex] = React.useState(0);
  const lines = text.split('\n');
  const currentLine = lines[lineIndex];

  React.useEffect(() => {
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

  React.useEffect(() => {
    // Clear the animated text and reset when the component re-renders
    setAnimatedText('');
    setLineIndex(0);
  }, [text, delay]);

  return <Text style={styles.text}>{animatedText}</Text>;
};

const PresentDoForms = () => {
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={styles.container}>
      <Text style={styles.title}>Present ‘Do’ Forms:</Text>
      <View style={styles.content}>
        <TypingText text="నేను ప్రతిరొజు తి౦టాను - I eat daily" delay={1000} />
        <TypingText text="నేను ప్రతిరొజు తినను - I don't eat daily" delay={3000} />
        <TypingText text="నువ్వు ప్రతిరొజు తి౦టావా? - do you eat daily?" delay={5000} />
        <TypingText text="నువ్వు ప్రతిరొజు తినవా? - don't you eat daily?" delay={7000} />
        <TypingText text="నువ్వు ప్రతిరొజు ఎ౦దుకు తి౦టావు? - why do you eat daily?" delay={9000} />
        <TypingText text="నువ్వు ప్రతిరొజు ఎ౦దుకు తినవు? - why don't you eat daily?" delay={11000} />
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

export default PresentDoForms;
