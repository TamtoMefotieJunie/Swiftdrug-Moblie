import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import tw from "twrnc";


function Input({name,keyboardType,placeholder, onChangeText, register, icon}){
    const validationColor = '#223e4b';
    return(
    <>  
    
        <View style={tw `w-[100%] mb-5 border h-[63px] flex-row rounded-4 border-[#D9D9D9]/70`}>
            <View style={tw `mt-6 ml-3`}>{icon}</View>
            <TextInput style={[tw `rounded-4  p-5 drop-shadow-md border-box border-none h-[60px] w-[100%]`]}
                //  {
                //      ...register(name, validationRules)
                //   }
                
                 keyboardType={keyboardType}
                name={name} 
                placeholder={placeholder} 
                onChangeText={onChangeText}
            /> 
        </View>
    </>
    );

    
} 
// const styles = StyleSheet.create({
//     input: {
//         shadowColor: '#6C95A7',
//         shadowOffset:'20',
//     },
// });
export default Input ;