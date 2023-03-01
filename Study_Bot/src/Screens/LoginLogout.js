import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logged in successfully');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LogoutScreen = () => {
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logged out successfully');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export { LoginScreen, LogoutScreen };
