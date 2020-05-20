import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>\0/</Text>
      </View>
      <View style={styles.card}>
        <Text>\0/</Text>
      </View>
      <View style={styles.card}>
        <Text>\0/</Text>
      </View>
      <View style={styles.card}>
        <Text>\0/</Text>
      </View>
    </View>
  );
};

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
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
});

export default Dashboard;
