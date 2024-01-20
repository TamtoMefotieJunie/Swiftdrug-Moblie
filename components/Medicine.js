import React from "react";
import { Stylesheet, Text, View } from "react-native";
import tw from "twrnc";


function Medicine({name,category,price,action,status}){
    return(
    <>
        <View style={tw `flex-row justify-between pl-2 bg-[#ffffff]`}>
            <View style={tw `p-3  w-[33%] border-[#D9D9D9]`}><Text style={tw `text-3.5 text-start`}>{name}</Text></View>
            <View style={tw `p-3  w-[35%] border-[#D9D9D9]`}><Text style={tw `text-3.5 text-center`}>{category}</Text></View>
            <View style={tw `p-3  w-[30%] border-[#D9D9D9]`}>
                <Text style={tw `text-3.5 text-[#3D7C98] text-center`}>{price}</Text>
                
            </View>
        </View>
        <View style={tw `bg-[#01A768] hover:bg-[#3D7C98] rounded-lg w-36% h-45%`}>
            <Text style={tw `text-3.5 text-center`}>{action}</Text>
        </View>
    </>
    )
}
export default Medicine;