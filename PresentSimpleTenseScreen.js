import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const PresentSimpleTenseScreen = () => {
    return (
        <LinearGradient
            colors={['#0093E9', '#80D0C7']}
            style={styles.container}
        >
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Simple Present Tense</Text>



                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded}>
                        Simple Present Tense is used to express daily activities, habitual actions, universal truths, likes, dislikes, love, hate, proverbs, quotations, ads, captions, headlines, stories, idioms, and phrases.
                    </Text>
                </Animatable.View>

                <Text style={styles.usageTitle}>Usage:</Text>

                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded1}>
                        In this tense, we use some regular words like “daily, generally, always, habitually, now and then, off and on, sometimes, often, frequently, once in a year, once in a month, etc."
                    </Text>
                </Animatable.View>

                <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
                <Text style={styles.example}>నేను ప్రతిరోజు తింటాను - I eat daily</Text>
                <Text style={styles.example}>నేను ప్రతిరోజు తినను - I don't eat daily</Text>
                <Text style={styles.example}>నువ్వు ప్రతిరోజు తింటావా? - Do you eat daily?</Text>
                <Text style={styles.example}>నువ్వు ప్రతిరోజు తినను - Don't you eat daily?</Text>
                <Text style={styles.example}>నువ్వు ప్రతిరోజు ఎందుకు తింటావు? - Why do you eat daily?</Text>
                <Text style={styles.example}>నువ్వు ప్రతిరోజు ఎందుకు తినను? - Why don't you eat daily?</Text>
                {/* Add more examples as needed */}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        padding: 10,
        // backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: 'white'
    },
    usageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    usage: {
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 20,
        color: 'white'
    },
    examplesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    example: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 5,
        color: 'white',
        marginTop: 18,
        fontSize: 14,
        marginBottom: 5,
    },
    rounded: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'black', // Background color with transparency
        borderRadius: 20, // Border radius for rounded corners
        padding: 10, // Add some padding
    },

    rounded1: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'orange', // Background color with transparency
        borderRadius: 20, // Border radius for rounded corners
        padding: 10, // Add some padding
    },
});

export default PresentSimpleTenseScreen;
