import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyAEOIBzzB6f2rHZpIZ2jzofQQ5Zv2UlPPY', // Your API Key
    authDomain: 'quicklingo-48466.firebaseapp.com', // Your Firebase Authentication Domain
    projectId: 'quicklingo-48466', // Your Firebase Project ID
    storageBucket: 'quicklingo-48466.appspot.com', // Your Firebase Storage Bucket
    messagingSenderId: '26580527177', // Your Firebase Messaging Sender ID
    appId: '1:26580527177:android:15cf8d9592b9da535eb798', // Your Firebase App ID
};

// Initialize Firebase with your configuration
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Initialize the Auth instance

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const [typedText, setTypedText] = useState('');
  const textToType = 'Sign Up';
  const typingSpeed = 200; // Adjust typing speed in milliseconds
  let currentIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const handleSignUp = async () => {
    try {
        console.log('before:', auth,`+91${phoneNumber}`);
        // Request a verification code to be sent to the user's phone number
        const confirmation = await signInWithPhoneNumber(auth, `+91${phoneNumber}`);
        console.error('after:', confirmation);
        // const verificationId = confirmation.verificationId;

        // // Navigate to the OTP screen and pass the verification ID and phone number as parameters
        // navigation.navigate('OTPScreen', { verificationId, phoneNumber });
    } catch (error) {
        console.error('Error requesting verification code:', error.message);
    }
};


  const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

  return (
    <LinearGradient
      colors={['#870000', '#3533cd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.heading}>{typedText}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.prefixBox}>
            <Text style={styles.prefixText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Mobile Phone Number"
            keyboardType="numeric"
            onChangeText={(text) => setPhoneNumber(text)}
            maxLength={10}
            placeholderTextColor="white"
          />
        </View>
        {isPhoneNumberValid && (
          <TouchableOpacity
            style={[styles.button, isPhoneNumberValid ? styles.activeButton : styles.inactiveButton]}
            onPress={handleSignUp}
            disabled={!isPhoneNumberValid}
          >
            <FontAwesome name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    marginBottom: 20,
  },
  prefixBox: {
    backgroundColor: '#155799',
    width: 40,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  prefixText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    flex: 1,
    height: 70,
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#3c3b3f',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 0,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3c3b3f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  activeButton: {
    backgroundColor: '#20002c',
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
});

export default SignUp;
