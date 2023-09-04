import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Days({ route }) {
  // Extract the dayId parameter from the route
  const { id } = route.params;
  const navigation = useNavigation();
  console.log(`Received id in Days component: ${id}`);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Day {id}</Text>
      {/* You can add more content here */}
    </View>
  );
}

export default Days;
