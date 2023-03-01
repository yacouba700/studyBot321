import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
//import { LogoutScreen, LoginScreen } from '../components/LoginLogout';
//import {useNavigation} from "react-native/navigation" 

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Stud Bot</Text>
      <TouchableOpacity style={styles.userIcon} onPress={()=>{}}>
        <Feather name="user" size={24}  />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    padding: 8,
  },
});

export default Header;
