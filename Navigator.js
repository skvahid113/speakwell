import { createStackNavigator } from '@react-navigation/stack';
import Day1 from './Day1'; // Import your Day1 screen component

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    {/* Define your screens here */}
    <Stack.Screen name="Day1" component={Day1} />
    {/* Add other screens as needed */}
  </Stack.Navigator>
);

export default AppNavigator;
