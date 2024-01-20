import React from 'react';
import { StyleSheet, TextInput,Text,View } from 'react-native';
import tw from "twrnc";


function Rates({name,icon,icon2,icon3,icon4,icon5}){
   
    return(
    <>  
    
        <View style={tw `w-[100%] h-12 pt-3 flex-row justify-between boder border-[#D9D9D9]/70`}>
           <Text style={tw ``}>{name}</Text>
           <View style={tw `flex-row `}>
           <View style={tw `justify-start`}>{icon}</View> 
           <View style={tw `justify-start`}>{icon2}</View> 
           <View style={tw `justify-start`}>{icon3}</View> 
           <View style={tw `justify-start`}>{icon4}</View> 
           <View style={tw `justify-start`}>{icon5}</View> 
           
           </View>
        </View>
    </>
    );

    
} 

export default Rates;