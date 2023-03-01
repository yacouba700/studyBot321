import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
//import { LogoutScreen, LoginScreen } from '../components/LoginLogout';
//import {useNavigation} from "react-native/navigation" 
import styles from "./styles"
import * as active from "./index" 
import { useGlobalContext } from '../context';
const Header = () => {
    const {activeSpeech, setActiveSpeech} =  useGlobalContext();
    
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Study Bot</Text>
      <TouchableOpacity style={styles.speechIcon} onPress={()=>{setActiveSpeech(!activeSpeech)}}>
        <Feather name="radio" size={20}  color={activeSpeech ? "green" : "red"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.userIcon} onPress={()=>{}}>
        <Feather name="user" size={24}  />
      </TouchableOpacity>
     
    </View>
  );
};

export default Header;
