import React from "react";
import FormButton from "./Button";
import Input from "./FormInput";
import tw from "twrnc";
import { StyleSheet, Text, View } from 'react-native';
import {useForm} from "react-hook-form"


function Form({title,label1,label2,label3,label4}){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [ email, password]);
  
    const validateForm = () => {
        let errors = {};
  
  
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
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

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
            <View style={tw `bg-white p-5 w-full h-full`}>
            <Text style={tw `text-[30px] mb-10 self-center text-[#3D7C98] font-bold`}>{title}</Text>
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label2}</Text>
               <Input 
            
                    name="email"  onChangeText={setEmail}  placeholder="exx john@doe.com"/>
                     <Text style={tw `text-red-500`} >{errors.email}</Text>
               <Text style={tw `text-[18px] text-[#000000]/70`}>{label3}</Text>
               <Input 
                 
                name="password" onChangeText={setPassword} placeholder="********"
               />
                <Text style={tw `text-red-500`} >{errors.password}</Text>

               <Text style={tw `text-right `}>Forgot password?</Text>

               <FormButton  onPress={handleSubmit} name="submit" value="LOGIN"  />
              <View >
              <Text style={tw `text-[17px]`}>Don't have an account yet? <Text style={tw `text-right text-[#3D7C98]`}>Sign Up </Text></Text></View>
              </View>
           
        </>
    );
} 
export default Form;