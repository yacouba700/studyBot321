import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles  from './styles';
const CopyRight = () =>{
  const [unreadCount, setUnreadCount] = useState("me.afrizon@gmail.com");

  return (
    
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>
        {`contact Dev ${unreadCount} +223 92-44-83-42`}
        </Text>
      </View>
  );
}

export default CopyRight
