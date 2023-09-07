import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WouldUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేసే వాడిని/దానిని (Would Do)</Text>
                <Text style={styles.example}>s + would + v1 + c;</Text>
                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>నేను తినేవాడిని/దానిని - I would eat</Text>
                    <Text style={styles.exampleText}>నేను తినేదానినికాదు - I wouldn't eat</Text>
                    <Text style={styles.exampleText}>నువ్వు తినేదానివా? - Would you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు తినేదానివికాదా? - Wouldn't you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎలాతినేదానివి? - How would you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎందుకుతినేదానివికాదు? - Why wouldn't you eat?</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align content at the top
        alignItems: 'center', // Center horizontally
        paddingTop: 20, // Add top padding for title
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    exampleContainer: {
        marginTop: 20, // Add margin between title and content
        justifyContent: 'center', // Center content vertically within the container
        alignItems: 'flex-start', // Align content to the left
    },
    exampleText: {
        fontSize: 18,
        color: 'white',
        marginVertical: 5,
        lineHeight: 40,
        marginLeft:20,
    },
});

export default WouldUsageComponent;
