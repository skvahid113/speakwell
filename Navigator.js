import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSwipeNavigator } from 'react-navigation-swipe';
import Day1 from './Day1';
import PresentDoForms from './PresentDoForms';
import PastDoForms from './PastDoForms';
import FutureDoForms from './FutureDoForms';

const AppNavigator = createSwipeNavigator(
  {
    Day1: Day1,
    Present: PresentDoForms,
    Past: PastDoForms,
    Future: FutureDoForms,
  },
  {
    initialRouteName: 'Day1', // Set the initial screen here
  }
);

export default createAppContainer(AppNavigator);
