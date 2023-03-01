import React, { useState, useEffect } from 'react';
import { View, TextInput,Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import SpeechToText from "react-native-speech-to-text";
import * as Speech  from 'expo-speech';
import ChatBody from "./chatBody"

const BottomBar = () => {
  let ide = Math.random();
  const [text, setText] = useState('');
  const [parsedData, setParsedData] = useState("");
  const [contParsedData, setContPasedData] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatList, setChatList] = useState([]);
  let chats = [];
//-------------------------------Voice setting--------------------
const handleVoiceInput = ()=>{
  console.log("Voice actived");
}
/*
const [isListening, setIsListening] = useState(false);
  const [recognizedWords, setRecognizedWords] = useState('');

  const handleVoiceInput = async () => {
    setIsListening(true);

    try {
      const spokenText = await SpeechToText.startSpeech('FR');
      setRecognizedWords(spokenText);
    } catch (error) {
      console.log('Error:', error);
    }
    console.log(recognizedWords);
    setIsListening(false);
  };
*/


//-----------------//---------------------//------------------//--------------




  const handleSend = async () => {
    chats = [...chats, { id: ide, message: text, sender: "Yacouba" }]
    setChatList([...chats].reverse());
    setParsedData(text)
    /*const response = await fetch("http://10.148.0.174:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: text,
      }),
    });
    const data = await response.json();
    setParsedData(data.bot);

    console.log('Message sent: ', text, "response1 :", parsedData);
    setText('');*/
  };

  

 
  const [inputHeight, setInputHeight] = useState(20);

  const handleContentSizeChange = (event) => {
    if (event.nativeEvent.contentSize.height <= 87.42) {
      setInputHeight(event.nativeEvent.contentSize.height);
    }

  };
  return (
    <>
   
   <ChatBody 
    message={parsedData}
    sender="Yacoub"
    discussions={chatList}

    />
    

    <View
    style={styles.container}
  >

      <View style={styles.textInputContainer}>
      <ScrollView style={styles.scrollContainer}>
        <TextInput
          style={[styles.textInput, { height: Math.max(20, inputHeight) }]}
          placeholder="Type your message here..."
          onChangeText={(text) =>  setText(text)}
          onContentSizeChange={handleContentSizeChange}
          multiline={true}
          numberOfLines={4}
          value={text}
        />
        </ScrollView>
        <TouchableOpacity style={styles.voiceInputButton} onPress={handleVoiceInput}>
          <FontAwesome name="microphone" size={20} color= { isRecording ? "green": "#007AFF" }  />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Ionicons name="md-send" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#cccccc',//'#E5E5EA',
    paddingHorizontal: 16,
    paddingVertical: 10,

    // pH : 8 , PV : 16
  },
  textInputContainer: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 20,
   paddingHorizontal: 20,
   paddingVertical: 0,
  
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 0, // Ajoute un espacement en bas de l'élément
  },
  textInput: {
    
    flex: 1,
    height:20,
    
   maxHeight:60,
    fontFamily: "sans-serif",//'HelveticaNeue',
    fontSize: 16,
    color: '#262626',
    textAlignVertical: 'top',
    
  },
  voiceInputButton: {
    padding: 10,
    marginLeft: 5,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
  },
});

export default BottomBar;
