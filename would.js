import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const WouldUsageComponent = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>చేసే వాడిని/దానిని (Would Do)</Text>
                <Animatable.View animation="pulse" iterationCount="infinite">
                    <Text style={styles.rounded}>s + would + v1 + c;</Text>
                </Animatable.View>

                <Text style={styles.example}>Eg:-</Text>

                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleText}>నేను తినేవాడిని/దానిని - I would eat</Text>
                    <Text style={styles.exampleText}>నేను తినేదానినికాదు - I wouldn't eat</Text>
                    <Text style={styles.exampleText}>నువ్వు తినేదానివా? - Would you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు తినేదానివికాదా? - Wouldn't you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎలాతినేదానివి? - How would you eat?</Text>
                    <Text style={styles.exampleText}>నువ్వు ఎందుకుతినేదానివికాదు? - Why wouldn't you eat?</Text>


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
                    <Text style={styles.modalText}>నువ్వుతినేదానివా? - would you eat?</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>Yes, I would eat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>No, I wouldn't eat</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

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
        lineHeight: 40,
        marginLeft: 20,
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

export default WouldUsageComponent;
