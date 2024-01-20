import React from "react";
import Input from "./FormInput";
import tw from "twrnc";
import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FormButton from "./Button";
import {useForm} from "react-hook-form"

function Register({title,label1,label2,label3,label4}){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
  
    useEffect(() => {
        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [name, email, password,confirmPassword]);
  
    const validateForm = () => {
        let errors = {};
  
        // Validate name field
        if (name.length == 0) {
            errors.name = 'Name is required.';
        }else if(name.length < 4){
            errors.name = "Your name must contain atleast 4 characters "
        }
  
        // Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }
  
        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters.';
        }

        // Validate confirmpassword field
        if (!confirmPassword) {
            errors.confirmPassword = 'confirmPassword is required.';
        } else if (confirmPassword != password) {
            errors.confirmPassword = 'Your password needs to be the same';
        }
  
        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const handleSubmit = () => {
        if (isFormValid) {
  
            // Form is valid, perform the submission logic
            console.log('Form submitted successfully!');
        } else {
              
            // Form is invalid, display error messages
            console.log('Form has errors. Please correct them.');
        }
    };
  
    return(
        <>  
        <View style={tw `h-50 w-50 rounded-br-full bg-[#3D7C98]`}></View>
            <ScrollView>
            <View style={tw `bg-white Text-5 w-[93%] pl-5 h-250`} >
            <Text style={tw `text-[30px] mb-10 self-center text-[#3D7C98] font-bold`}>{title}</Text>
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label1}</Text>
               <Input 
                    name="name"
                    placeholder="exx john doe"
                    onChangeText={setName}/>
               <Text style={tw `text-red-500`} >{errors.name}</Text>
           
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label2}</Text>
               <Input 
                    name="email" 
                    placeholder=" exx john@doe.com"
                    onChangeText={setEmail}/>
               <Text style={tw `text-red-500`} >{errors.email}</Text>
               <Text style={tw `text-[18px] text-[#000000]/70`}>{label3}</Text>
               <Input 
                name="password" 
                placeholder="********"
                onChangeText={setPassword}
                secureTextEntry
               />
               <Text style={tw `text-red-500`} >{errors.password}</Text>
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label4}</Text>
               <Input 
                    name="confirmPassword"
                    placeholder="*********"
                    onChangeText={setconfirmPassword}
                    secureTextEntry
                    />
               <Text style={tw `text-red-500`} >{errors.confirmPassword}</Text>
               
               <FormButton  onPress={handleSubmit} name="submit" value="REGISTER"  />
              
              <View >
              <Text style={tw `text-[17px]`}>Already have an account yet? <Text style={tw `text-right text-[#3D7C98]`}>Sign In </Text></Text></View>
               
              
              </View>
           </ScrollView>
        </>
    );
} 
export default Register;