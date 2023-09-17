import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CouldUsageComponent = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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


                        <TouchableOpacity onPress={toggleModal}>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Say Yes or No</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <FontAwesomeIcon icon={faTimes} size={30} color="pink" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>నువ్వుతినగలిగావా? - could you eat?</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>Yes, I could eat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>No, I couldn't eat</Text>
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

    buttonContainer: {
        backgroundColor: '#38ef7d',
        borderRadius: 30, // Adjust the radius for more or less rounded corners
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center', // Center the button horizontally
        marginLeft: 80,
    },
    buttonText: {
        color: 'white',
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

export default CouldUsageComponent;
