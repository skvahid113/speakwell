import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { verbData } from './verbs';
import * as Speech from 'expo-speech';
import { AntDesign } from '@expo/vector-icons';
import { Languages } from './language';
import { Picker } from '@react-native-picker/picker';


const Day1 = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [readingStarted, setReadingStarted] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [readingIndex, setReadingIndex] = useState(-1);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages.Telugu); // Default language

  useEffect(() => {
    if (readingStarted && readingIndex !== -1) {
      setHighlightedIndex(readingIndex);
      readVerbDetails(currentPage, readingIndex);
    }
  }, [readingStarted, currentPage, readingIndex]);

  const handleNext = () => {
    if (currentPage < verbData.length - 1) {
      setCurrentPage(currentPage + 1);
      setHighlightedIndex(-1); // Reset highlighting when changing the page
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setHighlightedIndex(-1); // Reset highlighting when changing the page
    }
  };

  const readVerbDetails = (index, verbIndex) => {
    const currentVerb = verbData[index];
    const textToRead = [
      // `Base: ${currentVerb.base} ${currentVerb[selectedLanguage].base}`,
      `Past Simple: ${currentVerb.pastSimple} ${currentVerb[selectedLanguage].pastSimple}`,
      `Past Participle: ${currentVerb.pastParticiple} ${currentVerb[selectedLanguage].pastParticiple}`,
      `Present Participle: ${currentVerb.presentParticiple} ${currentVerb[selectedLanguage].presentParticiple}`,
      
    ];

    setReadingIndex(verbIndex);

    Speech.speak(textToRead[verbIndex], {
      language: 'en',
      onDone: () => {
        if (verbIndex < textToRead.length - 1) {
          setReadingIndex(verbIndex + 1);
        } else {
          setReadingStarted(false);
          setHighlightedIndex(-1);
          setReadingIndex(-1);
        }
      },
    });
  };

  const startReading = (index) => {
    setReadingStarted(true);
    setReadingIndex(0);
  };

  const stopReading = () => {
    setReadingStarted(false);
    setHighlightedIndex(-1);
    setReadingIndex(-1);
    Speech.stop();
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    // Additional logic to handle language change if needed
    // For example, fetching different verb data based on the selected language
  };

  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <TouchableOpacity onPress={readingStarted ? stopReading : () => startReading(currentPage)} style={styles.topRightButton}>
        <Text style={styles.buttonText}>{readingStarted ? 'Stop Reading' : 'Read Now'}</Text>
      </TouchableOpacity>

      <View style={styles.languageDropdown}>
        <Picker
          selectedValue={selectedLanguage}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => changeLanguage(itemValue)}
        >
          {Object.keys(Languages).map((language, index) => (
            <Picker.Item key={index} label={language} value={Languages[language]} />
          ))}
        </Picker>
      </View>

      {currentPage !== null && (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Base: {verbData[currentPage].base} - {verbData[currentPage][selectedLanguage].base}</Text>
            <Text style={[styles.cardText, highlightedIndex === 0 ? styles.highlightedText : null]}>
              Past Simple: {verbData[currentPage].pastSimple} - {verbData[currentPage][selectedLanguage].pastSimple}
            </Text>
            <Text style={[styles.cardText, highlightedIndex === 1 ? styles.highlightedText : null]}>
              Past Participle: {verbData[currentPage].pastParticiple} - {verbData[currentPage][selectedLanguage].pastParticiple}
            </Text>
            <Text style={[styles.cardText, highlightedIndex === 2 ? styles.highlightedText : null]}>
              Present Participle: {verbData[currentPage].presentParticiple}  {verbData[currentPage][selectedLanguage].presentParticiple}
            </Text>
            {/* <Text style={[styles.cardText, highlightedIndex === 3 ? styles.highlightedText : null]}>
              {selectedLanguage}: {verbData[currentPage][selectedLanguage].base}
            </Text> */}
          </View>
        </ScrollView>
      )}

      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevious} disabled={currentPage === 0}>
          <AntDesign name="leftcircle" size={30} color={currentPage === 0 ? 'grey' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={currentPage === verbData.length - 1}>
          <AntDesign name="rightcircle" size={30} color={currentPage === verbData.length - 1 ? 'grey' : 'black'} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  topRightButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  languageDropdown: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    zIndex: 1,
  },
  highlightedText: {
    backgroundColor: 'yellow', // Change the highlight color as needed
    fontWeight: 'bold',
  },
});

export default Day1;
