import React from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { verbData } from './verbs';

const Day1 = ({ navigation }) => {
  // You can initialize the currentVerbIndex state to 0 to start with the first verb.
  const [currentVerbIndex, setCurrentVerbIndex] = React.useState(0);
  const currentVerb = verbData[currentVerbIndex];

  const handleNext = () => {
    // Increment the currentVerbIndex when the "Next" button is tapped.
    if (currentVerbIndex < verbData.length - 1) {
      setCurrentVerbIndex(currentVerbIndex + 1);
    }
  };

  const gradientColors = ['#ff9800', '#ff5722']; // Define your gradient colors here

  return (
    <LinearGradient
      colors={gradientColors}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ color: '#fff' }}>Verb: {currentVerb.verb}</Text>
      <Text style={{ color: '#fff' }}>Base: {currentVerb.base}</Text>
      <Text style={{ color: '#fff' }}>Past Simple: {currentVerb.pastSimple}</Text>
      <Text style={{ color: '#fff' }}>Past Participle: {currentVerb.pastParticiple}</Text>
      <Text style={{ color: '#fff' }}>Present Participle: {currentVerb.presentParticiple}</Text>
      <Text style={{ color: '#fff' }}>Telugu: {currentVerb.telugu.base}</Text>
      <Button title="Next" onPress={handleNext} />
    </LinearGradient>
  );
};

export default Day1;
