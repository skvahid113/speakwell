import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SideBar = ({ navigation }) => {
  const [showSubmenus, setShowSubmenus] = useState(false);
  const [lockedItem, setLockedItem] = useState(null); // Track the tapped locked item

  // Generate menu options for Day 1 to Day 30
  const menuOptions = [];
  for (let i = 1; i <= 30; i++) {
    menuOptions.push({ label: `Day ${i}`, id: i, locked: i >= 16 && i <= 30 }); // Lock items from Day 16 to Day 30
  }

  return (
    <LinearGradient
      colors={['#0093E9', '#80D0C7']}
      style={styles.container}
    >
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
                  // Check if the item is locked
                  if (item.locked) {
                    setLockedItem(item); // Store the tapped locked item
                  } else {
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
                  }
                }}
              >
                <MaterialIcons
                  name="event"
                  size={24}
                  color={item.locked ? 'gray' : 'white'} // Color of the "Days" icon
                  style={styles.icon}
                />
                <Text style={styles.menuOption}>{item.label}</Text>
                {item.locked && (
                  <MaterialIcons
                    name="lock"
                    size={24}
                    color={lockedItem === item ? 'white' : 'gray'} // Color of the lock icon
                    style={styles.lockIcon}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </LinearGradient>
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
    fontSize: 26,
    marginLeft: 2,
    color: 'black',
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
    borderBottomColor: '#8e54e9',
    marginBottom: 5,
    color: 'white',
  },
  icon: {
    marginRight: 10, // Add spacing between icon and text
    color: '#8e54e9',
  },
  lockIcon: {
    marginLeft: 10, // Add spacing between lock icon and text
  },
});

export default SideBar;
