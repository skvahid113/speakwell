import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CanScreen = () => {


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>CAN DO (చేయ గలను)</Text>
                <View style={styles.contentContainer}>
                    <Animatable.View animation="pulse" iterationCount="infinite">
                        <Text style={styles.rounded}>S+can+v1+c;
                            {'\n'}
                            {'\n'}
                            • It indicates "present ability"</Text>

                    </Animatable.View>

                    <Text style={styles.contentText}>Eg:-</Text>
                    <Text style={styles.contentText}>నేను తినగలను - I can eat</Text>
                    <Text style={styles.contentText}>నేను తినలేను - I can't eat</Text>
                    <Text style={styles.contentText}>నువ్వు తినగలవా? - Can you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు తినలేవా? - Can't you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు ఎలా తినగలవు? - How can you eat?</Text>
                    <Text style={styles.contentText}>నువ్వు ఎందుకు తినలేవు? - Why can't you eat?</Text>


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
                    <Text style={styles.modalText}>నువ్వుతినగలవా? - Can you eat?</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>Yes, I can eat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>No, I can't eat</Text>
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
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    contentContainer: {
        marginTop: 20, // Add margin between title and content
        justifyContent: 'center', // Center content vertically within the container
        alignItems: 'flex-start', // Align content to the left

    },
    contentText: {
        fontSize: 16,
        marginLeft: 20, // Add a left margin to align content
        color: 'white',
        lineHeight: 40,

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
        marginLeft: 70,
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

export default CanScreen;
