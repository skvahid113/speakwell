import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MightUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేసి ఉండవచ్చు (Might Do)</Text>

                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded}>S + might + v1 + c;
                        {'\n'}
                        {'\n'}

                        It indicates "past possibility".
                        {'\n'}
                        {'\n'}

                        It is also used as the past form of 'may'.
                    </Text>
                </Animatable.View>
                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>అతను తినిఉండవచ్చు - He might eat.</Text>
                    <Text style={styles.exampleText}>అతను తినిఉండకపోవచ్చు - He mightn't eat.</Text>
                    <Text style={styles.noteText}>Note:-</Text>
                    <Text style={styles.noteText}>
                        Rarely, it is used to express futurity, which gives an almost negative meaning.
                    </Text>
                    <Text style={styles.exampleText}>
                        He might get selected in the campus interview, which is held next month.
                    </Text>
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
    noteText: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,
        marginLeft: 20,
        lineHeight: 40,
    },
    note: {
        fontStyle: 'italic',
        color: 'white',
        marginVertical: 5,

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

export default MightUsageComponent;
