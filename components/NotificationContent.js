import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from "twrnc";

function  Content({NumDays,message}){
   return(
    <>
     <View style={tw `h-18 w-full mb-3 flex-row`}>
       <View style={tw `w-[82%] `}><Text style={tw `text-4`}>{message}</Text></View> 
        <View style={tw ` w-[29%]`}>
            <Text style={tw `text-4 mr-0 mb-1`}>{NumDays}</Text>
            <Icon
            name='trash'
            color='red'
            size={18}
            
            />
        </View>
    </View>
    
    </>
   )
}
export default Content