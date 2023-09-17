import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBook, faCalendar);

const CustomSidebar = (props) => {
  const menuItems = [
    { icon: 'home', label: 'HomeScreen', alias: 'Home Screen' },
    { icon: 'book', label: 'Learning', alias: 'Learning' },
    { icon: 'calendar', label: 'Day1', alias: 'Day1 - Basics' },
    { icon: 'calendar', label: 'Day2', alias: 'Day2' },
    { icon: 'calendar', label: 'Day3', alias: 'Day3 - Do Forms' },
    { icon: 'calendar', label: 'Day4', alias: 'Day4 - My Daily Activities' },
    { icon: 'calendar', label: 'Day5', alias: 'Day5 - Be And Have Forms' },
    { icon: 'calendar', label: 'Day6', alias: 'Day6 - Tenses(Present)' },
    { icon: 'calendar', label: 'Day7', alias: 'Day7 - Tenses(Past)' },
    { icon: 'calendar', label: 'Day8', alias: 'Day8 - Tenses(Future)' },
    { icon: 'calendar', label: 'Day11', alias: 'Day11' },
    { icon: 'calendar', label: 'Day12', alias: 'Day12' },
    { icon: 'calendar', label: 'Day13', alias: 'Day13' },
    { icon: 'calendar', label: 'Day14', alias: 'Day14' },
    { icon: 'calendar', label: 'Day15', alias: 'Day15' },
    // Add more menu items here...
  ];

  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        colors={['#5433ff', '#d53369']}
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                props.navigation.navigate(item.label);
              }}
            >
              <FontAwesomeIcon icon={item.icon} style={styles.icon} />
              <Text style={styles.menuItemText}>{item.alias}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  menuItemsContainer: {
    borderTopWidth: 2,
    borderTopColor: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 25,
    alignItems: 'center', // Center items vertically
  },
  menuItemText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10, // Add space between icon and text
  },
  icon: {
    color: 'yellow',
    fontSize: 18, // Adjust as needed
  },
});

export default CustomSidebar;
