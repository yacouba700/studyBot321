import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";


const Msg = ({ incomingMsg, sentMsg, msg }) => {
  //console.log(Speech.getAvailableVoicesAsync())
  
  return (
    <View style={styles.Bodycontainer}>
      {incomingMsg && (
        <View style={styles.incomingMsgBox}>
          <Text style={styles.incomingMsgText}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <Text style={styles.sentMsgBox}>
          <Text style={styles.sentMsgText}>{msg}</Text>
        </Text>
      )}
    </View>
  );
};

export default Msg;
