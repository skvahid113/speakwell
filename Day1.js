import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { verbData } from './verbs';

const ITEMS_PER_PAGE = 5;

const Day1 = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleVerbs = verbData.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < verbData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const gradientColors = ['#ff9800', '#ff5722'];

  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Present</Text>
          <Text style={styles.headerText}>Past Simple</Text>
          <Text style={styles.headerText}>Past Participle</Text>
          <Text style={styles.headerText}>Present Participle</Text>
          <Text style={styles.headerText}>Telugu</Text>
        </View>
        {visibleVerbs.map((currentVerb, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataText}>{currentVerb.base}</Text>
            <Text style={styles.dataText}>{currentVerb.pastSimple}</Text>
            <Text style={styles.dataText}>{currentVerb.pastParticiple}</Text>
            <Text style={styles.dataText}>{currentVerb.presentParticiple}</Text>
            <Text style={styles.dataText}>{currentVerb.telugu.base}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        <Button title="Previous" onPress={handlePrevious} disabled={currentPage === 1} />
        <Text style={styles.pageText}></Text>
        <Button
          title="Next"
          color={'orange'}
          onPress={handleNext}
          disabled={endIndex >= verbData.length}
          style={styles.roundedButton}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', // Set the background to transparent
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: 'white'
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    borderTopWidth: 2,
    borderColor: 'gray',
  },
  dataText: {
    flex: 1,
    textAlign: 'center',

  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  pageText: {
    fontWeight: 'bold',
    backgroundColor: 'red'

  },
  roundedButton: {
    borderTopLeftRadius: 40, // Adjust the radius as needed
    borderTopRightRadius: 40, // Adjust the radius as needed
  },
});

export default Day1;
