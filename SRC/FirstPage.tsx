import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [users, setUsers] = useState([]);

  const BASE_URL = 'http://192.168.1.14:5000'; // change to your IP

  // GET USERS
  const getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // ADD USER
  const addUser = async () => {
    if (!name || !email || !age) {
      // alert('Enter name and email');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/add-user`, {
        name: name,
        email: email,
        age: age,
      });

      setName('');
      setEmail('');

      getUsers(); // refresh list
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />


      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />

      <Button title="ADD USER" onPress={addUser} />

      <Button title="GET USERS" onPress={getUsers} />

      <FlatList
        data={users}
        keyExtractor={(item: any) => item._id}
        renderItem={({item}) => (
          <Text style={styles.user}>
            {item.name} - {item.email}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },

  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  user: {
    fontSize: 16,
    marginTop: 5,
  },
});
