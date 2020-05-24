import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Button, View} from 'react-native';
import {HeaderNavigationBar} from '../../components';

// import { Container } from './styles';

function Dashboard({navigation}) {
  return (
    <>
      {/* <HeaderNavigationBar navigation={navigation} /> */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Profile')}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Settings')}>
          <Text>Go to Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>\0/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text>\0/</Text>
        </TouchableOpacity>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    paddingHorizontal: 24,
  },
  card: {
    margin: 10,
    height: 100,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
});

export default Dashboard;
