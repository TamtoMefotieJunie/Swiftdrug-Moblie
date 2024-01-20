import React from 'react';
import { StyleSheet, TextInput,Text,View } from 'react-native';
import tw from "twrnc";


function Card2({icon,percentage,value,label}){
   
    return(
    <>  
    
        <View style={tw `w-[50%] border p-3 border-[#D9D9D9]`}>
           <View style={tw ` mb-2`}>
                <View style={tw `rounded-full absolute bottom-7 bg-red-300 h-10 w-10`}>{icon}</View> 
                <Text style={tw `mt-6`}>{label}</Text>
           </View>
           <Text style={tw `mb-8`}>{value}</Text>
           <View style={tw `w-[88%] rounded-full border-[#D9D9D9] border mb-5 h-5`}>
                <Text style={tw `w-[40%] rounded-full h-5 bg-[#F0483E]`}>{percentage}</Text>
           </View>
        </View>
    </>
    );

    
} 

export default Card2;