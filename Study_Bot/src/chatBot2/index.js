import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import Msg from "./msg";
import TopBar2 from "./topBar2"
import CopyRight from "./copyright2";
import * as Speech from "expo-speech";
import { useGlobalContext } from '../context';
import { Audio } from "expo-av";


let chats = [];
const ChatBot = () => {
  //const uri = console.log(Audi)
 // Speech.recognizeAsync({uri});
  //const a = SpeechRecognitionAlternative;
  const {activeSpeech} = useGlobalContext()
  
  const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  //const [BotResponse, setBotResponse] = useState("");

  const getAnswer = async (q) => {
    try {
      alert("AI is thiksing...")
  
      const response = await fetch("https://stusybots.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: q,
        }),
      });
      const data = await response.json();
      const parsedData = data.bot;
      chats = [...chats, { msg: parsedData, incomingMsg: true }];
      setChatList([...chats].reverse());
      console.log("oui :",parsedData);

     if(activeSpeech && parsedData !==undefined ) {
      const speaks = Speech.speak(parsedData,{language: "fr"});
      console.log(Speech.isSpeakingAsync(speaks));
     }
      // console.log(parsedData);
      return;
    } catch (error) {
      console.log("error :", error);
    }
  };
  
  const onSendMsg = () => {
    chats = [...chats, { msg: msg, sentMsg: true }];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
  };


  const handleVoiceInput = ()=>{

  }

  
  const [inputHeight, setInputHeight] = useState(20);

  const handleContentSizeChange = (event) => {
    if (event.nativeEvent.contentSize.height <= 87.42) {
      setInputHeight(event.nativeEvent.contentSize.height);
    }

  };
  return (
    <View style={{backgroundColor: "#f5f5f5", flex: 1}}>
      <TopBar2 />
      <FlatList
        style={{ height: "71%", bottom: "3%" }}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({ item }) => (
          <Msg
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}
          />
        )}
      />
          <View
    style={styles.bottomcontainer}
  >

      <View style={styles.textInputContainer}>
      <ScrollView style={styles.scrollContainer}>
        <TextInput
          style={[styles.textInput, { height: Math.max(40, inputHeight) }]}
          placeholder="Type your message here..."
          onChangeText={(text) =>  setMsg(text)}
          onContentSizeChange={handleContentSizeChange}
          multiline={true}
          numberOfLines={4}
          value={msg}
        />
        </ScrollView>
        <TouchableOpacity style={styles.voiceInputButton} onPress={handleVoiceInput}>
          <FontAwesome name="microphone" size={20} color= "#007AFF"   />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={onSendMsg}>
        <Ionicons name="md-send" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
    <CopyRight/>
    </View>
  );
};

export default ChatBot;
