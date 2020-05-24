import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Details from '../screens/Details';

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
