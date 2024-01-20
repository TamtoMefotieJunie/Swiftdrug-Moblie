import Form from "../components/Form";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native";
import tw from "twrnc";

function LoginForm(){
   return (
      
   <View >
      <Form title="WELCOME" label2="Email" label3="Password" />
   </View>
   )
}
export default LoginForm;