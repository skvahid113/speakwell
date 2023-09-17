import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MayUsageComponent = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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
                    <Text style={styles.modalText}>నేనుతినవచ్చా? - may I eat?</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.modalOption}>Yes, you may eat</Text>
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
    buttonContainer: {
        backgroundColor: '#a8ff78',
        borderRadius: 30, // Adjust the radius for more or less rounded corners
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center', // Center the button horizontally
        marginLeft: 70,
        marginTop:10,
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

export default MayUsageComponent;
