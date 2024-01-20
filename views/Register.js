
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native";
import tw from "twrnc";
import Form from "../components/Form";
import Register from "../components/RegisterForm";

function RegisterForm(){
   return (
      
   <View>
       <Register label1="Username" label2="Email" label3="Password" label4="Confirm Password" title="CREATE AN ACCOUNT " />
   </View>
   )
}
export default RegisterForm;