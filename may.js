import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MayUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేయ’వచ్చు (May Do)</Text>

                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded}>S + may + v1 + c;
                        {'\n'}
                        {'\n'}

                        It is used to express "present possibility (or) future action".
                        {'\n'}
                        {'\n'}

                        It is also used to take permission (e.g., May I come in?).
                    </Text>
                </Animatable.View>


                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>It may rain tomorrow (రేఫువర్ష౦ పడవచ్చు).</Text>
                    <Text style={styles.exampleText}>It may not rain tomorrow (రేఫువర్ష౦ పడకవచ్చు).</Text>
                    <Text style={styles.exampleText}>అతను తినవచ్చు - He may eat.</Text>
                    <Text style={styles.exampleText}>అతను తినకపోవచ్చు - He may not eat.</Text>
                    <Text style={styles.exampleText}>నేను తినవచ్చా? - May I eat?</Text>
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
    },
    example: {
        fontSize: 16,
        color: 'white',
        marginVertical: 5,
    },
    note: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,
        lineHeight: 40
    },
    rounded: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        backgroundColor: 'orange', // Background color with transparency
        borderRadius: 20, // Border radius for rounded corners
        padding: 10, // Add some padding
    },
});

export default MayUsageComponent;
