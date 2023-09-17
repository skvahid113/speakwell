import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const WillUsageComponent = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
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


                    <TouchableOpacity onPress={toggleModal}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Say Yes or No</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <FontAwesomeIcon icon={faTimes} size={30} color="pink" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>నువ్వుతి౦టావా? - will you eat tomorrow?</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>Yes, I will eat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>No, I won't eat</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            </ScrollView>
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

    buttonContainer: {
        backgroundColor: '#a8ff78',
        borderRadius: 30, // Adjust the radius for more or less rounded corners
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center', // Center the button horizontally
        marginLeft: 100,
    },
    buttonText: {
        color: 'blue',
        fontSize: 18,
        textAlign: 'center', // Center the text within the button
    },
    modalContent: {
        backgroundColor: '#ff4b2b',
        padding: 30,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
    modalOption: {
        fontSize: 16,
        marginBottom: 10,
        color: 'blue',
        marginLeft: 140,
        color: 'white'
    },
    closeButton: {
        alignItems: 'auto',
    }

});

export default WillUsageComponent;
