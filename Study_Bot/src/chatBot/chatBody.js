import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, ScrollView, Text } from 'react-native';
const ChatBody = ({message,sender, discussions}) => {


  return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          { 
            discussions.map((item) => ( 
              <View key={item.id } style={styles.message}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
              </View>
              ))
            }
      </ScrollView>
      </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: "71%",
        backgroundColor: '#f5f5f5',
      },
    scrollView: {
      
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
      message: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16,
      },
      sender: {
        fontWeight: 'bold',
        marginBottom: 8,
      },
      messageText: {},
    
    
});

export default ChatBody;
