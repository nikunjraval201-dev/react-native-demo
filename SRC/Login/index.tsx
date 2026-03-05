import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={loginUser} />
    </View>
  );
}
