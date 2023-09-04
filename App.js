import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import Days from './Days';
import SideBar from './SideBar';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SplashScreen">
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => {
                  // Open the sidebar by navigating to it
                  navigation.toggleDrawer();
                }}
              >
                <MaterialIcons name="menu" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Drawer.Screen
          name="Learning"
          component={SideBar}
          options={{
            title: 'My Learnings',
            // drawerIcon: ({ focused, size }) => (
            //   <MaterialIcons
            //     name={focused ? 'menu' : 'menu'}
            //     size={size}
            //     color={focused ? 'blue' : 'black'}
            //   />
            // ),
          }}
        />
        <Drawer.Screen
          name="Days"
          options={{ title: 'Days' }}
        >
          {({ route }) => ( // Use route prop to access params
           console.log(`Selected app js: ${route.params?.id}`),
            <Stack.Navigator initialRouteName="Days">
              <Stack.Screen
                name="Days"
                component={Days}
                options={{ title: 'Days', headerShown: false }}
                initialParams={{ id: route.params?.id }} // Pass 'id' from route.params
              />
              {/* Add more screens as needed */}
            </Stack.Navigator>
          )}
        </Drawer.Screen>








        {/* <Drawer.Screen
          name="DaysScreen"
          component={Days}
          options={{ title: 'Days' }}
        /> */}
        {/* With these changes, the "Learning" menu item in the drawer will display a down-arrow icon when tapped, and the submenus "Day 1" to "Day 30" will be shown or hidden based on the toggle state. */}






        {/* Add a screen for the SideBar component */}
        {/* <Drawer.Screen name="SideBar" component={SideBar} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );

};

export default App;
