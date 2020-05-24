import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

// import { Container } from './styles';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Username" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    paddingHorizontal: 24,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    width: '75%',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#AAA',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
