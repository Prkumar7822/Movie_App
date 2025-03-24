import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import NetflixHomePage from '../screens/homepage';
import SearchScreen from '../screens/SearchScreen';
import YourMoviesScreen from '../screens/YourMoviesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E50914', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarStyle: {backgroundColor: '#000'}, // Background color of the tab bar
        headerShown: false, // Hide the header
      }}>
      <Tab.Screen
        name="Home"
        component={NetflixHomePage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>🔍</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Your Movies"
        component={YourMoviesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🎬</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
