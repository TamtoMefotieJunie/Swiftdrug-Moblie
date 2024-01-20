import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

function FormButton({name,value,onPress}){
    return(
    <>  
        <TouchableOpacity  onPress={onPress} activeOpacity={0.7} style={tw `mt-10 mb-3 bg-[#3D7C98] h-[60px] rounded-4 `}>
            <Text style={tw `text-center mt-4 items-center text-[#FFFFFF] text-[20px] font-bold`}>{value}</Text>
        </TouchableOpacity>    
    </>
    );
} 
export default FormButton;