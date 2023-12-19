import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';

const OTPScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();

  const handleVerifyCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await auth().signInWithCredential(credential);

      // Verification successful, navigate to the next screen
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error verifying code:', error.message);
      Alert.alert('Error', 'Invalid verification code. Please try again.');
      navigation.navigate('SplashScreen');
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
        <TextInput
          style={styles.input}
          placeholder="Enter verification code"
          onChangeText={(text) => setVerificationCode(text)}
          keyboardType="numeric"
          placeholderTextColor="#bdc3c7"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleVerifyCode}
          disabled={!verificationCode}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#1C3132',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f5af19',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OTPScreen;
