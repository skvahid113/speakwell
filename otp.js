import React, { useState } from 'react';
import { View, Text } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPScreen = ({ route }) => {
  const [otp, setOTP] = useState('');

  const { verificationId } = route.params;

  const handleVerifyOTP = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      await firebase.auth().signInWithCredential(credential);
      console.log('User signed in successfully');
      // Navigate to the next screen or perform necessary actions
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <View>
      <Text>Enter OTP:</Text>
      <OTPInputView
        pinCount={6}
        code={otp}
        onCodeChanged={(code) => setOTP(code)}
        autoFocusOnLoad
        codeInputFieldStyle={styles.otpInput}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = {
  otpInput: {
    width: 30, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },
};

export default OTPScreen;
