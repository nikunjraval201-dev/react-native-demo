import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../Login/index";
import SignupScreen from "../Signup/index";
import HomeScreen from "../FirstPage";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

    </Stack.Navigator>
  );
}