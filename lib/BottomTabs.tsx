import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

import React from 'react';

//Screens
import HomeScreen from '../screens/Home';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerTitleAllowFontScaling: true,
      tabBarStyle: {
        opacity: 20,
        backgroundColor: 'black',
        shadowColor: 'red'
      }

    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (
          <Icon name="home" size={28} style={{ marginTop: .5 }} color='white' />
        ),
        tabBarShowLabel: false
      }} />
    </Tab.Navigator>
  );
}