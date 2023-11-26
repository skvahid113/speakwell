import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Days({ route }) {
  // Extract the dayId parameter from the route
  const { id } = route.params;
  const navigation = useNavigation();
  console.log(`Received id in Days component: ${id}`);

  // Use useEffect to navigate to Day 1 component when id is 1
  useEffect(() => {
    if (id === 1) {
      navigation.navigate('Day1'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 2) {
      navigation.navigate('Day2'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 3) {
      navigation.navigate('Day3'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 4) {
      navigation.navigate('Day4'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 5) {
      navigation.navigate('Day5'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 6) {
      navigation.navigate('Day6'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 7) {
      navigation.navigate('Day7'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 8) {
      navigation.navigate('Day8'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 9) {
      navigation.navigate('Day9'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 10) {
      navigation.navigate('Day10'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 11) {
      navigation.navigate('Day11'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 12) {
      navigation.navigate('Day12'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 13) {
      navigation.navigate('Day13'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 14) {
      navigation.navigate('Day14'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 15) {
      navigation.navigate('Day15'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 16) {
      navigation.navigate('Day16'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 17) {
      navigation.navigate('Day17'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 18) {
      navigation.navigate('Day18'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 19) {
      navigation.navigate('Day19'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
    if (id === 20) {
      navigation.navigate('Day20'); // Replace 'Day1' with the actual name of your Day 1 screen.
    }
  }, [id, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Day {id}</Text>
      {/* You can add more content here */}
    </View>
  );
}

export default Days;
