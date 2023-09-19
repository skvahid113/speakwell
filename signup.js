import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
// import auth from '@react-native-firebase/auth';

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation(); // Create a navigation object

    const handleSignUp = async () => {
        // Validate the Indian mobile number (10 digits)
        if (/^\d{10}$/.test(phoneNumber)) {
            try {
                // Trigger Firebase OTP verification here
                // You should configure Firebase in your project first
                // This is a simplified example, you should replace it with Firebase authentication code
                const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
                // Navigate to the OTP screen
                navigation.navigate('otp');
            } catch (error) {
                console.error('Firebase OTP Error:', error);
                // Handle Firebase OTP verification error
            }
        } else {
            // Show an error message or handle the invalid input
            console.error('Invalid Indian Mobile Number');
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
                <Text style={styles.heading}>Sign Up</Text>
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
        backgroundColor: '#2948ff',
        width: 40, // Adjust the width as needed
        height: 70, // Set the height to match the input height
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
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
        paddingVertical: 10, // Add padding to the input box
        backgroundColor: '#3c3b3f', // Blue background color for the input box
        borderTopRightRadius: 5, // Rounded corners
        borderBottomRightRadius: 5, // Rounded corners
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginLeft: 10,
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
});

export default SignUp;
