import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

function HeaderNavigationBar({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 5}}
        onPress={() => navigation.popToTop()}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1, padding: 5}}
        onPress={() => navigation.goBack()}>
        <Text>{'<-'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#aaa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export {HeaderNavigationBar};
