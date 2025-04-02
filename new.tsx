import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './src/Redux/slicer'; // Adjust the import path as needed
import { RootState } from './src/Redux/store'; // Adjust the import path as needed

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<any>();
  const { loading, error } = useSelector((state: RootState) => state.auth); // Adjust selector if needed

  const handleLogin = () => {
    console.log('Login button pressed');
    if (!email || !password) {
      console.log('Please enter both email and password');
      return;
    }
    
    // try {
    //   const result = await dispatch(login({ email, password }));
    //   console.log('Login successful:', result);
    // } catch (err) {
    //   console.log('Login failed:', err);
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      
      {/* FIXED: Removed incorrect function reference */}
      <TouchableOpacity onPress={() => console.log('Login button pressed')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="small" color="#E50914" />}
      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

      <TouchableOpacity onPress={() => console.log('Sign Up button pressed')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#E50914',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    color: '#E50914',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default LoginScreen;
