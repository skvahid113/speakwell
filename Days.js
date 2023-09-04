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
  }, [id, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Day {id}</Text>
      {/* You can add more content here */}
    </View>
  );
}

export default Days;
