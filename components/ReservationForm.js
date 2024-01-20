import React from "react";
import FormButton from "./Button";
import Input from "./FormInput";
import tw from "twrnc";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useForm} from "react-hook-form"


function ReservationForm({title,label1,label2,label3,label4}){
    
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({});
    // const [isFormValid, setIsFormValid] = useState(false);

    // useEffect(() => {
    //     // Trigger form validation when name, 
    //     // email, or password changes
    //     validateForm();
    // }, [ email, password]);
  
    // const validateForm = () => {
    //     let errors = {};
  
  
    //     // Validate email field
    //     if (!email) {
    //         errors.email = 'Email is required.';
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         errors.email = 'Email is invalid.';
    //     }
  
    //     // Validate password field
    //     if (!password) {
    //         errors.password = 'Password is required.';
    //     } else if (password.length < 8) {
    //         errors.password = 'Password must be at least 8 characters.';
    //     }
    //     setErrors(errors);
    //     setIsFormValid(Object.keys(errors).length === 0);
    // }

    // const handleSubmit = () => {
    //     if (isFormValid) {
  
    //         // Form is valid, perform the submission logic
    //         console.log('Form submitted successfully!');
    //     } else {
              
    //         // Form is invalid, display error messages
    //         console.log('Form has errors. Please correct them.');
    //     }
    // };
  

    return(
        <>  
          
            <View style={tw `bg-white p-5 w-full h-[93%]`}>
            <Text style={tw `text-[30px] mb-10 self-center text-[#3D7C98] font-bold`}>{title}</Text>
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label1}</Text>
               <Input 
                    icon={
                        <Icon 
                        name= 'capsules'
                        color="#000000"
                        size={15}
                        /> 
                    }
                    name="name" 
                    // onChangeText={setEmail}
                    placeholder="exx paracetamol"/>
                     {/* <Text style={tw `text-red-500`} >{errors.email}</Text> */}
               <Text style={tw `text-[18px] text-[#000000]/70`}>{label2}</Text>
               <Input 
                 icon={
                    <Icon 
                    name= 'th-large'
                    color="#000000"
                    size={15}
                    /> 
                }
                name="category"
                // onChangeText={setPassword}
                placeholder="pains    "
               />
                {/* <Text style={tw `text-red-500`} >{errors.password}</Text> */}
                <Text style={tw `text-[18px] text-[#000000]/70`}>{label3}</Text>
                <Input 
                 icon={
                    <Icon 
                    name= 'wallet'
                    color="#000000"
                    size={15}
                    /> 
                }
                name="quantity"
                // onChangeText={setPassword}
                placeholder="2"
               />
            

               <FormButton 
                // onPress={handleSubmit} 
               name="submit" value="BOOK"  />
              <View >
              </View>
              </View>
           
        </>
    );
} 
export default ReservationForm;