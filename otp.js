import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getAuth, PhoneAuthProvider, signInWithPhoneNumber } from 'firebase/auth';
import { auth as firebaseAuthApp } from './firebase';

const OTPScreen = ({ route, navigation }) => {
  const { verificationId } = route.params;
  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to hold OTP digits
  const otpTextInput = useRef([]); // Refs for OTP TextInput elements

  const handleOTPChange = (index, value) => {
    // Update the OTP array with new value at the given index
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus next TextInput or blur current TextInput on OTP input
    if (value && index < otp.length - 1) {
      otpTextInput.current[index + 1].focus();
    } else if (!value && index > 0) {
      otpTextInput.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    try {
      // Perform OTP validation here using the entered OTP (otp.join(''))
      // For demonstration, let's simulate a delay to mimic an API call for validation
      simulateOTPValidation(); // Simulating OTP validation (replace this with your actual validation logic)

      // If validation succeeds, navigate to the next screen
      // Replace 'HomeScreen' with your screen name after successful validation
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP. Please try again.'); // Handle validation failure
      console.error('Error validating OTP:', error);
      navigation.navigate('signup');
    }
  };

  const handleVerifyOTPV1 = async () => {
    try {
      const enteredOTP = otp.join('');
      const credential = signInWithPhoneNumber(firebaseAuthApp, verificationId, enteredOTP);
      // If successful, proceed with the user authentication
      // ...
      console.log('verified:', credential);
      navigation.navigate('HomeScreen');
    } catch (error) {
      // Handle verification failure
      navigation.navigate('signup');
      console.error('Error verifying OTP:', error);
    }
  };

  const simulateOTPValidation = () => {
    // Simulate a delay to mimic an API call for OTP validation
    setTimeout(() => {
      // Simulated success scenario - Replace this with your actual validation logic
      const expectedOTP = verificationId; // Replace this with the actual OTP expected for verification
      const enteredOTP = otp.join('');
      console.log('enteredOTP', enteredOTP);
      if (enteredOTP === expectedOTP) {
        // Resolve the validation if OTP matches
        console.log('Valid OTP entered');
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', 'Invalid OTP. Please try again.');
        navigation.navigate('signup');
      }
    }, 1500); // Simulated delay of 1.5 seconds
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value}
            onChangeText={(text) => handleOTPChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpTextInput.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTPV1}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#f5af19',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
