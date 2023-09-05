import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleMenuPress = () => {
        navigation.openDrawer();
    };

    const handleGoToLearnings = () => {
        // Navigate to the "Learning" screen or any other screen as needed
        navigation.navigate('Learning');
    };

    return (
        <LinearGradient
            colors={['#88d3ce', '#6e45e2']}
            style={styles.container}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleGoToLearnings}>
                    <LinearGradient
                        colors={['#00FF00', '#00AA00']} // Green gradient colors
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Go to Learnings</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* <Image
        source={require('./assets/arrow.jpg')} // Replace with your image path
        style={styles.footerImage}
      /> */}
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
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    footerImage: {
        width: '100%', // Adjust the width as needed
        height: 100, // Adjust the height as needed
        resizeMode: 'cover', // You can adjust resizeMode based on your image aspect ratio

    },
});

export default HomeScreen;
