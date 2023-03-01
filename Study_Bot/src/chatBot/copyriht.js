import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CopyRight() {
  const [unreadCount, setUnreadCount] = useState("me.afrizon@gmail.com");

  return (
    
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>
        {`contact Dev ${unreadCount} +223 92-44-83-42`}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  
  bottomBar: {
    height: "5%",
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DADADA',
    alignItems: "center",
  },
  bottomBarText: {
    
    color: '#6B6B6B',
    fontSize: 14,
  },
});
