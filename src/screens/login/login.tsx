import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../Redux/slicer'; // Adjust the import path as needed
import { RootState } from '../../Redux/store';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<any>();
  const {loading,error} = useSelector((state: RootState) => state.auth); // Adjust the selector as needed
  

  const handleLogin = () => {
    console.log("Login button pressed");
    const result = dispatch(login({ email, password }));
    // if(result.meta.requestStatus === 'fulfilled'){
    //   console.log("Login successful");
    // }
   console.log("Login result:", result);``
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
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#E50914', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
      {/* {loading && <ActivityIndicator size="small" color="#0000ff" />}
      {error && <Text style={{ color: "red" }}>{error}</Text>} */}
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
  signUpText: {
    color: '#E50914',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default LoginScreen;