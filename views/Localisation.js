import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome5';
import tw from "twrnc";

import Input from "../components/FormInput";

function Localisation(){
return(
<>
<View style={tw `pt-20 pl-3 pr-3 rounded-lg w-full h-full bg-white`}>
   <View style={tw `bg-white mb-15 p-5 w-full h-[33%]`}>
        <Text style={tw `text-2xl mb-8 self-center text-center text-[#3D7C98] font-bold`}>Please Enter Your Current Location !!!</Text>
            <Text style={tw `text-[18px] text-[#000000]/70`}>Location</Text>
            <Input 
                icon={
                    <Icon 
                    name= 'map-marker-alt'
                    color="#000000"
                    size={15}
                    /> 
                }
                name="name" 
                // onChangeText={setEmail}
                placeholder="Biyemassi"/>
                    {/* <Text style={tw `text-red-500`} >{errors.email}</Text> */}
    </View>
    <Text style={tw `font-bold self-center text-2xl mb-5`}>LOCALISATION PLAN</Text>
     <Image source={require('../assets/map.jpeg')}
     style={{width:335, height: 310, borderRadius:15}}
     /> 

</View>


</>
);

}
export default Localisation