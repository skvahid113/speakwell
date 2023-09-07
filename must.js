import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MustUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేసి తీరాలి (Must Do)</Text>
                <Text style={styles.example}>s + must + v1 + c;</Text>
                <Text style={styles.note}>No doubt it is used to express commands/orders.</Text>
                <Text style={styles.exampleText}>a) You must abide by my firm rules.</Text>
                <Text style={styles.exampleText}>b) You mustn't go beyond your limits inspite of freshers day.</Text>

                <Text style={styles.note}>Sometimes it does express expectations.</Text>
                <Text style={styles.example}>Eg:</Text>
                <Text style={styles.exampleText}>I think he must know the answer - నాకు తెలిసి అతనికి సమాదానం తెలుసు.</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>నువ్వు తినితీరాలి - You must eat.</Text>
                    <Text style={styles.exampleText}>నువ్వు ఖచ్చితంగా తినకూడదు - You mustn't eat.</Text>
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
        marginLeft: 20
    },
    example: {
        fontSize: 16,
        color: 'white',
        marginVertical: 5,

    },
    noteText: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,

    },
    note: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,

    },
});

export default MustUsageComponent;
