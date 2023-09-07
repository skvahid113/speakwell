import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const Day3 = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#0093E9', '#80D0C7']}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Day 3</Text>
                <Text style={styles.subtitle}>Select a form:</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('PresentDoForms')}
                    >
                        <Text style={styles.buttonText}>Present</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('PastDoForms')}
                    >
                        <Text style={styles.buttonText}>Past</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('FutureDoForms')}
                    >
                        <Text style={styles.buttonText}>Future</Text>
                    </TouchableOpacity>
                </View>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Day3;
