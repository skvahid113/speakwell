import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from './firebase';

const SignUp = ({ navigation, updateVerificationStatus }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [verified, setVerified] = useState(false);
  const [verificationLabel, setVerificationLabel] = useState('Click below button after email verified');
  // const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User signed up:', userCredential.user);
      await sendEmailVerification(auth.currentUser);
      setShowModal(true);
    } catch (error) {
      console.error('Error signing up:', error.message);
      Alert.alert('Error', error.message);
    }
  };

  const handleVerification = async () => {
    try {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        setShowModal(false);
        updateVerificationStatus(true)
        navigation.navigate('HomeScreen');
      } else {
        setVerificationLabel('Email is not verified');
        setTimeout(() => {
          setVerificationLabel('Click below button after email verified');
        }, 3000);
      }
    } catch (error) {
      console.error('Error verifying email:', error.message);
      Alert.alert('Error', 'Failed to verify email.');
    }
  };

  useEffect(() => {
    console.log('Setting up Auth State Change Listener');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        console.log('User is logged in and email is verified. Redirecting to HomeScreen');
        navigation.navigate('HomeScreen');
        unsubscribe(); // Unsubscribe when email is verified
      } else {
        console.log('User is either not logged in or email is not verified');
      }
    });
  }, [navigation]);

  const isEmailValid =
    /\S+@\S+\.\S+/.test(email) && email.toLowerCase().endsWith('@gmail.com');
  const isPasswordValid = password.length >= 6;

  return (
    <LinearGradient
      colors={['#2A414C', '#C0B097']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#bdc3c7"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholderTextColor="#bdc3c7"
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            isEmailValid && isPasswordValid
              ? styles.activeButton
              : styles.inactiveButton,
          ]}
          onPress={handleSignUp}
          disabled={!isEmailValid || !isPasswordValid}
        >
          <FontAwesome name="arrow-right" size={24} color="white" />
        </TouchableOpacity>

        {/* Modal for success and verification */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalContainer}>
            {!verified ? (
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  Verify your email to continue
                </Text>
                <TouchableOpacity
                  onPress={handleVerification}
                  style={styles.verifyButton}
                >
                  <Text style={styles.verifyText}>{verificationLabel}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.modalContent}>
                <FontAwesome name="check-circle" size={60} color="green" />
                <Text style={styles.modalText}>Email Verified!</Text>
              </View>
            )}
          </View>
        </Modal>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1C3132',
    borderRadius: 10,
    marginBottom: 30,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#f5af19',
    padding: 10,
    borderRadius: 5,
  },
  verifyText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUp;
