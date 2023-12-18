import { React, useEffect, useState } from 'react';
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

import Day7 from './Day7';
import Day8 from './Day8';
import Day11 from './Day11';
import Day12 from './Day12';
import Day13 from './Day13';
import Day14 from './Day14';
import Day15 from './Day15';


import can from './can';
import could from './could';
import will from './will';
import would from './would';
import shall from './shall';
import should from './should';
import may from './may';
import might from './might';
import must from './must';
import usedto from './usedto';
import oughtto from './oughtto';
import needto from './needto';
import dareto from './dareto';
import ModalAuxiliaries from './ModalAuxiliaries';

import CustomSidebar from './CustomSideBar';
import signup from './signup';
import OTPScreen from './otp';
import presentdoQuiz from './presentdoQuiz';
import TakeNow from './TakeNow';
import presentdoQuiz2 from './presentdoQuiz2';


// import firebase from 'firebase/app'; // Import the Firebase core module
// import 'firebase/auth'; // Import other Firebase modules you might need

// // Your Firebase configuration object (replace with your own config)
// const firebaseConfig = {
//   apiKey: 'AIzaSyAEOIBzzB6f2rHZpIZ2jzofQQ5Zv2UlPPY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'quicklingo-48466',
//   storageBucket: 'quicklingo-48466.appspot.com',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: '1:26580527177:android:15cf8d9592b9da535eb798',
// };
// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

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
  const [otpVerified, setOTPVerified] = useState(false);
  const updateOTPVerification = (status) => {
    setOTPVerified(status);
  };

  return (
    <NavigationContainer>

      {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1 }}
      > */}
      <ScreenWithGradientBackground>

        {!otpVerified ? (
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />


            <Stack.Screen
              name="OTPScreen"
              options={{ title: 'OTPScreen' }}
            >
              {(props) => (
                <OTPScreen
                  {...props}
                  updateOTPVerification={updateOTPVerification}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="signup"
              component={signup}
              options={{ title: 'Signup' }}
            />
          </Stack.Navigator>
        ) : (

          <Drawer.Navigator
            drawerContent={(props) => <CustomSidebar
              updateOTPVerification={updateOTPVerification}
              {...props} />

            } // Use CustomSidebar as the contentComponent
          >

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
              name="TakeNow"
              component={TakeNow}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="presentdoQuiz"
              component={presentdoQuiz}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="presentdoQuiz2"
              component={presentdoQuiz2}
              options={{ headerShown: false }}
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
              name="Day7"
              component={Day7}
              options={({ navigation }) => ({
                title: 'Day 7',
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
              name="Day8"
              component={Day8}
              options={({ navigation }) => ({
                title: 'Day 8',
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

            {/* Day11 */}

            <Drawer.Screen
              name="Day11"
              component={Day11}
              options={({ navigation }) => ({
                title: 'Day 11',
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
              name="ModalAuxiliaries"
              component={ModalAuxiliaries}
              options={{ title: 'ModalAuxiliaries' }}
            />
            <Drawer.Screen
              name="Can"
              component={can}
              options={{ title: 'Can' }}
            />

            <Drawer.Screen
              name="Could"
              component={could}
              options={{ title: 'Could' }}
            />



            {/* day 12 */}

            <Drawer.Screen
              name="Day12"
              component={Day12}
              options={({ navigation }) => ({
                title: 'Day 12',
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
              name="Will"
              component={will}
              options={{ title: 'Will' }}
            />

            <Drawer.Screen
              name="Would"
              component={would}
              options={{ title: 'Would' }}
            />
            {/* day13 */}
            <Drawer.Screen
              name="Day13"
              component={Day13}
              options={({ navigation }) => ({
                title: 'Day 13',
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
              name="Shall"
              component={shall}
              options={{ title: 'Shall' }}
            />

            <Drawer.Screen
              name="Should"
              component={should}
              options={{ title: 'Should' }}
            />


            {/* day14 */}
            <Drawer.Screen
              name="Day14"
              component={Day14}
              options={({ navigation }) => ({
                title: 'Day 14',
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
              name="May"
              component={may}
              options={{ title: 'May' }}
            />



            <Drawer.Screen
              name="Might"
              component={might}
              options={{ title: 'Might' }}
            />

            <Drawer.Screen
              name="Must"
              component={must}
              options={{ title: 'Must' }}
            />


            {/* day15 */}
            <Drawer.Screen
              name="Day15"
              component={Day15}
              options={({ navigation }) => ({
                title: 'Day 15',
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
              name="UsedTo"
              component={usedto}
              options={{ title: 'Used To' }}
            />

            <Drawer.Screen
              name="OughtTo"
              component={oughtto}
              options={{ title: 'Ought To' }}
            />

            <Drawer.Screen
              name="NeedTo"
              component={needto}
              options={{ title: 'Need To' }}
            />

            <Drawer.Screen
              name="DareTo"
              component={dareto}
              options={{ title: 'Dare To' }}
            />

            <Drawer.Screen
              name="signup"
              component={signup}
              options={{ title: 'Signup' }}
            />

            <Drawer.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ title: 'SplashScreen' }}
            />

            <Drawer.Screen
              name="OTPScreen"
              options={{ title: 'OTPScreen' }}
            >
              {(props) => (
                <OTPScreen
                  {...props}
                  updateOTPVerification={updateOTPVerification}
                />
              )}
            </Drawer.Screen>

          </Drawer.Navigator>)}
        {/* </LinearGradient> */}
      </ScreenWithGradientBackground>

    </NavigationContainer >
  );

};

export default App;
