import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const PresentDoForms = () => {
  const navigation = useNavigation();
  const navigateToDay2 = () => {
    navigation.navigate('PastDoForms'); // Assuming 'Day2' is the name of the 'Day2' screen in your navigation stack
  };
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
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={navigateToDay2}>
          <FontAwesome5 name="arrow-right" size={36} color="orange" />
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

export default PresentDoForms;
