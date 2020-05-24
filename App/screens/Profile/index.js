import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderNavigationBar} from '../../components';

// import { Container } from './styles';

function Profile({navigation}) {
  return (
    <>
      <HeaderNavigationBar navigation={navigation} />
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
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

export default Profile;
