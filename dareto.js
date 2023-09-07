import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DareToUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేసే దైర్యం ఉంది (Dare / Dare To Do)</Text>
                <Text style={styles.example}>S + dare/dare to + v1 + c;</Text>
                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>నాకు కొట్టే దైర్యం ఉంది – I dare beat / I dare to beat</Text>
                    <Text style={styles.exampleText}>నాకు కొట్టే దైర్యం లేదు - I dare not beat / I don’t dare to beat</Text>
                    <Text style={styles.exampleText}>కొట్టడానికి నీకు ఎంత ధైర్యం – How dare you beat? / How do you dare to beat?</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
        marginLeft: 10
    },
    example: {
        fontSize: 16,
        color: 'white',
        marginVertical: 5,
        marginLeft: 20
    },
    exampleContainer: {
        marginTop: 20,
    },
    exampleText: {
        fontSize: 16,
        color: 'white',
        marginVertical: 5,
        lineHeight: 40,
        marginLeft: 10
    },
});

export default DareToUsageComponent;
