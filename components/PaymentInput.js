import React from 'react';
import { StyleSheet, TextInput,Image, Text, View } from 'react-native';
import tw from "twrnc";


function PaymentInput({name,keyboardType,placeholder, onChangeText, register, icon}){
    const validationColor = '#223e4b';
    return(
    <>  
    
        <View style={tw `w-[100%] mb-5 border h-[63px] flex-row rounded-4 border-[#D9D9D9]/70`}>
            <View style={tw `mt-3 border-r-2 pr-3 h-[65%] border-[#D9D9D9] flex-row ml-2`}>
            <Image source={require('../assets/emojione_flag-for-cameroon.png')}/>
            <Text style={tw`mt-2.5 ml-2`}>XAF</Text></View>
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
export default PaymentInput ;