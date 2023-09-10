import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CouldUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేయ గలిగాను (Could Do)</Text>
                <View style={styles.contentContainer}>

                    <Animatable.View animation="pulse" iterationCount="infinite">
                        <Text style={styles.rounded}>S + could + v1 + c;
                            {'\n'}
                            {'\n'}
                            • It is the past form of ‘can’.

                            {'\n'}
                            {'\n'}
                            • It indicates past ability
                        </Text>

                    </Animatable.View>
                    <Text style={styles.example}>Eg:-</Text>

                    <View style={styles.contentLine}>
                        <Text style={styles.exampleText}>నేను తినగలిగాను – I could eat</Text>
                        <Text style={styles.exampleText}>నేను తినలేకపోయాను – I couldn't eat</Text>
                        <Text style={styles.exampleText}>నువ్వు తినగలిగావా? – Could you eat?</Text>
                        <Text style={styles.exampleText}>నువ్వు తినలేకపోయావా? – Couldn't you eat?</Text>
                        <Text style={styles.exampleText}>నువ్వు ఎలాతినగలిగావు? – How could you eat?</Text>
                        <Text style={styles.exampleText}>నువ్వు ఎందుకు తినలేకపోయావు? – Why couldn't you eat?</Text>
                    </View>
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
    },
    contentContainer: {
        marginTop: 20, // Add margin between title and content
        justifyContent: 'center', // Center content vertically within the container
        alignItems: 'center', // Center content horizontally within the container
    },
    contentLine: {
        flexDirection: 'column', // Arrange text lines in a column
        alignItems: 'flex-start', // Align text lines to the left
        marginLeft: 10,

    },
    example: {
        fontSize: 18,
        color: 'white',
        marginVertical: 5,

    },
    exampleText: {
        fontSize: 18,
        color: 'white',
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

export default CouldUsageComponent;
