import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Prepositions from './prepositions';

const TypingAnimation = ({ textArray, enableAnimation }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const textToAnimate = textArray[currentTextIndex];
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex <= textToAnimate.length) {
                setCurrentText(textToAnimate.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeText, 100); // Adjust typing speed as needed
            } else {
                setIsTyping(false);
            }
        };

        if (enableAnimation) {
            typeText();
        } else {
            setCurrentText(textToAnimate);
            setIsTyping(false);
        }
    }, [currentTextIndex, textArray, enableAnimation]);

    return (
        <Text style={styles.text}>
            {isTyping ? currentText : textArray[currentTextIndex]}
        </Text>
    );
};

const Day2 = () => {

    const navigation = useNavigation();
    const prepositionsArray = [
        'to = ' + Prepositions.TO,
        'after = ' + Prepositions.AFTER,
        'for = ' + Prepositions.FOR,
        'before = ' + Prepositions.BEFORE,
        'without = ' + Prepositions.WITHOUT,
    ];

    const teluguPhrasesArray = [
        'తినడానికి - to eat',
        'తిన్నతరువాత - after eating',
        'తినడ౦కోస౦ - for eating',
        'తినేము౦దు - before eating',
        'తినకు౦డా - without eating',
    ];

    const goToDay2_1 = () => {
        navigation.navigate('Day2_1');
    };

    return (
        <LinearGradient
            colors={['#0093E9', '#80D0C7']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <LinearGradient
                    colors={['#FF5733', '#E53D00']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientText}
                >
                    <Text style={styles.title}>
                        Mastering Prepositions: A Guide to Use Them Correctly
                    </Text>
                </LinearGradient>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    {prepositionsArray.map((preposition, index) => (
                        <View key={index}>
                            <TypingAnimation textArray={[preposition]} enableAnimation={false} />
                        </View>
                    ))}
                    <View style={styles.separator} />
                    {teluguPhrasesArray.map((phrase, index) => (
                        <View key={index}>
                            <TypingAnimation textArray={[phrase]} enableAnimation={true} />
                        </View>
                    ))}
                </View>
                <TouchableOpacity onPress={goToDay2_1} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    text: {
        textAlign: 'center',
        fontSize: 24,
        color:'white'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // You can change the color to your preference
        marginVertical: 5, // Adjust the margin as needed
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20, // Adjust the marginTop to control the space between title and content
        
    },
    gradientText: {
        marginHorizontal: 20,
    },
});

export default Day2;
