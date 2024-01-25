import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Test = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSideMenu}>
            <Text style={styles.menuIcon}>&#9776;</Text>
          </TouchableOpacity>
          <Text>Main Content</Text>
        </View>

        {/* Your main content goes here */}
        <Text>Normal Page Content</Text>
      </View>

      {/* Side Menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSideMenuOpen}
        onRequestClose={() => setIsSideMenuOpen(false)}>
        <View style={styles.sideMenu}>
          <TouchableOpacity onPress={toggleSideMenu} style={styles.closeButton}>
            <Text style={styles.closeIcon}>&times;</Text>
          </TouchableOpacity>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Contact</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  sideMenu: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    marginTop: 22, // Adjust based on your header height
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    fontSize: 24,
    color: '#818181',
  },
});

export default Test;
