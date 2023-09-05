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
import Day1 from './Day1';
import Day2 from './Day2';
import Day2_1 from './Day2_1';

import Day3 from './Day3';

import PresentDoForms from './PresentDoForms';
import PastDoForms from './PastDoForms';
import FutureDoForms from './FutureDoForms';
import Day4 from './Day4';
import Day5 from './Day5';
import PresentBeforms from './PresentBeForms';
import PastBeforms from './PastBeforms';
import Beforms from './Beforms';
import FutureHaveForms from './FutureHaveforms';
import PastHaveForms from './PastHaveforms';
import PresentHaveforms from './PresentHaveforms';
import FutureBeforms from './FutureBeforms';
import { LinearGradient } from 'expo-linear-gradient';
import Day6 from './Day6';
import PresentSimpleTenseScreen from './PresentSimpleTenseScreen';
import PresentContinuousTenseScreen from './PresentContinuousTenseScreen';
import PresentPerfectTenseScreen from './PresentPerfectTenseScreen';
import PresentPerfectContinuousTenseScreen from './PresentPerfectContinuousTenseScreen';
import PastSimpleTenseScreen from './PastSimpleTenseScreen';
import PastContinuousTenseScreen from './PastContinuousTenseScreen';
import PastPerfectTenseScreen from './PastPerfectTenseScreen';
import PastPerfectContinuousTenseScreen from './PastPerfectContinuousTenseScreen';
import FutureSimpleTenseScreen from './FutureSimpleTenseScreen';
import FutureContinuousTenseScreen from './FutureContinuousTenseScreen';
import FuturePerfectTenseScreen from './FuturePerfectTenseScreen';
import FuturePerfectContinuousTenseScreen from './FuturePerfectContinuousTenseScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ScreenWithGradientBackground = ({ children }) => (
  <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={{ flex: 1 }}
  >
    {children}
  </LinearGradient>
);

const App = () => {
  return (
    <NavigationContainer>

      {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1 }}
      > */}
      <ScreenWithGradientBackground>

        <Drawer.Navigator >
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
                  <MaterialIcons name="menu" size={28} color="black" />
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
            options={{ title: 'Knowledge Quest' }}
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

              </Stack.Navigator>
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="Day1"
            component={Day1}

          />

          <Drawer.Screen
            name="Day2"
            component={Day2}

          />

          <Drawer.Screen
            name="Day2_1"
            component={Day2_1}

          />

          <Drawer.Screen
            name="Day3"
            component={Day3}
            options={({ navigation }) => ({
              title: 'Day 3',
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                >
                  <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />

          <Drawer.Screen
            name="PresentDoForms"
            component={PresentDoForms}
            options={{ title: 'Present Do Forms' }}
          />
          <Drawer.Screen
            name="PastDoForms"
            component={PastDoForms}
            options={{ title: 'Past Do Forms' }}
          />
          <Drawer.Screen
            name="FutureDoForms"
            component={FutureDoForms}
            options={{ title: 'Future Do Forms' }}
          />


          <Drawer.Screen
            name="Day4"
            component={Day4}

          />

          <Drawer.Screen
            name="Day5"
            component={Day5}
            options={({ navigation }) => ({
              title: 'Day 5',
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                >
                  <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />


          <Drawer.Screen
            name="Beforms"
            component={Beforms}
            options={{ title: 'Be Forms' }}
          />
          <Drawer.Screen
            name="PresentBeforms"
            component={PresentBeforms}
            options={{ title: 'Present Be Forms' }}
          />
          <Drawer.Screen
            name="PastBeforms"
            component={PastBeforms}
            options={{ title: 'Past Be Forms' }}
          />
          <Drawer.Screen
            name="FutureBeforms"
            component={FutureBeforms}
            options={{ title: 'Future Be Forms' }}
          />

          <Drawer.Screen
            name="PresentHaveforms"
            component={PresentHaveforms}
            options={{ title: 'Present Have Forms' }}
          />
          <Drawer.Screen
            name="PastHaveforms"
            component={PastHaveForms}
            options={{ title: 'Past Have Forms' }}
          />
          <Drawer.Screen
            name="FutureHaveforms"
            component={FutureHaveForms}
            options={{ title: 'Future Have Forms' }}
          />

          {/* {Day 6} */}

          <Drawer.Screen
            name="Day6"
            component={Day6}
            options={({ navigation }) => ({
              title: 'Day 6',
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                >
                  <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />



          <Drawer.Screen
            name="PresentSimpleTenseScreen"
            component={PresentSimpleTenseScreen}
            options={{ title: 'Present Simple Tense' }}
          />

          <Drawer.Screen
            name="PresentContinuousTenseScreen"
            component={PresentContinuousTenseScreen}
            options={{ title: 'Present Continuous Tense' }}
          />

          <Drawer.Screen
            name="PresentPerfectTenseScreen"
            component={PresentPerfectTenseScreen}
            options={{ title: 'Present Perfect Tense' }}
          />

          <Drawer.Screen
            name="PresentPerfectContinuousTenseScreen"
            component={PresentPerfectContinuousTenseScreen}
            options={{ title: 'Present Perfect Continuous Tense' }}
          />

          <Drawer.Screen
            name="PastSimpleTenseScreen"
            component={PastSimpleTenseScreen}
            options={{ title: 'Past Simple Tense' }}
          />

          <Drawer.Screen
            name="PastContinuousTenseScreen"
            component={PastContinuousTenseScreen}
            options={{ title: 'Past Continuous Tense' }}
          />

          <Drawer.Screen
            name="PastPerfectTenseScreen"
            component={PastPerfectTenseScreen}
            options={{ title: 'Past Perfect Tense' }}
          />

          <Drawer.Screen
            name="PastPerfectContinuousTenseScreen"
            component={PastPerfectContinuousTenseScreen}
            options={{ title: 'Past Perfect Continuous Tense' }}
          />

          <Drawer.Screen
            name="FutureSimpleTenseScreen"
            component={FutureSimpleTenseScreen}
            options={{ title: 'Future Simple Tense' }}
          />

          <Drawer.Screen
            name="FutureContinuousTenseScreen"
            component={FutureContinuousTenseScreen}
            options={{ title: 'Future Continuous Tense' }}
          />

          <Drawer.Screen
            name="FuturePerfectTenseScreen"
            component={FuturePerfectTenseScreen}
            options={{ title: 'Future Perfect Tense' }}
          />

          <Drawer.Screen
            name="FuturePerfectContinuousTenseScreen"
            component={FuturePerfectContinuousTenseScreen}
            options={{ title: 'Future Perfect Continuous Tense' }}
          />



        </Drawer.Navigator>
        {/* </LinearGradient> */}
      </ScreenWithGradientBackground>

    </NavigationContainer >
  );

};

export default App;
