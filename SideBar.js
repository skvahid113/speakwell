import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const SideBar = ({ navigation }) => {
  const [showSubmenus, setShowSubmenus] = useState(false);


  // Generate menu options for Day 1 to Day 30
  const menuOptions = [];
  for (let i = 1; i <= 30; i++) {
    menuOptions.push({ label: `Day ${i}`, id: i });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => {
          setShowSubmenus(!showSubmenus); // Toggle submenus visibility
        }}
      >
        <View style={styles.menuHeader}>
          <Text style={styles.menuHeaderText}>Knowledge Center</Text>
          <MaterialIcons
            name={showSubmenus ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} // Arrow icon
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {showSubmenus && (
        <FlatList
          data={menuOptions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                // Handle the menu item press here
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Days',
                        params: { id: item.id },
                      },
                    ],
                  })
                );
                console.log(`Selected: ${item.label}`);
              }}
            >
              <Text style={styles.menuOption}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  menuButton: {
    marginLeft: 10,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuHeaderText: {
    fontSize: 16,
    marginLeft: 2,
  },
  menu: {},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuOption: {

    marginLeft: 20,
    fontSize: 28,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 5
    // Add more specific selector if needed
  },
});

export default SideBar;
