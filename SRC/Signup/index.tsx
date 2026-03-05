import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = async () => {
    await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    Alert.alert('User Created');
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />

      <TextInput placeholder="Email" onChangeText={setEmail} />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Signup" onPress={signupUser} />
    </View>
  );
}
