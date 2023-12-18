import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FirebaseRecaptcha, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { getAuth, PhoneAuthProvider, signInWithPhoneNumber } from 'firebase/auth'; // Import specific Firebase Auth functionalities

// Assuming you've initialized Firebase in another file (e.g., firebase.js) and exported the initialized app
import { auth as firebaseAuthApp } from './firebase';
import { RecaptchaVerifier } from 'expo-firebase-recaptcha';


const SignUp = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const [emojiScale] = useState(new Animated.Value(1));
  const [phoneEntered, setPhoneEntered] = useState(false);
  const recaptchaVerifier = React.useRef(null);
  const [verificationId, setVerificationId] = useState('');
  const [code, setCode] = useState('');

  const initializeRecaptcha = () => {
    recaptchaVerifier.current = new RecaptchaVerifier(yourRefOrElement, {
      size: 'invisible', // or 'normal'
      // Other options for reCAPTCHA initialization
    });
  };

  const handleSendVerificationCode = async () => {
    if (phoneNumber.length === 10) {
      try {
        const provider = new PhoneAuthProvider(firebaseAuthApp); // Use PhoneAuthProvider from the initialized Firebase app
        const verificationId = await provider.verifyPhoneNumber(`+91${phoneNumber}`, recaptchaVerifier.current);
        setVerificationId(verificationId);
        console.error('verificationId:', verificationId);
        navigation.navigate('OTPScreen', { verificationId });
        // navigation.navigate('OTPScreen', 123456);
      } catch (error) {
        console.error('Error sending verification code:', error);
        // Handle error here
      }
    } else {
      Alert.alert('Invalid phone number', 'Please enter a valid 10-digit phone number');
    }
  };

  useEffect(() => {
    let interval;
    if (!phoneEntered) {
      interval = setInterval(() => {
        Animated.sequence([
          Animated.timing(emojiScale, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(emojiScale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 1000); // Change blinking interval as needed
    } else {
      clearInterval(interval);
      Animated.timing(emojiScale, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }

    return () => clearInterval(interval);
  }, [phoneEntered, emojiScale]);

  const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

  const handleSignUp = async () => {
    if (isPhoneNumberValid) {
      // If phone number is valid, proceed with sign up
      try {
        // Perform sign-up actions here
        // Navigate to the next screen or perform necessary operations
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <LinearGradient
      colors={['#2A414C', '#C0B097']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Animated.Text style={[
          styles.heading,
          {
            transform: [{ scale: emojiScale }],
            color: phoneEntered ? '#006400' : '#FF0000', // Dark Green for thumbs up, Red for down arrow
          }
        ]}>
          {phoneEntered ? '👍🏻' : '👇🏾'}
        </Animated.Text>
        <View style={styles.inputContainer}>
          <View style={styles.prefixBox}>
            <Text style={styles.prefixText}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Mobile Phone Number"
            keyboardType="numeric"
            onChangeText={(text) => {
              setPhoneNumber(text);
              setPhoneEntered(text.length === 10); // Set phoneEntered based on phone number length
            }}
            maxLength={10}
            placeholderTextColor="#bdc3c7"
          />
        </View>
        <TouchableOpacity
          style={[styles.button, isPhoneNumberValid ? styles.activeButton : styles.inactiveButton]}
          onPress={handleSendVerificationCode}
          disabled={!isPhoneNumberValid}
        >
          <FontAwesome name="arrow-right" size={24} color="white" />
        </TouchableOpacity>

        <FirebaseRecaptchaVerifierModal // Use FirebaseRecaptchaVerifierModal for verification
          ref={(ref) => (recaptchaVerifier.current = ref)}
          firebaseConfig={firebaseAuthApp.app.options} // Pass Firebase configuration
          attemptInvisibleVerification={true} // Adjust according to your requirement
        />
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
    fontSize: 32,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1C3132',
    borderRadius: 10,
    marginBottom: 30,
  },
  prefixBox: {
    backgroundColor: '#223F3E',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  prefixText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 60,
    color: 'white',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#f5af19',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: '#f15e75',
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
});

export default SignUp;
