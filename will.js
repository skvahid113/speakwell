import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const WillUsageComponent = () => {
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>English Examples:</Text>

                <Animatable.View animation="pulse" iterationCount="infinite">
                <Text style={styles.rounded}>
                    S+will +v1+c;
                    {'\n'}
                    {'\n'}
                    o	If the action is compulsory we use ‘will’ for I and we.
                    {'\n'}
                    o	it does express request,politeness,permission….etc
                    {'\n'}
                    1. Will you please close the door?
                </Text>
                <Text style={styles.example}>
                    2. Will you please suggest me how to prepare for semester-end exams?
                </Text>
                </Animatable.View>
                
                <Text style={styles.header}>Telugu Examples:</Text>
                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>నేను ఖచ్ఛితంగా తింటాను - I will eat</Text>
                    <Text style={styles.exampleText}>నేను ఖచ్ఛితంగా తినను - I won't eat</Text>
                    <Text style={styles.exampleText}>నువ్వు తింటావా? - Will you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు తిననువా? - Won't you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎందుకు తింటావు? - Why will you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎందుకు తిననువు? - Why won't you eat?</Text>
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
    exampleContainer: {
        marginTop: 20, // Add margin between title and content
        justifyContent: 'center', // Center content vertically within the container
        alignItems: 'flex-start', // Align content to the left
        marginLeft: 20
    },
    exampleText: {
        fontSize: 18,
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

export default WillUsageComponent;
