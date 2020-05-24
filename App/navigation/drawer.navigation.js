import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// Drawer configurations
function CustomDrawerContent(props) {
  console.log('options', props);
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {props.drawerItems.map((item) => (
        <DrawerItem
          label={`${item.icon} ${item.title}`}
          onPress={() => props.navigation.navigate(item.screen)}
        />
      ))}

      <DrawerItem
        label="Sair"
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({screenNavigator, drawerItems}) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{drawerItems}}>
      <Drawer.Screen name="App" component={screenNavigator} />
    </Drawer.Navigator>
  );
}
