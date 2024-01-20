
import React from "react";

import tw from "twrnc";
import { StyleSheet, Text, View, Image } from 'react-native';
import { IMAGES } from "../assets/Index";


function Navbar({icon,label,action,picture,icon2}){
return(
<>
<View style={tw `w-full h-15 flex-row mb-3 items-center justify-between px-3 `}>
    <View style={tw `w-[60%] justify-around  flex-row`}>
        <View style={tw `pt-1`}>{icon }</View>
        <Text style={tw `text-xl text-[#3D7C98]`}>{label}</Text>
    </View>
    <View style={tw `w-[30%] flex-row px-10`}>
        <View style={tw ``}>
            {icon2}
        </View>
        <View>{picture}</View>
        <Text style={tw `text-xl`}>
            {action}
        </Text>
    </View>

</View>

</>
);
}
const styles = StyleSheet.create({
        Navbar: {
            shadowColor: '#6C95A7',
            shadowOffset:'20',
        },
    });

export default Navbar