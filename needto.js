import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NeedToUsageComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <LinearGradient colors={['#0093E9', '#80D0C7']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>చేయ వలసిన అవసరం ఉంది (Need / Need To Do)</Text>
          <Text style={styles.example}>Eg:-</Text>

          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>నాకు తినవలసిన అవసరం ఉంది – I need eat / I do need need to eat.</Text>
            <Text style={styles.exampleText}>నాకు తినవలసిన అవసరం లేదు – I needn’t eat / I don’t need to eat.</Text>
            <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఉందా? – Need you eat / Do you need to eat?</Text>
            <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం లేదా? – Needn’t you eat / Don’t you need to eat?</Text>
            <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఏమిటి? – What need you eat / What do you need to eat?</Text>
            <Text style={styles.exampleText}>నీకు తినవలసిన అవసరం ఎందుకు లేదు? – Why needn’t you eat / Why doesn’t you need to eat?</Text>
          </View>

          <Text style={styles.example}>Eg:- 2</Text>
          <View style={styles.exampleContainer}>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఉంది – He need eat / He needs to eat</Text>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం లేదు – He needn’t eat / He doesn’t need to eat</Text>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఉందా? – Need he eat / Does he need to eat?</Text>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం లేదా? – Needn’t he eat / Doesn’t he need to eat?</Text>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఏమిటి? – What need he eat / What does he need to eat?</Text>
            <Text style={styles.exampleText}>అతనికి తినవలసిన అవసరం ఎందుకు లేదు? – Why needn’t he eat / Why doesn’t he need to eat?</Text>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Say Yes or No</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <FontAwesomeIcon icon={faTimes} size={30} color="pink" />
            </TouchableOpacity>
            <Text style={styles.modalText}>నీకుతినవలిసినఅవసర౦ఉ౦దా? - do you need to eat?</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalOption}>Yes, I need to eat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.modalOption}>No, I don't need to eat</Text>
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
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  example: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  exampleContainer: {
    marginTop: 20,
  },
  exampleText: {
    fontSize: 16,
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

  buttonContainer: {
    backgroundColor: '#a8ff78',
    borderRadius: 30, // Adjust the radius for more or less rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center', // Center the button horizontally
    marginLeft: 10,
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

export default NeedToUsageComponent;
