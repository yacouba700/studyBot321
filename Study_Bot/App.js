import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  View, 
  Text,
  SafeAreaView,
  StyleSheet 
} from "react-native";
import ChatBot from "./src/chatBot";
import { GlobalContextProvider } from "./src/context";
import ChatBot2 from './src/chatBot2/'
{}
//import { LoginScreen, LogoutScreen } from "./src/Screens/LoginLogout";
const ChatGPT = () =>{
  
  return (
    <SafeAreaView style={styles.topWrapper}>
        <GlobalContextProvider>
            {/* <ChatBot2 /> */}
            {/* <LogoutScreen /> */}
            <ChatBot2/>
        </GlobalContextProvider>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  topWrapper:{
    marginTop: 24,
    flex: 1,
    backgroundColor: "#e7e7e7"
  }
})

export default ChatGPT;