import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PresentPerfectTenseScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Present Perfect Tense (ఇప్పుడే జరిగింది)</Text>
            <Text style={styles.description}>
                Present Perfect Tense is used to indicate just completed actions (j.c.a) and actions that continue until today.
            </Text>

            <Text style={styles.usageTitle}>Usage:</Text>
            <Text style={styles.usage}>
                This tense is used to indicate just completed actions and actions that continue until today.
            </Text>

            <Text style={styles.examplesTitle}>Examples in Telugu:</Text>
            <Text style={styles.example}>నేను ఇప్పుడే తిన్నాను - I have eaten just now</Text>
            <Text style={styles.example}>నేను ఇప్పుడే తినలేదు - I haven't eaten just now</Text>
            <Text style={styles.example}>నువ్వు ఇప్పుడే తిన్నావా? - Have you eaten just now?</Text>
            <Text style={styles.example}>నువ్వు ఇప్పుడే తినలేదా? - Haven't you eaten just now?</Text>
            <Text style={styles.example}>నువ్వు ఇప్పుడే ఎందుకు తిన్నావు? - Why have you eaten just now?</Text>
            <Text style={styles.example}>నువ్వు ఇప్పుడే ఎందుకు తినలేదు? - Why haven't you eaten just now?</Text>

            <Text style={styles.example}>Eg2:</Text>
            <Text style={styles.example}>అతను ఇప్పుడే తిన్నాడు - He has eaten just now</Text>
            <Text style={styles.example}>అతను ఇప్పుడే తినలేదు - He hasn't eaten just now</Text>
            <Text style={styles.example}>అతను ఇప్పుడే తిన్నాడా? - Has he eaten just now?</Text>
            <Text style={styles.example}>అతను ఇప్పుడే తినలేదా? - Hasn't he eaten just now?</Text>
            <Text style={styles.example}>అతను ఇప్పుడే ఎందుకు తిన్నాడు? - Why has he eaten just now?</Text>
            <Text style={styles.example}>అతను ఇప్పుడే ఎందుకు తినలేదు? - Why hasn't he eaten just now?</Text>

            <Text style={styles.example}>Note : This tense is also used to indicate about “till today past actions”.
                	In this tense we generally use some common words like “ till now,upto now,still,
                until now,so-far”</Text>
            <Text style={styles.example}>నేను ఇప్పటికే తొలిప్రేమ మూవి 5 సార్లు చూశాను - I have seen the 'Tholi Prema' movie five times until now.</Text>
            <Text style={styles.example}>అతను ఇప్పటిదాకా ఇక్కడికి ఒక్కసారి కూడా రాలేదు - He hasn't come here at least once so far.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
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
    },
    examplesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    example: {
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5,
    },
});

export default PresentPerfectTenseScreen;
