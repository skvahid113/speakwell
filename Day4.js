import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Typewriter from 'react-native-typewriter';
import * as Animatable from 'react-native-animatable';

const Day4 = () => {

    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTypingDone(true);
        }, 1000); // Wait for 1 second before marking typing as done
    }, []);
    return (
        <LinearGradient
            colors={['#0093E9', '#80D0C7']}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Typewriter
                    typing={typingDone}
                    maxDelay={100}
                    minDelay={30}
                    cursorColor="white"
                    style={styles.title}
                >
                    DAILY ACTIVITIES
                </Typewriter>
                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded}>
                        I/WE/YOU/THEY + V1 + C ; HE/SHE/IT + V1 + S/ES
                    </Text>
                </Animatable.View>
                <Text style={styles.activity}>• I wake up at 5 O'clock daily.</Text>
                <Text style={styles.activity}>• After that, I complete my natural activities.</Text>
                <Text style={styles.activity}>• Later, I take my breakfast and then I go to school at 9 O'clock.</Text>
                <Text style={styles.activity}>• There, I attend my classes up to 12:30.</Text>
                <Text style={styles.activity}>• After that, I return home.</Text>
                <Text style={styles.activity}>• Then, I have my lunch along with my family members.</Text>
                <Text style={styles.activity}>• Later, I attend my second session.</Text>
                <Text style={styles.activity}>• Around 4 O'clock, I listen to my afternoon classes very carefully.</Text>
                <Text style={styles.activity}>• After that, I return home.</Text>
                <Text style={styles.activity}>• Then, I take snacks.</Text>
                <Text style={styles.activity}>• After that, I take rest for some time.</Text>
                <Text style={styles.activity}>• Later, I attend my study hours regularly.</Text>
                <Text style={styles.activity}>• After that, I go back home.</Text>
                <Text style={styles.activity}>• Then, I play with my friends for some time.</Text>
                <Text style={styles.activity}>• Later, I have my supper along with my family members.</Text>
                <Text style={styles.activity}>• After that, I watch TV for some time.</Text>
                <Text style={styles.activity}>• Before going to bed at 10 O'clock, I pray to God.</Text>
                <Text style={styles.footer}>
                    These are all my daily activities. Thank you for giving me this opportunity.
                </Text>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white', // Text color for the gradient background
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        marginTop: 18,
        fontSize: 14,
        marginBottom: 10,
        color: 'white', // Text color for the gradient background
    },

    rounded: {
        fontSize: 12,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'black', // Background color with transparency
        borderRadius: 20, // Border radius for rounded corners
        padding: 10, // Add some padding
      },
    activity: {
        fontSize: 18,
        marginBottom: 5,
        color: 'white', // Text color for the gradient background
    },
    footer: {
        fontSize: 20,
        marginTop: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white', // Text color for the gradient background
    },
});

export default Day4;
