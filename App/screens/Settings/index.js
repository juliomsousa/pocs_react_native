import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderNavigationBar} from '../../components';

// import { Container } from './styles';

function Settings({navigation}) {
  return (
    <>
      <HeaderNavigationBar navigation={navigation} />
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
