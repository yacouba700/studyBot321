import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
 
} from "react-native";
import  BottomTab  from "./bottomTab";
import TopBar from "./topBar";
import ChatBody from "./chatBody"
import CopyRight from './copyriht';

const ChatBot = () => {
  
  return (
    <KeyboardAvoidingView
    style={styles.container}
     behavior={ 'padding'}
    keyboardVerticalOffset={50}
    >
      <TopBar />
      <BottomTab />
      <CopyRight />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
})

export default ChatBot;
