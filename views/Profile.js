import React from 'react';
import Navbar from '../components/Navbar';
import { IMAGES } from "../assets/Index";
import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from "twrnc";

import ProfileInput from '../components/ProfileInput';

function Profile(){
return(
<>
<View style={tw `pt-8 rounded-lg w-full h-full bg-[#E3EBF3]`}>
    <Navbar label="My Profile" 
        icon={
            <Icon 
            name= 'chevron-left'
            color="#000000"
            size={25}
            /> 
        }
        icon2={
            <Icon.Button
                name="pencil"
                backgroundColor="#E3EBF3"
                color="#000000"
                size={25}
            />
        }
        action="Edit"
    />

     <Image source={require('../assets/profile.png')}
     style={{width:360, height: 250}}
     /> 

     <ProfileInput name="name" placeholder="John Martin"/>
     <ProfileInput name="email" placeholder="JohnMartin@gmail.com"/>
     <View style={tw `bg-red-500 w-30 p-3 h-13 mt-15 mr-6 self-end`}><Text style={tw `text-xl self-center`}>Log Out</Text></View>

</View>


</>
);

}
export default Profile