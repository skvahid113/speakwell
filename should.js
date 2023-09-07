import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShouldUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేయా’లి (Should Do)</Text>
                <Text style={styles.example}>S + should + v1 + c;</Text>
                <Text style={styles.note}>
                    It tells "obligation / duty / responsibility" for any subject.
                </Text>
                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>1. You should look after your parents (take care of).</Text>
                    <Text style={styles.exampleText}>2. One should love one's duty.</Text>
                    <Text style={styles.exampleText}>నువ్వు తినాలి - You should eat</Text>
                    <Text style={styles.exampleText}>నువ్వు తినకూడదు - You shouldn't eat</Text>
                    <Text style={styles.exampleText}>నేను తినాలా? - Should I eat?</Text>
                    <Text style={styles.exampleText}>నేను తినకూడదా? - Shouldn't I eat?</Text>
                    <Text style={styles.exampleText}>నేను ఎందుకు తినాలి? - Why should I eat?</Text>
                    <Text style={styles.exampleText}>నేను ఎందుకు తినకూడదు? - Why shouldn't I eat?</Text>
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
        marginLeft: 20,
        lineHeight: 30,
    },
    example: {
        fontSize: 16,
        color: 'white',
        marginVertical: 5,
        marginLeft: 20
    },
    note: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,

    },
});

export default ShouldUsageComponent;
