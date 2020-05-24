import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// App navigators
import StackNavigator from './stack.navigation';
import DrawerNavigator from './drawer.navigation';

const drawerItemsCustomList = [
  {
    screen: 'Dashboard',
    title: 'Home',
    icon: '^',
  },
  {
    screen: 'Profile',
    title: 'Meu perfil',
    icon: '\\0/',
  },
  {
    screen: 'Settings',
    title: 'Ajustes',
    icon: '*',
  },
];

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator
        screenNavigator={StackNavigator}
        drawerItems={drawerItemsCustomList}
      />
    </NavigationContainer>
  );
}
