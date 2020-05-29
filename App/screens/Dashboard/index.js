import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, Button, View} from 'react-native';
import {HeaderNavigationBar} from '../../components';
import Modal from 'react-native-modal';

// import { Container } from './styles';

function Dashboard({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const shortcutsList = [
    {
      title: 'Go to Profile',
      screen: 'Profile',
    },
    {
      title: 'Go to Settings',
      screen: 'Settings',
    },
    {
      title: 'Empty 1',
      screen: '',
    },
    {
      title: 'Empty 2',
      screen: '',
    },
  ];
  const initialShortcuts = {
    shortcut1: {
      title: 'Go to Profile',
      screen: 'Profile',
    },
    shortcut2: {
      title: 'Go to Settings',
      screen: 'Settings',
    },
    shortcut3: {
      title: 'Empty 1',
      screen: '',
    },
    shortcut4: {
      title: 'Empty 2',
      screen: '',
    },
  };
  const [shortcuts, setShortcuts] = useState(initialShortcuts);

  return (
    <>
      {/* <HeaderNavigationBar navigation={navigation} /> */}
      <WrapperComponent
        isVisible={modalVisible}
        setModalVisibility={setModalVisible}
        currentShortcutsList={shortcuts}
        shortcutsList={shortcutsList}
        setCurrentShortcuts={setShortcuts}
      />
      <View style={styles.container}>
        {/* Shortcuts grid */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(shortcuts.shortcut1.screen)}>
          <Text>{shortcuts.shortcut1.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(shortcuts.shortcut2.screen)}>
          <Text>{shortcuts.shortcut2.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(shortcuts.shortcut3.screen)}>
          <Text>{shortcuts.shortcut3.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(shortcuts.shortcut4.screen)}>
          <Text>{shortcuts.shortcut4.title}</Text>
        </TouchableOpacity>

        {/* END Shortcuts grid */}

        <Button title="Open modal" onPress={() => setModalVisible(true)} />
      </View>
    </>
  );
}

function WrapperComponent({
  isVisible = false,
  setModalVisibility,
  currentShortcutsList,
  shortcutsList,
  setCurrentShortcuts,
}) {
  const [tempShortcuts, setTempShortcuts] = useState(currentShortcutsList);

  const [selectedShortcut, setSelectedShortcut] = useState({});

  const {shortcut1, shortcut2, shortcut3, shortcut4} = tempShortcuts;

  return (
    <View>
      <Modal isVisible={isVisible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#FFF',
          }}>
          {/* <Text>I am the modal content!</Text> */}

          <Button
            title={shortcut1.title}
            onPress={() => setSelectedShortcut('shortcut1')}
          />
          <Button
            title={shortcut2.title}
            onPress={() => setSelectedShortcut('shortcut2')}
          />
          <Button
            title={shortcut3.title}
            onPress={() => setSelectedShortcut('shortcut3')}
          />
          <Button
            title={shortcut4.title}
            onPress={() => setSelectedShortcut('shortcut4')}
          />

          <View
            style={{
              borderWidth: 2,
              marginVertical: 5,
              paddingVertical: 5,
            }}>
            {shortcutsList.map((item) => (
              <Button
                title={item.title}
                onPress={() => {
                  setTempShortcuts({
                    ...tempShortcuts,
                    [selectedShortcut]: item,
                  });
                }}
              />
            ))}
          </View>

          <Button
            title="Confirm"
            onPress={() => setCurrentShortcuts(tempShortcuts)}
          />
          <Button
            title="Close Modal"
            onPress={() => setModalVisibility(false)}
          />
        </View>
      </Modal>
    </View>
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
