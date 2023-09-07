import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CanScreen = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>CAN DO (చేయ గలను)</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>S+can+v1+c;</Text>
                    <Text style={styles.contentText}>• It indicates "present ability"</Text>
                    <Text style={styles.contentText}>Eg:-</Text>
                    <Text style={styles.contentText}>నేను తినగలను - I can eat</Text>
                    <Text style={styles.contentText}>నేను తినలేను - I can't eat</Text>
                    <Text style={styles.contentText}>నువ్వు తినగలవా? - Can you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు తినలేవా? - Can't you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు ఎలా తినగలవు? - How can you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు ఎందుకు తినలేవు? - Why can't you eat?</Text>
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
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    contentContainer: {
        marginTop: 20, // Add margin between title and content
        justifyContent: 'center', // Center content vertically within the container
        alignItems: 'flex-start', // Align content to the left

    },
    contentText: {
        fontSize: 16,
        marginLeft: 20, // Add a left margin to align content
        color: 'white',
        lineHeight: 40,

    },
});

export default CanScreen;
